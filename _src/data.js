/* Inhalte aus der finalen Fassung der Arbeit (bt_350579_sommerer_jonathan.docx, Oktober 2026). */

const CHAPTERS = [
  {n:"1", t:"Einleitung und Problemstellung", p:"S. 4–5", pages:2, href:"#problem", c:"var(--s-prae)"},
  {n:"2", t:"Zielsetzung", p:"S. 6", pages:1, href:"#ueberblick", c:"var(--s-ver)"},
  {n:"3", t:"Gegenwärtiger Kenntnisstand", p:"S. 7–27", pages:21, href:"#problem", c:"var(--s-prae)"},
  {n:"4", t:"Methodik", p:"S. 28–47", pages:20, href:"#vorgehen", c:"var(--s-meth)"},
  {n:"5", t:"Ergebnisse", p:"S. 48–54", pages:7, href:"#modelle", c:"var(--s-sg)"},
  {n:"6", t:"Diskussion", p:"S. 55–57", pages:3, href:"#rueckblick", c:"var(--s-best)"},
  {n:"7", t:"Zusammenfassung", p:"S. 58–59", pages:2, href:"#rueckblick", c:"var(--s-best)"}
];

const GFS = [
  {n:1, t:"Szenariobasierte Entscheidungssituationen", d:"Eine Folge von Situationen aus dem Trainingsalltag, die an mehreren Stellen anhält. An jedem Entscheidungspunkt stehen eine Leitfrage und genau drei Optionen, keine davon offensichtlich falsch.", r:["F01","F02","F03","F04"]},
  {n:2, t:"Abgestufte Einschätzung", d:"Am Ende wird nicht die eigene Entscheidung eingeordnet, sondern die Situation: welche Merkmale unbedenklich, klärungsbedürftig oder grenzverletzend sind, auch solche, die gar nicht eingetreten sind.", r:["F07"]},
  {n:3, t:"Dreiteilige Rückmeldung", d:"Nach jeder Entscheidung abrufbar, gegliedert in Erkennen, Absichern und Handeln. Sie gehört zum Entscheidungspunkt, nicht zur gewählten Option, und sagt, woran die Situation zu lesen war.", r:["F06"]},
  {n:4, t:"Verzweigung und Wiederholbarkeit", d:"Ein Szenario läuft immer bis zum Ende, unabhängig von der Wahl. Es spitzt sich zu oder entspannt sich, abgebrochen wird es nie. Danach lässt es sich neu starten, um die übrigen Optionen nachzulesen.", r:["F05","F13"]},
  {n:5, t:"Abgleich im Trainerteam", d:"Am Ende sieht man, wie sich andere im Verein entschieden haben, als Anteil je Option, ohne Rangfolge und ohne Namen. Der Prototyp liefert den Anlass, das Gespräch findet im Team statt.", r:["F10","F11"]},
  {n:6, t:"Information und Beratung auf Abruf", d:"Vertiefendes erscheint nur auf Anforderung. Was im Ernstfall gebraucht wird, steht ohne Anforderung da: die Ansprechpersonen des Vereins am Szenarioende und eine Beratungsstelle zu jeder Zeit.", r:["F08","F09"]}
];

const STAKE = [
  {lvl:"Kritisch", cls:"c1", note:"scheitert ohne sie", roles:[
    {t:"Ehrenamtliche Trainerinnen und Trainer", i:"Sicherheit im Umgang mit mehrdeutigen Situationen, zugleich Sorge vor zusätzlichem Aufwand", e:"Die Nutzung ist freiwillig. Ohne ihre Akzeptanz bleibt der Prototyp wirkungslos."},
    {t:"Kinderschutzbeauftragter", i:"Das Schutzkonzept in der Trainerschaft verankern", e:"Bringt den Prototyp in den Verein ein und verantwortet die fachliche Richtigkeit der Inhalte."},
    {t:"Verwaltende Person des Prototyps", i:"Geringer Pflegeaufwand, aktuelle Ansprechpersonen und Meldewege", e:"Veraltete Vereinsangaben entwerten die Rückmeldung am Szenarioende. Beim Post SV ist die Rolle noch nicht besetzt."}
  ]},
  {lvl:"Schwerwiegend", cls:"c2", note:"wirkt sich negativ aus", roles:[
    {t:"Vereinsvorstand", i:"Handlungssichere Trainerinnen und Trainer, keine Vorfälle und Reputationsrisiken", e:"Entscheidet über Einführung und Stellenwert im Vereinsalltag."}
  ]},
  {lvl:"Geringfügig", cls:"c3", note:"kaum Folgen", roles:[
    {t:"Eltern", i:"Handlungssichere Trainerinnen und Trainer", e:"Nutzen den Prototyp nicht, erzeugen aber Erwartungsdruck auf den Vorstand."},
    {t:"Kinder, Jugendliche und Trainierende", i:"Schutz vor Grenzverletzungen und damit das höchste Interesse aller Rollen", e:"Nutzen den Prototyp nicht und wirken an seiner Einführung nicht mit."},
    {t:"Landessportbund und Sportjugend", i:"Verbreitung des Themas, Fortbildung Ehrenamtlicher", e:"Entscheiden nicht über ein vereinseigenes Instrument."}
  ]}
];

const STORY = [
  {w:"Trainerbesprechung", h:"Ein Hinweis unter vielen", p:"Vor Saisonbeginn weist der Kinderschutzbeauftragte auf den Prototyp hin. Thomas nimmt es zur Kenntnis, mehr nicht. Die Besprechung dauert ohnehin schon zu lange."},
  {w:"Zwei Wochen später", h:"Ein Vater in der Kabine", p:"Während des Umziehens stand ein Vater in der Kabine, und Thomas hat nichts gesagt. Vermutlich war es unbedenklich. Wohl war ihm dabei nicht."},
  {w:"Am Abend", h:"Auf dem Handy", p:"Die Kinder sind im Bett. Er öffnet den Prototyp und findet in der Übersicht ein Szenario, das eine Situation in der Umkleide aufgreift.", gf:"GF 1"},
  {w:"Zweiter Entscheidungspunkt", h:"Es wird unangenehmer", p:"Obwohl er sich am ersten Punkt aus seiner Sicht richtig verhalten hat, spitzt sich die Situation zu. Er ruft die fachliche Einordnung auf.", gf:"GF 3 · GF 4"},
  {w:"Nach etwa fünf Minuten", h:"Unbedenklich", p:"Dass sich ein Vater überhaupt in der Kabine aufhält, steht unter „unbedenklich“. Das beruhigt ihn mehr, als er erwartet hätte.", gf:"GF 2"},
  {w:"Der Vergleich", h:"Die Hälfte sah es anders", p:"Gut die Hälfte im Verein hat an denselben Stellen anders entschieden. Wer, erfährt er nicht. Umgekehrt wird auch er nicht erkannt.", gf:"GF 5"},
  {w:"Zum Schluss", h:"Wen er anrufen kann", p:"Ihm wird bewusst, dass er sich auch mit einer bloßen Beobachtung an den Kinderschutzbeauftragten wenden kann. Er merkt sich, wie er ihn erreicht.", gf:"GF 6"},
  {w:"Nächstes Trainertreffen", h:"Das Gespräch", p:"Er spricht die Umkleide an. Zwei andere haben dasselbe Szenario bearbeitet und waren ebenso unsicher. Das Team bespricht, wie es künftig damit umgeht."}
];

const STORIES = [
  {id:"US1", want:"möchte ich auf einen Blick sehen, welche Szenarien es gibt und worum es darin geht,", why:"damit ich eines auswählen kann, das zu meiner Situation passt.", r:["F02"]},
  {id:"US2", want:"möchte ich in einer Situation zwischen konkreten Handlungsmöglichkeiten wählen,", why:"damit ich das Einschätzen übe, statt Wissen zu lernen.", r:["F03","F05"]},
  {id:"US3", want:"möchte ich nach jeder Entscheidung nachlesen können, woran ich die Situation erkenne, wie ich mich absichere und was ich eigentlich in der Situation akut tun kann,", why:"damit ich in einer ähnlichen Situation im Training handeln kann.", r:["F06"]},
  {id:"US4", want:"möchte ich am Ende des Szenarios sehen, wie sich andere an den einzelnen Entscheidungspunkten entschieden haben,", why:"damit ich meine eigene Einschätzung einordnen kann.", r:["F10"]},
  {id:"US5", want:"möchte ich ein Szenario unterbrechen und später fortsetzen,", why:"damit ich es zwischen Arbeit und Training bearbeiten kann.", r:["F12","NF01"]},
  {id:"US6", want:"möchte ich ein Szenario ohne vorherige Erklärung oder Schulung starten und selbstständig bearbeiten können,", why:"damit ich es auch spontan und ohne Unterstützung nutzen kann.", r:["NF03","NF08"]},
  {id:"US7", want:"möchte ich am Ende sehen, an wen ich mich im Verein wenden kann,", why:"damit ich im Ernstfall nicht erst suchen muss.", r:["F08","F09"]},
  {id:"US8", want:"möchte ich nicht erkennbar sein,", why:"damit ich ehrlich antworten kann.", r:["NF04"]},
  {id:"US9", want:"möchte ich am Ende sehen, was an der Situation unbedenklich war und was nicht,", why:"damit ich ein Gefühl dafür bekomme, wo die Grenze verläuft.", r:["F07"]}
];

