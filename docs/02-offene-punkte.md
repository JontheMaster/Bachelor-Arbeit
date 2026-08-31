# Offene Punkte

Ausgekoppelt aus der [Projektdokumentation](projektdokumentation.md). Stand 27.08.2026. Sortiert nach Dringlichkeit: 4.1 sind Folgefehler der Kapitel-4-Überarbeitung und schnell behoben.

### 4.1 Sofort zu erledigen — Folgen der Überarbeitung von Kapitel 4

Diese vier Punkte sind durch die Ausarbeitung vom 26./27.08. neu entstanden. Sie sind schnell zu beheben, fallen bei der Korrektur aber sofort auf.

- [ ] **Toter Verweis auf Kapitel 4.4.9.** Kapitel 4.6 begründet den Wegfall der MoSCoW-Stufe „Won't have this time" damit, dass zurückgestellte Festlegungen „bereits in Kapitel 4.4.9 als bewusste Auslassungen geführt werden". Ein Kapitel 4.4.9 existiert in der aktuellen Fassung nicht mehr. **Zwei Wege:** entweder das Unterkapitel 4.4.9 wieder aufnehmen (Inhalt liegt vor: keine Punkte, Bestenlisten oder Levelsysteme · keine Zeitdruckmechanik · keine Täterperspektive · keine realen Vorfälle aus dem Verein) oder den Satz in 4.6 umformulieren und auf NF07, NF08 und F13 verweisen, in denen dieselben Auslassungen als Anforderung stehen. **Empfehlung: 4.4.9 wieder aufnehmen.** Die Abgrenzung zur Täterperspektive ist nach Kapitel 3.5.1 ein eigenständiges Argument und geht in einer Anforderungszeile unter.
- [ ] **Tabellenverzeichnis (Kapitel 9.2) auf sieben Tabellen anpassen.** Aktuell fehlt Tab. 5 (User Storys) ganz, dadurch sind die Einträge ab Tab. 5 um eine Nummer verschoben: Das Verzeichnis führt die funktionalen Anforderungen als Tab. 5 und die nichtfunktionalen als Tab. 6, im Text sind es Tab. 6 und Tab. 7. Die Sollstruktur steht in Abschnitt 3.3.
- [ ] **Zitierform bei NF11 vereinheitlichen.** Dort steht „Glinz et al. ([Jahr], S. 85)" mit Klammern innerhalb der Quellenspalte, alle anderen Zeilen der beiden Tabellen kommen ohne aus.
- [ ] **Notiz in Kapitel 5.3 aktualisieren.** Die Arbeitsnotiz zum Domänenmodell nennt die Rückmeldungskategorien noch „Detektion/Schutz/Aktion" und verweist auf „F01, F02, F03, F04, F10 und F11". Beides stammt aus dem alten Stand: Die Kategorien heißen seit Kapitel 4.4.5 **Erkennen, Absichern, Handeln**, und die Anforderungsnummern haben sich mit Tab. 6 verschoben. Aktuelle Zuordnung siehe Abschnitt 3.2.

### 4.2 Inhaltliche Korrektur in Kapitel 3 — weiterhin offen

- [ ] **Kapitel 3.4, Sailer & Homner.** Der Text behauptet weiterhin, Wettbewerb mit Kooperation habe „sowohl bei motivationalen als auch bei verhaltensbezogenen Lernergebnissen besser abgeschnitten als solche, die allein auf Wettbewerb setzten". Am Original geprüft: kognitiv Q(3) = 0,80, p = ,85 nicht signifikant; motivational Q(3) = 3,85, p = ,28 nicht signifikant; nur verhaltensbezogen Q(2) = 12,80, p < ,01. Der Post-hoc-Kontrast lief zwischen kompetitiv-kollaborativ und **keiner sozialen Interaktion**, nicht gegen reinen Wettbewerb. **Kapitel 4.4.2 (Tab. 4) ist bereits korrekt formuliert, 3.4 widerspricht dem noch.** Das ist die einzige Stelle in der Arbeit, an der sich zwei Kapitel offen widersprechen — deshalb Priorität.
- [ ] **Kapitel 3.5.1, Uuugh-Stichprobe.** „39 Jugendlichen und vier Jugendleiterinnen und Jugendleitern" ist noch ungenau. Die Teilnehmenden waren 15 bis 37 Jahre alt (Ø 21,5), die vier Jugendleitenden 24 bis 45. Zwei Absätze später steht bereits korrekt, dass die Stichprobe auch erwachsene Teilnehmende umfasste — das passt nicht zusammen. Besser: „39 Jugendlichen und jungen Erwachsenen".

### 4.3 Jahreszahlen und Quellenangaben ergänzen

