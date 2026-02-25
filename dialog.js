import { dlg, dlgTitleEl, dlgTagsEl, dlgDescEl, dlgQuestionEl } from './dom.js';
import { colors } from './constants.js';

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
