/**
 * ScholarCard / LattesCard - Main Application Logic
 * Pure client-side JavaScript. Works 100% on GitHub Pages.
 */

let currentProfile = null;
let currentPubPage = 1;
const PUBS_PER_PAGE = 8;
let filteredPubs = [];
let qrCodeInstance = null;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadInitialProfile();
  setupEventListeners();
  setupModalAndDropZone();
});

/**
 * Loads profile from localStorage (if user uploaded one) or defaults to Prof. Fabiano.
 */
function loadInitialProfile() {
  const saved = localStorage.getItem('scholarcard_profile');
  if (saved) {
    try {
      currentProfile = JSON.parse(saved);
    } catch (e) {
      console.warn('Erro ao carregar perfil salvo:', e);
      currentProfile = DEFAULT_PROFILE;
    }
  } else {
    currentProfile = DEFAULT_PROFILE;
  }
  renderProfile(currentProfile);
}

/**
 * Renders the entire profile card UI.
 * @param {Object} profile
 */
function renderProfile(profile) {
  if (!profile) return;

  // 1. Initials and Avatar
  const initials = getInitials(profile.nome);
  document.getElementById('avatarInitials').textContent = initials;

  // 2. Name and Title
  const hasDoc = (profile.formacoes || []).some(f => f.tipo.toLowerCase().includes('doutor'));
  const titlePrefix = hasDoc ? 'Prof. Dr. ' : 'Prof. ';
  document.getElementById('profileName').textContent = `${titlePrefix}${profile.nome}`;
  document.title = `${profile.nome} • ScholarCard Acadêmico`;

  // 3. Affiliation and Location
  const instEl = document.getElementById('affiliationText');
  const instParts = [profile.instituicao, profile.departamento].filter(Boolean);
  instEl.textContent = instParts.join(' • ') || 'Pesquisador(a) / Docente';

  const locEl = document.getElementById('locationText');
  const locParts = [profile.cidade, profile.uf, profile.nacionalidade].filter(Boolean);
  locEl.textContent = locParts.join(', ') || 'Brasil';

  // 4. Badges (Lattes, ORCID, Update Date)
  const lattesBadge = document.getElementById('lattesBadge');
  if (profile.lattes_id) {
    lattesBadge.href = `http://lattes.cnpq.br/${profile.lattes_id}`;
    lattesBadge.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      Lattes: ${profile.lattes_id}
    `;
    lattesBadge.style.display = 'inline-flex';
  } else {
    lattesBadge.style.display = 'none';
  }

  const orcidBadge = document.getElementById('orcidBadge');
  if (profile.orcid) {
    const cleanOrcid = profile.orcid.replace('https://orcid.org/', '').replace('http://orcid.org/', '');
    orcidBadge.href = `https://orcid.org/${cleanOrcid}`;
    orcidBadge.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-3.87 18.067H5.67V8.583h2.46v9.484zm-1.23-10.74c-.792 0-1.433-.642-1.433-1.434 0-.791.641-1.433 1.433-1.433.792 0 1.434.642 1.434 1.433 0 .792-.642 1.434-1.434 1.434zm11.11 5.86c0 2.766-2.023 4.88-5.385 4.88h-3.95V8.583h4.195c3.342 0 5.14 2.114 5.14 4.604zm-2.52 0c0-1.637-1.077-2.73-2.825-2.73H10.1v5.48h2.365c1.748 0 2.825-1.114 2.825-2.75z"/></svg>
      ORCID: ${cleanOrcid}
    `;
    orcidBadge.style.display = 'inline-flex';
  } else {
    orcidBadge.style.display = 'none';
  }

  const dateBadge = document.getElementById('dateBadge');
  if (profile.data_atualizacao) {
    dateBadge.textContent = `Atualizado em: ${profile.data_atualizacao}`;
    dateBadge.style.display = 'inline-flex';
  } else {
    dateBadge.style.display = 'none';
  }

  // 5. QR Code Generator
  generateQrCode(profile);

  // 6. Metrics Grid
  const m = profile.metricas || {};
  document.getElementById('metricArtigos').textContent = m.artigos || (profile.artigos ? profile.artigos.length : 0);
  document.getElementById('metricSoftwares').textContent = m.softwares || (profile.softwares ? profile.softwares.length : 0);
  document.getElementById('metricLivros').textContent = (m.livros || 0) + (m.capitulos || 0);
  document.getElementById('metricOrientacoes').textContent = (m.orientacoes_concluidas || 0) + (m.orientacoes_andamento || 0);
  document.getElementById('metricEventos').textContent = m.eventos || 0;

  // 7. Resumo / Bio
  const bioEl = document.getElementById('bioText');
  if (profile.resumo) {
    bioEl.innerHTML = profile.resumo.replace(/\n\n/g, '<br><br>');
  } else {
    bioEl.textContent = 'Resumo acadêmico não informado no currículo Lattes.';
  }

  // 8. Research Areas Tags
  const areasContainer = document.getElementById('areasContainer');
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

  // 9. Academic Timeline (Formação)
  renderFormation(profile.formacoes || []);

  // 10. Publications (with filter & pagination)
  filteredPubs = [...(profile.artigos || [])];
  currentPubPage = 1;
  document.getElementById('searchPubsInput').value = '';
  renderPublications();

  // 11. Softwares & Technology Section
  renderSoftwares(profile.softwares || []);

  // 12. Supervisions Section
  renderSupervisions(profile.orientacoes_concluidas || [], profile.orientacoes_andamento || []);
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
 * Generates QR Code pointing to Lattes link or current page.
 */
function generateQrCode(profile) {
  const qrTarget = profile.lattes_id
    ? `http://lattes.cnpq.br/${profile.lattes_id}`
    : window.location.href;

  const container = document.getElementById('heroQrCode');
  container.innerHTML = '';

  if (typeof QRCode !== 'undefined') {
    qrCodeInstance = new QRCode(container, {
      text: qrTarget,
      width: 88,
      height: 88,
      colorDark: '#0f172a',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
}

/**
 * Renders Academic Formation Timeline.
 */
function renderFormation(formacoes) {
  const container = document.getElementById('formationTimeline');
  container.innerHTML = '';

  if (!formacoes || formacoes.length === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size: 0.9rem;">Informações de formação não encontradas.</p>';
    return;
  }

  formacoes.forEach(f => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-header">
        <span class="timeline-degree">${escapeHtml(f.tipo)}</span>
        ${f.ano ? `<span class="timeline-year">${escapeHtml(f.ano)}</span>` : ''}
      </div>
      <div class="timeline-title">${escapeHtml(f.curso || f.tipo)}</div>
      <div class="timeline-inst">${escapeHtml(f.instituicao)}</div>
    `;
    container.appendChild(item);
  });
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

  countLabel.textContent = `${filteredPubs.length} artigo(s) encontrado(s)`;

  if (filteredPubs.length === 0) {
    container.innerHTML = '<p style="font-size:0.9rem; color:var(--text-muted); padding:1rem 0;">Nenhum artigo encontrado com o termo pesquisado.</p>';
    pageLabel.textContent = 'Página 0 de 0';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }

  const totalPages = Math.ceil(filteredPubs.length / PUBS_PER_PAGE);
  if (currentPubPage > totalPages) currentPubPage = totalPages;
  if (currentPubPage < 1) currentPubPage = 1;

  pageLabel.textContent = `Página ${currentPubPage} de ${totalPages}`;
  prevBtn.disabled = currentPubPage === 1;
  nextBtn.disabled = currentPubPage === totalPages;

  const startIndex = (currentPubPage - 1) * PUBS_PER_PAGE;
  const currentSlice = filteredPubs.slice(startIndex, startIndex + PUBS_PER_PAGE);

  container.innerHTML = '';
  currentSlice.forEach(pub => {
    const card = document.createElement('div');
    card.className = 'pub-card';

    const doiUrl = pub.doi ? (pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`) : null;
    const authorsStr = (pub.autores || []).slice(0, 5).join('; ') + ((pub.autores || []).length > 5 ? '; et al.' : '');

    card.innerHTML = `
      <div class="pub-meta-row">
        ${pub.ano ? `<span class="pub-year">${escapeHtml(pub.ano)}</span>` : ''}
        ${pub.periodico ? `<span class="pub-journal">${escapeHtml(pub.periodico)}</span>` : ''}
      </div>
      <div class="pub-title">${escapeHtml(pub.titulo)}</div>
      ${authorsStr ? `<div class="pub-authors">${escapeHtml(authorsStr)}</div>` : ''}
      ${doiUrl ? `
        <a href="${escapeHtml(doiUrl)}" target="_blank" rel="noopener noreferrer" class="pub-doi-link">
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
  const section = document.getElementById('softwareSection');

  if (!softwares || softwares.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  container.innerHTML = '';

  softwares.forEach(sw => {
    const card = document.createElement('div');
    card.className = 'software-card';
    card.innerHTML = `
      <div class="software-title">${escapeHtml(sw.titulo)}</div>
      <div class="software-meta">${sw.ano ? `Ano: ${escapeHtml(sw.ano)}` : ''} ${sw.plataforma ? `• Plataforma: ${escapeHtml(sw.plataforma)}` : ''}</div>
      ${sw.finalidade ? `<div class="software-purpose">${escapeHtml(sw.finalidade)}</div>` : ''}
    `;
    container.appendChild(card);
  });
}

/**
 * Renders Supervisions summary.
 */
function renderSupervisions(concluidas, andamento) {
  const container = document.getElementById('supervisionsList');
  const total = concluidas.length + andamento.length;

  if (total === 0) {
    container.innerHTML = '<p class="text-muted" style="font-size: 0.9rem;">Nenhuma orientação registrada.</p>';
    return;
  }

  container.innerHTML = '';
  const all = [
    ...concluidas.map(o => ({ ...o, status: 'Concluída' })),
    ...andamento.map(o => ({ ...o, status: 'Em andamento' }))
  ].slice(0, 10); // Show top 10

  all.forEach(o => {
    const item = document.createElement('div');
    item.className = 'pub-card';
    item.innerHTML = `
      <div class="pub-meta-row">
        <span class="pub-year">${escapeHtml(o.ano || 'Atual')}</span>
        <span class="timeline-degree">${escapeHtml(o.tipo || 'Orientação')}</span>
        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">(${escapeHtml(o.status)})</span>
      </div>
      <div class="pub-title">${escapeHtml(o.titulo || 'Orientação')}</div>
      <div class="pub-authors">Orientando(a): <strong>${escapeHtml(o.orientado || 'Discente')}</strong> ${o.instituicao ? `• ${escapeHtml(o.instituicao)}` : ''}</div>
    `;
    container.appendChild(item);
  });
}

/**
 * Setup buttons and interactive tools.
 */
function setupEventListeners() {
  // Theme toggle
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

  // Copy Citation button
  document.getElementById('copyCitationBtn').addEventListener('click', () => {
    if (!currentProfile) return;
    const citationStr = (currentProfile.nome_citacoes && currentProfile.nome_citacoes.length > 0)
      ? currentProfile.nome_citacoes.join('; ')
      : currentProfile.nome;
    copyToClipboard(citationStr, 'Nome em citações copiado com sucesso!');
  });

  // Copy Mini-Bio button
  document.getElementById('copyBioBtn').addEventListener('click', () => {
    if (!currentProfile || !currentProfile.resumo) return;
    copyToClipboard(currentProfile.resumo, 'Mini-bio acadêmica copiada com sucesso!');
  });

  // Download vCard button
  document.getElementById('downloadVcardBtn').addEventListener('click', () => {
    if (!currentProfile) return;
    generateAndDownloadVCard(currentProfile);
  });

  // Print / Save PDF
  document.getElementById('printCardBtn').addEventListener('click', () => {
    window.print();
  });

  // Publications search filter
  const searchInput = document.getElementById('searchPubsInput');
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

  // Pagination buttons
  document.getElementById('prevPubBtn').addEventListener('click', () => {
    if (currentPubPage > 1) {
      currentPubPage--;
      renderPublications();
    }
  });

  document.getElementById('nextPubBtn').addEventListener('click', () => {
    const totalPages = Math.ceil(filteredPubs.length / PUBS_PER_PAGE);
    if (currentPubPage < totalPages) {
      currentPubPage++;
      renderPublications();
    }
  });

  // Reset to default Prof. Fabiano
  document.getElementById('resetProfileBtn').addEventListener('click', () => {
    localStorage.removeItem('scholarcard_profile');
    currentProfile = DEFAULT_PROFILE;
    renderProfile(currentProfile);
    closeModal();
    showToast('Perfil padrão (Prof. Fabiano) restaurado!');
  });

  // Preset selector
  const presetSelect = document.getElementById('samplePresetsSelect');
  if (typeof SAMPLE_PROFILES !== 'undefined') {
    Object.keys(SAMPLE_PROFILES).forEach(key => {
      const p = SAMPLE_PROFILES[key];
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = `${p.nome} (${p.metricas.artigos} artigos)`;
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

  openBtn.addEventListener('click', () => modal.classList.add('open'));
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Drag & drop
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

function closeModal() {
  document.getElementById('uploadModal').classList.remove('open');
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