Sieben Stellen tragen noch den Platzhalter `[Jahr]` oder `S.???`. Zwei davon lassen sich aus der Arbeit selbst auflösen.

| Stelle | Platzhalter | Status |
|---|---|---|
| Kapitel 1, 2 | Horch et al., [Jahr] | **Auflösbar: 2024.** In Kapitel 3.2, 4.2, 4.6 und Anhang 4 steht die Quelle bereits mit 2024. |
| Kapitel 1 | Palzkill ([Jahr]) | **Auflösbar: 2021.** Überall sonst in der Arbeit mit 2021 zitiert. |
| Kapitel 4.1, 4.3, 6 | Salzmann, [Jahr] und S.??? | Jahr der Dissertation eintragen. Die fünf Praktiken stehen bei Salzmann auf **S. 113–114**, dort zitiert er Carlgren et al. (2016b, S. 47); am Original gegenprüfen. Salzmann verweist auf S. 98 zusätzlich auf Carlgren et al. (2016b, S. 50). |
| Kapitel 1 | Kliemann, [Jahr], S. 262 | Vermutlich Kapitel im Sammelband Fegert et al. (2018); liegt nicht vor. |
| Kapitel 1 | Fegert, Kölch & Kliemann, [Jahr], S. 4 | Vermutlich 2018; siehe oben. |
| 4.2, 4.3, 4.5, 4.6, Anhang 7 | Glinz et al., [Jahr] | **Auflösbar, siehe unten.** |

**Glinz et al. — vollständige Angabe.** Die Datei ist das IREB-Handbuch, Version 1.2.0, Autoren Martin Glinz, Hans van Loenhoud, Stefan Staal und Stan Bühne. Erstveröffentlichung 11.11.2020, Urheberrecht laut Nutzungsbedingungen © 2022, danach Versionen 1.1.1 (2023), 1.1.2 (2024) und 1.2.0. Vorschlag für das Literaturverzeichnis:

> Glinz, M., van Loenhoud, H., Staal, S. & Bühne, S. (2022). *Handbuch IREB Certified Professional for Requirements Engineering. Foundation Level* (Version 1.2.0). International Requirements Engineering Board.

Zwei Punkte dazu: Erstens das Datum der Version 1.2.0 auf S. 5 der Versionshistorie selbst nachschlagen und die Jahresangabe daran anpassen. Zweitens wird die Quelle in der Arbeit durchgehend als „Glinz et al." eingeführt, während alle anderen mehrautorigen Quellen bei der Erstnennung ausgeschrieben werden (etwa „Tolks, Lampert, Dadaczynski, Maslon, Paulus & Sailer, 2020"). Bei der Erstnennung in Kapitel 4.2 ausschreiben.

### 4.4 Vollständigkeit der Anforderungsspezifikation

Zwei Befunde, die in Kapitel 4.4 als Gestaltungsentscheidung stehen, sind in Tab. 6 nicht als Anforderung angekommen.

