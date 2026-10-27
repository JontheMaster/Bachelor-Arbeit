# Prävention im Trainingsalltag

Website und Projektdokumentation zu meiner Bachelorarbeit **„Konzeptionelle Entwicklung eines Prototyps zur Unterstützung bei der Implementierung von Präventionsmaßnahmen gegen sexualisierte Gewalt im Sportverein Post SV Nürnberg“** (DHfPG, Sport- und Gesundheitsinformatik, 2026).

**Website:** https://jonathansommerer.me

Die Arbeit entwirft einen Prototyp, mit dem ehrenamtliche Trainerinnen und Trainer mehrdeutige Situationen aus dem Trainingsalltag üben: kurz, freiwillig und ohne dass jemand sieht, wie sie entschieden haben. Am Ende jedes Szenarios wird die Situation eingeordnet, nicht die Person. Ergebnis ist ein Konzept, keine programmierte Anwendung.

---

## Was auf der Website zu finden ist

- Rahmen der Arbeit, Forschungsfrage und Aufbau mit Seitenzahlen
- Problemstellung mit Argumentationskette, Interviewbefunden und Vergleich bestehender Angebote
- Vorgehen mit Zeitleiste von Juli bis Oktober 2026
- Konzept: Lernziel, Gestaltungsprinzipien, sechs Grundfunktionen
- Stakeholder, Personas und Nutzungsszenario
- User Storys, Use Case, alle 28 Anforderungen mit Filter nach Art, Priorität, Grundfunktion und Quelle, dazu die Zielkonflikte
- Aktivitätsdiagramm und ein interaktives Klassendiagramm, das auch die Entwicklung seit dem ersten Entwurf zeigt
- Die drei ausgearbeiteten Szenarien zum Durchspielen, der Szenarienbestand und die Wireframes
- Rückblick mit Entscheidungen, Stolpersteinen und Diskussion
- Alle 28 Quellen nach Erscheinungsjahr und Strang, mit Verweis auf die Anforderungen, die sich auf sie stützen

## Aufbau des Repositorys

| Pfad | Inhalt |
|---|---|
| `index.html` | Die Website. Eine einzige, eigenständige Datei: Schriften und Abbildungen sind eingebettet, es werden keine externen Ressourcen geladen und keine Cookies gesetzt. Funktioniert auch lokal per Doppelklick. |
| `docs/projektdokumentation.md` | Die Projektdokumentation als durchgehendes Markdown-Dokument |
| `docs/01-…` bis `docs/07-…` | Dieselben Inhalte thematisch aufgeteilt |
| `docs/klassendiagramm.mmd` | Mermaid-Quelltext des Klassendiagramms (Abb. 2), direkt auf mermaid.live einfügbar |
| `_src/` | Quelldateien der Website und das Build-Skript |

## Website neu bauen

Geändert werden die Dateien in `_src/`, nicht `index.html`:

- `page.html`: Inhalt und Struktur der Seite
- `data.js`: Anforderungen, User Storys, Klassen, Szenarien, Quellen und weitere Daten
- `app.js`: Interaktion (Szenario-Player, Klassendiagramm, Filter, Quellenkarte)
- `style.css`: Gestaltung, helles und dunkles Farbschema
- `img/`: Abb. 1 bis 3 aus der Arbeit
- `fonts/`: Big Shoulders Display und Atkinson Hyperlegible (SIL Open Font License, siehe `fonts/OFL.txt`)

Aus dem Ordner `_src` heraus `python3 build.py` aufrufen. Das Skript schreibt `index.html` ins Wurzelverzeichnis und zusätzlich `_src/artifact.html` für die Ansicht auf claude.ai, die nicht eingecheckt wird.

## GitHub Pages

Die Seite läuft über GitHub Pages (Branch `main`, Ordner `/ (root)`) unter der eigenen Domain aus `CNAME`. Die leere Datei `.nojekyll` verhindert, dass GitHub die Seite durch Jekyll schickt.

## Hinweise

Die Interviews sind nach Rolle anonymisiert (Interview K: Kinderschutzbeauftragter, Interview T: Trainer), die Szenarien sind erfunden. Transkripte sind nicht Teil dieses Repositorys.

Hilfe-Telefon Sexueller Missbrauch, kostenfrei und anonym: **0800 22 55 530** · [hilfe-portal-missbrauch.de](https://www.hilfe-portal-missbrauch.de)

© 2026 Jonathan Sommerer
