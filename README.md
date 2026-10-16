# Projektakte Bachelor-Thesis — Prototyp gegen sexualisierte Gewalt im Sportverein

Arbeitsakte zur Bachelor-Thesis **„Konzeptionelle Entwicklung eines Prototyps zur Unterstützung
bei der Implementierung von Präventionsmaßnahmen gegen sexualisierte Gewalt im Sportverein
Post SV Nürnberg"**. DHfPG Saarbrücken, Sport- und Gesundheitsinformatik.

**Stand: 17.10.2026 · Kapitel 1 bis 7 geschrieben, Endkorrektur läuft, Abgabe am 31.10.2026.**
Grundlage ist die Fassung der Arbeit vom 16.10.2026.

---

## Was hier drin ist

| Datei | Inhalt |
|---|---|
| `index.html` | Die Projektakte als Website: Steckbrief, Argumentationskette, Kapitelstand, offene Punkte, Konzept, alle 28 Anforderungen mit Prioritätsfilter, Zielkonflikte, Ergebnisse aus Kapitel 5 mit Abb. 1 bis 3, Klassenmodell, empirische Basis, Quellenlage |
| `domaenenmodell.html` | **Archiv, Stand 27.08.2026.** Der frühere Entwurf des Inhaltsmodells mit sechzehn Klassen. Gültig ist das Klassendiagramm mit dreizehn Klassen in `index.html` (Abschnitt Klassenmodell) bzw. Abb. 2 und Anhang 8 der Arbeit |
| `docs/projektdokumentation.md` | Dieselbe Substanz als ein durchgehendes Markdown-Dokument. Das ist die Quelle, aus der die Website gebaut ist |
| `docs/01-…` bis `docs/07-…` | Dieselben Inhalte thematisch getrennt, damit sich einzelne Teile leichter fortschreiben lassen. `06-domaenenmodell.md` enthält inzwischen das aktuelle Klassendiagramm |
| `docs/domaenenmodell.mmd` | Mermaid-Quelltext des aktuellen Klassendiagramms (13 Klassen), direkt auf mermaid.live einfügbar |

Beide HTML-Seiten sind vollständig eigenständig: kein Build nötig zum Ansehen, kein
JavaScript-Framework, keine externen Abhängigkeiten außer Google Fonts. Die Abbildungen
aus der Arbeit sind eingebettet. Beide Seiten funktionieren auch, wenn man sie lokal per
Doppelklick öffnet.

---

## Auf GitHub Pages veröffentlichen

Das Repo ist so gebaut, dass es ohne Anpassung als Pages-Site läuft.

1. Dateien pushen bzw. hochladen, inklusive der leeren Datei `.nojekyll`.
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
- seit dem Stand vom 17.10. auch die Abbildungen 1 bis 3 der Arbeit

Für ein **privates** Repository ist das unproblematisch. Soll es öffentlich sein, lohnt
ein Blick auf zwei Stellen: die Angabe „Datenschutzbeauftragter seit 2018, Compliance-Ombudsmann
seit 2022/23" macht den interviewten Kinderschutzbeauftragten in einem Verein dieser Größe
auch ohne Namen identifizierbar, und die Interviewzitate sind bislang nicht freigegeben.

---

## Wie die Seiten neu gebaut werden

Die HTML-Dateien entstehen aus Fragmenten. Wer sie ändern will, ändert nicht die fertigen
Seiten, sondern:

- `_src/style.css`: die gemeinsamen Stile beider Seiten
- `_src/index.content.html`: Inhalt der Projektakte
- `_src/modell.content.html`: Inhalt der Domänenmodell-Seite (Archiv)
- `_src/model.svg`: das alte Klassendiagramm der Archivseite
- `_src/img/`: Abb. 1 bis 3 aus der Arbeit, werden beim Bauen als data-URI eingebettet
- `_src/build.py`: setzt daraus zwei Fassungen zusammen, eine für den Artifact-Viewer auf
  claude.ai (`_src/artifact-*.html`, nicht einchecken) und eine vollständige HTML-Fassung für Pages

Aus dem Ordner `_src` heraus `python3 build.py` aufrufen. Das Skript schreibt `index.html`
und `domaenenmodell.html` direkt ins Wurzelverzeichnis.

---

## Kurzfassung des Stands

**Fertig:** Kapitel 1 bis 7 einschließlich Anforderungsspezifikation (15 funktionale und
13 nichtfunktionale Anforderungen), Ablauf als Aktivitätsdiagramm, Klassendiagramm mit
13 Klassen, Szenariovorlage, zehn Szenarien (drei ausgearbeitet) und Wireframes.

**Vor der Abgabe inhaltlich offen:** Ohlert-Befund in Kapitel 1 differenzieren, Sailer & Homner
in 3.4 korrigieren, Palzkill und Brackenridge & Fasting als zwei verschiedene Ängste trennen,
3.2 an die Transkripte angleichen, dritter Schritt und Ausblick in Kapitel 6, Anhang 1 bis 3
mit Anhangsverzeichnis, letzte Seitenangabe in Tab. 9.

**Danach:** Konsistenz zwischen Tabellen, Anhang und Wireframes, Literaturverzeichnis formatieren,
Kommentare und Markierungen entfernen.

Alles Weitere in [`docs/02-offene-punkte.md`](docs/02-offene-punkte.md).