const UCFLOW = [
  {n:"1", w:"s", t:"zeigt die Ausgangssituation des Szenarios als kurzen Text."},
  {n:"2", w:"s", t:"zeigt den ersten Entscheidungspunkt mit einer Leitfrage und genau drei Handlungsoptionen."},
  {n:"3", w:"u", t:"wählt eine Handlungsoption."},
  {n:"4", w:"u", t:"kann in derselben Ansicht die fachliche Rückmeldung abrufen, gegliedert in Erkennen, Absichern und Handeln."},
  {n:"5", w:"u", t:"setzt das Szenario fort."},
  {n:"6", w:"s", t:"führt die Situation weiter und zeigt den nächsten Entscheidungspunkt. Der Fortgang ist festgelegt und hängt nicht von der gewählten Option ab."},
  {n:"↺", w:"loop", t:"Die Schritte 3 bis 6 wiederholen sich, bis kein weiterer Entscheidungspunkt folgt."},
  {n:"7", w:"s", t:"führt für jede durchlaufene Situation auf, welche Merkmale unbedenklich, klärungsbedürftig und grenzverletzend sind, auch nicht eingetretene. Die eigenen Entscheidungen werden diesen Stufen nicht zugeordnet."},
  {n:"8", w:"s", t:"zeigt, wie sich die übrigen Nutzenden an den einzelnen Entscheidungspunkten entschieden haben, als Anteil je Handlungsoption."},
  {n:"9", w:"s", t:"zeigt die Ansprechpersonen und Meldewege des Vereins mit Namen und Kontaktweg."},
  {n:"10", w:"u", t:"beendet das Szenario."},
  {n:"11", w:"s", t:"vermerkt den Durchlauf als abgeschlossen."}
];

/* Quellenarten: k = konversationell (Interview), a = analytisch (Literatur), s = synthetisch (User Story, Persona, Nutzungsszenario, Use Case) */
const REQS = [
  {id:"F01", p:"Muss", gf:"1", t:"Die Szenarien decken die in Kapitel 4.4 bestimmten Themenfelder des Trainingsalltags ab, insbesondere Situationen, die im Alltag mehrdeutig sind und keine eindeutige Handlungsantwort haben.", s:[["k","Interview T"],["k","Interview K"]]},
  {id:"F02", p:"Muss", gf:"1", t:"Der Prototyp zeigt eine Übersicht der verfügbaren Szenarien mit Themenfeld und kurzer Beschreibung, aus der frei ausgewählt werden kann.", s:[["s","US1"],["a","Sailer, 2016; zitiert nach Tolks et al., 2020, S. 701"]]},
  {id:"F03", p:"Muss", gf:"1", t:"Ein Szenario beginnt mit einer kurzen Ausgangssituation und führt über mehrere Entscheidungspunkte, an denen jeweils eine Leitfrage und genau drei Handlungsoptionen stehen.", s:[["s","US2"],["a","Ritterfeld et al., 2009, S. 694"]]},
  {id:"F04", p:"Muss", gf:"1", t:"Die Ausgangssituation eines Szenarios benennt die für die Einordnung nötigen Rahmenangaben, mindestens Altersgruppe, Ort und Vorgeschichte der Situation.", s:[["k","Interview K"]]},
  {id:"F05", p:"Muss", gf:"4", t:"Der Fortgang eines Szenarios ist festgelegt und hängt nicht von der gewählten Handlungsoption ab.", s:[["k","Interview K"],["a","Brackenridge & Fasting, 2005, S. 19"]]},
  {id:"F06", p:"Soll", gf:"3", t:"Nach jeder Entscheidung lässt sich eine fachliche Rückmeldung abrufen, gegliedert in Erkennen, Absichern und Handeln.", s:[["s","US3"],["a","Krauß et al., 2025, S. 13, 23"],["a","Palzkill, 2021, S. 198"],["a","Breuer & Bente, 2010, S. 16"]]},
  {id:"F07", p:"Muss", gf:"2", t:"Am Szenarioende führt der Prototyp auf, welche Situationsmerkmale unbedenklich, klärungsbedürftig und grenzverletzend sind, einschließlich nicht eingetretener Merkmale und ohne Bewertung der eigenen Entscheidung.", s:[["s","US9"],["k","Interview K"],["a","Schirrmacher GmbH, o. J."]]},
  {id:"F08", p:"Muss", gf:"6", t:"Am Szenarioende zeigt der Prototyp die Ansprechpersonen und Meldewege des Vereins mit Namen und Kontaktweg.", s:[["s","US7"],["k","Interview K"],["a","Rulofs, 2024, S. 140–141"]]},
  {id:"F09", p:"Soll", gf:"6", t:"Informationen zu einer offiziellen Melde- und Beratungsstelle sind an jedem Punkt der Nutzung abrufbar.", s:[["s","US7"],["a","Krauß et al., 2025, S. 20"]]},
  {id:"F10", p:"Muss", gf:"5", t:"Nach Abschluss aller Rückmeldungen zeigt der Prototyp, wie sich die übrigen Nutzenden je Entscheidungspunkt entschieden haben, dargestellt als Anteil je Handlungsoption, ohne Rangfolge und ohne Zuordnung zu Personen.", s:[["s","US4"],["k","Interview K"],["a","Wouters et al., 2013, S. 256–260"]]},
  {id:"F11", p:"Soll", gf:"5", t:"Liegen für einen Entscheidungspunkt zu wenige Entscheidungen anderer Nutzender vor, weist der Prototyp bei den betroffenen Punkten darauf hin und zeigt die übrigen regulär an.", s:[["s","Anhang 6 (Use Case)"]]},
  {id:"F12", p:"Muss", gf:"–", t:"Die Bearbeitung lässt sich jederzeit unterbrechen. Der Fortschritt wird auf dem Gerät gespeichert und die Bearbeitung setzt am zuletzt erreichten Entscheidungspunkt fort.", s:[["s","US5"],["s","Anhang 5 (Nutzungsszenario)"],["s","Anhang 6 (Use Case)"],["k","Interview T"]]},
  {id:"F13", p:"Kann", gf:"4", t:"Abgeschlossene Szenarien können erneut gestartet werden, sodass übrige Handlungsoptionen nachgelesen werden können.", s:[["a","Breuer & Bente, 2010, S. 12"]]},
  {id:"F14", p:"Kann", gf:"–", t:"Der Prototyp zeigt eine Übersicht über bearbeitete und offene Szenarien, ohne Punktestand und ohne Bestenliste.", s:[["a","Sailer & Homner, 2020, S. 99–101"]]},
  {id:"F15", p:"Soll", gf:"–", t:"Ansprechpersonen, Meldewege und Szenarien lassen sich ohne technische Kenntnisse aktualisieren und ergänzen.", s:[["a","Horch et al., 2024, S. 166"]]},
  {id:"NF01", p:"Muss", gf:"", t:"Ein vollständiger Durchlauf eines Szenarios dauert höchstens fünf Minuten.", s:[["k","Interview K"],["a","Stickel et al., 2025, S. 5"],["s","Anhang 5 (Nutzungsszenario)"],["s","Anhang 6 (Use Case)"]]},
  {id:"NF02", p:"Muss", gf:"", t:"Für die einzelnen Entscheidungen gibt es keine Zeitbegrenzung.", s:[["a","Stickel et al., 2025, S. 5"]]},
  {id:"NF03", p:"Muss", gf:"", t:"Der Prototyp ist ohne Einführung, Schulung oder anleitende Person nutzbar. Die Bedienung erklärt sich aus der Anwendung selbst.", s:[["s","US6"],["a","Carvalho et al., 2015, S. 179"]]},
  {id:"NF04", p:"Muss", gf:"", t:"Die getroffenen Entscheidungen sind weder für andere Nutzende noch für den Verein auf einzelne Personen rückführbar.", s:[["s","US8"],["k","Interview K"],["s","Anhang 5 (Nutzungsszenario)"]]},
  {id:"NF05", p:"Muss", gf:"", t:"Der Prototyp speichert den Bearbeitungsfortschritt und die eigenen Entscheidungen ausschließlich auf dem Endgerät. Zentral gespeichert wird je Entscheidungspunkt und Handlungsoption ausschließlich ein Zählwert. Personenbezogene Daten oder Kontaktdaten werden nicht erhoben.", s:[["k","Interview K"]]},
  {id:"NF06", p:"Muss", gf:"", t:"Situationsbeschreibungen und Rückmeldungen sind im Textumfang begrenzt und in der Sprache des Trainingsalltags formuliert. Fachbegriffe und die zugrunde liegenden Modelle erscheinen in der Anwendung nicht.", s:[["k","Interview K"],["a","Bittner et al., 2026, S. 341"],["a","Carvalho et al., 2015, S. 179"]]},
  {id:"NF07", p:"Muss", gf:"", t:"Die Darstellung der Szenarien ist schematisch gehalten.", s:[["a","Wouters et al., 2013, S. 258"]]},
  {id:"NF08", p:"Soll", gf:"", t:"Der Prototyp ist ohne Anmeldung und ohne Installationsaufwand über einen Browser auf dem Smartphone nutzbar.", s:[["s","US6"],["s","Anhang 3 (Persona A)"],["s","Anhang 5 (Nutzungsszenario)"]]},
  {id:"NF09", p:"Muss", gf:"", t:"Die Szenarien sind erfunden, aber realitätsnah. Reale Vorfälle aus dem Verein werden nicht abgebildet.", s:[["a","De Angeli et al., 2026, S. 480"]]},
  {id:"NF10", p:"Muss", gf:"", t:"Spielerische Elemente ordnen sich dem Inhalt unter. Eine Bewertung der eigenen Reaktion als richtig oder falsch findet nicht statt.", s:[["k","Interview K"],["a","Breuer & Bente, 2010, S. 14"],["a","Tolks et al., 2020, S. 704"]]},
  {id:"NF11", p:"Muss", gf:"", t:"Die Nutzung ist freiwillig und ohne Nachweis-, Abschluss- oder Fristenpflicht.", s:[["k","Interview K"],["a","Horch et al., 2024, S. 162–163"]]},
  {id:"NF12", p:"Kann", gf:"", t:"Die Pflege der Vereinsangaben ist ohne technische Kenntnisse möglich und nimmt pro Aktualisierung nur wenige Minuten in Anspruch.", s:[["a","Horch et al., 2024, S. 166"]]},
  {id:"NF13", p:"Soll", gf:"", t:"Der Szenarienbestand ist erweiterbar, ohne dass Aufbau oder Ablauf des Prototyps geändert werden müssen.", s:[["a","Glinz et al., 2024, S. 84"]]}
];

