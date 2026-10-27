# Konzept und Anforderungen

Teil der [Projektdokumentation](projektdokumentation.md) zur Bachelorarbeit von Jonathan Sommerer, finale Fassung vom 27.10.2026.

---

## 6 Das Konzept

**Lernziel:** Handlungssicherheit im Umgang mit mehrdeutigen Situationen, nicht Faktenwissen. Wer Entscheidungsverhalten verändern will, muss Entscheidungen üben lassen.

**Einordnung:** szenariobasiertes digitales Lernformat mit Elementen des Serious-Game-Designs. Von den vier Kriterien nach Tolks und Lampert (2016; zitiert nach Tolks et al., 2020, S. 699) sind 1, 2 und 4 erfüllt; Kriterium 3 (Inhalt ordnet sich dem Unterhaltungsfaktor unter) bewusst nicht, weil das Risiko der Verharmlosung schwerer wiegt als ein Motivationsgewinn.

**Drei Festlegungen (Kap. 5.1)**

- Keine Benutzerkonten. Der Prototyp kennt keine Personen, nur Durchläufe.
- Fortschritt und eigene Entscheidungen bleiben auf dem Endgerät; vereinsweit gehalten wird nur ein Zählwert je Entscheidungspunkt und Handlungsoption.
- Inhalte (Szenarien, Rückmeldungen, Situationsmerkmale) sind vom Einsatzkontext (Ansprechpersonen, Meldewege) getrennt. Ein anderer Verein hinterlegt nur seine Angaben. Zu pflegen sind nur Vereinsangaben und Szenarienbestand.

**Fünf Gestaltungsprinzipien (Kap. 4.4.1)**

1. Blending-Paradigma: Die Bewältigung der Situation ist selbst die geübte Kompetenz (Ritterfeld & Weber, 2006; zitiert nach Breuer & Bente, 2010, S. 13).
2. Spiel-, Lern- und Instruktionsmotiv getrennt denken; die Instruktion steckt im Prototyp selbst (Carvalho et al., 2015, S. 169).
3. Kompetenz, Autonomie und soziale Eingebundenheit über Szenarienwahl, Rückmeldung und Fortschrittsübersicht sowie den Abgleich im Trainerteam (Sailer, 2016; zitiert nach Tolks et al., 2020, S. 701).
4. Modelle bleiben im Hintergrund, Darstellung schematisch (Carvalho et al., 2015, S. 179; Wouters et al., 2013, S. 258).
5. Erfundene, realitätsnahe Situationen statt realer Vorfälle; niemand muss eigene Erlebnisse offenlegen (De Angeli et al., 2026, S. 480).

**Sechs Grundfunktionen (Kap. 4.4.3 bis 4.4.8)**

1. **Szenariobasierte Entscheidungssituationen** (F01, F02, F03, F04). Eine Folge von Situationen aus dem Trainingsalltag, die an mehreren Stellen anhält. An jedem Entscheidungspunkt stehen eine Leitfrage und genau drei Optionen, keine davon offensichtlich falsch.
2. **Abgestufte Einschätzung** (F07). Am Ende wird nicht die eigene Entscheidung eingeordnet, sondern die Situation: welche Merkmale unbedenklich, klärungsbedürftig oder grenzverletzend sind, auch solche, die gar nicht eingetreten sind.
3. **Dreiteilige Rückmeldung** (F06). Nach jeder Entscheidung abrufbar, gegliedert in Erkennen, Absichern und Handeln. Sie gehört zum Entscheidungspunkt, nicht zur gewählten Option, und sagt, woran die Situation zu lesen war.
4. **Verzweigung und Wiederholbarkeit** (F05, F13). Ein Szenario läuft immer bis zum Ende, unabhängig von der Wahl. Es spitzt sich zu oder entspannt sich, abgebrochen wird es nie. Danach lässt es sich neu starten, um die übrigen Optionen nachzulesen.
5. **Abgleich im Trainerteam** (F10, F11). Am Ende sieht man, wie sich andere im Verein entschieden haben, als Anteil je Option, ohne Rangfolge und ohne Namen. Der Prototyp liefert den Anlass, das Gespräch findet im Team statt.
6. **Information und Beratung auf Abruf** (F08, F09). Vertiefendes erscheint nur auf Anforderung. Was im Ernstfall gebraucht wird, steht ohne Anforderung da: die Ansprechpersonen des Vereins am Szenarioende und eine Beratungsstelle zu jeder Zeit.

