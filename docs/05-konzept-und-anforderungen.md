# Konzept und Anforderungen

Ausgekoppelt aus der [Projektdokumentation](projektdokumentation.md). Stand 27.08.2026. Entspricht Kapitel 4.4 und 4.6 der Arbeit.

### 7.1 Gestaltungsentscheidungen (Kapitel 4.4)

**Einordnung:** szenariobasiertes digitales Lernformat mit Elementen des Serious-Game-Designs. Tolks' Kriterien 1, 2 und 4 sind erfüllt, Kriterium 3 (Unterordnung des Inhalts unter den Unterhaltungsfaktor) bewusst nicht. Regelgebunden im Sinne von Ludus, kein offener Handlungsraum.

**Lernziel:** Handlungssicherheit im Umgang mit mehrdeutigen Situationen, nicht Faktenwissen.

**Fünf Gestaltungsprinzipien (4.4.1):** Blending-Paradigma · Trennung von Spiel-, Lern- und Instruktionsmotiv · Ausrichtung an Kompetenz, Autonomie und sozialer Eingebundenheit · Komplexität bleibt beim Designer · fiktionale statt realer Fälle.

**Sechs Grundfunktionen (4.4.3 bis 4.4.8):**

1. **Szenariobasierte Entscheidungssituationen** — narrative Interaktionsebene; Ausgangslage, dann Entscheidungspunkte mit Leitfrage und genau drei Optionen, von denen keine offensichtlich falsch ist; Themenraster aus Palzkill, Safe Clubs und den Interviews
2. **Abgestufte Einschätzung** — eingeordnet wird die **Situation**, nicht die eigene Entscheidung. Für jede durchlaufene Situation listet der Prototyp auf, welche Merkmale unbedenklich, klärungsbedürftig und grenzverletzend sind, einschließlich solcher, die gar nicht eingetreten sind, aber die Kippschwelle markieren. Die Stufe „unbedenklich" ist dabei so wichtig wie die anderen beiden.
3. **Dreiteilige Rückmeldung Erkennen, Absichern, Handeln** — Umdeutung des Eulenkodex, weil „Schutz" bei Trainern Transparenz im eigenen Handeln meint und nicht Selbstschutz vor einem Übergriff. Erscheint erst auf Anforderung.
4. **Verzweigung und Wiederholbarkeit** — der Fortgang ist festgelegt und hängt nicht von der gewählten Option ab; kein Abbruch; abgeschlossene Szenarien sind erneut startbar
5. **Abgleich im Trainerteam** — Anteil je Handlungsoption, keine Rangfolge, keine Personenzuordnung. Der Prototyp liefert nur den Anlass, das Gespräch findet außerhalb statt.
6. **Information und Beratung auf Abruf** — Vertiefungen und Rückmeldung nur auf Anforderung; Ansprechpersonen nach drei Eskalationsebenen und Beratungszugang ohne Anforderung sichtbar

**Bewusste Auslassungen** (Inhalt liegt vor, Unterkapitel fehlt aktuell — siehe 4.1): keine Punkte, Bestenlisten oder Levelsysteme · keine Zeitdruckmechanik · keine Täterperspektive · keine realen Vorfälle aus dem Verein.

### 7.2 Funktionale Anforderungen (Tab. 6)

