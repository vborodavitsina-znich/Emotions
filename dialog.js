import { dlg } from './dom.js';
import { colors } from './constants.js';

const dlgTitleEl = document.getElementById('dlg-title');
const dlgTagsEl = document.getElementById('dlg-tags');
const dlgDescEl = document.getElementById('dlg-desc');
const dlgQuestionEl = document.getElementById('dlg-question');

export function openEmotionDialog({ name, base, level, desc, question }) {
  dlgTitleEl.textContent = name;
  dlgDescEl.textContent = desc;
  dlgQuestionEl.textContent = question;

  dlgTagsEl.innerHTML = `
    <span class="badge" style="color:${colors[base]}">● ${base}</span>
    <span class="badge">Интенсивность: ${level}</span>
  `;

  dlg.showModal();
}

export function initDialog() {
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) dlg.close();
  });
}
