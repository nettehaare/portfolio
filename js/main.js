document.addEventListener('DOMContentLoaded', () => {

  const SPEED = 60; // Pixel pro Sekunde – größere Zahl = schneller

  /* ----- Galerien als durchlaufendes Laufband ----- */
  document.querySelectorAll('.gallery').forEach((gallery, index) => {
    const track = gallery.querySelector('.gallery-track');
    if (!track) return;

    // Richtung: aus der Klasse übernehmen, sonst abwechselnd zuweisen
    if (!gallery.classList.contains('gallery--move-left') &&
        !gallery.classList.contains('gallery--move-right')) {
      gallery.classList.add(index % 2 === 0 ? 'gallery--move-right' : 'gallery--move-left');
    }

    const originals = Array.from(track.children);
    if (!originals.length) return;

    function layout() {
      // alte Klone entfernen, damit wir sauber neu vermessen koennen
      track.querySelectorAll('[data-clone]').forEach((n) => n.remove());

      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const setWidth = originals.reduce(
        (w, el) => w + el.getBoundingClientRect().width, 0
      ) + gap * originals.length;

      if (setWidth < 1) return; // Bilder noch nicht geladen -> spaeter erneut

      // So oft kopieren, dass das Band immer breiter als der sichtbare Bereich ist
      const copies = Math.max(1, Math.ceil(gallery.clientWidth / setWidth));
      for (let c = 0; c < copies; c++) {
        originals.forEach((el) => {
          const clone = el.cloneNode(true);
          clone.setAttribute('data-clone', '');
          clone.setAttribute('aria-hidden', 'true');
          track.appendChild(clone);
        });
      }

      // Strecke einer Wiederholung + Dauer (fuer gleichmaessiges Tempo)
      track.style.setProperty('--shift', setWidth + 'px');
      track.style.setProperty('--marquee-duration', (setWidth / SPEED) + 's');
    }

    // Erst vermessen, wenn die Bilder geladen sind (sonst ist die Breite 0)
    const imgs = originals.map((s) => s.querySelector('img')).filter(Boolean);
    let done = 0;
    const check = () => { if (++done >= imgs.length) layout(); };

    if (imgs.length === 0) {
      layout();
    } else {
      imgs.forEach((img) => {
        if (img.complete) check();
        else {
          img.addEventListener('load', check, { once: true });
          img.addEventListener('error', check, { once: true });
        }
      });
    }

    // Bei Groessenaenderung des Fensters neu berechnen
    let t;
    window.addEventListener('resize', () => {
      clearTimeout(t);
      t = setTimeout(layout, 200);
    });
  });

  /* ----- Zurueck-nach-oben-Button ----- */
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    const toggle = () => topBtn.classList.toggle('show', window.scrollY > 400);
    window.addEventListener('scroll', toggle, { passive: true });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    toggle();
  }
});
