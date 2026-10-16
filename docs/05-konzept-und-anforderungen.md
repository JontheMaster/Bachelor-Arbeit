# Konzept und Anforderungen

Ausgekoppelt aus der [Projektdokumentation](projektdokumentation.md). Stand 17.10.2026, Grundlage ist die Fassung vom 16.10.2026.

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