**Bewusst nicht enthalten:** Punkte und Bestenlisten, Bewertung als richtig oder falsch, Benutzerkonten, Teilnahmenachweis, Zeitdruck, eigener Kommunikationskanal, reale Vereinsfälle, Intervention im Verdachtsfall.

---

## 7 Stakeholder, Personas, Nutzungsszenario

### 7.1 Stakeholder (Tab. 3)

| Rolle | Einfluss | Interesse | Begründung |
|---|---|---|---|
| Ehrenamtliche Trainerinnen und Trainer | Kritisch | Sicherheit im Umgang mit mehrdeutigen Situationen, zugleich Sorge vor zusätzlichem Aufwand | Die Nutzung ist freiwillig. Ohne ihre Akzeptanz bleibt der Prototyp wirkungslos. |
| Kinderschutzbeauftragter | Kritisch | Das Schutzkonzept in der Trainerschaft verankern | Bringt den Prototyp in den Verein ein und verantwortet die fachliche Richtigkeit der Inhalte. |
| Verwaltende Person des Prototyps | Kritisch | Geringer Pflegeaufwand, aktuelle Ansprechpersonen und Meldewege | Veraltete Vereinsangaben entwerten die Rückmeldung am Szenarioende. Beim Post SV ist die Rolle noch nicht besetzt. |
| Vereinsvorstand | Schwerwiegend | Handlungssichere Trainerinnen und Trainer, keine Vorfälle und Reputationsrisiken | Entscheidet über Einführung und Stellenwert im Vereinsalltag. |
| Eltern | Geringfügig | Handlungssichere Trainerinnen und Trainer | Nutzen den Prototyp nicht, erzeugen aber Erwartungsdruck auf den Vorstand. |
| Kinder, Jugendliche und Trainierende | Geringfügig | Schutz vor Grenzverletzungen und damit das höchste Interesse aller Rollen | Nutzen den Prototyp nicht und wirken an seiner Einführung nicht mit. |
| Landessportbund und Sportjugend | Geringfügig | Verbreitung des Themas, Fortbildung Ehrenamtlicher | Entscheiden nicht über ein vereinseigenes Instrument. |

Die drei kritischen Rollen bestimmen die Muss-Anforderungen. Die Betreiberrolle ist beim Post SV noch nicht besetzt; bei ihrer Vergabe droht dieselbe Personalisierung wie beim Schutzkonzept (Horch et al., 2024, S. 166).

### 7.2 Personas

**Persona A „Der Etablierte“, Thomas, 46** (Anhang 3). Seit elf Jahren Trainer einer U14 im Jugendfußball, selbst seit der Jugend im Verein, Vollzeit berufstätig. Kennt das Schutzkonzept nur dem Namen nach. Begegnet dem Thema zurückhaltend aus Unsicherheit, lehnt Pflichten und Nachweise ab, Digitales muss auf Anhieb funktionieren. Datengrundlage: Interview K; Horch et al. (2024, S. 162–163); Kap. 3.2.

**Persona B „Die Neue“, Lena, 22** (Anhang 4). Seit zwei Jahren Trainerin einer U12, Studentin. Offen für das Thema, aber unsicher im Auftreten gegenüber älteren Vereinsmitgliedern; fürchtet, belächelt zu werden; sucht Rückhalt. Datengrundlage: Interview K; Interview T; Kap. 3.2.

Die User Storys sind aus Sicht von Persona A geschrieben, weil sie den schwierigeren Fall darstellt.

### 7.3 Nutzungsszenario (Anhang 5)