const CONFLICTS = [
  {t:"Tiefe gegen Kürze", l:{r:["F06","F07"], x:"Fachlich fundierte Rückmeldung und vollständige Einordnung"}, rr:{r:["NF01","NF06"], x:"Höchstens fünf Minuten, wenig Text"},
   res:"Abrufbarkeit: Vertiefendes erscheint nur auf Anforderung, das im Ernstfall Nötige steht immer da.", where:"gelöst in Kap. 4.6"},
  {t:"Austausch gegen Anonymität", l:{r:["F10"], x:"Sehen, wie andere im Verein entschieden haben"}, rr:{r:["NF04"], x:"Niemand ist auf einzelne Personen rückführbar"},
   res:"Anteile erscheinen erst ab einer Mindestzahl an Entscheidungen je Punkt (F11). Je kleiner das Team, desto wichtiger.", cost:"Den Schwellenwert kann erst der Betrieb im Verein festlegen.", where:"Kap. 4.6 und 6"},
  {t:"Datensparsamkeit gegen saubere Zählung", l:{r:["NF05"], x:"Fortschritt und Entscheidungen nur auf dem Gerät"}, rr:{r:["F10"], x:"Ein verlässlicher Zählwert je Option"},
   res:"Jeder lokale Durchlauf merkt sich, ob er schon gezählt wurde.", cost:"Gerätewechsel oder gelöschte Browserdaten setzen das zurück. Mehrfachzählungen sind nicht auszuschließen.", where:"Kap. 6"},
  {t:"Qualifikation gegen Engagement", l:{r:[], x:"Verbindliche Schulung hebt das Niveau im Trainerteam"}, rr:{r:[], x:"und verkleinert den Kreis derer, die sich engagieren"},
   res:"Freiwillig, ohne Nachweis, in wenigen Minuten (NF11, NF01). Ehrenamtliche lassen sich nicht über Zwang gewinnen.", cost:"Der Verein sieht nicht, wie viele Trainerinnen und Trainer er erreicht.", where:"Kap. 3.2 und 6 · Horch et al., 2024, S. 162–163, 177–178"},
  {t:"Aktuelle Kontakte gegen Pflegeaufwand", l:{r:["F08"], x:"Ansprechpersonen mit Namen und Kontaktweg"}, rr:{r:["F15","NF12"], x:"Pflege ohne technische Kenntnisse in wenigen Minuten"},
   res:"Zu pflegen sind nur Vereinsangaben und Szenarienbestand.", cost:"Hängt die Pflege an einer Person, droht dieselbe Abhängigkeit wie beim Schutzkonzept. Deshalb mindestens zwei Personen.", where:"Kap. 4.2 und 6"},
  {t:"Spiel gegen Ernst", l:{r:[], x:"Unterhaltung kann motivieren"}, rr:{r:["NF10"], x:"Bei diesem Thema darf nichts verharmlost werden"},
   res:"Spielelemente ordnen sich dem Inhalt unter. Keine Punkte, keine Bestenliste, kein Richtig oder Falsch.", cost:"Nach den Kriterien von Tolks ist der Prototyp damit kein Serious Game im engeren Sinn.", where:"Kap. 3.3 und 4.4"}
];

/* Klassendiagramm (Abb. 2, Anhang 7). Koordinaten im viewBox 0 0 1180 512, Kastenhöhe 52. */
const AREAS = {inhalt:"Inhalt", nutzung:"Nutzung", verein:"Vereinskontext"};
const AREA_NOTE = {inhalt:"redaktionell gepflegt", nutzung:"entsteht beim Bearbeiten", verein:"beim Einsatz hinterlegt"};
const CLASSES = [
  {id:"themenfeld", n:"Themenfeld", a:"inhalt", x:30, y:60, w:150, m:"Risikofeld, dem ein Szenario zugeordnet ist", at:["bezeichnung","herkunft"], r:["F01","F02"]},
  {id:"szenario", n:"Szenario", a:"inhalt", x:250, y:60, w:160, m:"Zusammenhängende Situationsfolge aus dem Trainingsalltag", at:["titel","kurzbeschreibung","ausgangssituation","trainingsphase"], r:["F01","F02","F03","F04","NF09"], evo:"g", en:"Die Groomingphase ist weggefallen, die Trainingsphase ist keine eigene Klasse mehr, sondern ein Attribut. Neu ist die Ausgangssituation mit Altersgruppe, Ort und Vorgeschichte (F04)."},
  {id:"merkmal", n:"Situationsmerkmal", a:"inhalt", x:30, y:240, w:170, m:"Einzelnes Merkmal des Szenarios mit seiner Einstufung", at:["beschreibung","stufe","eingetreten"], r:["F07"], evo:"n", en:"Neu. Die Ampelstufe hing im Entwurf an der Handlungsoption, also an der Wahl. Jetzt ordnet sie Merkmale der Situation ein, auch nicht eingetretene."},
  {id:"entscheidungspunkt", n:"Entscheidungspunkt", a:"inhalt", x:240, y:240, w:175, m:"Stelle im Szenario, an der die Situation anhält", at:["reihenfolge","situationstext","leitfrage"], r:["F03","F05"]},
  {id:"option", n:"Handlungsoption", a:"inhalt", x:520, y:240, w:135, m:"Eine der drei angebotenen Reaktionsmöglichkeiten", at:["text"], r:["F03","F13"], evo:"g", en:"Das Attribut einschätzung ist weg. Optionen werden nicht bewertet, und die Rückmeldung hängt nicht mehr an ihnen."},
  {id:"ampel", n:"Ampelstufe", st:"Wertevorrat", a:"inhalt", x:30, y:420, w:170, m:"Wertevorrat: unbedenklich, klärungsbedürftig, grenzverletzend", at:[], r:["F07"]},
  {id:"rueckmeldung", n:"Rückmeldung", a:"inhalt", x:240, y:420, w:140, m:"Fachliche Einordnung eines Entscheidungspunkts", at:["erkennen","absichern","handeln"], r:["F06"], evo:"g", en:"Hing im Entwurf an der Handlungsoption, jetzt am Entscheidungspunkt. Sie beschreibt die Situation, nicht die Wahl."},
  {id:"durchlauf", n:"Durchlauf", st:"lokal", a:"nutzung", x:730, y:60, w:160, m:"Eine Bearbeitung eines Szenarios, ausschließlich auf dem Endgerät gehalten", at:["status","fortschritt","begonnenAm","abgeschlossenAm","gezählt"], r:["F12","F13","F14","NF04","NF05"], evo:"g", en:"Wurde im Entwurf von einem Nutzerprofil gestartet. Jetzt lebt er nur auf dem Gerät. Das Attribut gezählt verhindert, dass ein Durchlauf doppelt in den Zähler eingeht."},
  {id:"entscheidung", n:"Entscheidung", st:"lokal", a:"nutzung", x:730, y:240, w:160, m:"Die an einem Entscheidungspunkt gewählte Option. Erhöht beim Abschluss den Zähler, ohne selbst übertragen zu werden.", at:[], r:["F10","NF04","NF05"], evo:"g", en:"Bleibt jetzt lokal. Zeitpunkt und Reihenfolge werden nicht mehr festgehalten."},
  {id:"spiegel", n:"Einschätzungsspiegel", st:"gemeinsam", a:"nutzung", x:720, y:420, w:175, m:"Vereinsweiter Zähler je Entscheidungspunkt und Handlungsoption", at:["anzahlProOption","anteilProOption","mindestanzahl"], r:["F10","F11"], evo:"g", en:"Im Entwurf «berechnet» und auf ein Trainerteam bezogen. Jetzt «gemeinsam» für den ganzen Verein und mit Mindestanzahl (F11)."},
  {id:"hilfe", n:"Hilfsangebot", a:"verein", x:990, y:60, w:165, m:"Überregionale, vereinsunabhängige Beratungsstelle", at:["bezeichnung","kontaktweg","erreichbarkeit"], r:["F09"]},
  {id:"ansprech", n:"Ansprechperson", a:"verein", x:990, y:240, w:165, m:"Vereinsintern benannte Person mit Meldeweg", at:["name","funktion","kontaktweg"], r:["F08"], evo:"g", en:"Das Attribut eskalationsebene ist mit der Entscheidung vom 01.09. entfallen."},
  {id:"verein", n:"Verein", a:"verein", x:955, y:420, w:150, m:"Einsatzkontext des Prototyps und Bezugsgruppe der Anteilswerte", at:["name"], r:["F10","NF13"], evo:"g", en:"Hatte im Entwurf Sparten und ein Trainerteam. Jetzt ist er nur noch die Bezugsgruppe für die Anteile."}
];
/* kind: a = gerichtete Assoziation, c = Komposition (Raute am ersten Punkt), d = Abhängigkeit */
const EDGES = [
  {f:"szenario", to:"themenfeld", k:"a", pts:[[250,86],[180,86]], l:"behandelt", lp:[215,79,"middle"], m:[["*",244,103,"end"],["1",186,103,"start"]], s:"Jedes Szenario behandelt genau ein Themenfeld."},
  {f:"szenario", to:"merkmal", k:"c", pts:[[280,112],[280,170],[115,170],[115,240]], l:"weist auf", lp:[198,163,"middle"], m:[["1",272,142,"end"],["1..*",123,234,"start"]], s:"Ein Szenario weist Situationsmerkmale auf, in der Vorlage zehn bis zwölf."},
  {f:"szenario", to:"entscheidungspunkt", k:"c", pts:[[360,112],[360,240]], l:"gliedert sich in", lp:[368,178,"start"], m:[["1",352,142,"end"],["2..*",368,234,"start"]], s:"Ein Szenario gliedert sich in mindestens zwei Entscheidungspunkte."},
  {f:"merkmal", to:"ampel", k:"d", pts:[[115,292],[115,420]], s:"Jedes Situationsmerkmal ist mit einer Ampelstufe eingestuft."},
  {f:"entscheidungspunkt", to:"rueckmeldung", k:"c", pts:[[290,292],[290,420]], l:"trägt", lp:[298,360,"start"], m:[["1",282,322,"end"],["1",282,414,"end"]], s:"Jeder Entscheidungspunkt trägt genau eine Rückmeldung."},
  {f:"entscheidungspunkt", to:"option", k:"c", pts:[[415,266],[520,266]], l:"stellt zur Wahl", lp:[467,257,"middle"], m:[["1",424,288,"middle"],["3",512,288,"end"]], s:"Jeder Entscheidungspunkt stellt genau drei Handlungsoptionen zur Wahl."},
  {f:"durchlauf", to:"szenario", k:"a", pts:[[730,86],[410,86]], l:"bearbeitet", lp:[570,79,"middle"], m:[["*",724,103,"end"],["1",416,103,"start"]], s:"Ein Durchlauf bearbeitet genau ein Szenario. Ein Szenario kann beliebig oft durchlaufen werden."},
  {f:"durchlauf", to:"entscheidung", k:"c", pts:[[810,112],[810,240]], l:"protokolliert", lp:[818,180,"start"], m:[["1",802,142,"end"],["*",818,234,"start"]], s:"Ein Durchlauf protokolliert die getroffenen Entscheidungen, nur auf dem Gerät."},
  {f:"entscheidung", to:"option", k:"a", pts:[[730,266],[655,266]], l:"wählt", lp:[692,259,"middle"], m:[["*",724,284,"end"],["1",661,284,"start"]], s:"Jede Entscheidung wählt genau eine Handlungsoption."},
  {f:"entscheidung", to:"spiegel", k:"d", pts:[[810,292],[810,420]], l:"«erhöht»", lp:[818,360,"start"], s:"Beim Abschluss erhöht eine Entscheidung den gemeinsamen Zähler, ohne selbst übertragen zu werden."},
  {f:"spiegel", to:"entscheidungspunkt", k:"a", pts:[[720,456],[395,456],[395,292]], l:"gilt für", lp:[560,449,"middle"], m:[["*",713,472,"end"],["1",402,306,"start"]], s:"Der Einschätzungsspiegel gilt jeweils für einen Entscheidungspunkt."},
  {f:"spiegel", to:"verein", k:"a", pts:[[895,456],[955,456]], l:"gilt im", lp:[925,477,"middle"], m:[["*",900,449,"start"],["1",950,449,"end"]], s:"Die Anteile gelten für den ganzen Verein, nicht pro Trainerteam."},
  {f:"durchlauf", to:"verein", k:"a", pts:[[890,100],[912,100],[912,395],[975,395],[975,420]], l:"findet statt im", lp:[918,330,"start"], m:[["*",897,116,"start"],["1",983,414,"start"]], s:"Jeder Durchlauf findet in genau einem Verein statt."},
  {f:"durchlauf", to:"hilfe", k:"d", pts:[[890,72],[990,72]], l:"ruft auf", lp:[950,65,"middle"], s:"Aus jedem Durchlauf lässt sich das Hilfsangebot aufrufen."},
  {f:"durchlauf", to:"ansprech", k:"d", pts:[[890,86],[935,86],[935,266],[990,266]], l:"zeigt", lp:[942,180,"start"], s:"Am Ende eines Durchlaufs werden die Ansprechpersonen gezeigt."},
  {f:"verein", to:"ansprech", k:"c", pts:[[1060,420],[1060,292]], l:"benennt", lp:[1068,350,"start"], m:[["1",1052,412,"end"],["1..*",1068,306,"start"]], s:"Ein Verein benennt mindestens eine Ansprechperson."}
];

