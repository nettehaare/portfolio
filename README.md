# Portfolio – Melvin Sae-Dan

Persönliche Portfolio-Website. Statische Seite, gebaut mit reinem HTML, CSS und
JavaScript – ohne Framework und ohne externe Bibliotheken.

## Ordnerstruktur

```
portfolio/
├── index.html          → die Seite selbst
├── css/
│   └── styles.css       → das komplette Styling (eine Datei)
├── js/
│   └── main.js          → Galerie-Steuerung + Zurück-nach-oben-Button
├── img/                 → Bilder
│   ├── bodega.jpg
│   ├── webentwicklung/
│   └── kunst/
├── video/               → bodega.mp4
└── files/               → lebenslauf.pdf
```

## Lokal ansehen

Einfach `index.html` im Browser öffnen. Oder mit einem kleinen Server
(empfohlen, damit relative Pfade sauber funktionieren):

```bash
# Python (meist vorinstalliert)
python3 -m http.server 8000
# danach im Browser: http://localhost:8000
```

## Noch zu tun

In `index.html` sind alle offenen Stellen mit `TODO` markiert:
E-Mail, GitHub-Link, Lebenslauf-PDF, der Text im Bereich „Über mich",
die Skills und die Projekt-Karten.

## Bilder schneller machen

Fotos vor dem Hochladen als **WebP** speichern – spart bei Bildern
häufig 60–80 % Dateigröße, ohne sichtbaren Qualitätsverlust.

## Online stellen (GitHub Pages)

1. Repository auf GitHub anlegen und diesen Ordner hochladen (per Git oder Upload).
2. Im Repo: **Settings → Pages → Source: Branch `main`, Ordner `/root`**.
3. Nach kurzer Zeit ist die Seite unter
   `https://DEIN-NAME.github.io/REPO-NAME/` erreichbar.

Hinweis: Alle Pfade sind relativ (`css/...`, `img/...`), daher funktioniert
es sowohl im Hauptverzeichnis als auch in einem Unterordner.
