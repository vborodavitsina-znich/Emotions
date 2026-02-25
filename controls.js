export function bindControls({ qInput, fBase, fLevel, onChange }) {
  [qInput, fBase, fLevel].forEach((el) => {
    el.addEventListener('input', onChange);
  });
}