const TAB8 = [
  ["Titel","Kurz und situationsbezogen, soll Interesse wecken.","Szenario"],
  ["Themenfeld","Zuordnung zu einem der Risikofelder.","Themenfeld"],
  ["Trainingsphase","Vor, im oder nach dem Training. Ordnet die Übersicht.","Szenario"],
  ["Kurzbeschreibung","Ein bis zwei Sätze, ohne den Verlauf vorwegzunehmen.","Szenario"],
  ["Ausgangssituation","Mindestens Altersgruppe, Ort und Vorgeschichte.","Szenario"],
  ["Entscheidungspunkte","Mehrere je Szenario, feste Reihenfolge, je ein Situationstext.","Entscheidungspunkt"],
  ["Leitfrage","Eine je Punkt, in der zweiten Person.","Entscheidungspunkt"],
  ["Handlungsoptionen","Genau drei, je ein Satz, keine offensichtlich falsch.","Handlungsoption"],
  ["Fachliche Rückmeldung","Je Punkt, Erkennen, Absichern, Handeln, höchstens drei Sätze je Abschnitt.","Rückmeldung"],
  ["Situationsmerkmale","Zehn bis zwölf, jede Stufe mindestens zweimal besetzt.","Situationsmerkmal"]
];

const INVENTORY = [
  {t:"Vor dem Heimspiel", f:"Umkleideräume und Duschen", ph:"vor", b:"Interview K; Schmitz et al. (2025, S. 78); Palzkill (2021, S. 194)", play:"s1"},
  {t:"Die Hilfestellung", f:"Körperkontakt und Hilfestellung", ph:"im", b:"Interview T; Palzkill (2021, S. 194); Götzl et al. (2025, S. 276)", play:"s2"},
  {t:"Der zuverlässige Co-Trainer", f:"Elternkontakt und Autofahrten", ph:"nach", b:"Interview T; Götzl et al. (2025, S. 277, 280); Brackenridge und Fasting (2005, S. 4)", play:"s3"},
  {t:"Die Auswechslung", f:"Sprache und Umgangston", ph:"im", b:"Interview K; Palzkill (2021, S. 194)"},
  {t:"Das Gespräch nach dem Abpfiff", f:"Einzelgespräche und Einzeltraining", ph:"nach", b:"Interview T; Palzkill (2021, S. 194); Götzl et al. (2025, S. 276)"},
  {t:"Die Zimmereinteilung", f:"Auswärtsfahrten, Turniere und Übernachtungen", ph:"nach", b:"Palzkill (2021, S. 194, 197); Schmitz et al. (2025, S. 78)"},
  {t:"Die Nachricht am Abend", f:"Digitale Kommunikation", ph:"nach", b:"Götzl et al. (2025, S. 277); Brackenridge und Fasting (2005, S. 4); Ohlert et al. (2018, S. 62)"},
  {t:"Der alte Bekannte in der Halle", f:"Gewachsene Gewohnheiten und Hausrecht", ph:"vor", b:"Interview K; Schmitz et al. (2025, S. 78)"},
  {t:"Der Hinweis im Trainerteam", f:"Beobachtungen ansprechen", ph:"vor", b:"Interview K; Palzkill (2021, S. 198)"},
  {t:"Mobbing im Team", f:"Grenzverletzungen zwischen Kindern und Jugendlichen", ph:"im", b:"Ohlert et al. (2018, S. 63); Rulofs (2024, S. 130–131)"}
];