| Nr. | Anforderung, verkürzt | Prio | Grundfunktion |
|---|---|---|---|
| F01 | Übersicht der Szenarien mit Themenfeld und Kurzbeschreibung, freie Auswahl | Muss | 1 |
| F02 | Ausgangssituation, mehrere Entscheidungspunkte, je Leitfrage und genau drei Optionen | Muss | 1 |
| F03 | Fortgang festgelegt, unabhängig von der Wahl, kein Abbruch | Muss | 4 |
| F04 | Fachliche Rückmeldung abrufbar, gegliedert in Erkennen, Absichern, Handeln | Muss | 3 |
| F05 | Am Szenarioende Merkmale nach unbedenklich / klärungsbedürftig / grenzverletzend, inkl. nicht eingetretener, ohne Bewertung der eigenen Entscheidung | Muss | 2 |
| F06 | Ansprechpersonen und Meldewege mit Namen und Kontaktweg, nach drei Eskalationsebenen | Muss | 6 |
| F07 | Überregionale Beratungsstelle an jedem Punkt erreichbar | Muss | 6 |
| F08 | Nach allen Rückmeldungen Anteil je Handlungsoption, ohne Rangfolge, ohne Personenzuordnung | Muss | 5 |
| F09 | Hinweis bei zu wenigen Entscheidungen anderer | Soll | 5 |
| F10 | Unterbrechen und am zuletzt erreichten Entscheidungspunkt fortsetzen | Muss | — |
| F11 | Abgeschlossene Szenarien erneut startbar | Soll | 4 |
| F12 | Vertiefende Hintergrundinformationen abrufbar, kein Push | Soll | 6 |
| F13 | Übersicht über bearbeitete und offene Szenarien, ohne Punktestand und Bestenliste | Kann | — |
| F14 | Ansprechpersonen, Meldewege und Szenarien ohne technische Kenntnisse pflegbar | Soll | — |

Neun Muss, vier Soll, ein Kann. Fehlend: Elternkommunikation und frühe Grooming-Phase, siehe 4.4.

### 7.3 Nichtfunktionale Anforderungen (Tab. 7)

| Nr. | Anforderung, verkürzt | Prio | Art nach Glinz |
|---|---|---|---|
| NF01 | Durchlauf höchstens fünf Minuten | Muss | Qualität (Leistung) |
| NF02 | Entscheidungen zeitlich unbegrenzt | Muss | Randbedingung |
| NF03 | Ohne Einführung, Schulung oder anleitende Person nutzbar | Muss | Qualität (Benutzbarkeit) |
| NF04 | Entscheidungen nicht auf einzelne Personen rückführbar | Muss | Qualität (Datenschutz) |
| NF05 | Textumfang begrenzt, keine Fachbegriffe und Modelle in der Anwendung | Muss | Qualität (Benutzbarkeit) |
| NF06 | Ohne Einarbeitung und Installationsaufwand auf dem Smartphone nutzbar | Soll | Qualität / Randbedingung |
| NF07 | Szenarien erfunden, aber realitätsnah; keine realen Vorfälle | Muss | Randbedingung |
| NF08 | Spielerische Elemente ordnen sich unter, keine Richtig-falsch-Bewertung | Muss | Randbedingung |
| NF09 | Freiwillig, ohne Nachweis-, Abschluss- oder Fristenpflicht | Muss | Randbedingung |
| NF10 | Pflege ohne technische Kenntnisse und ohne wiederkehrenden Aufwand | Soll | Qualität (Wartbarkeit) |
| NF11 | Szenarienbestand erweiterbar ohne Änderung an Aufbau oder Ablauf | Soll | Qualität (Erweiterbarkeit) |

Die Spalte „Art nach Glinz" steht **nicht** in der Arbeit, sondern ist eine Arbeitshilfe für den Fall, dass die Zuordnung im Kolloquium erfragt wird (siehe 6.1).

### 7.4 Die drei Zielkonflikte

| Konflikt | Auflösung im Text |
|---|---|
| Inhaltliche Tiefe (F04, F05, F12) gegen Bearbeitungsdauer und Textumfang (NF01, NF05) | Abrufbarkeit: Vertiefendes nur auf Anforderung, das im Ernstfall Nötige ohne Anforderung sichtbar |
| Abgleich im Trainerteam (F08) gegen nicht personenbeziehbare Nutzung (NF04) | **Nur teilweise gelöst.** In kleinen Trainerteams lässt bereits die Zahl der Entscheidungen Rückschlüsse zu. → Kapitel 6 |
| Anzeige der Ansprechpersonen (F06) verlangt aktuelle Angaben, deren Pflege (F14, NF10) an einer unbesetzten Rolle hängt | **Nicht gelöst.** → Kapitel 6 |