- [ ] **Elternkommunikation als eigener Situationstyp.** Steht in Tab. 4 unter Grundfunktion 1, belegt über Götzl et al. (2025, S. 277, 280). Das ist der einzige Befund im gesamten Quellenstapel, der in keinem der drei untersuchten Bestandsangebote vorkommt, also der originellste Punkt des Konzepts. In Tab. 6 taucht er nicht auf, weil F01 und F02 nur allgemein von Themenfeldern sprechen. **Empfehlung:** eigene Zeile in Tab. 6, Priorität Soll, Quelle Götzl et al. (2025).
- [ ] **Abdeckung der frühen, mehrdeutigen Grooming-Phase.** Kapitel 3.5.1 zeigt, dass Uuugh genau die erste Modellphase auslässt — das ist das Alleinstellungsmerkmal, das die Lückenanalyse in 3.5.4 trägt. Kein F-Eintrag verlangt bislang, dass die Szenarien diese Phase abdecken. **Empfehlung:** eigene Zeile in Tab. 6, Priorität Muss, Quelle Kapitel 3.1.3 und 3.5.1.
- [ ] **F05 hat keine User Story.** Der Text nach Tab. 7 sagt, alle acht User Storys seien in den Anforderungen vertreten — das stimmt. Umgekehrt fehlt aber zur zentralen Grundfunktion 2 (F05, abgestufte Einordnung am Szenarioende) eine User Story, obwohl das Nutzungsszenario in Anhang 6 genau diesen Moment als den beruhigendsten beschreibt („Dass ein Vater überhaupt in der Halle ist, steht dort unter unbedenklich, und das beruhigt ihn mehr, als er erwartet hätte"). **Empfehlung:** US9 ergänzen, etwa „Als Trainer möchte ich am Ende sehen, was an der Situation unbedenklich war und was nicht, damit ich einschätzen lerne, statt mir alles zu verbieten." Deckt F05 ab und bindet die Persona-A-Frustration direkt an.
- [ ] **Trainingsphase vor/während/nach ist keine Anforderung mehr.** Im alten Entwurf war das F11. Sie steckt jetzt nur noch im Domänenmodell und in der Notiz zu Kapitel 5.3. Entscheiden, ob sie als Anforderung zurückkommt oder ausschließlich Strukturmerkmal des Inhaltsmodells bleibt. Für Letzteres spricht, dass sie keine Systemfunktion beschreibt.

### 4.5 Mit Timo Engler klären

- [ ] **Schnitt Kapitel 4 / 5.** Kapitel 4 endet jetzt tatsächlich mit der priorisierten Anforderungsspezifikation und enthält mit Tab. 3 bis Tab. 7 fünf Artefakte. Strengere Variante wäre: Kapitel 4 rein Vorgehen, alle Artefakte nach Kapitel 5. Da Kapitel 4 damit rund 20 Seiten trägt und Kapitel 5 noch komplett offen ist, sollte das vor dem Schreiben von Kapitel 5 geklärt sein.
- [ ] **Interviewleitfaden im Anhang.** Seit die Erhebungsmethodik entfällt, ist er optional geworden. Entscheiden und den Anhangspunkt anpassen oder streichen. Anhang 8 ist ebenfalls noch mit „X" belegt.
- [ ] **Umfang von Kapitel 4.4.** Neun Unterkapitel unter 4.4 stehen sieben Unterkapiteln im gesamten Kapitel 3 gegenüber. Falls das als unverhältnismäßig gilt, wäre die Zusammenfassung von 4.4.3 bis 4.4.8 zu einem Unterkapitel mit fett gesetzten Zwischenüberschriften die Rückfallebene.

### 4.6 Zu erledigen

- [ ] **Transkripte anonymisieren**, bevor sie in den Anhang gehen. Im Text steht „Interview K" und „Interview T", die Dateien tragen noch Vornamen. Datenschutz und Anonymität sind in den DHfPG-Richtlinien ausdrücklich gefordert. **Achtung:** In den Quellennotizen tauchten drei verschiedene Namensangaben für den Kinderschutzbeauftragten auf. Es darf keiner davon in Arbeit oder Anhang gelangen. Auch die Angabe „Datenschutzbeauftragter seit 2018, Compliance-Ombudsmann seit 2022/23" in Kapitel 3.2 macht die Person in einem Verein dieser Größe identifizierbar — prüfen, ob sie so stehen bleiben soll.
- [ ] Kommentare aus der Arbeit abarbeiten: c5–c8 (Kapitel 1, zweiter Absatz wirkt zusammenhanglos), c13/c14 (Vier-Ebenen-Modell in der Zielsetzung, Achtung Rückbezug in 3.2), c29 (Absatz zu Unterscheidungsfähigkeit), c32 (Formulierung Blending-Paradigma), c34/c35 (Deterding-Definition, Länge und Relevanz), c50 (Dopplung Dell'Era / Carlgren), c54, c57 (Eltern als Stakeholder), c60, c67/c68
- [ ] Überprüfen, ob Stickel et al. (2025) in Kapitel 3.3 vorgestellt werden soll (Abschnitt 6.1)
- [ ] Literaturverzeichnis anlegen. Zielumfang 50 bis 75 Quellen. Ausgangsbestand: 32 Dateien im Projektspeicher plus Sekundärquellen.
- [ ] Abkürzungsverzeichnis füllen oder streichen

### 4.7 Zu prüfende Belegstellen

- [ ] **Kapitel 1:** Die Zahlen 70 % / 26 % / 19 % stammen aus SicherImSport (Rulofs et al., 2022), nicht aus Safe Clubs. Schmitz, Söllinger und Ohlert zitieren sie selbst als Sekundärquelle. Zusätzlich widersprechen sich die Stichprobengrößen in der Sekundärliteratur: Stickel et al. nennen 4.367 Befragte, Bittner et al. 2.024, bei identischen Prozentwerten. Empfehlung: direkt über Rulofs (2024, S. 131) belegen und die Stichprobengröße weglassen.
- [ ] **Ohlert et al. (2018):** Lesart festlegen. 37,6 % mit 11,2 % schwer (eigene Angabe) gegen 37 % gesamt mit 16/10/11 (Rulofs) gegen geschlechtergetrennt 48 % / 23 % (Palzkill).
- [ ] **Brackenridge & Fasting (2005):** Alle Seitenangaben stammen aus dem Autorenmanuskript, gegen die Druckfassung (Auto/Biography 13(1), 1–20) prüfen.
- [ ] **Bange (2018)** und **Kölch & Fegert (2018):** nicht am Original verifiziert, Fegert et al. (2018) liegt nicht vor.
- [ ] **Universitätsklinikum Ulm (2025)** zur Gestaltung der Uuugh-Figuren: Quelle noch nicht belegt.
- [ ] **Carlgren et al. (2016b):** liegt nicht im Original vor, wird durchgehend über Salzmann sekundär zitiert. DOI 10.1111/caim.12153.
- [ ] **Safe Clubs Projektende:** Abstract nennt Februar 2025, Text „Ende 2024". Aktuell mit „Anfang 2025" umgangen.
- [ ] **Palzkill (2021, S. 198)** schreibt „§8b SGB III". Korrekt wäre § 8b SGB VIII, vermutlich Druckfehler in der Quelle. In Kapitel 4.4 wurde die Paragrafenangabe deshalb weggelassen.
- [x] **Vier fehlende RE-Standardquellen — erledigt am 26./27.08.2026.** Persona-Methode, Use-Case-Notation, User-Story-Schablone, die Unterscheidung der Anforderungsarten und die MoSCoW-Priorisierung sind jetzt sämtlich über Glinz et al. belegt. Die im alten Stand empfohlene Anschaffung von Rupp & die SOPHISTen erübrigt sich. Fundstellen: Stakeholder S. 20–21 und S. 90, Personas S. 93–94, Szenarien S. 108, User-Story-Schablone nach Cohn (2004) S. 47, Use-Case-Formularvorlage S. 48–49, Anforderungsarten S. 10–11, Quelle als Anforderungsattribut S. 152, MoSCoW S. 159–160.
- [x] **Rulofs (2024) — geklärt am 25.08.2026.** Bettina Rulofs ist die Autorin von Kapitel 7, Behrens, Bauers und Hovemann sind die Herausgeber des Bandes *Entwicklungstendenzen im Sportmanagement* (Springer Gabler, S. 129–149). Die Zitierweise in der Arbeit ist korrekt.
- [x] **„hard fun" — geklärt am 25.08.2026.** Die Formulierung stammt von **Papert (1998)**, zitiert nach Breuer & Bente (2010, S. 12), nicht von Gee. „Pleasantly frustrating" ließ sich auf S. 12 nicht finden und wurde deshalb nicht verwendet.

### 4.8 Für Kapitel 6 vormerken

Bereits im Text von Kapitel 6 angelegt:

- Vier Grenzen des Vorgehens: zwei Befragte aus einem Verein · keine beobachtende Komponente · keine Co-Evaluation · Einzelbearbeitung, damit entfällt Salzmanns Praktik Diversität.
- Dell'Era et al. (2025) untersucht kommerzielle Beratungsprojekte ohne Bezug zu ehrenamtlichen oder pädagogischen Kontexten; Querschnittsdesign erlaubt keine kausalen Aussagen.
- Zwei Limitationen aus der Umstellung von Grundfunktion 2: Der Prototyp meldet nicht zurück, ob die eigene Reaktion angemessen war, obwohl Persona A genau das sucht. Und der Ansatz, einzelne Situationsmerkmale abgestuft auszuweisen, ist im Quellenstapel nicht wirksamkeitsgeprüft, sondern nur an Uuugh und die Schirrmacher-Simulation angelehnt.

Noch zu ergänzen:

- Wouters et al. (2013) finden für Erwachsene keinen Lernvorteil durch Serious Games — die Zielgruppe dieser Arbeit ist genau diese Gruppe.
- Sailer & Homner (2020) finden im informellen Trainingssetting kleinere Effekte als im schulischen.
- Der Prototyp erfüllt Tolks' drittes Serious-Game-Kriterium bewusst nicht.
- **Die drei Zielkonflikte aus 4.6 wieder aufgreifen**, besonders den zweiten: In einem kleinen Trainerteam kann bereits die Zahl der vorliegenden Entscheidungen Rückschlüsse auf einzelne Personen zulassen (F08 gegen NF04). Das ist der handfesteste Datenschutzeinwand gegen das Konzept und sollte nicht nur genannt, sondern mit einer Mindestzahl an Antworten je Entscheidungspunkt beantwortet werden.
- Der Prototyp setzt eine Betreiberrolle voraus, die im Post SV Nürnberg nicht besetzt ist (F14, NF10). Personalisierung nach Horch et al. (2024, S. 166) als strukturelles Risiko.
- Übertragbarkeit auf andere Vereine — dafür ist die Trennung von Inhalt und Vereinskontext im Domänenmodell das Argument.
