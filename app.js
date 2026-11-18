/**
 * ScholarCard - Main Application Logic
 * Pure client-side JavaScript. Works 100% on GitHub Pages without backend.
 */

let currentProfile = null;
let currentPubPage = 1;
const PUBS_PER_PAGE = 8;
let filteredPubs = [];
let qrCodeInstance = null;
let currentQrTarget = '';

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupTabs();
  setupEventListeners();
  setupModalAndDropZone();
  setupQrModal();
  loadInitialProfile();
});

/**
 * Loads profile from localStorage (if user uploaded one) or defaults to DEFAULT_PROFILE.
 */
function loadInitialProfile() {
  const saved = localStorage.getItem('scholarcard_profile');
  if (saved) {
    try {
      currentProfile = JSON.parse(saved);
    } catch (e) {
      console.warn('Erro ao carregar perfil salvo:', e);
      currentProfile = typeof DEFAULT_PROFILE !== 'undefined' ? DEFAULT_PROFILE : null;
    }
  } else if (typeof DEFAULT_PROFILE !== 'undefined') {
    currentProfile = DEFAULT_PROFILE;
  }
  
  if (currentProfile) {
    renderProfile(currentProfile);
  }
}

/**
 * Tab Navigation Setup
 */
function setupTabs() {
  const tabButtons = document.querySelectorAll('.monocard-tabs .tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      if (!targetId) return;

      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

/**
 * Renders the entire profile card UI.
 * @param {Object} profile
 */
function renderProfile(profile) {
  if (!profile) return;

  // 1. Initials and Avatar
  const initials = getInitials(profile.nome);
  const avatarEl = document.getElementById('avatarInitials');
  if (avatarEl) avatarEl.textContent = initials;

  // 2. Name and Title
  const hasDoc = (profile.formacoes || []).some(f => (f.tipo || '').toLowerCase().includes('doutor'));
  const titlePrefix = hasDoc ? 'Prof. Dr. ' : 'Prof. ';
  const nameEl = document.getElementById('profileName');
  if (nameEl) nameEl.textContent = `${titlePrefix}${profile.nome}`;
  document.title = `${profile.nome} • ScholarCard Acadêmico`;

  // 3. Affiliation and Location
  const instEl = document.getElementById('affiliationText');
  if (instEl) {
    const instParts = [profile.instituicao, profile.departamento].filter(Boolean);
    instEl.textContent = instParts.join(' • ') || 'Pesquisador(a) / Docente';
  }

  const locEl = document.getElementById('locationText');
  if (locEl) {
    const locParts = [profile.cidade, profile.uf, profile.nacionalidade].filter(Boolean);
    const locSpan = locEl.querySelector('span');
    if (locSpan) {
      locSpan.textContent = locParts.join(', ') || 'Brasil';
    } else {
      locEl.textContent = locParts.join(', ') || 'Brasil';
    }
  }

  // 4. Badges (Lattes, ORCID, Update Date)
  const lattesBadge = document.getElementById('lattesBadge');
  if (lattesBadge) {
    if (profile.lattes_id) {
      lattesBadge.href = `http://lattes.cnpq.br/${profile.lattes_id}`;
      lattesBadge.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        <span>Lattes: ${profile.lattes_id}</span>
      `;
      lattesBadge.style.display = 'inline-flex';
    } else {
      lattesBadge.style.display = 'none';
    }
  }

  const orcidBadge = document.getElementById('orcidBadge');
  if (orcidBadge) {
    if (profile.orcid) {
      const cleanOrcid = profile.orcid.replace('https://orcid.org/', '').replace('http://orcid.org/', '');
      orcidBadge.href = `https://orcid.org/${cleanOrcid}`;
      orcidBadge.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-3.87 18.067H5.67V8.583h2.46v9.484zm-1.23-10.74c-.792 0-1.433-.642-1.433-1.434 0-.791.641-1.433 1.433-1.433.792 0 1.434.642 1.434 1.433 0 .792-.642 1.434-1.434 1.434zm11.11 5.86c0 2.766-2.023 4.88-5.385 4.88h-3.95V8.583h4.195c3.342 0 5.14 2.114 5.14 4.604zm-2.52 0c0-1.637-1.077-2.73-2.825-2.73H10.1v5.48h2.365c1.748 0 2.825-1.114 2.825-2.75z"/></svg>
        <span>ORCID: ${cleanOrcid}</span>
      `;
      orcidBadge.style.display = 'inline-flex';
    } else {
      orcidBadge.style.display = 'none';
    }
  }

  const dateBadge = document.getElementById('dateBadge');
  if (dateBadge) {
    if (profile.data_atualizacao) {
      dateBadge.textContent = `Atualizado em: ${profile.data_atualizacao}`;
      dateBadge.style.display = 'inline-flex';
    } else {
      dateBadge.style.display = 'none';
    }
  }

  // 5. Bento Key Metrics
  const m = profile.metricas || {};
  const artigosCount = m.artigos || (profile.artigos ? profile.artigos.length : 0);
  const softwaresCount = m.softwares || (profile.softwares ? profile.softwares.length : 0);
  const livrosCount = (m.livros || 0) + (m.capitulos || 0);
  const orientacoesCount = (m.orientacoes_concluidas || 0) + (m.orientacoes_andamento || 0);

  setElemText('metricArtigos', artigosCount);
  setElemText('metricSoftwares', softwaresCount);
  setElemText('metricLivros', livrosCount);
  setElemText('metricOrientacoes', orientacoesCount);

  // 6. Resumo / Bio
  const bioEl = document.getElementById('bioText');
  if (bioEl) {
    if (profile.resumo) {
      bioEl.innerHTML = profile.resumo.replace(/\n\n/g, '<br><br>');
    } else {
      bioEl.textContent = 'Resumo acadêmico não informado no currículo Lattes.';
    }
  }

  // 7. Research Areas Tags
  const areasContainer = document.getElementById('areasContainer');
  if (areasContainer) {
    areasContainer.innerHTML = '';
    if (profile.areas && profile.areas.length > 0) {
      profile.areas.forEach(area => {
        const tag = document.createElement('span');
        tag.className = 'tag-chip';
        tag.textContent = area;
        areasContainer.appendChild(tag);
      });
    } else {
      areasContainer.innerHTML = '<span class="text-muted" style="font-size:0.85rem">Nenhuma área especificada.</span>';
    }
  }

  // 8. Academic Formations (Overview & Full Timeline)
  renderFormations(profile.formacoes || []);

  // 9. Publications (Filter & Pagination)
  filteredPubs = [...(profile.artigos || [])];
  currentPubPage = 1;
  const searchInput = document.getElementById('searchPubsInput');
  if (searchInput) searchInput.value = '';
  renderPublications();

  // 10. Softwares & Technologies
  renderSoftwares(profile.softwares || []);

  // 11. Supervisions
  renderSupervisions(profile.orientacoes_concluidas || [], profile.orientacoes_andamento || []);

  // 12. QR Code Generator
  generateQrCode(profile);
}

function setElemText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/**
 * Extracts researcher initials for avatar.
 */
function getInitials(fullName) {
  if (!fullName) return 'ID';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Generates QR Code for modal and updates URL text.
 */
function generateQrCode(profile) {
  currentQrTarget = profile.lattes_id
    ? `http://lattes.cnpq.br/${profile.lattes_id}`
    : window.location.href;

  const urlDisplay = document.getElementById('qrTargetUrlText');
  if (urlDisplay) {
    urlDisplay.textContent = currentQrTarget;
  }

  const container = document.getElementById('modalQrCode');
  if (!container) return;
  container.innerHTML = '';

  if (typeof QRCode !== 'undefined') {
    qrCodeInstance = new QRCode(container, {
      text: currentQrTarget,
      width: 170,
      height: 170,
      colorDark: '#0f172a',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
}

/**
 * Sets up the QR Code Modal interactions.
 */
function setupQrModal() {
  const qrModal = document.getElementById('qrModal');
  const openQrBtn = document.getElementById('openQrBtn');
  const closeQrModalBtn = document.getElementById('closeQrModalBtn');
  const closeQrModalBtnBottom = document.getElementById('closeQrModalBtnBottom');
  const copyQrLinkBtn = document.getElementById('copyQrLinkBtn');

  if (openQrBtn && qrModal) {
    openQrBtn.addEventListener('click', () => {
      qrModal.classList.add('open');
    });
  }

  const closeQr = () => {
    if (qrModal) qrModal.classList.remove('open');
  };

  if (closeQrModalBtn) closeQrModalBtn.addEventListener('click', closeQr);
  if (closeQrModalBtnBottom) closeQrModalBtnBottom.addEventListener('click', closeQr);

  if (qrModal) {
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) closeQr();
    });
  }

  if (copyQrLinkBtn) {
    copyQrLinkBtn.addEventListener('click', () => {
      if (currentQrTarget) {
        copyToClipboard(currentQrTarget, 'Link oficial do currículo copiado!');
      }
    });
  }
}

/**
 * Renders Academic Formation in both Overview (compact) and Trajectory (full).
 */
function renderFormations(formacoes) {
  const compactContainer = document.getElementById('overviewFormationTimeline');
  const fullContainer = document.getElementById('fullFormationTimeline');

  const makeRow = (f) => {
    const row = document.createElement('div');
    row.className = 'timeline-row';
    row.innerHTML = `
      <span class="degree-tag">${escapeHtml(f.tipo || 'Grau')}</span>
      <div class="degree-body">
        <div class="degree-course">${escapeHtml(f.curso || f.tipo || 'Formação')}</div>
        <div class="degree-inst">${escapeHtml(f.instituicao || '')}</div>
      </div>
      ${f.ano ? `<div class="degree-year">${escapeHtml(f.ano)}</div>` : ''}
    `;
    return row;
  };

  if (compactContainer) {
    compactContainer.innerHTML = '';
    if (!formacoes || formacoes.length === 0) {
      compactContainer.innerHTML = '<p class="text-muted" style="font-size: 0.85rem;">Informações de formação não encontradas.</p>';
    } else {
      // Prioritize graduate degrees or show first 3
      const preview = formacoes.slice(0, 3);
      preview.forEach(f => compactContainer.appendChild(makeRow(f)));
    }
  }

  if (fullContainer) {
    fullContainer.innerHTML = '';
    if (!formacoes || formacoes.length === 0) {
      fullContainer.innerHTML = '<p class="text-muted" style="font-size: 0.85rem;">Informações de formação não encontradas.</p>';
    } else {
      formacoes.forEach(f => fullContainer.appendChild(makeRow(f)));
    }
  }
}

/**
 * Renders filtered publications list with pagination.
 */
function renderPublications() {
  const container = document.getElementById('publicationsList');
  const countLabel = document.getElementById('pubCountLabel');
  const pageLabel = document.getElementById('pubPageLabel');
  const prevBtn = document.getElementById('prevPubBtn');
  const nextBtn = document.getElementById('nextPubBtn');

  if (countLabel) {
    countLabel.textContent = `${filteredPubs.length} artigo(s)`;
  }

  if (!container) return;

  if (filteredPubs.length === 0) {
    container.innerHTML = '<p style="font-size:0.875rem; color:var(--text-muted); padding:1rem 0;">Nenhum artigo encontrado com o termo pesquisado.</p>';
    if (pageLabel) pageLabel.textContent = 'Página 0 de 0';
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    return;
  }

  const totalPages = Math.ceil(filteredPubs.length / PUBS_PER_PAGE);
  if (currentPubPage > totalPages) currentPubPage = totalPages;
  if (currentPubPage < 1) currentPubPage = 1;

  if (pageLabel) pageLabel.textContent = `Página ${currentPubPage} de ${totalPages}`;
  if (prevBtn) prevBtn.disabled = currentPubPage === 1;
  if (nextBtn) nextBtn.disabled = currentPubPage === totalPages;

  const startIndex = (currentPubPage - 1) * PUBS_PER_PAGE;
  const currentSlice = filteredPubs.slice(startIndex, startIndex + PUBS_PER_PAGE);

  container.innerHTML = '';
  currentSlice.forEach(pub => {
    const card = document.createElement('div');
    card.className = 'pub-item';

    const doiUrl = pub.doi ? (pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`) : null;
    const authorsStr = (pub.autores || []).slice(0, 5).join('; ') + ((pub.autores || []).length > 5 ? '; et al.' : '');

    card.innerHTML = `
      <div class="pub-header">
        ${pub.ano ? `<span class="pub-year-badge">${escapeHtml(pub.ano)}</span>` : ''}
        ${pub.periodico ? `<span class="pub-journal-name">${escapeHtml(pub.periodico)}</span>` : ''}
      </div>
      <div class="pub-article-title">${escapeHtml(pub.titulo)}</div>
      ${authorsStr ? `<div class="pub-coauthors">${escapeHtml(authorsStr)}</div>` : ''}
      ${doiUrl ? `
        <a href="${escapeHtml(doiUrl)}" target="_blank" rel="noopener noreferrer" class="pub-doi-chip">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          DOI: ${escapeHtml(pub.doi)}
        </a>` : ''}
    `;
    container.appendChild(card);
  });
}

/**
 * Renders Software and Technological Products.
 */
function renderSoftwares(softwares) {
  const container = document.getElementById('softwareGrid');
  const countBadge = document.getElementById('softwareCountBadge');
  const softwareTabBtn = document.getElementById('softwareTabBtn');

  const count = (softwares || []).length;

  if (countBadge) {
    countBadge.textContent = `${count} ${count === 1 ? 'item' : 'itens'}`;
  }

  // If researcher has 0 softwares, keep tab visible or indicate empty state gracefully
  if (!container) return;

  if (count === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size: 0.875rem; padding: 0.5rem 0;">Nenhum software ou registro de propriedade intelectual cadastrado.</p>';
    return;
  }

  container.innerHTML = '';
  softwares.forEach(sw => {
    const card = document.createElement('div');
    card.className = 'software-item';
    card.innerHTML = `
      <div class="sw-title">${escapeHtml(sw.titulo)}</div>
      <div class="sw-meta">${sw.ano ? `Ano: ${escapeHtml(sw.ano)}` : ''} ${sw.plataforma ? `• Plataforma: ${escapeHtml(sw.plataforma)}` : ''}</div>
      ${sw.finalidade ? `<div class="sw-purpose">${escapeHtml(sw.finalidade)}</div>` : ''}
    `;
    container.appendChild(card);
  });
}

/**
 * Renders Supervisions summary in Trajectory tab.
 */
function renderSupervisions(concluidas, andamento) {
  const container = document.getElementById('supervisionsList');
  if (!container) return;

  const total = (concluidas || []).length + (andamento || []).length;

  if (total === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size: 0.875rem;">Nenhuma orientação registrada.</p>';
    return;
  }

  container.innerHTML = '';
  const all = [
    ...(andamento || []).map(o => ({ ...o, status: 'Em andamento' })),
    ...(concluidas || []).map(o => ({ ...o, status: 'Concluída' }))
  ].slice(0, 15);

  all.forEach(o => {
    const item = document.createElement('div');
    item.className = 'pub-item';
    item.innerHTML = `
      <div class="pub-header">
        <span class="pub-year-badge">${escapeHtml(o.ano || 'Atual')}</span>
        <span class="degree-tag">${escapeHtml(o.tipo || 'Orientação')}</span>
        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">(${escapeHtml(o.status)})</span>
      </div>
      <div class="pub-article-title">${escapeHtml(o.titulo || 'Trabalho de Conclusão / Pesquisa')}</div>
      <div class="pub-coauthors">Orientando(a): <strong>${escapeHtml(o.orientado || 'Discente')}</strong> ${o.instituicao ? `• ${escapeHtml(o.instituicao)}` : ''}</div>
    `;
    container.appendChild(item);
  });
}

/**
 * Setup buttons and interactive tools.
 */
function setupEventListeners() {
  // Theme toggle
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Copy Citation button
  const copyCitationBtn = document.getElementById('copyCitationBtn');
  if (copyCitationBtn) {
    copyCitationBtn.addEventListener('click', () => {
      if (!currentProfile) return;
      const citationStr = (currentProfile.nome_citacoes && currentProfile.nome_citacoes.length > 0)
        ? currentProfile.nome_citacoes.join('; ')
        : currentProfile.nome;
      copyToClipboard(citationStr, 'Formato de citação copiado para a área de transferência!');
    });
  }

  // Copy Mini-Bio button
  const copyBioBtn = document.getElementById('copyBioBtn');
  if (copyBioBtn) {
    copyBioBtn.addEventListener('click', () => {
      if (!currentProfile || !currentProfile.resumo) return;
      copyToClipboard(currentProfile.resumo, 'Biografia acadêmica copiada com sucesso!');
    });
  }

  // Download vCard button
  const downloadVcardBtn = document.getElementById('downloadVcardBtn');
  if (downloadVcardBtn) {
    downloadVcardBtn.addEventListener('click', () => {
      if (!currentProfile) return;
      generateAndDownloadVCard(currentProfile);
    });
  }

  // Print / Save PDF
  const printCardBtn = document.getElementById('printCardBtn');
  if (printCardBtn) {
    printCardBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Publications search filter
  const searchInput = document.getElementById('searchPubsInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        filteredPubs = [...(currentProfile.artigos || [])];
      } else {
        filteredPubs = (currentProfile.artigos || []).filter(p => 
          (p.titulo && p.titulo.toLowerCase().includes(query)) ||
          (p.periodico && p.periodico.toLowerCase().includes(query)) ||
          (p.ano && p.ano.includes(query)) ||
          (p.autores && p.autores.some(a => a.toLowerCase().includes(query)))
        );
      }
      currentPubPage = 1;
      renderPublications();
    });
  }

  // Pagination buttons
  const prevPubBtn = document.getElementById('prevPubBtn');
  if (prevPubBtn) {
    prevPubBtn.addEventListener('click', () => {
      if (currentPubPage > 1) {
        currentPubPage--;
        renderPublications();
      }
    });
  }

  const nextPubBtn = document.getElementById('nextPubBtn');
  if (nextPubBtn) {
    nextPubBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredPubs.length / PUBS_PER_PAGE);
      if (currentPubPage < totalPages) {
        currentPubPage++;
        renderPublications();
      }
    });
  }

  // Reset to default Prof. Fabiano
  const resetBtn = document.getElementById('resetProfileBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('scholarcard_profile');
      if (typeof DEFAULT_PROFILE !== 'undefined') {
        currentProfile = DEFAULT_PROFILE;
        renderProfile(currentProfile);
      }
      closeModal();
      showToast('Perfil padrão (Prof. Fabiano) restaurado!');
    });
  }

  // Preset selector
  const presetSelect = document.getElementById('samplePresetsSelect');
  if (presetSelect && typeof SAMPLE_PROFILES !== 'undefined') {
    presetSelect.innerHTML = '';
    Object.keys(SAMPLE_PROFILES).forEach(key => {
      const p = SAMPLE_PROFILES[key];
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = `${p.nome} (${(p.metricas && p.metricas.artigos) || 0} artigos)`;
      if (key === 'fabiano') opt.selected = true;
      presetSelect.appendChild(opt);
    });

    presetSelect.addEventListener('change', (e) => {
      const selectedKey = e.target.value;
      if (SAMPLE_PROFILES[selectedKey]) {
        currentProfile = SAMPLE_PROFILES[selectedKey];
        localStorage.setItem('scholarcard_profile', JSON.stringify(currentProfile));
        renderProfile(currentProfile);
        closeModal();
        showToast(`Perfil alterado para: ${currentProfile.nome}`);
      }
    });
  }
}

/**
 * Sets up Modal and Drag-and-Drop XML uploader.
 */
function setupModalAndDropZone() {
  const modal = document.getElementById('uploadModal');
  const openBtn = document.getElementById('openUploadModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const dropZone = document.getElementById('xmlDropZone');
  const fileInput = document.getElementById('xmlFileInput');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => modal.classList.add('open'));
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());

    ['dragenter', 'dragover'].forEach(name => {
      dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(name => {
      dropZone.addEventListener(name, (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
      });
    });

    dropZone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files.length > 0) handleFileUpload(files[0]);
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) handleFileUpload(e.target.files[0]);
    });
  }
}

function closeModal() {
  const modal = document.getElementById('uploadModal');
  if (modal) modal.classList.remove('open');
}

/**
 * Handles parsing and loading an uploaded Lattes XML file.
 * @param {File} file
 */
async function handleFileUpload(file) {
  if (!file.name.toLowerCase().endsWith('.xml')) {
    alert('Por favor, selecione um arquivo no formato XML exportado da Plataforma Lattes.');
    return;
  }

  showToast('Processando XML do Lattes...');

  try {
    const parsed = await LattesParser.readFile(file);
    currentProfile = parsed;
    localStorage.setItem('scholarcard_profile', JSON.stringify(parsed));
    renderProfile(currentProfile);
    closeModal();
    showToast(`Currículo de ${parsed.nome} carregado com sucesso!`);
  } catch (err) {
    console.error(err);
    alert('Erro ao importar XML do Lattes: ' + err.message);
  }
}

/**
 * Generates and triggers download of a standardized vCard (.vcf)
 */
function generateAndDownloadVCard(profile) {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:Prof. Dr. ${profile.nome}`,
    `N:${profile.nome};;;Prof. Dr.;`,
    profile.instituicao ? `ORG:${profile.instituicao};${profile.departamento || ''}` : '',
    'TITLE:Docente / Pesquisador',
    profile.lattes_id ? `URL;type=Lattes:http://lattes.cnpq.br/${profile.lattes_id}` : '',
    profile.orcid ? `URL;type=ORCID:https://orcid.org/${profile.orcid.replace(/.*orcid.org\//, '')}` : '',
    profile.areas ? `NOTE:Áreas: ${profile.areas.join(', ')}` : '',
    'END:VCARD'
  ].filter(Boolean);

  const vcfContent = lines.join('\r\n');
  const blob = new Blob([vcfContent], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${profile.nome.toLowerCase().replace(/[^a-z0-9]/g, '_')}_contato.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Cartão de contato (.vcf) baixado!');
}

/**
 * Copies text to clipboard and shows feedback toast.
 */
function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    });
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (e) {
      alert('Não foi possível copiar automaticamente.');
    }
    document.body.removeChild(ta);
  }
}

/**
 * Displays a non-intrusive toast notification.
 */
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

/**
 * Theme toggle (Dark / Light mode).
 */
function initTheme() {
  const savedTheme = localStorage.getItem('scholarcard_theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('scholarcard_theme', next);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