/* Die drei ausgearbeiteten Szenarien, Anhang 8 bis 10 */
const SCEN = {
  s1:{ no:1, t:"Vor dem Heimspiel", f:"Umkleideräume und Duschen", ph:"vor dem Training",
    short:"Ein Vater bleibt in der Kabine, während sich die Kinder umziehen. Er gehört seit Jahren zum Verein und hilft regelmäßig aus.",
    age:"U12, gemischt, 10 bis 12 Jahre", place:"Kabine der Vereinshalle",
    hist:"Heimspieltag. Der Vater fährt seit zwei Jahren bei Auswärtsfahrten mit und verteilt vor den Spielen die Trikots. Eine Regel, wer sich während des Umziehens in der Kabine aufhalten darf, gibt es im Team nicht.",
    start:"Zwanzig Minuten vor dem Anpfiff. Deine U12 zieht sich in der Kabine um, du gehst die Aufstellung durch. Ein Vater, der seit zwei Jahren Fahrdienste übernimmt, steht mit dem Trikotsatz im Raum, unterhält sich mit zwei Jungen über deren Wochenende und wartet, bis alle ihre Nummer haben. Zwei Kinder ziehen sich in dem Moment um. Die Tür steht offen, draußen auf dem Gang laufen andere Eltern vorbei.",
    basis:"Interview K; Schmitz et al. (2025, S. 78); Palzkill (2021, S. 194)",
    eps:[
      {sit:"Der Vater bleibt stehen, während die beiden fertig werden. Ein Junge dreht sich zur Wand. Der Vater merkt es nicht und erzählt weiter.", q:"Wie verhältst du dich?",
       o:["Du bittest ihn, vor der Tür zu warten, und sagst dazu, dass das für alle Erwachsenen gilt, dich eingeschlossen.","Du sagst nichts, gehst aber zu den beiden Jungen hinüber und stellst dich so, dass du zwischen ihnen und dem Rest des Raumes stehst.","Du lässt die Situation laufen und sprichst ihn nach dem Spiel unter vier Augen an, weil du die Mannschaft kurz vor dem Anpfiff nicht verunsichern willst."],
       fb:["Nicht der Vater ist hier das Auffällige, sondern der fehlende Anlass: Er hat in dem Moment keine Aufgabe mehr im Raum. Das Zurückdrehen des Jungen ist das einzige Signal, das du bekommst, und es ist leicht zu übersehen.","Eine Regel, die für alle Erwachsenen gleich gilt, nimmt dir die Einzelfallentscheidung ab. Sie schützt auch dich, weil dann niemand fragen muss, warum ausgerechnet du dich in der Kabine aufhältst.","Sprich es im Moment an, nicht später. Kurz, sachlich und ohne Vorwurf. Wenn im Team keine Regel dazu existiert, ist das der eigentliche Punkt für die nächste Trainerbesprechung."]},
      {sit:"Zwei Wochen später spricht dich eine Mutter nach dem Training an. Ihre Tochter ziehe sich zu Hause um und wolle die Kabine nicht mehr betreten. Einen Grund nenne sie nicht. Die Mutter fragt dich, ob dir etwas aufgefallen sei.", q:"Was tust du?",
       o:["Du sagst, dass dir nichts aufgefallen ist, und bittest die Mutter, ihre Tochter zu fragen, ob es einen bestimmten Anlass gab.","Du fragst das Mädchen selbst, in Ruhe und ohne die anderen, ob es etwas gibt, das ihr in der Kabine unangenehm ist.","Du notierst dir, was die Mutter gesagt hat, und meldest die Beobachtung an den Kinderschutzbeauftragten weiter, ohne selbst nachzufragen."],
       fb:["Ein Kind, das einen Raum meidet und keinen Grund nennt, sagt damit schon etwas. Der Grund kann alles sein, von Scham über die eigene Entwicklung bis zu einem Vorfall. Beides ist möglich, und du weißt an dieser Stelle nicht, welches von beidem zutrifft.","Wenn du selbst nachfragst, dann so, dass es jemand mitbekommt: in der Halle, bei offener Tür, mit einer zweiten erwachsenen Person in Sicht- oder Hörweite.","Frag offen und ohne Vermutung im Satz, also nicht „hat dir jemand etwas getan“, sondern „was ist dir in der Kabine unangenehm“. Halte fest, wer dir was wann gesagt hat. Wenn du nach dem Gespräch unsicher bleibst, ist das der Punkt, an dem der Kinderschutzbeauftragte dazukommt."]},
      {sit:"Du bringst das Thema in der Trainerrunde auf. Ein Kollege, der seit 15 Jahren im Verein ist, winkt ab: Den Vater kenne man doch, der sei völlig in Ordnung, und wenn man jetzt anfange, jeden Helfer aus der Kabine zu schicken, könne man den Spielbetrieb gleich einstellen.", q:"Wie reagierst du?",
       o:["Du stimmst zu, dass es nicht um diesen Vater geht, und schlägst genau deshalb eine Regel vor, die für alle gilt und niemanden verdächtigt.","Du lässt es stehen, weil du dich mit dem Kollegen nicht anlegen willst, und hältst es in deiner eigenen Mannschaft künftig anders.","Du bittest den Kinderschutzbeauftragten, das Thema in der nächsten Sitzung anzusprechen, damit es nicht an dir hängen bleibt."],
       fb:["Das Argument „den kennen wir doch“ ist kein Argument über die Situation, sondern über eine Person. Genau diese Umkehrung ist der Punkt, an dem ein Team aufhört, über Regeln zu sprechen.","Eine Regel, die für alle gilt, macht die Diskussion unpersönlich. Du musst dann niemanden verdächtigen, um sie durchzusetzen, und niemand muss sich verteidigen.","Eine Regel bringt nur etwas, wenn sie ausgesprochen und den Eltern mitgeteilt wird. Halte das Ergebnis der Besprechung kurz schriftlich fest, und zwar dort, wo es auch neue Trainerinnen und Trainer finden."]}
    ],
    mk:[
      ["Ein Elternteil hält sich regelmäßig in der Halle auf und übernimmt Aufgaben.","ok",1],
      ["Die Kabinentür steht offen, andere Erwachsene gehen vorbei.","ok",1],
      ["Ein Kind dreht sich beim Umziehen zur Wand.","ok",1],
      ["Eine erwachsene Person hält sich ohne Aufgabe im Raum auf, während Kinder sich umziehen.","warn",1],
      ["Für die Kabine gibt es keine im Team abgestimmte Regel, jede und jeder handhabt es anders.","warn",1],
      ["Ein Kind meidet einen Raum und nennt dafür keinen Grund.","warn",1],
      ["Eine Beobachtung wird im Trainerteam mit dem Hinweis auf die Person abgetan.","warn",1],
      ["Eine erwachsene Person hat in der Umkleide das Handy in der Hand.","warn",0],
      ["In der Umkleide werden Fotos oder Videos aufgenommen.","crit",0],
      ["Eine erwachsene Person äußert sich über den Körper eines Kindes.","crit",0],
      ["Ein Kind wird gebeten, über einen Vorfall in der Kabine nichts zu sagen.","crit",0]
    ]},
  s2:{ no:2, t:"Die Hilfestellung", f:"Körperkontakt und Hilfestellung", ph:"im Training",
    short:"Beim Üben eines Sprungs ist Hilfestellung mit Körperkontakt nötig. Eine Turnerin weicht zurück, sagt aber nichts, und bittet später um eine Einheit allein.",
    age:"Turngruppe, 12 bis 14 Jahre", place:"Turnhalle, Gerätebahn am Sprungkasten",
    hist:"Du übernimmst die Gruppe seit vier Wochen vertretungsweise. Eine 13-Jährige arbeitet seit Wochen an einem Sprung, den sie ohne Hilfestellung noch nicht schafft. Ein zweiter Trainer betreut die andere Hälfte der Gruppe am anderen Hallenende.",
    start:"Stationsbetrieb, acht Kinder an der Bahn. Der Sprung verlangt, dass du am Rücken und am Oberschenkel fasst und mitdrehst, sonst kommt die Turnerin nicht sicher auf. Sie stellt sich seit zwei Wochen immer wieder neu hinten an, auch wenn sie schon dran war. Du hast bisher nichts dazu gesagt, weil es nach Ehrgeiz aussieht.",
    basis:"Interview T; Palzkill (2021, S. 194); Götzl et al. (2025, S. 276, 279)",
    eps:[
      {sit:"Beim dritten Versuch zuckt sie zurück, als du ansetzt, macht den Sprung dann aber trotzdem. Danach sagt sie nichts und stellt sich wieder an.", q:"Wie gehst du weiter vor?",
       o:["Du unterbrichst kurz und erklärst der ganzen Gruppe, wo du beim Helfen fasst und warum das nötig ist.","Du bietest ihr die Variante mit dem Kasten und der Weichbodenmatte an, bei der du nicht mitfassen musst.","Du machst weiter wie bisher, sagst ihr aber, dass sie jederzeit Bescheid geben kann, wenn ihr etwas unangenehm ist."],
       fb:["Ein Zurückzucken ist ein Signal, mehr aber auch nicht. Es kann Anspannung vor dem Sprung sein, eine schmerzende Stelle oder Unbehagen beim Angefasstwerden. Aussagekräftig wird es erst, wenn es sich wiederholt oder wenn nichts dazu gesagt wird.","Wer vorher ansagt, wo er fasst, macht den Griff überprüfbar. Das ist der einfachste Weg, dem Vorwurf zuvorzukommen, man habe irgendwo angefasst, wo man nicht hätte anfassen dürfen.","Sag den Griff an, bevor du ihn machst, und biete eine Variante an, die ohne Körperkontakt auskommt. Wenn dir dasselbe bei demselben Kind mehrfach auffällt, gehört das ins Trainerteam, auch wenn du es dir nicht erklären kannst."]},
      {sit:"Am Ende der Stunde fragt sie, ob sie freitags eine halbe Stunde früher kommen kann, um den Sprung mit dir allein zu üben. Vor den anderen sei ihr das zu langsam.", q:"Was antwortest du?",
       o:["Du sagst zu und legst die halbe Stunde so, dass die Gruppe vor ihr noch in der Halle ist.","Du sagst zu und schreibst vorher dem zweiten Trainer und ihren Eltern, worum es geht und wann ihr das macht.","Du sagst ab und richtest stattdessen im regulären Training eine Station ein, an der sie mit einer Partnerin üben kann."],
       fb:["Zusätzliches Einzeltraining ist im Sport normal und zugleich die Situation, über die Nähe am leichtesten entsteht. Entscheidend ist nicht, ob es stattfindet, sondern ob es sichtbar ist und wer davon weiß.","Zwei Angaben genügen: Wer weiß davon, und wer ist noch in der Halle. Fehlen beide, entsteht eine Situation, für die es hinterher keine Zeugen gibt, und das trifft dich genauso wie das Kind.","Leg die Einheit in ein Zeitfenster mit anderen Anwesenden und sag den Eltern und dem zweiten Trainer vorher Bescheid. Wenn im Verein keine Regel für Einzeltraining existiert, ist das eine Frage für den Kinderschutzbeauftragten und nicht für dich allein."]},
      {sit:"Beim Aufräumen erzählt der zweite Trainer, der frühere Übungsleiter habe das mit den Einzelstunden jahrelang so gemacht, freitags nach dem Training, und dabei die Hallentür zugemacht, damit niemand stört. Beschwert habe sich nie jemand.", q:"Wie gehst du damit um?",
       o:["Du sagst, dass du es anders handhabst, und nennst kurz den Grund.","Du fragst nach, wie das damals genau ablief, und behältst die Antwort zunächst für dich.","Du gibst die Beobachtung an den Kinderschutzbeauftragten weiter, ohne einen Vorwurf zu erheben."],
       fb:["Dass sich nie jemand beschwert hat, sagt nichts darüber, ob etwas passiert ist. Eine abgeschlossene Halle bei einem Einzeltraining ist unabhängig davon eine Bedingung, unter der niemand mehr etwas sehen kann.","Du bewertest hier keine Person, sondern eine Bedingung. Wer das so formuliert, kann es aussprechen, ohne jemanden zu beschuldigen.","Gib die Beobachtung weiter und beschreibe dabei die Umstände, nicht deine Vermutung. Das ist keine Meldung eines Verdachts, sondern der Hinweis auf eine Gepflogenheit, die geändert gehört."]}
    ],
    mk:[
      ["Hilfestellung mit Körperkontakt ist für den Bewegungsablauf nötig.","ok",1],
      ["Ein Kind sucht von sich aus wiederholt die Nähe zur trainierenden Person.","ok",1],
      ["Das Training findet in der Halle statt, eine zweite erwachsene Person ist anwesend.","ok",1],
      ["Der Griff wird weder angekündigt noch erklärt.","warn",1],
      ["Ein Kind reagiert körperlich abwehrend und sagt nichts dazu.","warn",1],
      ["Eine Einheit außerhalb der regulären Trainingszeit wird verabredet.","warn",1],
      ["Für Einzeltraining gibt es im Verein keine Regel.","warn",1],
      ["Eine gewachsene Gepflogenheit wird damit begründet, dass sich nie jemand beschwert hat.","warn",1],
      ["Eine Verabredung bleibt zwischen zwei Personen, ohne dass jemand davon weiß.","warn",0],
      ["Die Halle wird während eines Einzeltrainings abgeschlossen.","crit",0],
      ["Die Hilfestellung wird fortgesetzt, obwohl ein Kind sie ausdrücklich ablehnt.","crit",0],
      ["Der Körper eines Kindes wird vor der Gruppe bewertet.","crit",0]
    ]},
  s3:{ no:3, t:"Der zuverlässige Co-Trainer", f:"Elternkontakt und Autofahrten", ph:"nach dem Training",
    short:"Ein Co-Trainer kümmert sich auffällig um einen einzelnen Spieler. Die Mutter ist dankbar, im Team gilt er als Glücksfall.",
    age:"U15 männlich, 13 bis 15 Jahre", place:"Sportgelände, Kabine und Parkplatz",
    hist:"Seit der Saisonvorbereitung hilft ein 24-jähriger Co-Trainer, der selbst im Verein groß geworden ist. Er ist zuverlässig und bei den Jungen beliebt. Einen 14-jährigen Spieler, dessen Mutter im Schichtdienst arbeitet, fährt er nach dem Training regelmäßig nach Hause. Die Mutter hat sich bei dir dafür bedankt.",
    start:"Dienstagabend, das Training ist zu Ende, ihr räumt die Tore weg. Der Co-Trainer erzählt dir nebenbei, er habe dem Jungen seine alten Schuhe geschenkt, die passten ihm genau, und sie seien danach noch eine Pizza essen gewesen, zu Hause sei ja ohnehin niemand.",
    basis:"Götzl et al. (2025, S. 277, 280); Interview T; Brackenridge und Fasting (2005, S. 4)",
    eps:[
      {sit:"Er erzählt das offen und ohne jede Verlegenheit. Aus seiner Sicht hat er einem Jungen geholfen, dem sonst niemand hilft.", q:"Wie reagierst du?",
       o:["Du sagst, dass du das gut findest, und bittest ihn, solche Sachen künftig vorher in der Trainerrunde anzusprechen.","Du fragst nach, ob die Mutter davon weiß und einverstanden war.","Du bringst Fahrdienste, Geschenke und private Treffen beim nächsten Trainertreffen allgemein zur Sprache, ohne den Fall zu nennen."],
       fb:["Jeder einzelne Punkt hier ist harmlos: Schuhe weitergeben, jemanden mitnehmen, etwas essen gehen. Auffällig ist die Häufung auf ein einzelnes Kind und dass alles außerhalb des Trainings stattfindet.","Wer Zuwendung über den Verein laufen lässt statt privat, kommt gar nicht erst in die Lage, sie erklären zu müssen. Ausrüstung geht an die Mannschaft, nicht an ein Kind.","Sprich es an, solange es klein ist. Je später du es ansprichst, desto mehr klingt es nach einem Vorwurf. Und halte fest, wann dir was erzählt wurde."]},
      {sit:"In den Wochen danach fällt dir auf, dass der Junge in der Kabine kaum noch mit den anderen redet und sich vor allem an den Co-Trainer hält. Bei einer Auswechslung nimmt der ihn ausdrücklich vor der Mannschaft in Schutz. Die Mutter schreibt dir, wie gut ihm der Kontakt tue.", q:"Was tust du?",
       o:["Du suchst ein Gespräch mit dem Jungen und fragst, wie es ihm in der Mannschaft geht.","Du sprichst den Co-Trainer auf das an, was dir aufgefallen ist.","Du hältst deine Beobachtungen mit Datum fest und wendest dich an den Kinderschutzbeauftragten."],
       fb:["Nicht die Zuwendung ist das Auffällige, sondern dass sich das Kind von den anderen löst und nur noch eine Bezugsperson hat. Dass die Mutter dankbar ist, macht Nachfragen schwerer und ist deshalb selbst Teil des Bildes.","Notiere, was du wann beobachtet hast, in eigenen Worten und ohne Bewertung. Das schützt dich davor, dich später auf Erinnerung verlassen zu müssen.","Du musst nicht entscheiden, ob etwas dahintersteckt. Das ist genau der Punkt, an dem der Kinderschutzbeauftragte gebraucht wird, und dafür reicht eine Beobachtung ohne Verdacht."]},
      {sit:"Der Co-Trainer fragt, ob er den Jungen und zwei weitere am Samstag privat zu einem Auswärtsspiel mitnehmen darf, mit dem eigenen Auto. Am Freitagabend sagen die beiden anderen ab.", q:"Wie entscheidest du?",
       o:["Du fährst selbst mit oder organisierst eine zweite erwachsene Person für die Fahrt.","Du sagst die Fahrt ab und begründest es damit, dass sie als Gruppenfahrt geplant war.","Du lässt die Fahrt zu und bittest darum, dass die Mutter über Abfahrt und Rückkehr informiert wird."],
       fb:["Eine Gruppenfahrt, die auf ein Kind zusammenschrumpft, ist keine Gruppenfahrt mehr. Der Anlass bleibt derselbe, die Bedingungen sind andere geworden.","Die einfachste Regel ist die, die keine Einzelfallabwägung braucht: keine Fahrt allein mit einem Kind. Sie nimmt auch dem Co-Trainer die Diskussion ab.","Entscheide vor der Fahrt und nicht danach. Wenn eine Regel dazu im Verein fehlt, ist das der Punkt, an dem sie entstehen sollte, und zwar für alle Mannschaften."]}
    ],
    mk:[
      ["Ein Co-Trainer übernimmt Fahrdienste, die Eltern wissen davon und sind einverstanden.","ok",1],
      ["Eine trainierende Person nimmt Anteil an der Lebenssituation eines Spielers.","ok",1],
      ["Gebrauchte Ausrüstung wird über den Verein an mehrere Kinder weitergegeben.","ok",0],
      ["Ein einzelnes Kind erhält Geschenke und Einladungen, die die anderen nicht bekommen.","warn",1],
      ["Der Kontakt findet regelmäßig außerhalb des Trainings und ohne weitere Anwesende statt.","warn",1],
      ["Ein Kind löst sich von der Mannschaft und hält sich nur noch an eine erwachsene Person.","warn",1],
      ["Die Dankbarkeit der Eltern macht das Nachfragen unangenehm.","warn",1],
      ["Eine als Gruppe geplante Fahrt schrumpft auf ein einzelnes Kind zusammen.","warn",1],
      ["Zwischen trainierender Person und Kind entsteht ein privater Nachrichtenkontakt, den sonst niemand sieht.","crit",0],
      ["Ein Kind übernachtet bei einer trainierenden Person oder wird mit nach Hause genommen.","crit",0],
      ["Ein Kind wird gebeten, etwas davon für sich zu behalten.","crit",0]
    ]}
};

