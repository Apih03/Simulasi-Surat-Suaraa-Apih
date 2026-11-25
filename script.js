(() => {
  'use strict';
  const config = window.EVOTE_CONFIG;
  if (!config || !Array.isArray(config.candidates) || config.candidates.length !== 4) {
    document.body.innerHTML = '<p style="padding:2rem;font-family:Arial">Konfigurasi tidak valid. Pastikan config.js berisi tepat 4 kandidat.</p>';
    return;
  }
  const $ = (id) => document.getElementById(id);
  const state = { selected: null };

  // Apply theme colors from config.js
  const theme = config.theme || {};
  const root = document.documentElement;
  [['green','--green'],['greenDark','--green-dark'],['gold','--gold'],['paper','--paper'],['ink','--ink'],['accent','--accent']]
    .forEach(([key, variable]) => { if (theme[key]) root.style.setProperty(variable, theme[key]); });

  $('election-logo').src = config.logo || 'assets/logo.jpeg';
  $('election-name').textContent = config.electionName || '';
  $('ballot-title').textContent = config.electionTitle || 'SURAT SUARA';
  $('village-name').textContent = config.village || '';
  $('district-regency').textContent = [config.district, config.regency].filter(Boolean).join(' · ');
  $('term').textContent = config.term || '';
  $('instruction').textContent = (config.texts && config.texts.subtitle) || '';
  $('confirm-title').textContent = (config.texts && config.texts.confirmQuestion) || 'APAKAH ANDA YAKIN AKAN MEMILIH CALON INI?';
  $('back-button').textContent = (config.texts && config.texts.back) || 'ULANGI / KEMBALI';
  $('confirm-button').textContent = (config.texts && config.texts.confirm) || 'YA, PILIH CALON INI';
  $('thank-you-message').textContent = (config.texts && config.texts.thankYou) || 'TERIMA KASIH, PILIHAN ANDA TELAH TERCATAT.';

  const makeCandidateCard = (candidate) => {
    const card = document.createElement('article');
    card.className = 'candidate-card';
    const photoWrap = document.createElement('div');
    photoWrap.className = 'candidate-photo-wrap';
    const img = document.createElement('img');
    img.className = 'candidate-photo';
    img.src = candidate.photo;
    img.alt = `Foto ${candidate.name}`;
    img.loading = 'lazy';
    img.onerror = () => { img.src = 'assets/placeholder.jpg'; };
    const number = document.createElement('div');
    number.className = 'candidate-number';
    number.textContent = candidate.number;
    photoWrap.append(img, number);
    const info = document.createElement('div');
    info.className = 'candidate-info';
    const name = document.createElement('h2');
    name.className = 'candidate-name';
    name.textContent = candidate.name;
    const description = document.createElement('p');
    description.className = 'candidate-description';
    description.textContent = candidate.description || '';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'button button-primary';
    button.textContent = (config.texts && config.texts.choose) || 'PILIH KANDIDAT INI';
    button.addEventListener('click', () => selectCandidate(candidate));
    info.append(name, description, button);
    card.append(photoWrap, info);
    return card;
  };

  const grid = $('candidate-grid');
  config.candidates.forEach(candidate => grid.appendChild(makeCandidateCard(candidate)));

  function selectCandidate(candidate) {
    state.selected = candidate;
    const area = $('selected-candidate');
    area.replaceChildren();
    const img = document.createElement('img');
    img.src = candidate.photo;
    img.alt = `Foto ${candidate.name}`;
    img.onerror = () => { img.src = 'assets/placeholder.jpg'; };
    const details = document.createElement('div');
    const number = document.createElement('div');
    number.className = 'selected-number';
    number.textContent = `NOMOR URUT ${candidate.number}`;
    const name = document.createElement('h3');
    name.className = 'selected-name';
    name.textContent = candidate.name;
    const description = document.createElement('p');
    description.className = 'selected-description';
    description.textContent = candidate.description || '';
    details.append(number, name, description);
    area.append(img, details);
    showView('confirm-view');
  }

  function showView(viewId) {
    ['ballot-view', 'confirm-view', 'success-view'].forEach(id => $(id).classList.toggle('hidden', id !== viewId));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  $('back-button').addEventListener('click', () => {
    showView('ballot-view');
  });
  $('confirm-button').addEventListener('click', () => {
    if (!state.selected) return;
    const candidate = state.selected;
    const receipt = $('receipt-candidate');
    receipt.replaceChildren();
    const img = document.createElement('img');
    img.src = candidate.photo;
    img.alt = '';
    img.onerror = () => { img.src = 'assets/placeholder.jpg'; };
    const text = document.createElement('div');
    const name = document.createElement('strong');
    name.textContent = candidate.name;
    const number = document.createElement('span');
    number.textContent = `Nomor urut ${candidate.number}`;
    text.append(name, number);
    receipt.append(img, text);
    showView('success-view');
  });

  $('repeat-button').addEventListener('click', () => {
    state.selected = null;
    showView('ballot-view');
  });

  // Mode sosialisasi: tidak menggunakan sessionStorage atau penguncian pemilihan.
})();
