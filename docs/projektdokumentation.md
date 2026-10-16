# Projektdokumentation Bachelor-Thesis Jonathan Sommerer

**Lebendes Dokument.** Wird nur auf ausdrücklichen Wunsch fortgeschrieben (Anweisung auf der Notion-Seite „BA ToDo´s - Dokument“). Änderungsprotokoll am Ende.

Letzte Aktualisierung: 17.10.2026 · Grundlage: Fassung bt_350579_sommerer_jonathan.docx vom 16.10.2026 · Stand: Kapitel 1 bis 7 geschrieben, Endkorrektur läuft · Abgabe 31.10.2026

Begleitende Seiten und Listen:

- Projektakte (Ansichtsversion dieser Doku): https://claude.ai/code/artifact/793e1a22-d60b-41a0-abae-e5570b657626
- GitHub-Repo JontheMaster/Bachelor-Arbeit: index.html (Projektakte), docs/ (diese Doku, auch thematisch aufgeteilt), _src/ (Quellfragmente und build.py)
- Abgabe-Checkliste mit allen offenen Punkten und Fundstellen: claude/abgabe-checkliste.md
- To-dos als Karten mit Priorität: Notion, Board „BA ToDo´s - Dokument“
- Domänenmodell-Seite (https://claude.ai/code/artifact/dad808cc-ebc7-40c6-a74b-138645f8a509): Stand 31.08., zeigt noch das alte Modell mit Nutzerprofil und Trainerteam. Gültig ist Abschnitt 8 dieser Doku bzw. Abb. 2 und Anhang 8 der Arbeit.

---

## 1 Steckbrief

| | |
|---|---|
| **Titel** | Konzeptionelle Entwicklung eines Prototyps zur Unterstützung bei der Implementierung von Präventionsmaßnahmen gegen sexualisierte Gewalt im Sportverein Post SV Nürnberg |
| **Hochschule** | DHfPG Saarbrücken, Studiengang Sport- und Gesundheitsinformatik, Bachelor of Science |
| **Matrikelnummer** | 350579 |
| **Betreuung DHfPG** | Timo Engler |
| **Betreuung Ausbildungsbetrieb** | Jamie Killinger |
| **Forschungsfrage** | Wie kann ein digitales Tool Sportvereine konkret dabei unterstützen, präventiv gegen sexualisierte Gewalt vorzugehen? |
| **Zielgruppe** | Erwachsene, ehrenamtliche Trainerinnen und Trainer; Kinderschutz-Ansprechpersonen als Nebennutzende |
| **Ergebnisart** | Konzept für einen Prototyp, ausdrücklich keine programmierte Anwendung |
| **Verortung** | Präventionsebene im Vier-Ebenen-Modell (Wolff, 2015; zitiert nach Rulofs, 2024, S. 133) |
| **Umfang** | Textteil rund 55 Seiten (S. 5 bis 59). Richtlinie sind 50 Seiten, die Abweichung ist mit Timo Engler abgestimmt (17.10.2026) |
| **Zeitplan** | Korrekturlesen bis 26.10.2026, Abgabe 31.10.2026 |

---

## 2 Argumentationskette

Die Kette, an der alles hängt. Wenn eine Entscheidung im Konzept begründet werden muss, führt der Weg hierher zurück.

1. **Das Problem sitzt bei den Erwachsenen.** 81 % der Täterinnen und Täter waren erwachsene Betreuungspersonen (Ohlert et al., 2018, S. 63). Weder Leistungsniveau noch Sportart, Migrationshintergrund oder Behinderung erklären, wer betroffen ist. Für die Gesamtprävalenz ist nur das Geschlecht signifikant (S. 63–64), bei schweren Formen kommt die sexuelle Orientierung hinzu (S. 65). Befragt wurden Kaderathletinnen und -athleten (S. 66). In Kap. 1 steht die Differenzierung noch nicht (Kommentar 5).
2. **Vereine sind strukturell schwach aufgestellt.** Rund ein Zehntel hat Ansprechpersonen oder Schulungen, 31 % einen Ehrenkodex, rund 10 % einen Interventionsplan (Hartmann-Tews et al., 2016; zitiert nach Rulofs, 2024, S. 137, 140–141). Dazu kommen niedrige Zugangsschwellen und hohe Ehrenamtlichkeit (Rulofs, 2024, S. 134–136).
3. **Beim Post SV fehlt nicht das Konzept, sondern seine Verankerung.** Der Kinderschutzbeauftragte hat das Schutzkonzept allein und bewusst strikt verfasst. Den Widerstand im Verein führt er auf diese Strenge und auf Unwissenheit zurück (Interview K). Dass die Trainerschaft nicht beteiligt war, ist eine eigene Deutung; 4.1 formuliert das noch zu kausal.
4. **Das eigentliche Problem ist Mehrdeutigkeit, nicht Wissen.** Dieselbe Handlung kann harmlos oder Grooming-Beginn sein, und genau diese Mehrdeutigkeit nutzen Täter, um Reaktionen gefahrlos zu testen (Brackenridge & Fasting, 2005, S. 19).
5. **Der Bedarf lautet Selbstbewusstsein, nicht Belehrung.** „das Selbstbewusstsein geben, dass sie sich in einem bestimmten Rahmen bewegen können, ohne etwas falsch zu machen“ (Interview K)
6. **Die Lücke im Angebot.** Kein Format für erwachsene Trainerinnen und Trainer in ihrer Aufsichtsrolle, individuell und zeitlich flexibel nutzbar (Kap. 3.5.4).
7. **Daraus folgt der Prototyp.** Szenariobasiert, freiwillig, im eigenen Tempo, mit Selbstreflexion und Abgleich im Trainerteam als den beiden Kernzielen (Kap. 2, 4.4).

---

## 3 Kapitelstand

Alle Kapitel sind geschrieben. Offen ist die Endkorrektur; die Spalte rechts nennt die größten Baustellen, die vollständige Liste steht in claude/abgabe-checkliste.md.

| Kapitel | Stand | Größte offene Punkte |
|---|---|---|
| 1 Einleitung und Problemstellung | geschrieben | Ohlert-Befund differenzieren (Kommentar 5), Kaderathleten-Hinweis, Rulofs-Belege |
| 2 Zielsetzung | geschrieben | Vier-Ebenen-Modell kürzen statt streichen (Kommentare 10/11) |
| 3 Gegenwärtiger Kenntnisstand | geschrieben | Sailer & Homner in 3.4 (Kommentar 29), Palzkill und Brackenridge & Fasting in 3.1.4 (Kommentar 22), 3.2 an die Transkripte angleichen, Uuugh-Stichprobe |
| 4 Methodik | geschrieben | Tab. 4 (Eskalationszeile, Grundfunktion 4), Tab. 6/7 (F12-Quelle, F15/NF12), fünftes Prinzip (Kommentare 50–52), Stickel nach Kap. 3 (Kommentar 48) |
| 5 Ergebnisse | geschrieben, 5.1 bis 5.5 | Tab. 9 (Ohlert S. ???, Themenfelder), Wireframes an die Szenarien angleichen |
| 6 Diskussion | geschrieben, rund 780 Wörter | „drei Schritte“, es folgen zwei; Ausblick fehlt; Erwachsenen-Befund und Unabhängigkeit der Interviews |
| 7 Zusammenfassung | geschrieben, rund 540 Wörter | Empfehlung nur, wenn sie in Kap. 6 hergeleitet ist |
| 8 Literaturverzeichnis | 29 Einträge | Hängender Einzug statt Handumbruch, Dell’Era, Titel-Schreibung |
| 9 Verzeichnisse | Abb. 1–3 und Tab. 1–9 aktuell | Abkürzungsverzeichnis angekündigt, fehlt |
| Anhang | 4 bis 11 fertig | Anhangsverzeichnis, Leitfaden (Anhang 1), Transkripte (Anhang 2 und 3) |
| Formalia | – | Datum auf der Titelseite, Kommentare (12 Stränge) und Markierungen (253 Stellen) entfernen, KI-Angabe mit Timo klären |

### 3.1 Gliederung Kapitel 4 und 5

| Unterkapitel | Inhalt | Artefakte |
|---|---|---|
| 4.1 Methodisches Vorgehen im Überblick | Dell’Era (Reihenfolge), Carlgren über Salzmann (Praktiken), De Angeli (drei Phasen), al Mrayat (Quellen), Druin/Scaife über Pan (Informanten) | Tab. 2 |
| 4.2 Stakeholderanalyse | sieben Rollen, drei kritisch | Tab. 3 |
| 4.3 Personas & Nutzungsszenario | Persona A „Der Etablierte“ (Thomas, 46), Persona B „Die Neue“ (Lena, 22) | Anhang 4, 5, 6 |
| 4.4 Gestaltungsansatz & Grundfunktionen | Lernziel, fünf Prinzipien (4.4.1), Tab. 4 (4.4.2), sechs Grundfunktionen (4.4.3–4.4.8) | Tab. 4 |
| 4.5 Use Cases & User Storys | US1 bis US9, Use Case „Szenario bearbeiten“ | Tab. 5, Anhang 7 |
| 4.6 Anforderungen & Priorisierung | F01–F15, NF01–NF13, zwei Zielkonflikte | Tab. 6, Tab. 7 |
| 5.1 Konzeptüberblick | ohne Benutzerkonten, lokale Speicherung plus Zählwert, Trennung Inhalt/Vereinskontext | – |
| 5.2 Ablaufmodellierung eines Szenariodurchlaufs | UML-Aktivitätsdiagramm | Abb. 1 |
| 5.3 Strukturmodellierung als konzeptionelles Klassendiagramm | 13 Klassen in drei Bereichen | Abb. 2, Anhang 8 |
| 5.4 Ausgestaltung der Szenarien und Reflexionsimpulse | Szenariovorlage, zehn Szenarien, drei ausgearbeitet | Tab. 8, Tab. 9, Anhang 9–11 |
| 5.5 Oberflächenkonzeption des Prototyps | drei Smartphone-Ansichten | Abb. 3 |

Das ursprünglich geplante Unterkapitel 5.6 „Einbindung in den Vereinsalltag“ ist entfallen. Die Punkte dazu (Betreiberrolle verteilen, Schutzkonzept auf Eindeutigkeit prüfen) stehen jetzt in Kap. 6.

**Kapitel 5 und die Anforderungen:**

| Unterkapitel | Bildet ab |
|---|---|
| 5.1 Konzeptüberblick | NF04, NF05, NF13 |
| 5.2 Ablauf (Abb. 1) | F03, F05, F06, F10, F11, F12 |
| 5.3 Klassendiagramm (Abb. 2, Anhang 8) | F01–F13, NF04, NF05, NF13; F15 bewusst nicht im Modell, weil Systemfunktion |
| 5.4 Szenarien (Tab. 8, 9, Anhang 9–11) | F01, F03, F04, F07, NF06, NF09 |
| 5.5 Wireframes (Abb. 3) | F02, F06–F10, F14, NF08 |

### 3.2 Tabellen und Abbildungen

| Nr. | Titel (verkürzt) | Kapitel |
|---|---|---|
| Tab. 1 | Manipulationsstrategien und Phasen des Grooming-Modells | 3.5.1 |
| Tab. 2 | Design-Thinking-Praktiken nach Carlgren et al. und ihre Umsetzung | 4.1 |
| Tab. 3 | Stakeholder mit Interesse und Einfluss | 4.2 |
| Tab. 4 | Gestaltungsgrundlagen und Zuordnung zu den Grundfunktionen | 4.4.2 |
| Tab. 5 | User Storys aus Sicht von Persona A | 4.5 |
| Tab. 6 | Funktionale Anforderungen mit Priorisierung, Quelle und Grundfunktion | 4.6 |
| Tab. 7 | Nichtfunktionale Anforderungen mit Priorisierung und Quelle | 4.6 |
| Tab. 8 | Bestandteile eines Szenarios mit Zuordnung zum Klassenmodell | 5.4 |
| Tab. 9 | Szenarien mit Themenfeld, Trainingsphase und inhaltlicher Grundlage | 5.4 |
| Abb. 1 | Szenariodurchlauf als UML-Aktivitätsdiagramm (Notation nach Glinz et al., 2024, S. 70–71) | 5.2 |
| Abb. 2 | Konzeptionelles Klassendiagramm (Notation nach Glinz et al., 2024, S. 67) | 5.3 |
| Abb. 3 | Wireframes (Detaillierungsgrad nach Glinz et al., 2024, S. 82) | 5.5 |

Kopfzeilenwiederholung bei mehrseitigen Tabellen: Tab. 6 und 7 eingestellt. Tab. 4 und die Tabelle in Anhang 8 laufen über zwei Seiten ohne wiederholte Kopfzeile. In Tab. 6 bricht die Zeile F11 über die Seite.

---

## 4 Offene Punkte

Kurzfassung. Die vollständige Liste mit Fundstellen steht in claude/abgabe-checkliste.md, dieselben Punkte als Karten mit Priorität im Notion-Board (AA = muss inhaltlich, A = muss formal oder Konsistenz, B = sollte, C = Feinschliff).

### 4.1 Inhaltlich vor Abgabe (AA)

- [ ] **Kap. 1, Ohlert et al.:** Differenzierung Gesamtprävalenz/schwere Formen und Hinweis auf Kaderathleten (Kommentar 5)
- [ ] **Kap. 3.4, Sailer & Homner:** Satz zum Wettbewerb ist weiterhin falsch. Signifikant war nur der verhaltensbezogene Vergleich, und der lief gegen keine soziale Interaktion. Die Notion-Karte dazu steht auf Erledigt, im Text ist es noch nicht korrigiert (Kommentar 29)
- [ ] **Palzkill und Brackenridge & Fasting:** zwei verschiedene Ängste. Palzkill (2021, S. 198): einen anderen zu Unrecht zu beschuldigen. Brackenridge & Fasting (2005, S. 19): selbst fälschlich beschuldigt zu werden. Betroffen sind 3.1.4 (Kommentar 22), 3.2, Tab. 4 und Kap. 6
- [ ] **3.2 an die Transkripte:** App-Idee kam vom Interviewer, nicht vom Kinderschutzbeauftragten; Einzelgespräche ohne Dritte stehen so nicht im Transkript
- [ ] **Kap. 6:** dritter Schritt für den Post SV fehlt, Ausblick fehlt
- [ ] **Anhang:** Verzeichnis, Leitfaden (Anhang 1), Transkripte (Anhang 2 und 3) mit bereinigten Metadaten
- [ ] **Tab. 9:** „Ohlert et al. (2018, S. ???)“

### 4.2 Konsistenz (A)

- [ ] Grundfunktion 4 heißt „Verzweigung“, obwohl der Fortgang nicht von der Wahl abhängt
- [ ] Tab. 4: Zeile zu den drei Eskalationsebenen ist seit 01.09. überholt
- [ ] F12: Quelle Interview T statt K; F15 und NF12 doppeln „ohne technische Kenntnisse“
- [ ] Anhang 8: Durchlauf verweist auf F15, gemeint ist F14
- [ ] Tab. 9 und Steckbriefe in Anhang 9–11 nennen unterschiedliche Themenfelder
- [ ] Abb. 3: Szenariotitel, „Punkt 2 von 4“, Merkmalszahl und „Antwort ändern“ passen nicht zu Tab. 8/9 und Use Case
- [ ] Kap. 7 nennt eine Empfehlung und den Erwachsenen-Befund, die in Kap. 6 nicht stehen
- [ ] 4.6 nennt „unabhängig voneinander“ als Priorisierungskriterium, Kap. 6 stellt fest, dass die Interviews nicht unabhängig waren
- [ ] Tab. 4 und Anhang 8: Kopfzeile wiederholen; Tab. 6: Zeilen nicht über Seiten trennen

### 4.3 Kommentare in der Arbeit

Zwölf Stränge in der Fassung vom 16.10., einer erledigt.

| Kommentar | Stelle | Stand | Empfehlung |
|---|---|---|---|
| 5 | Kap. 1, Ohlert | offen | Vorschlagstext aus dem Kommentar übernehmen, Kaderathleten ergänzen |
| 10/11 | Kap. 2, Vier-Ebenen-Modell | offen | behalten, auf einen Satz kürzen; 3.2 und Kap. 6 bauen darauf auf |
| 20 | 3.1.3, Phasenmodell | erledigt | nur löschen |
| 22 | 3.1.4, Handlungssicherheit | offen | Absatz umbauen: zwei Seiten der Unsicherheit, nicht „dieselbe Sorge“; Einstieg nicht beim Verdachtsfall |
| 25 | 3.3, Blending-Satz | offen | vereinfachen oder streichen (4.4.1 sagt dasselbe) |
| 27 | 3.4, Deterding-Zerlegung | offen | kürzen, nur die Abgrenzung „Elemente statt Spiel“ wird später gebraucht |
| 28 | 3.4, Trennlinie Gamification | offen | streichen, Einordnung macht 4.4 |
| 29/30 | 3.4, Sailer & Homner | offen | korrigieren, nicht streichen (trägt F14 und Tab. 4) |
| 42 | 4.1, Dell’Era und Carlgren | offen | Dell’Era-Aufzählung streichen, Reihenfolge-Argument behalten |
| 48 | 4.4, Stickel | offen | Studie in Kap. 3 vorstellen, in 4.4 nur Rückverweis |
| 50–52 | 4.4.1, fünftes Prinzip | offen | Variante A ohne Uuugh-Satz, De Angeli als Halbsatz zu „keine eigenen Erlebnisse offenlegen“ |
| 57/58 | 4.4.4, Dopplung | offen | behalten, roten Schlusssatz streichen, Beleg zum Kontinuum ergänzen |

### 4.4 Formalia

- [ ] Literaturverzeichnis: ein Absatz je Eintrag, hängender Einzug 0,5 cm (aktuell Handumbruch und 1,25 cm)
- [ ] Abkürzungsverzeichnis anlegen oder Überschrift von Kap. 9 anpassen
- [ ] Tag der Einreichung auf der Titelseite
- [ ] Kommentare und Markierungen entfernen, Verzeichnisse am Schluss aktualisieren

### 4.5 Mit Timo Engler klären

Laut Notion-Karte „Mit Timo abklären“ erledigt: Titelblatt Bachelor of Science, Gendern, Seitenumfang über Limit, „Notation in Anlehnung an“ in Abbildungsunterschriften, Zitation „(Interview T)“.

Noch offen:

- [ ] KI-Nutzung: wo und in welcher Form angeben (Richtlinien S. 11; die Selbstständigkeitserklärung ist nur ein Haken beim Upload)
- [ ] Schnitt Kap. 4/5, Gewicht der technischen Umsetzung gegenüber den Designentscheidungen, Auswahl der Wireframes (Fragen aus der Notion-Karte, nicht als erledigt markiert)

### 4.6 Seit 01.09.2026 erledigt

- [x] Toter Verweis auf Kap. 4.4.9: 4.6 verweist nicht mehr darauf, die bewussten Auslassungen stecken in NF09, NF10, F14 und den Prinzipien
- [x] Tabellenverzeichnis vollständig (Tab. 1–9), Abbildungsverzeichnis angelegt
- [x] Zitierform NF13, Tippfehler „Kan“
- [x] Platzhalter `[Jahr]` und `S.???` aufgelöst, bis auf Tab. 9
- [x] Glinz et al. als Glinz, van Loenhoud, Staal & Bühne (2024), Version 1.2.0, Erstnennung in 4.2 ausgeschrieben
- [x] Seitenzahlen Stickel et al. in NF01/NF02
- [x] GF-Spalte in Tab. 6 eingeführt (Vorschlag aus dem alten Abschnitt 4.5)
- [x] Trainingsphase entschieden: Attribut der Klasse Szenario und Spalte in Tab. 9, keine Anforderung
- [x] Elternkommunikation: keine eigene Anforderung, inhaltlich über Szenario 3 („Der zuverlässige Co-Trainer“) und das Themenfeld in Tab. 9 abgedeckt
- [x] Frühe Grooming-Phase: keine eigene Anforderung; Kap. 6 führt sie als Beitrag. In allen drei ausgearbeiteten Szenarien sind die grenzverletzenden Merkmale nicht eingetreten
- [x] Klassendiagramm: Situationsmerkmal als eigene Klasse, Mindestanzahl im Einschätzungsspiegel (F11), Nutzerprofil und Trainerteam entfallen
- [x] Literaturverzeichnis angelegt, Kapitel 5 bis 7 geschrieben
- [x] Ohlert-Lesart festgelegt: 37,6 % Lebenszeitprävalenz, davon 11,2 % schwere Formen
- [x] SicherImSport-Zahlen als Rulofs et al. (2022; zitiert nach Schmitz et al., 2025, S. 75–76), ohne Stichprobengröße
- [x] Brackenridge & Fasting als Autorenmanuskript mit [elektronische Quelle] zitiert
- [x] „Universitätsklinikum Ulm (2025)“ hat sich als Krauß et al. (2025) aufgelöst
- [x] Umfang über 50 Seiten mit Timo Engler abgestimmt

---

## 5 Empirische Basis

Zwei leitfadengestützte Experteninterviews, Juli 2026, beide beim Post SV Nürnberg. Ausgewertet in Kap. 3.2, thematisch und ohne Kategoriensystem. Keine repräsentative Erhebung, sondern zwei Perspektiven auf denselben Verein.

| | Interview T | Interview K |
|---|---|---|
| Rolle | Trainer im Trainingsbetrieb | Kinderschutzbeauftragter |
| Datum | 20.07.2026 (im Transkript vertippt als „20.0.2026“) | 23.07.2026 |
| Dauer | 41:09 Minuten | ca. 30 Minuten, exakte Dauer im Transkript noch offen |
| Hintergrund | seit März 2026 im Verein, Erfahrung überwiegend aus dem früheren Verein | Datenschutzbeauftragter seit 2018, Compliance-Ombudsmann seit 2022/23, Schutzkonzept selbst entwickelt |

Reihenfolge und Abhängigkeit: Interview T kam zuerst. Inhalte daraus gingen als „Konsens bisher“ in Interview K ein. In beiden Gesprächen hat der Interviewer die App-Idee vorgestellt, bei K vor der ersten Leitfadenfrage, bei T vor der Frage nach Anforderungen.

### Interview K

- Post SV als Breitensportverein, Abgrenzung vom Leistungssport
- Schutzkonzept vollständig selbst entwickelt, bewusst strikt: „wenn ich kein Ziel definiere, das auch etwas höher hängt, dann setzt es vielleicht auch keiner richtig um“. Genau diese Strenge stößt auf Widerstand.
- „bei den Trainern sind definitiv Lücken. Bei den Trainern ist aber auch der Bedarf hoch, sich selbst zu schützen“
- Abwehrhaltung aus Unwissenheit: „Ich kann ja gar nichts mehr machen, was darf ich denn überhaupt noch sagen“
- Bedarf ist ein Selbstbewusstseins-, kein Wissensproblem
- „jeder zweite Trainer, wenn nicht sogar mehr“ würde auf Zusatzpflichten abwehrend reagieren; Jüngere sind offener, „alte, gestandene Haudegen“ schwerer
- Greift die App-Idee auf; schlägt selbst eine prozentuale Rückmeldung vor, lehnt richtig/falsch ab („Sender-Empfänger-Geschichte“)
- Fordert mehr Kontext in Situationsbeschreibungen (Altersunterschied, Vorgeschichte) → F04
- Grenzen: wirkt nur bei Personen ohne schädigende Absicht, ausschließlich präventiv; Warnung, dass Kundige „noch perfider“ werden könnten
- Gelungene Prävention: Grenzüberschreitungen anderer werden gemeldet statt still geduldet
- Vorschlag einer Vorab-Abfrage bei den Trainern, welche Situationen sie beschäftigen (für Kap. 6, Ausblick)

**Situationen:** Umkleide mit Eltern im Raum · Hausrecht eines jungen Trainers gegenüber einem langjährigen Mitglied · Wortwahl bei der Auswechslung

### Interview T

- Wendet sich bei Unsicherheit an Trainerkollegen derselben Altersklasse, nicht an eine benannte Ansprechperson
- Fühlt sich nach eigener Aussage „auf jeden Fall“ sicher; die Handlungsunsicherheit ist damit nur als Fremdeinschätzung belegt
- Über sexualisierte Gewalt wird zu selten gesprochen, weil es „einfach Tabuthema noch ist“
- Im früheren Verein bei Einzelgesprächen nach Möglichkeit eine neutrale dritte Person dabei, nicht bei lange bekannten Spielern
- Wünsche an die App: Feedback mit erkennbarer Herkunft, keine Vorschriften, übersichtlich, Farben für angemessen/nicht angemessen, Fortschritt darf beim Schließen nicht verloren gehen (→ F12)
- Wünscht eine App, die „mitlernt“; im Konzept nicht aufgegriffen (keine Benutzerkonten)

**Situationen:** körpernahes Vormachen · Einzelgespräche nach dem Training · Teambuilding, bei dem die Gruppe unerwartet schrumpft · Trainer in Mannschaften des anderen Geschlechts

### Wie die Interviews in die Arbeit eingehen

Die beiden Befragten wirken als **Informanten** im Sinne von Druin (2002; zitiert nach Pan et al., 2026, S. 456), also als Beteiligte, die an ausgewählten Punkten gezielt beitragen, nicht als Design Partner. Begründet wird das mit der Zeitknappheit im Ehrenamt. In der Systematik von al Mrayat et al. (2013) sind sie die **konversationelle** Quelle, neben der analytischen (Bestandsangebote und Forschungsstand) und der synthetischen (Nutzungsszenario, User Storys, Use Case).

---

## 6 Theoretische Bausteine

Umgesetzt in Tab. 4 (Kap. 4.4.2). Anforderungsnummern in aktueller Zählung (F01–F15, NF01–NF13).

| Quelle | Befund | Konsequenz |
|---|---|---|
| Ritterfeld & Weber (2006; zitiert nach Breuer & Bente, 2010, S. 13) | Drei Paradigmen: Reinforcement, Motivation, Blending | Blending: Bewältigung der Situation ist selbst die Übung |
| Breuer & Bente (2010, S. 12) | Interaktivität erzeugt Selbstwirksamkeit; narrative Interaktionsebene | Fester Fortgang, Wiederholbarkeit, kein Abbruch (F05, F13) |
| Breuer & Bente (2010, S. 14, 16) | Optimales Maß an Unterhaltung; Pull schlägt Push | Spielelemente untergeordnet (NF10); Rückmeldung abrufbar (F06) |
| Breuer & Bente (2010, S. 15) | Charsky & Mims: gemeinsame Besprechung eines Szenarios als Lerngelegenheit | Trägt Grundfunktion 5 |
| Wouters et al. (2013) | Lernerfolg besser, Motivation nicht; Gruppenspiel etwa dreifach; schematisch schlägt realistisch; kein Vorteil bei Erwachsenen | F10, NF07; Erwachsenen-Befund gehört in Kap. 6 |
| Ritterfeld et al. (2009, S. 694–696) | Interaktivität und Multimodalität wirken einzeln, aber kaum auf Prozesswissen | Entscheidungspunkte statt Wissensabfrage (F03) |
| Sailer & Homner (2020, S. 99–100) | Kompetitiv-kollaborativ schlägt keine soziale Interaktion, nur verhaltensbezogen | Prozentuale Rückmeldung statt Punktestand (F10, F14) |
| Tolks et al. (2020, S. 699–704) | Vier Serious-Game-Kriterien; Selbstbestimmungstheorie; Risiko der Überlagerung | Einordnung als Lernformat mit Serious-Game-Elementen; NF10 |
| Deterding et al. (2011, S. 9–13) | Gamification = Elemente statt Spiel | Abgrenzung in 3.4 |
| Krauß et al. (2025, S. 13); Bittner et al. (2026, S. 337, 341) | Eulenkodex Detektion/Schutz/Aktion; Notausgang; Textlastigkeit als Limitation | Dreiteilige Rückmeldung (F06); Beratungszugang (F09); Textgrenze (NF06) |
| Schirrmacher GmbH (o. J.) | Skala grün bis rot; Timing als Lernziel; drei Kontaktebenen | Ampelstufe (F07). Die Kontaktebenen sind seit 01.09. nicht mehr Teil des Konzepts |
| Brackenridge & Fasting (2005, S. 3, 19) | Kontinuum; kontextabhängige Deutung; Trainer fürchten, selbst fälschlich beschuldigt zu werden | Abgestufte Einschätzung (F07); Kategorie Absichern; fester Fortgang (F05) |
| Palzkill (2021, S. 194–198) | Risikofaktoren; fünf Neutralisierungsstrategien; Beobachtende fürchten, andere zu Unrecht zu beschuldigen; Leitlinien im Verdachtsfall | Themenraster; ungünstige Optionen; Bewertungsmaßstab der Rückmeldung |
| Götzl et al. (2025, S. 276–280) | Beobachtet-Sein als stärkster hemmender Faktor; Kontakt zu den Eltern | Absichern als Transparenz; Szenario 3 |
| Rulofs (2024, S. 140–141) | Benannte Ansprechperson, Interventionsplan, externe Fachberatung | Zweiteilung F08 (vereinsintern) und F09 (extern) |
| Stickel et al. (2025, S. 2–5) | Größter Effekt bei Selbstwirksamkeit; Abbruch überwiegend aus Zeitmangel | Kurze Durchläufe (NF01, NF02). Studie noch in Kap. 3 vorstellen |
| Horch et al. (2024, S. 158–166, 177–178) | Vier Rollen der Mitglieder; Anreizstruktur des Ehrenamts; Personalisierung; Qualifikationsproblem | Stakeholder nach Rollen; Freiwilligkeit (NF11); Pflegeaufwand (F15, NF12) |

### 6.1 Methodische Quellen

| Quelle | Verwendung |
|---|---|
| Glinz, van Loenhoud, Staal & Bühne (2024), Version 1.2.0 | Stakeholder (S. 20–21, 90), Personas (S. 93–94), Szenarien (S. 108), User-Story-Schablone nach Cohn (S. 47), Use-Case-Vorlage (S. 48–49), Anforderungsarten (S. 11), Quelle als Attribut (S. 151), Verfolgbarkeit (S. 154–155), MoSCoW (S. 159), Zielkonflikte (S. 114–115), Erweiterbarkeit (S. 85), Notation Abb. 1–3 (S. 67, 70–71, 82), Validierung (S. 27) |
| al Mrayat et al. (2013) | Vier Erhebungskategorien; RE als iterativer Prozess |
| De Angeli et al. (2026) | Co-Discovery / Co-Design / Co-Evaluation; Risiko der Banalisierung; fiktionale Rahmung (NF09, in Prüfung, Kommentare 50–52) |
| Pan et al. (2026) / Druin (2002) / Scaife et al. (1997) | Informant Design; Fachpersonen in der frühen Phase |
| Carvalho et al. (2015) | Drei Aktivitäten mit eigenem Motiv (4.4.1); Zerlegung in Handlungsschritte (4.5); Komplexitätswarnung (NF03, NF06) |
| Dell’Era et al. (2025) | Problemraum vor Lösungsraum |
| Carlgren et al. (2016b; zitiert nach Salzmann, 2020, S. 27, 113–114) | Fünf Design-Thinking-Praktiken als Raster (Tab. 2) |
| Podsakoff et al. (2003, S. 887) | Mehrquellen-Argument, ausdrücklich als „one way“ |

### 6.2 Literaturverzeichnis

29 Einträge, Sekundärquellen nur über die Sekundärquelle aufgeführt. Am Original noch nicht bestätigt (Stand 18.09.): die vier Beiträge aus dem Sammelband Fegert et al. (2018), also Bange, Kölch & Fegert, Kliemann sowie Fegert, Kölch & Kliemann. Formale Baustellen siehe 4.4.

---

## 7 Das Konzept

### 7.1 Gestaltungsentscheidungen (Kap. 4.4)

**Einordnung:** szenariobasiertes digitales Lernformat mit Elementen des Serious-Game-Designs. Tolks’ Kriterien 1, 2 und 4 sind erfüllt, Kriterium 3 (Unterordnung des Inhalts unter den Unterhaltungsfaktor) bewusst nicht.

**Lernziel:** Handlungssicherheit im Umgang mit mehrdeutigen Situationen, nicht Faktenwissen.

**Fünf Gestaltungsprinzipien (4.4.1):** Blending-Paradigma · Trennung von Spiel-, Lern- und Instruktionsmotiv · Ausrichtung an Kompetenz, Autonomie und sozialer Eingebundenheit · Modelle bleiben im Hintergrund · erfundene statt realer Fälle, schematische Darstellung.

**Sechs Grundfunktionen (4.4.3 bis 4.4.8):**

1. **Szenariobasierte Entscheidungssituationen:** Ausgangslage, dann Entscheidungspunkte mit Leitfrage und genau drei Optionen, keine offensichtlich falsch; Themenfelder aus Palzkill, Safe Clubs und den Interviews
2. **Abgestufte Einschätzung:** Am Szenarioende werden die Merkmale der Situation eingeordnet, nicht die eigene Entscheidung; auch nicht eingetretene Merkmale, die die Kippschwelle markieren
3. **Dreiteilige Rückmeldung Erkennen, Absichern, Handeln:** Umdeutung des Eulenkodex; hängt am Entscheidungspunkt, nicht an der gewählten Option; erscheint auf Abruf
4. **„Verzweigung und Wiederholbarkeit“:** Fortgang festgelegt, unabhängig von der Wahl, kein Abbruch, erneut startbar. Die Bezeichnung passt nicht zum Inhalt und soll umbenannt werden
5. **Abgleich im Trainerteam:** Anteil je Handlungsoption, keine Rangfolge, keine Personenzuordnung; der Prototyp liefert nur den Anlass
6. **Information und Beratung auf Abruf:** Rückmeldungen auf Abruf; Ansprechpersonen am Szenarioende und Beratungsstelle jederzeit ohne Anforderung sichtbar

### 7.2 Funktionale Anforderungen (Tab. 6)

| Nr. | Anforderung, verkürzt | Prio | GF |
|---|---|---|---|
| F01 | Szenarien decken die Themenfelder ab, besonders mehrdeutige Situationen | Muss | 1 |
| F02 | Übersicht der Szenarien mit Themenfeld und Kurzbeschreibung, freie Auswahl | Muss | 1 |
| F03 | Ausgangssituation, mehrere Entscheidungspunkte, je Leitfrage und genau drei Optionen | Muss | 1 |
| F04 | Ausgangssituation nennt mindestens Altersgruppe, Ort und Vorgeschichte | Muss | 1 |
| F05 | Fortgang festgelegt, unabhängig von der Wahl | Muss | 4 |
| F06 | Fachliche Rückmeldung nach jeder Entscheidung abrufbar, gegliedert in Erkennen, Absichern, Handeln | Soll | 3 |
| F07 | Am Szenarioende Merkmale nach unbedenklich / klärungsbedürftig / grenzverletzend, inkl. nicht eingetretener | Muss | 2 |
| F08 | Am Szenarioende Ansprechpersonen und Meldewege des Vereins mit Namen und Kontaktweg | Muss | 6 |
| F09 | Offizielle Melde- und Beratungsstelle an jedem Punkt abrufbar | Soll | 6 |
| F10 | Nach allen Rückmeldungen Anteil je Handlungsoption, ohne Rangfolge, ohne Personenzuordnung | Muss | 5 |
| F11 | Hinweis bei zu wenigen Entscheidungen anderer, übrige Punkte regulär | Soll | 5 |
| F12 | Unterbrechen, Fortschritt auf dem Gerät, Fortsetzen am letzten Entscheidungspunkt | Muss | – |
| F13 | Abgeschlossene Szenarien erneut startbar | Kann | 4 |
| F14 | Übersicht über bearbeitete und offene Szenarien, ohne Punktestand und Bestenliste | Kann | – |
| F15 | Ansprechpersonen, Meldewege und Szenarien ohne technische Kenntnisse pflegbar | Soll | – |

Neun Muss, vier Soll, zwei Kann. Die frühere F14 (vertiefende Hintergrundinformationen) ist gestrichen, alle Nummern dahinter sind um eins gerückt.

### 7.3 Nichtfunktionale Anforderungen (Tab. 7)

| Nr. | Anforderung, verkürzt | Prio | Art nach Glinz |
|---|---|---|---|
| NF01 | Durchlauf höchstens fünf Minuten | Muss | Qualität (Leistung) |
| NF02 | Entscheidungen zeitlich unbegrenzt | Muss | Randbedingung |
| NF03 | Ohne Einführung, Schulung oder anleitende Person nutzbar | Muss | Qualität (Benutzbarkeit) |
| NF04 | Entscheidungen nicht auf einzelne Personen rückführbar | Muss | Qualität (Datenschutz) |
| NF05 | Fortschritt und eigene Entscheidungen nur auf dem Endgerät; zentral nur ein Zählwert je Option; keine personenbezogenen Daten | Muss | Randbedingung (Datenschutz) |
| NF06 | Textumfang begrenzt, Sprache des Trainingsalltags, keine Fachbegriffe und Modelle | Muss | Qualität (Benutzbarkeit) |
| NF07 | Darstellung schematisch | Muss | Randbedingung |
| NF08 | Ohne Anmeldung und Installation im Browser auf dem Smartphone nutzbar | Soll | Qualität / Randbedingung |
| NF09 | Szenarien erfunden, aber realitätsnah; keine realen Vorfälle | Muss | Randbedingung |
| NF10 | Spielerische Elemente untergeordnet, keine Richtig-falsch-Bewertung | Muss | Randbedingung |
| NF11 | Freiwillig, ohne Nachweis-, Abschluss- oder Fristenpflicht | Muss | Randbedingung |
| NF12 | Pflege der Vereinsangaben ohne technische Kenntnisse, wenige Minuten je Aktualisierung | Kann | Qualität (Wartbarkeit) |
| NF13 | Szenarienbestand erweiterbar ohne Änderung an Aufbau oder Ablauf | Soll | Qualität (Erweiterbarkeit) |

Zehn Muss, zwei Soll, ein Kann. Die Spalte „Art nach Glinz“ steht nicht in der Arbeit, sie ist eine Arbeitshilfe für das Kolloquium.

### 7.4 Zielkonflikte

| Konflikt | Stand |
|---|---|
| Inhaltliche Tiefe (F06, F07) gegen Bearbeitungsdauer und Textumfang (NF01, NF06) | In 4.6 gelöst über Abrufbarkeit |
| Abgleich im Trainerteam (F10) gegen Nicht-Rückführbarkeit (NF04) | In 4.6 über die Mindestanzahl je Entscheidungspunkt (F11) beantwortet; der Schwellenwert lässt sich laut Kap. 6 erst im Betrieb festlegen |
| Anzeige der Ansprechpersonen (F08) gegen Pflege durch eine unbesetzte Betreiberrolle (F15, NF12) | Nicht in 4.6, sondern in Kap. 6: Betreiberrolle vor der Einführung auf mindestens zwei Personen verteilen |

### 7.5 Entscheidung vom 01.09.2026: Eskalationsebenen gestrichen

Die Staffelung der Ansprechpersonen nach drei Eskalationsebenen ist aus dem Konzept entfernt. Einzige Quelle war die Schirrmacher GmbH (o. J.), Interview K enthält dazu nichts, Ebene 1 lässt sich nicht als Kontakt pflegen, und das Lernziel „angemessene Ebene wählen“ gehört zur Intervention. Erhalten bleibt die Zweiteilung vereinsintern (F08) gegen extern (F09), belegt über Rulofs (2024, S. 140–141).

Umsetzung: F08, Kap. 4.4.8, Anhang 7 und das Klassendiagramm sind bereinigt. **Noch offen:** die Zeile in Tab. 4 unter Grundfunktion 6.

### 7.6 Ergebnisse aus Kapitel 5

**Konzeptüberblick (5.1).** Drei Festlegungen ergeben sich aus dem Zusammenspiel der Anforderungen: keine Benutzerkonten, Daten möglichst auf dem Endgerät mit einem einzigen vereinsweiten Zählwert je Entscheidungspunkt und Option, Trennung der Inhalte vom Einsatzkontext. Gepflegt werden müssen nur Vereinsangaben und Szenarienbestand.

**Ablauf (5.2, Abb. 1).** Aktivitätsdiagramm mit Rückführung auf den Verzweigungsknoten oberhalb des Entscheidungspunkts; von den Handlungsoptionen geht keine eigene Kante aus. Zwei Abweichungen: Unterbrechung mit Speichern, Hinweis bei zu wenigen Entscheidungen anderer.

**Struktur (5.3, Abb. 2, Anhang 8).** 13 Klassen in drei Bereichen, Diagramm ohne Attribute, Attribute und Anforderungsbezug in Anhang 8. Details in Abschnitt 8.

**Szenariovorlage (5.4, Tab. 8).**

| Bestandteil | Vorgabe | Klasse |
|---|---|---|
| Titel | kurz, situationsbezogen | Szenario |
| Themenfeld | eines der Risikofelder | Themenfeld |
| Trainingsphase | vor, im oder nach dem Training, in der Übersicht angezeigt | Szenario |
| Kurzbeschreibung | ein bis zwei Sätze, ohne den Verlauf vorwegzunehmen | Szenario |
| Ausgangssituation | mindestens Altersgruppe, Ort, Vorgeschichte | Szenario |
| Entscheidungspunkte | mehrere, feste Reihenfolge, Situationstext höchstens vier Sätze | Entscheidungspunkt |
| Leitfrage | eine je Punkt, zweite Person | Entscheidungspunkt |
| Handlungsoptionen | genau drei, je ein Satz, keine offensichtlich falsch | Handlungsoption |
| Fachliche Rückmeldung | je Punkt, Erkennen/Absichern/Handeln, höchstens drei Sätze je Abschnitt | Rückmeldung |
| Situationsmerkmale | zehn bis zwölf je Szenario, jede Stufe mindestens zweimal | Situationsmerkmal, Ampelstufe |

Die drei ausgearbeiteten Szenarien halten die Vorgaben ein (11, 12 und 11 Merkmale, je drei grenzverletzende, keines davon eingetreten).

**Szenarienbestand (5.4, Tab. 9).**

| Szenario | Themenfeld (Tab. 9) | Phase | ausgearbeitet |
|---|---|---|---|
| Vor dem Heimspiel | Umkleideräume und Duschen | vor | Anhang 9 |
| Die Hilfestellung | Körperkontakt und Hilfestellung | im | Anhang 10 |
| Der zuverlässige Co-Trainer | Elternkontakt und Autofahrten | nach | Anhang 11 |
| Die Auswechslung | Sprache und Umgangston | im | – |
| Das Gespräch nach dem Abpfiff | Einzelgespräche und Einzeltraining | nach | – |
| Die Zimmereinteilung | Auswärtsfahrten, Turniere und Übernachtungen | nach | – |
| Die Nachricht am Abend | Digitale Kommunikation | nach | – |
| Der alte Bekannte in der Halle | Gewachsene Gewohnheiten und Hausrecht | vor | – |
| Der Hinweis im Trainerteam | Beobachtungen ansprechen | vor | – |
| Mobbing im Team | Grenzverletzungen zwischen Kindern und Jugendlichen | im | – |

**Oberfläche (5.5, Abb. 3).** Drei Smartphone-Ansichten im Hochformat: Übersicht, Entscheidungspunkt (Rückmeldung unter den Optionen), Auswertung (Merkmale, Einschätzungsspiegel, Ansprechpersonen). Beratungszugang in der Fußzeile jeder Ansicht.

### 7.7 Festlegungen seit 01.09.2026

- Keine Benutzerkonten, keine Pseudonyme, keine serverseitigen Einzeldatensätze. Fortschritt und Entscheidungen lokal, zentral nur Zähler je Entscheidungspunkt und Option
- Fachliche Rückmeldung hängt am Entscheidungspunkt, nicht an der Handlungsoption
- Situationsmerkmal als eigene Klasse mit Ampelstufe und Kennzeichen „eingetreten“
- Wertevorrat Groomingphase gestrichen; Trainingsphase als Attribut des Szenarios
- F14 alt (vertiefende Hintergrundinformationen) gestrichen
- Unterkapitel 5.6 entfallen, Inhalte nach Kap. 6
- Bekannte Schwäche der lokalen Speicherung (in Kap. 6): Gerätewechsel oder gelöschte Browserdaten setzen den Fortschritt zurück, damit sind Mehrfachzählungen nicht auszuschließen

---

## 8 Klassendiagramm (Abb. 2, Anhang 8)

13 Klassen in drei Bereichen. Ersetzt das Domänenmodell vom 31.08. mit 16 Klassen (Nutzerprofil, Trainerteam, Groomingphase und Trainingsphase als Klassen sind entfallen, Situationsmerkmal ist neu).

**Inhalt** (redaktionell gepflegt): Szenario, Themenfeld, Situationsmerkmal, Ampelstufe «Wertevorrat», Entscheidungspunkt, Rückmeldung, Handlungsoption.

**Nutzung** (entsteht beim Bearbeiten): Durchlauf «lokal», Entscheidung «lokal», Einschätzungsspiegel «gemeinsam».

**Vereinskontext** (beim Einsatz hinterlegt): Verein, Ansprechperson, Hilfsangebot.

Die Trennung des Vereinskontexts von den Inhalten geht auf NF13 zurück und ist das Argument für die Übertragbarkeit auf andere Vereine.

```mermaid
classDiagram
    direction LR

    class Szenario {
        titel
        kurzbeschreibung
        ausgangssituation
        trainingsphase
    }
    class Themenfeld {
        bezeichnung
        herkunft
    }
    class Situationsmerkmal {
        beschreibung
        stufe
        eingetreten
    }
    class Ampelstufe {
        <<Wertevorrat>>
        unbedenklich
        klärungsbedürftig
        grenzverletzend
    }
    class Entscheidungspunkt {
        reihenfolge
        situationstext
        leitfrage
    }
    class Rückmeldung {
        erkennen
        absichern
        handeln
    }
    class Handlungsoption {
        text
    }
    class Durchlauf {
        <<lokal>>
        status
        fortschritt
        begonnenAm
        abgeschlossenAm
        gezählt
    }
    class Entscheidung {
        <<lokal>>
    }
    class Einschätzungsspiegel {
        <<gemeinsam>>
        anzahlProOption
        anteilProOption
        mindestanzahl
    }
    class Verein {
        name
    }
    class Ansprechperson {
        name
        funktion
        kontaktweg
    }
    class Hilfsangebot {
        bezeichnung
        kontaktweg
        erreichbarkeit
    }

    Szenario "*" --> "1" Themenfeld : behandelt
    Szenario "1" *-- "1..*" Situationsmerkmal : weist auf
    Szenario "1" *-- "2..*" Entscheidungspunkt : gliedert sich in
    Situationsmerkmal ..> Ampelstufe
    Entscheidungspunkt "1" *-- "1" Rückmeldung : trägt
    Entscheidungspunkt "1" *-- "3" Handlungsoption : stellt zur Wahl

    Durchlauf "*" --> "1" Szenario : bearbeitet
    Durchlauf "1" *-- "*" Entscheidung : protokolliert
    Entscheidung "*" --> "1" Handlungsoption : wählt
    Entscheidung ..> Einschätzungsspiegel : erhöht
    Einschätzungsspiegel "*" --> "1" Entscheidungspunkt : gilt für
    Einschätzungsspiegel "*" --> "1" Verein : gilt im
    Durchlauf "*" --> "1" Verein : findet statt im
    Durchlauf ..> Hilfsangebot : ruft auf
    Durchlauf ..> Ansprechperson : zeigt

    Verein "1" *-- "1..*" Ansprechperson : benennt
```

| Klasse | Bereich | Bedeutung | Anforderung |
|---|---|---|---|
| Szenario | Inhalt | Zusammenhängende Situationsfolge aus dem Trainingsalltag | F01–F04, NF09 |
| Themenfeld | Inhalt | Risikofeld, dem ein Szenario zugeordnet ist | F01, F02 |
| Entscheidungspunkt | Inhalt | Stelle, an der die Situation anhält | F03, F05 |
| Handlungsoption | Inhalt | Eine der drei Reaktionsmöglichkeiten | F03, F13 |
| Rückmeldung | Inhalt | Fachliche Einordnung eines Entscheidungspunkts | F06 |
| Situationsmerkmal | Inhalt | Merkmal des Szenarios mit Einstufung | F07 |
| Ampelstufe | Inhalt | Wertevorrat der drei Stufen | F07 |
| Durchlauf | Nutzung | Eine Bearbeitung, nur auf dem Endgerät | F12, F13, F14, NF04, NF05 (in Anhang 8 steht noch F15) |
| Entscheidung | Nutzung | Gewählte Option; erhöht beim Abschluss den Zähler, ohne übertragen zu werden | F10, NF04, NF05 |
| Einschätzungsspiegel | Nutzung | Vereinsweiter Zähler je Entscheidungspunkt und Option | F10, F11 |
| Verein | Vereinskontext | Einsatzkontext und Bezugsgruppe der Anteilswerte | F10, NF13 |
| Ansprechperson | Vereinskontext | Vereinsintern benannte Person mit Meldeweg | F08 |
| Hilfsangebot | Vereinskontext | Überregionale, vereinsunabhängige Beratungsstelle | F09 |

F15 ist bewusst nicht im Modell: Die Pflegbarkeit ist eine Systemfunktion, kein fachlicher Gegenstand.

---

## 9 Konventionen

- Interviews werden als **Interview K** (Kinderschutzbeauftragter) und **Interview T** (Trainer) zitiert, niemals mit Klarnamen
- Sekundärzitate durchgängig als „zitiert nach“ mit Semikolon; ins Literaturverzeichnis nur die Sekundärquelle
- Mehrautorige Quellen bei der Erstnennung ausschreiben (drei bis fünf Autoren), ab sechs Autoren immer „et al.“; bei Wiederholung darf nur das Jahr entfallen, nicht der Name
- Unterkapitel nur, wenn mindestens ein weiteres auf derselben Ebene folgt; maximal drei Gliederungsebenen
- Das Ergebnis heißt durchgehend „Prototyp“, nicht „App“ oder „Spiel“
- Anforderungen werden mit Fnn und NFnn referenziert, Grundfunktionen über die Kapitelnummer
- Belege werden vor der Verwendung am Original geprüft
- Antworten zur Arbeit stützen sich auf die aktuelle Word-Fassung im Projektspeicher, nicht auf diese Doku (Anweisung in Notion)
- Diese Dokumentation führt dieselbe Nummerierung wie die Arbeit. Bei jeder Änderung an Tab. 6 oder Tab. 7 sind 3.1, 7.2, 7.3, 7.4 und Abschnitt 8 mitzuziehen

**Farbmarkierungen in der Word-Datei** (Legende aus Notion):

| Notion | Markierung in Word | Bedeutung | Anzahl am 16.10. |
|---|---|---|---|
| Rot | rot | vielleicht rausnehmen oder kürzen | 13 |
| Blau | türkis | Zitation überprüfen | 105 |
| Gelb | gelb | überprüfen | 26 |
| Lila | pink | Schreibstandard mit Richtlinien abgleichen | 109 |
| Grün | – | umformulieren | 0 |

---

## 10 Änderungsprotokoll

| Datum | Änderung |
|---|---|
| 24.08.2026 | Dokumentation angelegt. Gliederung Kapitel 4 beschlossen, Reihenfolgekonflikt mit Kapitel 2 behoben, Unterkapitel zur Erhebungsmethodik auf Weisung von Timo Engler gestrichen. Domänenmodell entworfen. Vier fehlende Anforderungen identifiziert. |
| 25.08.2026 | Quellen für Kapitel 4 gesichtet. Kapitel 4 als Rohfassung geschrieben. Tab. 2 und Tab. 3 ergänzt. Rulofs-Zitierweise und Herkunft von „hard fun“ geklärt. Fehler zu Sailer & Homner in Kapitel 3.4 gefunden. Selbstbestimmungstheorie als fünftes Gestaltungsprinzip ergänzt. Rückmeldungskategorien auf Erkennen, Absichern, Handeln umbenannt. |
| 26./27.08.2026 | Kapitel 4 vollständig ausgearbeitet: Stakeholderanalyse, Personas und Nutzungsszenario, User Storys, Use Case, Tab. 6 und Tab. 7, Zielkonflikte. Grundfunktionen zu 4.4.3 bis 4.4.8 umgebaut. Grundfunktion 2 auf die Merkmale der Situation umgestellt. |
| 27.08.2026 | Dokumentation überarbeitet. Glinz et al. (IREB, Version 1.2.0) als Quelle aufgenommen, schließt alle offenen RE-Belegstellen. Folgefehler der Überarbeitung und Lücken in der Spezifikation dokumentiert. |
| 01.09.2026 | Nummerierung an die Arbeit angeglichen (F01–F16, NF01–NF13). Eskalationsebenen aus F08 gestrichen (Abschnitt 7.5). Abschnitt zur Quellenspalte in Tab. 6 und Tab. 7 ergänzt. US9 und Notiz in 5.3 als erledigt markiert. |
| 17.10.2026 | **Doku auf die Fassung vom 16.10. gebracht.** Kapitelstand: Kapitel 1 bis 7 geschrieben, Kapitel 5 mit 5.1 bis 5.5 (5.6 entfallen), Tab. 8 und 9, Abb. 1 bis 3, Anhang 8 bis 11. Nummerierung F01–F15 nach Streichung der alten F14 nachgezogen (Abschnitte 6, 7.2, 7.4, 8). Abschnitt 4 neu: offene Punkte als Kurzfassung mit Verweis auf claude/abgabe-checkliste.md und das Notion-Board, Kommentartabelle, erledigte Punkte seit 01.09. Argumentationskette korrigiert (81 statt 91 Prozent, Ohlert-Befund differenziert, Begründung des Widerstands nach Interview K). Empirische Basis um Daten, Reihenfolge, Herkunft der App-Idee und weitere Aussagen aus Interview T ergänzt. Palzkill und Brackenridge & Fasting in Abschnitt 6 getrennt. Neuer Abschnitt 7.6 zu den Ergebnissen aus Kapitel 5 und 7.7 zu den Festlegungen seit 01.09. Abschnitt 8 durch das aktuelle Klassendiagramm mit 13 Klassen ersetzt. Farblegende der Markierungen in Abschnitt 9. Umfang und Abgabetermin im Steckbrief. Neu gefunden: Kopfzeilenwiederholung fehlt bei Tab. 4 und Anhang 8, Zeile F11 bricht über die Seite. |