1. **Trainerbesprechung:** Vor Saisonbeginn weist der Kinderschutzbeauftragte auf den Prototyp hin. Thomas nimmt es zur Kenntnis, mehr nicht. Die Besprechung dauert ohnehin schon zu lange.
2. **Zwei Wochen später:** Während des Umziehens stand ein Vater in der Kabine, und Thomas hat nichts gesagt. Vermutlich war es unbedenklich. Wohl war ihm dabei nicht.
3. **Am Abend:** Die Kinder sind im Bett. Er öffnet den Prototyp und findet in der Übersicht ein Szenario, das eine Situation in der Umkleide aufgreift.
4. **Zweiter Entscheidungspunkt:** Obwohl er sich am ersten Punkt aus seiner Sicht richtig verhalten hat, spitzt sich die Situation zu. Er ruft die fachliche Einordnung auf.
5. **Nach etwa fünf Minuten:** Dass sich ein Vater überhaupt in der Kabine aufhält, steht unter „unbedenklich“. Das beruhigt ihn mehr, als er erwartet hätte.
6. **Der Vergleich:** Gut die Hälfte im Verein hat an denselben Stellen anders entschieden. Wer, erfährt er nicht. Umgekehrt wird auch er nicht erkannt.
7. **Zum Schluss:** Ihm wird bewusst, dass er sich auch mit einer bloßen Beobachtung an den Kinderschutzbeauftragten wenden kann. Er merkt sich, wie er ihn erreicht.
8. **Nächstes Trainertreffen:** Er spricht die Umkleide an. Zwei andere haben dasselbe Szenario bearbeitet und waren ebenso unsicher. Das Team bespricht, wie es künftig damit umgeht.

Drei Eigenschaften entscheiden über die Nutzung: Einstieg anlassbezogen und ungeplant, die Bearbeitungsdauer, und der Abgleich mit anderen, der aus der Einzelnutzung ein Gespräch im Team macht.

---

## 8 User Storys und Use Case

### 8.1 User Storys (Tab. 5)

| Nr. | User Story | Anforderung |
|---|---|---|
| US1 | Als Trainer möchte ich auf einen Blick sehen, welche Szenarien es gibt und worum es darin geht, damit ich eines auswählen kann, das zu meiner Situation passt. | F02 |
| US2 | Als Trainer möchte ich in einer Situation zwischen konkreten Handlungsmöglichkeiten wählen, damit ich das Einschätzen übe, statt Wissen zu lernen. | F03, F05 |
| US3 | Als Trainer möchte ich nach jeder Entscheidung nachlesen können, woran ich die Situation erkenne, wie ich mich absichere und was ich eigentlich in der Situation akut tun kann, damit ich in einer ähnlichen Situation im Training handeln kann. | F06 |
| US4 | Als Trainer möchte ich am Ende des Szenarios sehen, wie sich andere an den einzelnen Entscheidungspunkten entschieden haben, damit ich meine eigene Einschätzung einordnen kann. | F10 |
| US5 | Als Trainer möchte ich ein Szenario unterbrechen und später fortsetzen, damit ich es zwischen Arbeit und Training bearbeiten kann. | F12, NF01 |
| US6 | Als Trainer möchte ich ein Szenario ohne vorherige Erklärung oder Schulung starten und selbstständig bearbeiten können, damit ich es auch spontan und ohne Unterstützung nutzen kann. | NF03, NF08 |
| US7 | Als Trainer möchte ich am Ende sehen, an wen ich mich im Verein wenden kann, damit ich im Ernstfall nicht erst suchen muss. | F08, F09 |
| US8 | Als Trainer möchte ich nicht erkennbar sein, damit ich ehrlich antworten kann. | NF04 |
| US9 | Als Trainer möchte ich am Ende sehen, was an der Situation unbedenklich war und was nicht, damit ich ein Gefühl dafür bekomme, wo die Grenze verläuft. | F07 |

### 8.2 Use Case „Szenario bearbeiten“ (Anhang 6)

Vorbedingung: Szenario in der Übersicht ausgewählt, Ansprechpersonen und Meldewege des Vereins hinterlegt. Haupt-Akteur: nutzende Person, keine anderen Akteure. Auslöser: Start eines Szenarios aus der Übersicht.

