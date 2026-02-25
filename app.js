import { dataRaw } from './data.js';
import { bases, levels, colors } from './constants.js';
import { grid, qInput, fBase, fLevel, totalEl, shownEl } from './dom.js';
import { openEmotionDialog, initDialog } from './dialog.js';

totalEl.textContent = dataRaw.length;

function render() {
  const q = qInput.value.toLowerCase();
  const baseFilter = fBase.value;
  const levelFilter = fLevel.value;

  const filtered = dataRaw.filter(([name, base, level]) => {
    return (
      (!baseFilter || base === baseFilter) &&
      (!levelFilter || level === levelFilter) &&
      name.toLowerCase().includes(q)
    );
  });

  shownEl.textContent = filtered.length;
  grid.innerHTML = '';

  bases.forEach((base) => {
    const baseItems = filtered.filter((e) => e[1] === base);
    if (!baseItems.length) return;

    const lane = document.createElement('div');
    lane.className = 'lane';
    lane.innerHTML = `<h2><span class="dot" style="background:${colors[base]}"></span>${base}</h2><div class="levels"></div>`;
    const levelsWrap = lane.querySelector('.levels');

    levels.forEach((level) => {
      const levelItems = baseItems.filter((e) => e[2] === level);
      if (!levelItems.length) return;

      const col = document.createElement('div');
      col.className = 'col';
      col.innerHTML = `<h3>${level}</h3><div class="chips"></div>`;
      const chipsWrap = col.querySelector('.chips');

      levelItems.forEach(([name, b, l, desc, ques]) => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.textContent = name;
        chip.onclick = () => {
          openEmotionDialog({
            name,
            base: b,
            level: l,
            desc,
            question: ques,
          });
        };
        chipsWrap.appendChild(chip);
      });
      levelsWrap.appendChild(col);
    });
    grid.appendChild(lane);
  });
}

[qInput, fBase, fLevel].forEach((el) => el.addEventListener('input', render));
render();

initDialog();
