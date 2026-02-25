import { dataRaw } from './data.js';
import { bases, levels, colors } from './constants.js';
import { grid, qInput, fBase, fLevel, totalEl, shownEl } from './dom.js';
import { openEmotionDialog, initDialog } from './dialog.js';
import { renderGrid } from './renderGrid.js';
import { bindControls } from './controls.js';

totalEl.textContent = dataRaw.length;

function render() {
  renderGrid({
    dataRaw,
    bases,
    levels,
    colors,
    grid,
    shownEl,
    qInput,
    fBase,
    fLevel,
    openEmotionDialog,
  });
}

initDialog();

bindControls({
  qInput,
  fBase,
  fLevel,
  onChange: render,
});

render();