1. Der Prototyp zeigt die Ausgangssituation des Szenarios als kurzen Text.
2. Der Prototyp zeigt den ersten Entscheidungspunkt mit einer Leitfrage und genau drei Handlungsoptionen.
3. Die nutzende Person wählt eine Handlungsoption.
4. Die nutzende Person kann in derselben Ansicht die fachliche Rückmeldung abrufen, gegliedert in Erkennen, Absichern und Handeln.
5. Die nutzende Person setzt das Szenario fort.
6. Der Prototyp führt die Situation weiter und zeigt den nächsten Entscheidungspunkt. Der Fortgang ist festgelegt und hängt nicht von der gewählten Option ab.
- *Die Schritte 3 bis 6 wiederholen sich, bis kein weiterer Entscheidungspunkt folgt.*
7. Der Prototyp führt für jede durchlaufene Situation auf, welche Merkmale unbedenklich, klärungsbedürftig und grenzverletzend sind, auch nicht eingetretene. Die eigenen Entscheidungen werden diesen Stufen nicht zugeordnet.
8. Der Prototyp zeigt, wie sich die übrigen Nutzenden an den einzelnen Entscheidungspunkten entschieden haben, als Anteil je Handlungsoption.
9. Der Prototyp zeigt die Ansprechpersonen und Meldewege des Vereins mit Namen und Kontaktweg.
10. Die nutzende Person beendet das Szenario.
11. Der Prototyp vermerkt den Durchlauf als abgeschlossen.

Alternative Abläufe: **3a** Unterbrechung, Fortschritt wird gespeichert, Fortsetzung am zuletzt erreichten Entscheidungspunkt. **8a** Zu wenige Entscheidungen anderer bei einzelnen Punkten: Hinweis dort, übrige Anteile regulär.
Erweiterungen: Beratungsstelle in jedem Schritt erreichbar (Fortschritt wird wie in 3a gesichert); nach Abschluss erneut startbar.
Häufigkeit anlassbezogen und unregelmäßig, Dauer höchstens fünf Minuten.

Was der Use Case erzwungen hat: Der Vergleich erscheint erst nach allen Rückmeldungen; geregelt sein muss der Fall zu weniger Daten bei der Einführung; geklärt werden muss, ob eigene Entscheidungen in der Auswertung noch einmal erscheinen.

---

## 9 Anforderungen (Kap. 4.6)

Priorisierung nach MoSCoW in Muss, Soll und Kann (Glinz et al., 2024, S. 159). Die Priorität steigt, wenn beide Befragten eine Anforderung nennen, sie literaturgestützt ist, unmittelbar zum Lernziel beiträgt und unter Ehrenamtsbedingungen umsetzbar ist. Die Quellenspalte macht die Herkunft prüfbar (S. 151), die GF-Spalte verbindet Tab. 6 mit den Grundfunktionen (S. 154–155).

### 9.1 Funktionale Anforderungen (Tab. 6)