const DECISIONS = [
  {w:"25.08.", t:"Die Rückmeldung bekommt eigene Namen", b:"Detektion · Schutz · Aktion", a:"Erkennen · Absichern · Handeln",
   p:"„Schutz“ meint im Eulenkodex von Uuugh den Selbstschutz potenziell Betroffener. Trainerinnen und Trainer brauchen etwas anderes: ein Verhalten, das nicht missverstanden werden kann. Das trifft ihre Sorge, selbst zu Unrecht beschuldigt zu werden."},
  {w:"26./27.08.", t:"Eingeordnet wird die Situation, nicht die Person", b:"Die eigene Entscheidung wird eingestuft", a:"Merkmale der Situation werden eingestuft",
   p:"Dieselbe Handlung ist je nach Kontext anders zu deuten, eine Reaktion lässt sich deshalb nicht auf einer festen Skala verorten. Ein einzelnes Merkmal in einer ausgeschriebenen Situation schon eher. Der Kinderschutzbeauftragte lehnt richtig oder falsch aus demselben Grund ab."},
  {w:"01.09.", t:"Die Eskalationsebenen fliegen raus", b:"Drei Ebenen von Kontaktpersonen", a:"Vereinsintern (F08) und extern (F09)",
   p:"Einzige Quelle war die 3D-Simulation, im Interview kam das Thema nicht vor, Ebene 1 lässt sich nicht als Kontakt pflegen, und die Wahl der passenden Ebene gehört zur Intervention. Die Zweiteilung trägt Rulofs (2024, S. 140–141)."},
  {w:"Anfang September", t:"Keine Benutzerkonten", b:"Pseudonymes Profil, Vergleich pro Trainerteam", a:"Durchläufe auf dem Gerät, Vergleich im ganzen Verein",
   p:"Mit einem Profil ist Nicht-Rückführbarkeit (NF04) schwer zu halten, und in einem kleinen Team verrät ein Anteilswert schnell, wer wie entschieden hat. Ohne Konten bleibt außerdem kaum etwas zu betreiben."},
  {w:"September", t:"Die Rückmeldung wandert zum Entscheidungspunkt", b:"Eine Rückmeldung je Handlungsoption", a:"Eine Rückmeldung je Entscheidungspunkt",
   p:"Sie soll beschreiben, woran die Situation zu lesen war, nicht ob die eigene Wahl korrekt war. Damit folgt sie derselben Logik wie die Auswertung am Ende."},
  {w:"September", t:"Klassendiagramm statt Domänenmodell", b:"„Domänenmodell“", a:"Konzeptionelles Klassendiagramm",
   p:"Der Begriff folgt der methodischen Quelle: Glinz et al. (2024) behandeln Klassendiagramme, zum Domänenmodell schreiben sie nichts. Gezeigt werden fachliche Bestandteile, keine Methoden, Sichtbarkeiten oder Datentypen."},
  {w:"September", t:"Technik bewusst offen", b:"Festlegung auf ein Framework", a:"Konzept ohne Technologiewahl",
   p:"Flutter Web habe ich mir angesehen. Die Ladegröße beim ersten Aufruf passt schlecht zur Nutzung ohne Hürden im Smartphone-Browser (NF08), und für eine textlastige Anwendung ist die Darstellung auf einer Canvas ungünstig. Die Arbeit legt sich auf keine Technologie fest. Kapitel 6 nennt nur eine Webanwendung mit Szenarien als einzelnen Dateien."},
  {w:"September", t:"Szenarien in den Anhang", b:"Ausformulierte Szenarien im Fließtext", a:"Vorlage und Bestand im Text, drei Szenarien im Anhang",
   p:"Platz. Kapitel 5 soll knapp bleiben und keine Begründungen aus Kapitel 3 und 4 wiederholen, sondern das Ergebnis zeigen. Die Szenarien stehen vollständig in Anhang 8 bis 10."}
];

