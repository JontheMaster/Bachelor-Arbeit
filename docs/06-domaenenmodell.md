# Domänenmodell

Ausgekoppelt aus der [Projektdokumentation](projektdokumentation.md). Stand 27.08.2026. Der Mermaid-Quelltext steht zusätzlich in [domaenenmodell.mmd](domaenenmodell.mmd), die ausführliche Fassung mit Notationslegende, Klassentabellen und Rückbindung auf der Seite `domaenenmodell.html`.

Sechzehn Klassen in drei Bereichen. Ausführliche Erläuterung, Notation, Klassentabellen und Rückbindung an die Anforderungen auf der verlinkten Seite.

**Grundidee:** Inhalt (redaktionell gepflegt) ist vom Vereinskontext (konfigurierbar) getrennt. Beim Einsatz in einem anderen Verein werden nur Ansprechpersonen und Trainerteams ausgetauscht, die Szenarien bleiben unverändert. Bewusste Gestaltungsentscheidung, Beleg für NF11 und Argument für Kapitel 6.

**Inhalt:** Szenario, Themenfeld, Entscheidungspunkt, Handlungsoption, Rückmeldung, sowie die Wertevorräte Trainingsphase, Groomingphase und Ampelstufe.
**Nutzung:** Nutzerprofil, Durchlauf, Entscheidung, Einschätzungsspiegel (berechnet).
**Vereinskontext:** Verein, Trainerteam, Ansprechperson, Hilfsangebot.

```
classDiagram
    direction LR

    class Szenario {
        titel
        kurzbeschreibung
        trainingsphase
        groomingphase
    }
    class Themenfeld {
        bezeichnung
        herkunft
    }
    class Entscheidungspunkt {
        reihenfolge
        situationstext
        leitfrage
    }
    class Handlungsoption {
        text
        einschätzung
    }
    class Rückmeldung {
        erkennen
        absichern
        handeln
        quelle
    }
    class Trainingsphase {
        <<enumeration>>
        vor dem Training
        im Training
        nach dem Training
    }
    class Groomingphase {
        <<enumeration>>
        Auswahl
        Vertrauensaufbau
        Isolation und Kontrolle
        Übergriff und Geheimhaltung
    }
    class Ampelstufe {
        <<enumeration>>
        unbedenklich
        klärungsbedürftig
        grenzverletzend
    }
    class Nutzerprofil {
        pseudonym
        rolle
        sparte
    }
    class Durchlauf {
        begonnenAm
        status
        fortschritt
        abgeschlossenAm
    }
    class Entscheidung {
        zeitpunkt
        reihenfolge
    }
    class Einschätzungsspiegel {
        <<berechnet>>
        bezugspunkt
        bezugsgruppe
        anteilProOption
    }
    class Verein {
        name
        sparten
    }
    class Trainerteam {
        bezeichnung
        altersklasse
    }
    class Ansprechperson {
        name
        funktion
        kontaktweg
        eskalationsebene
    }
    class Hilfsangebot {
        bezeichnung
        kontakt
        überregional
    }

    Szenario "*" --> "1..*" Themenfeld : behandelt
    Szenario "1" *-- "2..*" Entscheidungspunkt : gliedert sich in
    Entscheidungspunkt "1" *-- "3" Handlungsoption : bietet an
    Handlungsoption "1" *-- "1" Rückmeldung : trägt
    Handlungsoption "1" --> "0..1" Entscheidungspunkt : führt zu
    Szenario ..> Trainingsphase
    Szenario ..> Groomingphase
    Handlungsoption ..> Ampelstufe

    Nutzerprofil "1" --> "*" Durchlauf : startet
    Durchlauf "*" --> "1" Szenario : bearbeitet
    Durchlauf "1" *-- "*" Entscheidung : protokolliert
    Entscheidung "*" --> "1" Handlungsoption : wählt
    Einschätzungsspiegel ..> Entscheidung : aggregiert
    Durchlauf ..> Hilfsangebot : Notausstieg

    Verein "1" *-- "1..*" Trainerteam : umfasst
    Verein "1" *-- "1..*" Ansprechperson : benennt
    Nutzerprofil "*" --> "1" Trainerteam : gehört zu
    Rückmeldung --> "1..*" Ansprechperson : verweist auf
```

**Zwei Punkte zum Abgleich mit Kapitel 4.6, offen:**

- `Handlungsoption.einschätzung` mit dem Wertevorrat `Ampelstufe` legt die Stufe an der **Option** fest. Kapitel 4.4.4 stuft aber ausdrücklich die **Merkmale der Situation** ein und nicht die Reaktion darauf. Das Modell sollte nachziehen: entweder eine eigene Klasse `Situationsmerkmal` mit Bezug zum Entscheidungspunkt und einer Ampelstufe, oder das Attribut an den Entscheidungspunkt verschieben. Empfehlung: eigene Klasse, weil F05 ausdrücklich auch nicht eingetretene Merkmale verlangt, die an keiner gewählten Option hängen.
- `Einschätzungsspiegel` braucht ein Attribut für die Mindestzahl vorliegender Entscheidungen, sonst ist F09 nicht modelliert.

**Geändert am 25.08.2026:** Die Attribute der Klasse `Rückmeldung` heißen `erkennen`, `absichern`, `handeln` statt `detektion`, `schutz`, `aktion`, passend zur Umdeutung in Kapitel 4.4.5. Falls ein Renderer bei Umlauten in Klassennamen streikt: `Rueckmeldung` und `Einschaetzungsspiegel` schreiben.