| Nr. | Anforderung | Prio | GF | Quelle |
|---|---|---|---|---|
| F01 | Die Szenarien decken die in Kapitel 4.4 bestimmten Themenfelder des Trainingsalltags ab, insbesondere Situationen, die im Alltag mehrdeutig sind und keine eindeutige Handlungsantwort haben. | Muss | 1 | Interview T; Interview K |
| F02 | Der Prototyp zeigt eine Übersicht der verfügbaren Szenarien mit Themenfeld und kurzer Beschreibung, aus der frei ausgewählt werden kann. | Muss | 1 | US1; Sailer, 2016; zitiert nach Tolks et al., 2020, S. 701 |
| F03 | Ein Szenario beginnt mit einer kurzen Ausgangssituation und führt über mehrere Entscheidungspunkte, an denen jeweils eine Leitfrage und genau drei Handlungsoptionen stehen. | Muss | 1 | US2; Ritterfeld et al., 2009, S. 694 |
| F04 | Die Ausgangssituation eines Szenarios benennt die für die Einordnung nötigen Rahmenangaben, mindestens Altersgruppe, Ort und Vorgeschichte der Situation. | Muss | 1 | Interview K |
| F05 | Der Fortgang eines Szenarios ist festgelegt und hängt nicht von der gewählten Handlungsoption ab. | Muss | 4 | Interview K; Brackenridge & Fasting, 2005, S. 19 |
| F06 | Nach jeder Entscheidung lässt sich eine fachliche Rückmeldung abrufen, gegliedert in Erkennen, Absichern und Handeln. | Soll | 3 | US3; Krauß et al., 2025, S. 13, 23; Palzkill, 2021, S. 198; Breuer & Bente, 2010, S. 16 |
| F07 | Am Szenarioende führt der Prototyp auf, welche Situationsmerkmale unbedenklich, klärungsbedürftig und grenzverletzend sind, einschließlich nicht eingetretener Merkmale und ohne Bewertung der eigenen Entscheidung. | Muss | 2 | US9; Interview K; Schirrmacher GmbH, o. J. |
| F08 | Am Szenarioende zeigt der Prototyp die Ansprechpersonen und Meldewege des Vereins mit Namen und Kontaktweg. | Muss | 6 | US7; Interview K; Rulofs, 2024, S. 140–141 |
| F09 | Informationen zu einer offiziellen Melde- und Beratungsstelle sind an jedem Punkt der Nutzung abrufbar. | Soll | 6 | US7; Krauß et al., 2025, S. 20 |
| F10 | Nach Abschluss aller Rückmeldungen zeigt der Prototyp, wie sich die übrigen Nutzenden je Entscheidungspunkt entschieden haben, dargestellt als Anteil je Handlungsoption, ohne Rangfolge und ohne Zuordnung zu Personen. | Muss | 5 | US4; Interview K; Wouters et al., 2013, S. 256–260 |
| F11 | Liegen für einen Entscheidungspunkt zu wenige Entscheidungen anderer Nutzender vor, weist der Prototyp bei den betroffenen Punkten darauf hin und zeigt die übrigen regulär an. | Soll | 5 | Anhang 6 (Use Case) |
| F12 | Die Bearbeitung lässt sich jederzeit unterbrechen. Der Fortschritt wird auf dem Gerät gespeichert und die Bearbeitung setzt am zuletzt erreichten Entscheidungspunkt fort. | Muss | – | US5; Anhang 5 (Nutzungsszenario); Anhang 6 (Use Case); Interview T |
| F13 | Abgeschlossene Szenarien können erneut gestartet werden, sodass übrige Handlungsoptionen nachgelesen werden können. | Kann | 4 | Breuer & Bente, 2010, S. 12 |
| F14 | Der Prototyp zeigt eine Übersicht über bearbeitete und offene Szenarien, ohne Punktestand und ohne Bestenliste. | Kann | – | Sailer & Homner, 2020, S. 99–101 |
| F15 | Ansprechpersonen, Meldewege und Szenarien lassen sich ohne technische Kenntnisse aktualisieren und ergänzen. | Soll | – | Horch et al., 2024, S. 166 |

Neun Muss, vier Soll, zwei Kann.

### 9.2 Nichtfunktionale Anforderungen (Tab. 7)

| Nr. | Anforderung | Prio | Quelle |
|---|---|---|---|
| NF01 | Ein vollständiger Durchlauf eines Szenarios dauert höchstens fünf Minuten. | Muss | Interview K; Stickel et al., 2025, S. 5; Anhang 5 (Nutzungsszenario); Anhang 6 (Use Case) |
| NF02 | Für die einzelnen Entscheidungen gibt es keine Zeitbegrenzung. | Muss | Stickel et al., 2025, S. 5 |
| NF03 | Der Prototyp ist ohne Einführung, Schulung oder anleitende Person nutzbar. Die Bedienung erklärt sich aus der Anwendung selbst. | Muss | US6; Carvalho et al., 2015, S. 179 |
| NF04 | Die getroffenen Entscheidungen sind weder für andere Nutzende noch für den Verein auf einzelne Personen rückführbar. | Muss | US8; Interview K; Anhang 5 (Nutzungsszenario) |
| NF05 | Der Prototyp speichert den Bearbeitungsfortschritt und die eigenen Entscheidungen ausschließlich auf dem Endgerät. Zentral gespeichert wird je Entscheidungspunkt und Handlungsoption ausschließlich ein Zählwert. Personenbezogene Daten oder Kontaktdaten werden nicht erhoben. | Muss | Interview K |
| NF06 | Situationsbeschreibungen und Rückmeldungen sind im Textumfang begrenzt und in der Sprache des Trainingsalltags formuliert. Fachbegriffe und die zugrunde liegenden Modelle erscheinen in der Anwendung nicht. | Muss | Interview K; Bittner et al., 2026, S. 341; Carvalho et al., 2015, S. 179 |
| NF07 | Die Darstellung der Szenarien ist schematisch gehalten. | Muss | Wouters et al., 2013, S. 258 |
| NF08 | Der Prototyp ist ohne Anmeldung und ohne Installationsaufwand über einen Browser auf dem Smartphone nutzbar. | Soll | US6; Anhang 3 (Persona A); Anhang 5 (Nutzungsszenario) |
| NF09 | Die Szenarien sind erfunden, aber realitätsnah. Reale Vorfälle aus dem Verein werden nicht abgebildet. | Muss | De Angeli et al., 2026, S. 480 |
| NF10 | Spielerische Elemente ordnen sich dem Inhalt unter. Eine Bewertung der eigenen Reaktion als richtig oder falsch findet nicht statt. | Muss | Interview K; Breuer & Bente, 2010, S. 14; Tolks et al., 2020, S. 704 |
| NF11 | Die Nutzung ist freiwillig und ohne Nachweis-, Abschluss- oder Fristenpflicht. | Muss | Interview K; Horch et al., 2024, S. 162–163 |
| NF12 | Die Pflege der Vereinsangaben ist ohne technische Kenntnisse möglich und nimmt pro Aktualisierung nur wenige Minuten in Anspruch. | Kann | Horch et al., 2024, S. 166 |
| NF13 | Der Szenarienbestand ist erweiterbar, ohne dass Aufbau oder Ablauf des Prototyps geändert werden müssen. | Soll | Glinz et al., 2024, S. 84 |

