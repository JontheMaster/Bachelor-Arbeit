# Projektakte Bachelor-Thesis — Prototyp gegen sexualisierte Gewalt im Sportverein

Arbeitsakte zur Bachelor-Thesis **„Konzeptionelle Entwicklung eines Prototyps zur Unterstützung
bei der Implementierung von Präventionsmaßnahmen gegen sexualisierte Gewalt im Sportverein
Post SV Nürnberg"** — DHfPG Saarbrücken, Sport- und Gesundheitsinformatik.

**Stand: 27.08.2026 · Kapitel 1 bis 4 inhaltlich abgeschlossen, Anforderungsspezifikation steht.**

---

## Was hier drin ist

| Datei | Inhalt |
|---|---|
| `index.html` | Die Projektakte als Website: Steckbrief, Argumentationskette, Kapitelstand, offene Punkte, Konzept, alle 25 Anforderungen mit Prioritätsfilter, Zielkonflikte, Quellenlage |
| `domaenenmodell.html` | Das Domänenmodell ausführlich: Notationslegende, Klassendiagramm, Klassentabellen mit Herleitung, Rückbindung an jede Anforderung, Formulierungsvorschlag für Kapitel 5.3 |
| `docs/projektdokumentation.md` | Dieselbe Substanz als ein durchgehendes Markdown-Dokument. Das ist die Quelle, aus der die Website gebaut ist. |
| `docs/01-…` bis `docs/07-…` | Dieselben Inhalte thematisch getrennt, damit sich einzelne Teile leichter fortschreiben lassen |
| `docs/domaenenmodell.mmd` | Mermaid-Quelltext des Klassendiagramms, direkt auf mermaid.live einfügbar |

Beide HTML-Seiten sind vollständig eigenständig: kein Build, kein JavaScript-Framework,
keine externen Abhängigkeiten außer Google Fonts. Sie funktionieren auch, wenn man sie
lokal per Doppelklick öffnet.

---

## Auf GitHub Pages veröffentlichen

Das Repo ist so gebaut, dass es ohne Anpassung als Pages-Site läuft.

1. Repository anlegen und die Dateien pushen — inklusive der leeren Datei `.nojekyll`.
   Ohne sie versucht GitHub, die Seiten durch Jekyll zu schicken, was hier nur stört.
2. Im Repository unter **Settings → Pages** als Quelle **Deploy from a branch** wählen,
   Branch `main`, Ordner `/ (root)`.
3. Nach ein bis zwei Minuten liegt die Seite unter
   `https://<benutzername>.github.io/<repository>/`.

`index.html` liegt bewusst im Wurzelverzeichnis, damit die Startseite ohne Unterpfad
erreichbar ist. Der Link zwischen den beiden Seiten ist relativ (`domaenenmodell.html`)
und funktioniert deshalb unter jedem Repository-Namen.

---

## Bevor das Repo öffentlich wird

Die Akte enthält Material, das nicht für jeden gedacht sein muss:

- wörtliche Zitate aus zwei Experteninterviews
- den Vereinsnamen und die Bedarfsanalyse zum Post SV Nürnberg
- die Namen der Betreuenden und die Matrikelnummer
- interne Arbeitsnotizen zu offenen Belegstellen und Korrekturen

Für ein **privates** Repository ist das unproblematisch. Soll es öffentlich sein, lohnt
ein Blick auf zwei Stellen: die Angabe „Datenschutzbeauftragter seit 2018, Compliance-Ombudsmann
seit 2022/23" macht den interviewten Kinderschutzbeauftragten in einem Verein dieser Größe
auch ohne Namen identifizierbar, und die Interviewzitate sind bislang nicht freigegeben.

---

## Wie die Seiten neu gebaut werden

Die HTML-Dateien entstehen aus Fragmenten. Wer sie ändern will, ändert nicht die fertigen
Seiten, sondern:

- `_src/style.css` — die gemeinsamen Stile beider Seiten
- `_src/index.content.html` — Inhalt der Projektakte
- `_src/modell.content.html` — Inhalt der Domänenmodell-Seite
- `_src/model.svg` — das Klassendiagramm
- `_src/build.py` — setzt daraus zwei Fassungen zusammen: eine für den Artifact-Viewer auf
  claude.ai, eine vollständige HTML-Fassung für Pages

Aus dem Ordner `_src` heraus `python3 build.py` aufrufen; die Pfade im Skript gehen von
`site/` und `repo/` als Nachbarordner aus und müssen dafür einmal angepasst werden. Für
kleine Korrekturen reicht es, direkt in `index.html` beziehungsweise `domaenenmodell.html`
zu editieren — beide sind lesbar formatiert und tragen ihr CSS im `<head>`.

---

## Kurzfassung des Stands

**Fertig:** Kapitel 1 bis 4 einschließlich Stakeholderanalyse, zwei Personas, Nutzungsszenario,
acht User Storys, Use Case und der vollständigen Anforderungsspezifikation mit
14 funktionalen und 11 nichtfunktionalen Anforderungen.

**Als Nächstes:** vier Folgefehler der Kapitel-4-Überarbeitung beheben (allen voran der
tote Verweis auf ein Kapitel 4.4.9, das es nicht mehr gibt, und das veraltete
Tabellenverzeichnis), die Korrektur zu Sailer & Homner in Kapitel 3.4, dann Kapitel 5.

**Größte inhaltliche Lücke:** Zwei Befunde stehen als Gestaltungsentscheidung in Tab. 4,
sind aber nicht als Anforderung erfasst — die Elternkommunikation als eigener Situationstyp
und die Abdeckung der frühen, mehrdeutigen Grooming-Phase. Letztere ist genau das
Alleinstellungsmerkmal, das die Lückenanalyse in Kapitel 3.5.4 trägt.

Alles Weitere in [`docs/02-offene-punkte.md`](docs/02-offene-punkte.md).