const STRANDS = {
  prae:{n:"Sexualisierte Gewalt und Prävention", sn:"Prävention", c:"s-prae"},
  best:{n:"Bestehende Angebote", sn:"Bestehende Angebote", c:"s-best"},
  sg:{n:"Serious Games und Gamification", sn:"Serious Games", c:"s-sg"},
  meth:{n:"Methodik und Requirements Engineering", sn:"Methodik", c:"s-meth"},
  ver:{n:"Verein und Ehrenamt", sn:"Verein und Ehrenamt", c:"s-ver"}
};

const SOURCES = [
  {k:"Al Mrayat et al.", y:2013, s:"meth", ty:"Zeitschrift", au:"Al Mrayat, O. I., Md Norwawi, N. & Basir, N.", ti:"Requirements elicitation techniques: comparative study", ve:"International Journal of Recent Development in Engineering and Technology, 1 (3), 1–10", ro:"Vier Kategorien von Erhebungstechniken und Requirements Engineering als iterativer Prozess. Daraus die drei Quellenarten der Anforderungen."},
  {k:"Bange", y:2018, s:"prae", ty:"Sammelband", au:"Bange, D.", ti:"Risiko- und Schutzfaktoren in Einrichtungen", ve:"In J. Fegert et al. (Hrsg.), Schutz vor sexueller Gewalt und Übergriffen in Institutionen (S. 91–105). Berlin: Springer", ro:"Risikofaktoren auf Ebene der Mitarbeitenden, etwa fehlende Streitkultur im Team. Das ist der Bereich, den Trainerinnen und Trainer selbst beeinflussen können."},
  {k:"Bittner et al.", y:2026, s:"best", ty:"Konferenzband", au:"Bittner, J., Hoffmann, G., Hoffmann, U. & Fegert, J. M.", ti:"„Uuugh – False Play“ – a serious game to teach detection and prevention of perpetrator strategies", ve:"In Games and Learning Alliance, GALA 2025, LNCS 16307 (pp. 334–343). Cham: Springer", ro:"Entstehung, Täterperspektive und Vorevaluation von Uuugh. Die Textlastigkeit als Limitation führt direkt zu NF06.", r:["NF06"]},
  {k:"Brackenridge & Fasting", y:2005, s:"prae", ty:"Zeitschrift", au:"Brackenridge, C. H. & Fasting, K.", ti:"The grooming process in sport: narratives of sexual harassment and abuse", ve:"Auto/Biography, 13 (1) [elektronische Quelle]", ro:"Kontinuum, Phasenmodell des Groomings und der Kernbefund zur Mehrdeutigkeit. Dazu die Sorge von Trainern, selbst fälschlich beschuldigt zu werden.", r:["F05"], sc:["s3"], via:"Kelly (1987), Brackenridge (2001), Leberg (1997), Bringer et al. (2002)"},
  {k:"Breuer & Bente", y:2010, s:"sg", ty:"Zeitschrift", au:"Breuer, J. & Bente, G.", ti:"Why so serious? On the relation of serious games and learning", ve:"Eludamos. Journal for Computer Game Culture, 4 (1), 7–24", ro:"Begriffe rund um Serious Games, die drei Paradigmen, das optimale Maß an Unterhaltung und Pull statt Push.", r:["F06","F13","NF10"], via:"Abt (1975), Michael & Chen (2006), Ritterfeld & Weber (2006), Charsky & Mims (2008)"},
  {k:"Carvalho et al.", y:2015, s:"sg", ty:"Zeitschrift", au:"Carvalho, M. B., Bellotti, F., Berta, R., De Gloria, A., Islas Sedano, C., Baalsrud Hauge, J. et al.", ti:"An activity theory-based model for serious games analysis and conceptual design", ve:"Computers & Education, 87, 166–181", ro:"Spielen, Lernen und Anleitung haben je eigene Motive. Dazu die Warnung, dass viele Kategorien Laien überfordern.", r:["NF03","NF06"]},
  {k:"De Angeli et al.", y:2026, s:"meth", ty:"Konferenzband", au:"De Angeli, D., Finnegan, D. J. & Scott, L.", ti:"An integrative process for making serious games", ve:"In Games and Learning Alliance, GALA 2025, LNCS 16307 (pp. 478–483). Cham: Springer", ro:"Co-Discovery, Co-Design, Co-Evaluation als Prozessrahmen der Arbeit. Und: Mit erfundenen Szenarien muss niemand eigene Erlebnisse offenlegen.", r:["NF09"]},
  {k:"Dell’Era et al.", y:2025, s:"meth", ty:"Zeitschrift", au:"Dell’Era, C., Magistretti, S., Candi, M., Bianchi, M., Calabretta, G., Stigliani, I. et al.", ti:"Design thinking in action: a quantitative study of design thinking practices in innovation projects", ve:"Journal of Knowledge Management, 29 (11), 32–58", ro:"221 Innovationsprojekte zeigen: erst Problem und Bedürfnisse, dann Lösung. Begründet die Reihenfolge in Kapitel 4 und ist zugleich der Maßstab für meinen eigenen Fehler in den Interviews."},
  {k:"Deterding et al.", y:2011, s:"sg", ty:"Konferenzband", au:"Deterding, S., Dixon, D., Khaled, R. & Nacke, L.", ti:"From game design elements to gamefulness: defining „gamification“", ve:"In Proceedings of the 15th International Academic MindTrek Conference (pp. 9–15). New York: ACM", ro:"Die Standarddefinition von Gamification und die Abgrenzung zu Serious Games: einzelne Elemente statt ganzes Spiel."},
  {k:"Fegert, Kölch & Kliemann", y:2018, s:"prae", ty:"Sammelband", au:"Fegert, J., Kölch, M. & Kliemann, A.", ti:"Kinderschutz in Institutionen – eine Einführung", ve:"In J. Fegert et al. (Hrsg.), Schutz vor sexueller Gewalt und Übergriffen in Institutionen (S. 3–9). Berlin: Springer", ro:"Schutzkonzept als Zusammenspiel aus Analyse, Struktur, Vereinbarungen und Haltung, das „mehr Handlungssicherheit“ vermitteln soll.", via:"Rörig (2015), UBSKM (2015a)"},
  {k:"Glinz et al.", y:2024, s:"meth", ty:"Handbuch", au:"Glinz, M., van Loenhoud, H., Staal, S. & Bühne, S.", ti:"Foundation Level. Handbuch [IREB Certified Professional for Requirements Engineering] (Version 1.2.0)", ve:"Karlsruhe: International Requirements Engineering Board", ro:"Das methodische Gerüst: Stakeholder, Personas, Szenarien, User Storys, Use Case, Anforderungsarten, MoSCoW, Zielkonflikte und die Notation aller drei Abbildungen.", r:["NF13"], via:"Cohn (2004)"},
  {k:"Götzl et al.", y:2025, s:"prae", ty:"Zeitschrift", au:"Götzl, C., Pichlmeier, S., Streb, J. & Dudeck, M.", ti:"Perspektiven von (potenziellen) Täter*innen und Therapierenden auf Täter*innenstrategien, begünstigende und hemmende Faktoren für sexuelle Gewalt in jugendorientierten Organisationen in Deutschland", ve:"Forensische Psychiatrie, Psychologie, Kriminologie, 19, 270–289", ro:"Täterstrategien aus der umgekehrten Perspektive. Beobachtet-Sein als stärkster hemmender Faktor, Kontakt zu den Eltern als Strategie.", sc:["s2","s3"]},
  {k:"Horch et al.", y:2024, s:"ver", ty:"Buch", au:"Horch, H.-D., Schubert, M. & Walzel, S.", ti:"Besonderheiten der Sportbetriebslehre (2. Aufl.)", ve:"Wiesbaden: Springer Gabler", ro:"Vereinsmitglieder in vier Rollen, Anreize im Ehrenamt, Personalisierung von Aufgaben und das Qualifikationsproblem freiwilliger Vereinigungen.", r:["F15","NF11","NF12"]},
  {k:"Kliemann", y:2018, s:"prae", ty:"Sammelband", au:"Kliemann, A.", ti:"Umgang mit sexualisierter Gewalt in Institutionen – Theorie und Praxis", ve:"In J. Fegert et al. (Hrsg.), Schutz vor sexueller Gewalt und Übergriffen in Institutionen (S. 261–268). Berlin: Springer", ro:"Die Leitlinien von 2011 richteten sich auch an rund 91.000 Sportvereine.", via:"UBSKM (2011)"},
  {k:"Krauß et al.", y:2025, s:"best", ty:"Broschüre", au:"Krauß, A., Stickel, M. & Bittner, J.", ti:"Uuugh – Falsches Spiel. Eine Begleitbroschüre zur Arbeit mit Jugendlichen ab 12 Jahren", ve:"Ulm: Universitätsklinikum Ulm (digitale Fassung)", ro:"Die acht Strategien, der Eulenkodex mit Detektion, Schutz und Aktion und der dauerhaft sichtbare Notausgang.", r:["F06","F09"]},
  {k:"Ohlert et al.", y:2018, s:"prae", ty:"Zeitschrift", au:"Ohlert, J., Seidler, C., Rau, T., Rulofs, B. & Allroggen, M.", ti:"Sexual violence in organized sport in Germany", ve:"German Journal of Exercise and Sport Research, 48, 59–68", ro:"Die Zahlen am Anfang der Argumentation: 37,6 % Lebenszeitprävalenz und 81 % erwachsene Betreuungspersonen unter den Täterinnen und Tätern."},
  {k:"Palzkill", y:2021, s:"prae", ty:"Sammelband", au:"Palzkill, B.", ti:"Sexualisierte Gewalt im Sport", ve:"In I. Menrath et al. (Hrsg.), Pädiatrische Sportmedizin (S. 193–199). Berlin: Springer", ro:"Definition, sportspezifische Risikofaktoren, vier Präventionsbausteine, fünf Neutralisierungsstrategien und Leitlinien für den Verdachtsfall.", r:["F06"], sc:["s1","s2"], via:"Klein & Palzkill (1998), Rulofs & Palzkill (2018), Herrmann et al. (2016)"},
  {k:"Pan et al.", y:2026, s:"meth", ty:"Zeitschrift", au:"Pan, Y., Tseng, C.-Y., Ketterlin-Geller, L. R., Larson, E. C. & Clark, C.", ti:"Teachers as informants in participatory design for digital game-based learning", ve:"Technology, Knowledge and Learning, 31, 453–477", ro:"Beteiligungsstufen von Nutzenden bis Design Partner. Die Befragten wirken als Informanten.", via:"Druin (2002), Scaife et al. (1997)"},
  {k:"Podsakoff et al.", y:2003, s:"meth", ty:"Zeitschrift", au:"Podsakoff, P. M., MacKenzie, S. B., Lee, J.-Y. & Podsakoff, N. P.", ti:"Common method biases in behavioral research: a critical review of the literature and recommended remedies", ve:"Journal of Applied Psychology, 88, 879–903", ro:"Daten aus unterschiedlichen Quellen als ein Mittel gegen methodenbedingte Verzerrungen."},
  {k:"Ritterfeld et al.", y:2009, s:"sg", ty:"Zeitschrift", au:"Ritterfeld, U., Shen, C., Wang, H., Nocera, L. & Wong, W. L.", ti:"Multimodality and interactivity: connecting properties of serious games with educational outcomes", ve:"CyberPsychology & Behavior, 12, 691–697", ro:"Interaktivität und Multimodalität wirken einzeln, aber kaum auf prozessbezogenes Wissen. Deshalb Entscheidungspunkte statt Wissensabfrage.", r:["F03"]},
  {k:"Rulofs", y:2024, s:"ver", ty:"Sammelband", au:"Rulofs, B.", ti:"Herausforderungen für das Management von Sportorganisationen im Kontext von Safe Sport", ve:"In A. Behrens et al. (Hrsg.), Entwicklungstendenzen im Sportmanagement (S. 129–149). Wiesbaden: Springer Gabler", ro:"Vier-Ebenen-Modell, die Safe-Sport-Zahlen zu Vereinen und die Bedingungen des Ehrenamts. Trägt die Zweiteilung in Ansprechperson und externe Beratung.", r:["F08"], via:"Wolff (2015), Hartmann-Tews et al. (2016), Rulofs et al. (2022a)"},
  {k:"Sailer & Homner", y:2020, s:"sg", ty:"Zeitschrift", au:"Sailer, M. & Homner, L.", ti:"The gamification of learning: a meta-analysis", ve:"Educational Psychology Review, 32, 77–112", ro:"Belastbar ist vor allem der Effekt auf Wissen. Wettbewerb mit Kooperation schneidet besser ab als reiner Wettbewerb. Deshalb keine Bestenliste.", r:["F14"], via:"Rigby & Ryan (2011)"},
  {k:"Salzmann", y:2020, s:"meth", ty:"Dissertation", au:"Salzmann, E. C.", ti:"Design Thinking und Innovationskultur in der Industrie: Eine empirische Untersuchung", ve:"Dissertation, Technische Universität Darmstadt", ro:"Die fünf Design-Thinking-Praktiken nach Carlgren et al. als Raster für das eigene Vorgehen (Tab. 2).", via:"Carlgren et al. (2016b)"},
  {k:"Schirrmacher GmbH", y:null, s:"best", ty:"Website", au:"Schirrmacher GmbH", ti:"3D-Online-Simulation: Prävention sexualisierter Gewalt", ve:"o. J., Website des Anbieters", ro:"Skala von grün bis rot statt richtig oder falsch, Timing als Lernziel und drei Ebenen von Kontaktpersonen.", r:["F07"]},
  {k:"Schmitz et al.", y:2025, s:"best", ty:"Zeitschrift", au:"Schmitz, H., Söllinger, A. & Ohlert, J.", ti:"Prävention von sexualisierter Gewalt im Sport: Vorstellung des Projekts Safe Clubs", ve:"FORUM Sexualaufklärung und Familienplanung, 1, 75–80", ro:"Das Projekt Safe Clubs und sein Fragenkatalog mit acht Themenblöcken als Vorlage für die Themenfelder.", sc:["s1"], via:"Rulofs et al. (2022)"},
  {k:"Stickel et al.", y:2025, s:"prae", ty:"Zeitschrift", au:"Stickel, M., Bittner, J., Fabry, C., Fegert, J. M., Hoffmann, U., Krauß, A. et al.", ti:"Prävention von (sexualisierter) Gewalt im Ehrenamt. Entwicklung und Evaluation eines Online-Kurses", ve:"Prävention und Gesundheitsförderung [elektronische Quelle]", ro:"Der größte Effekt bei der Selbstwirksamkeit, Abbruch überwiegend aus Zeitmangel. Deshalb kurze Durchläufe ohne Zeitlimit.", r:["NF01","NF02"]},
  {k:"Tolks et al.", y:2020, s:"sg", ty:"Zeitschrift", au:"Tolks, D., Lampert, C., Dadaczynski, K., Maslon, E., Paulus, P. & Sailer, M.", ti:"Spielerische Ansätze in Prävention und Gesundheitsförderung: Serious Games und Gamification", ve:"Bundesgesundheitsblatt, 63, 698–707", ro:"Die vier Kriterien für Serious Games, die Selbstbestimmungstheorie und das Risiko, dass Spielelemente den Inhalt überlagern.", r:["F02","NF10"], via:"Tolks & Lampert (2016), Sailer (2016), Ryan & Deci (2000), Werbach & Hunter (2012), Landers & Landers (2014), Lu & Kharrazi (2018)"},
  {k:"Wouters et al.", y:2013, s:"sg", ty:"Zeitschrift", au:"Wouters, P., van Nimwegen, C., van Oostendorp, H. & van der Spek, E. D.", ti:"A meta-analysis of the cognitive and motivational effects of serious games", ve:"Journal of Educational Psychology, 105, 249–265", ro:"Besserer Lernerfolg, aber keine höhere Motivation. Spielen in Gruppen etwa dreifach vorteilhafter, schematisch schlägt realistisch.", r:["F10","NF07"]}
];