Zehn Muss, zwei Soll, ein Kann. 15 der 28 Anforderungen stützen sich auf mindestens zwei Quellenarten, F07, F08, F10 und NF01 auf alle drei.

### 9.3 Zielkonflikte

Kapitel 4.6 legt zwei Zielkonflikte offen (die ersten beiden), die übrigen ergeben sich aus Kapitel 3.2, 4.2, 4.4 und 6.

**Tiefe gegen Kürze** (gelöst in Kap. 4.6)

- Fachlich fundierte Rückmeldung und vollständige Einordnung (F06, F07) gegen Höchstens fünf Minuten, wenig Text (NF01, NF06)
- Lösung: Abrufbarkeit: Vertiefendes erscheint nur auf Anforderung, das im Ernstfall Nötige steht immer da.

**Austausch gegen Anonymität** (Kap. 4.6 und 6)

- Sehen, wie andere im Verein entschieden haben (F10) gegen Niemand ist auf einzelne Personen rückführbar (NF04)
- Lösung: Anteile erscheinen erst ab einer Mindestzahl an Entscheidungen je Punkt (F11). Je kleiner das Team, desto wichtiger.
- Preis: Den Schwellenwert kann erst der Betrieb im Verein festlegen.

**Datensparsamkeit gegen saubere Zählung** (Kap. 6)

- Fortschritt und Entscheidungen nur auf dem Gerät (NF05) gegen Ein verlässlicher Zählwert je Option (F10)
- Lösung: Jeder lokale Durchlauf merkt sich, ob er schon gezählt wurde.
- Preis: Gerätewechsel oder gelöschte Browserdaten setzen das zurück. Mehrfachzählungen sind nicht auszuschließen.

**Qualifikation gegen Engagement** (Kap. 3.2 und 6 · Horch et al., 2024, S. 162–163, 177–178)

- Verbindliche Schulung hebt das Niveau im Trainerteam gegen und verkleinert den Kreis derer, die sich engagieren
- Lösung: Freiwillig, ohne Nachweis, in wenigen Minuten (NF11, NF01). Ehrenamtliche lassen sich nicht über Zwang gewinnen.
- Preis: Der Verein sieht nicht, wie viele Trainerinnen und Trainer er erreicht.

**Aktuelle Kontakte gegen Pflegeaufwand** (Kap. 4.2 und 6)

- Ansprechpersonen mit Namen und Kontaktweg (F08) gegen Pflege ohne technische Kenntnisse in wenigen Minuten (F15, NF12)
- Lösung: Zu pflegen sind nur Vereinsangaben und Szenarienbestand.
- Preis: Hängt die Pflege an einer Person, droht dieselbe Abhängigkeit wie beim Schutzkonzept. Deshalb mindestens zwei Personen.

**Spiel gegen Ernst** (Kap. 3.3 und 4.4)

- Unterhaltung kann motivieren gegen Bei diesem Thema darf nichts verharmlost werden (NF10)
- Lösung: Spielelemente ordnen sich dem Inhalt unter. Keine Punkte, keine Bestenliste, kein Richtig oder Falsch.
- Preis: Nach den Kriterien von Tolks ist der Prototyp damit kein Serious Game im engeren Sinn.
