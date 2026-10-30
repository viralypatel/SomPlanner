// Reads every studiewijzer item (card + detail panel) for the given ISO weeks.
// Run on https://leerling.somtoday.nl/studiewijzer after "Vandaag" and "Toon weekend".
// Set window.__swWeeks = ['44','45','46','47'] first. Result lands in window.__sw (JSON string).
window.__sw = null;
(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const want = window.__swWeeks || [];
  const out = [];
  for (const w of document.querySelectorAll('sl-studiewijzer-week')) {
    const wk = (w.innerText.match(/Week (\d+)/) || [])[1];
    if (!want.includes(wk)) continue;
    for (const it of w.querySelectorAll('sl-studiewijzer-item')) {
      const dag = it.closest('sl-studiewijzer-dag');
      const day = dag ? dag.innerText.split('\n')[0].trim() : 'Weektaak';
      const lines = it.innerText.split('\n').map(s => s.trim()).filter(Boolean);
      const title = lines[1] || lines[0] || '';
      (it.querySelector('.info') || it).click();
      // Wait until the panel shows this item, otherwise we read the previous one.
      let d = null;
      for (let i = 0; i < 30; i++) {
        await sleep(150);
        d = document.querySelector('sl-studiewijzer-item-detail');
        if (d && title && d.innerText.includes(title.slice(0, 20))) break;
      }
      out.push({
        week: wk,
        day,
        card: lines.join(' | '),
        detail: d ? d.innerText.trim() : '',
        links: d ? [...d.querySelectorAll('a[href]')].map(a => (a.innerText.trim() || a.href) + ' -> ' + a.href) : [],
      });
    }
  }
  window.__sw = JSON.stringify(out);
})();
'started';
