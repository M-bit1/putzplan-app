# Putzplan – Versionen

Schema: **Hauptversion.Funktion.Korrektur**
- Hauptversion: grundlegender Umbau (neues Design, neue Datenstruktur, Datenmigration)
- Funktion: neue Funktion oder geändertes Verhalten
- Korrektur: Fehlerbehebung, Text- oder kleine optische Anpassung

Steigt eine Stelle, werden die folgenden auf 0 gesetzt. Bei gemischten Updates zählt die größte Änderung.

## 1.4.0 – 22.11.2026
- Plan optimieren richtet den nächsten Termin am letzten tatsächlichen Putzen aus (frühestens nach ¾ Intervall, keine aufeinanderfolgenden Wochen bei 2-wöchentlich)
- Vorziehen ersetzt nur den nächstliegenden Termin
- Korrektur: Termin ging nach Vorziehen mit direkter Umplanung verloren
- Neu: Anzeige „Nächste: KW …“ je Tätigkeit
- Neu: Versionsanzeige im Reiter Aufgaben

## 1.3.0 – 08.11.2026
- Nach verspätetem oder vorgezogenem Erledigen wird der Plan automatisch neu verteilt (laufende Woche bleibt unverändert)

## 1.2.0 – 08.11.2026
- „Plan optimieren“ über einen Planungshorizont (Standard 25 Wochen), jahresübergreifend, laufende Woche bleibt unverändert
- Gemessene Dauer (Ø der letzten 5 Erfassungen) fließt in die Planung ein

## 1.1.0 – 08.11.2026
- Planstart, überfällige Aufgaben (gelb/rot), Bereich „Erledigt“, zusätzliche Tätigkeiten
- Personen mit Kürzeln, Standard- und Wochenzuteilung, Erledigt-Dialog mit Zeit und Personen
- Rhythmus passt sich an Verschieben/Vorziehen an, Jahreszusammenfassung
- Optimal verteilen nach Wochendauer; Service Worker lädt Updates sofort

## 1.0.0 – vor dem 08.11.2026
- App für iPhone (GitHub Pages) mit Firebase-Synchronisation über Haushalts-Code
- Reiter Woche, Jahr, Aufgaben
