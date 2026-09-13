# Wirtschaftliche Daten – ELDS

ELDS ist als mittelständische Unternehmensgruppe mit mehreren spezialisierten Gesellschaften organisiert. Wirtschaftliche Kennzahlen müssen deshalb nach Organisationsebene unterschieden werden.

## Abgrenzung

Folgende Ebenen sind nicht gleichzusetzen:

**ELDS GmbH ≠ ELDS Gruppe ≠ ELDS CONSULT**

Ein Umsatz einer einzelnen Gesellschaft entspricht daher nicht automatisch dem Konzern- beziehungsweise Gruppenumsatz.

## Wirtschaftliche Ausgangslage für den Hackathon

Für die Analyse gelten folgende Annahmen:

- ELDS ist wirtschaftlich etabliert und seit 2009 am Markt.
- Die Gruppe beschäftigt rund 1.000 Personen.
- Das Geschäftsmodell kombiniert Projektgeschäft, Beratung, Anlagenbau, Betrieb und Energieversorgung.
- Investitionsintensive Projekte führen zu hohen Anforderungen an Finanzierung, Projektcontrolling und Risikomanagement.
- Unterschiedliche Business Units erzeugen heterogene Datenbestände und Geschäftsprozesse.
- Digitalisierung und Datenintegration sind deshalb gruppenweite Querschnittsthemen.

## Reale Referenzdaten: GP JOULE GmbH

Recherchestand: 12. September 2026. GP JOULE dient als reale Vorlage für das fiktive ELDS-Profil. Die folgenden Werte stammen aus dem Einzelabschluss der **GP JOULE GmbH, Reußenköge**. Sie sind weder konsolidierte Gruppenkennzahlen noch Finanzdaten von GP JOULE CONSULT und werden nicht als tatsächliche ELDS-Finanzdaten übernommen.

| Kennzahl | Wert | Geschäftsjahr | Nachweis |
|---|---:|---:|---|
| Jahresüberschuss | 213.516,83 € | 2024 | Jahresabschluss 2024, Gewinn- und Verlustrechnung [1] |
| Jahresüberschuss | 2.853.302,29 € | 2023 | Jahresabschluss 2023, S. 2–3 [2] |
| Bilanzsumme | 89.598.969,81 € | 2023 | Jahresabschluss 2023, S. 2 [2] |
| Eigenkapital | 43.644.218,41 € | 2023 | Jahresabschluss 2023, S. 2 [2] |
| Eigenkapitalquote | ca. 48,71 % | 2023 | Eigene Berechnung aus den Bilanzwerten [2] |

Berechnung der Eigenkapitalquote: 43.644.218,41 € / 89.598.969,81 € × 100 = rund 48,71 %.

Die Tabelle enthält die in der Recherche belegten Werte mit ihrem jeweiligen Geschäftsjahr; sie ist keine vollständige Übersicht der Finanzdaten für 2024. North Data ließ sich automatisiert nicht abrufen. Die Nachweise stammen deshalb aus veröffentlichten Jahresabschlüssen und nicht aus einer verifizierten North-Data-Auskunft.

### Quellen

1. [GP JOULE GmbH: Bilanz und Gewinn- und Verlustrechnung 2024, veröffentlicht im Lobbyregister des Deutschen Bundestages](https://www.lobbyregister.bundestag.de/media/38/09/641174/GP-JOULE-GmbH-Bilanz-GuV-2024.pdf).
2. [GP JOULE GmbH: Jahresabschluss 2023, Auszug aus dem Unternehmensregister, bereitgestellt bei Craft](https://uploads4.craft.co/uploads/unified_record/source/document/2135115/b7197bc9bf11a9d4.pdf).
3. [GP JOULE: Nachhaltigkeitsbericht](https://www.gp-joule.com/fileadmin/content/PDF-Dateien/202512_Nachhaltigkeitsbericht_DINA4_web.pdf), VSME-Register, gedruckte S. 37: Umsatz und Bilanzsumme werden für den dortigen Berichtskreis als vertrauliche oder sensible Informationen bezeichnet.

### Weiterhin fehlende reale Kennzahlen

In der bisherigen Recherche wurden keine belastbaren Gruppenwerte für Umsatz, EBITDA, Investitionsvolumen, Auftragsbestand und Umsatz nach Business Unit sowie keine separaten CONSULT-Finanzzahlen belegt. Auch die obigen Bilanz- und Ergebniswerte der GmbH schließen diese Lücken auf Gruppenebene nicht.

## Fiktives ELDS-Finanzszenario 2024

> Sämtliche Werte ab dieser Überschrift sind frei erfundene, für den Hackathon festgelegte Modellannahmen. Sie sind keine recherchierten oder geschätzten Finanzdaten von GP JOULE. Die realen Quellen oben belegen diese Annahmen nicht.

Das Szenario beschreibt eine mittelständische Energiegruppe mit rund 1.000 Beschäftigten, hohem Projektumsatz und kapitalintensiven eigenen Energieanlagen. Geschäftsjahr ist der Zeitraum 1. Januar bis 31. Dezember 2024; Bilanz und Auftragsbestand beziehen sich auf den 31. Dezember 2024. Alle Geldbeträge sind in Mio. EUR angegeben.

### ELDS Gruppe – konsolidiertes Modell

| Kennzahl | Fiktiver Wert 2024 | Erläuterung |
|---|---:|---|
| Umsatz | 420,0 | Externe Umsatzerlöse nach Eliminierung konzerninterner Umsätze |
| EBITDA | 33,6 | Betriebsergebnis vor Zinsen, Ertragsteuern und Abschreibungen |
| EBITDA-Marge | 8,0 % | EBITDA / Umsatz |
| Abschreibungen | 12,0 | Auf immaterielle Vermögenswerte und Sachanlagen |
| EBIT | 21,6 | EBITDA abzüglich Abschreibungen |
| Nettozinsaufwand | 7,6 | Zinsaufwand abzüglich Zinserträgen; übriges Finanzergebnis im Modell null |
| Ergebnis vor Ertragsteuern | 14,0 | EBIT abzüglich Nettozinsaufwand |
| Ertragsteuern | 4,2 | Modellannahme: 30 % des Ergebnisses vor Ertragsteuern |
| Jahresüberschuss | 9,8 | Ergebnis nach Ertragsteuern |
| Bilanzsumme | 360,0 | Konsolidierte Vermögenswerte |
| Eigenkapital | 108,0 | Bestandteil der Bilanzsumme |
| Eigenkapitalquote | 30,0 % | Eigenkapital / Bilanzsumme |
| Schulden einschließlich Rückstellungen | 252,0 | Bilanzsumme abzüglich Eigenkapital |
| Investitionsvolumen | 48,0 | Zugänge zu Sachanlagen und immateriellen Vermögenswerten; ohne Unternehmenskäufe |
| Auftragsbestand | 610,0 | Verbindlich beauftragte, noch nicht umsatzwirksame externe Leistungen für 2025–2027 |

Der Auftragsbestand enthält keine unverbindliche Projektpipeline und ist kein bereits erzielter Umsatz. Das Investitionsvolumen umfasst eigene Anlagen und Infrastruktur; der Bau von Kundenanlagen wird nicht zusätzlich als eigene Investition gezählt.

### Umsatz nach Business Unit

Die Zuordnung erfolgt nach verantwortlicher Business Unit. Jeder externe Umsatz wird genau einmal gezählt; konzerninterne Leistungen sind eliminiert.

| Business Unit | Fiktiver externer Umsatz 2024 (Mio. EUR) |
|---|---:|
| ELDS CONSULT | 12,0 |
| ELDS PROJECTS | 45,0 |
| ELDS EPC | 170,0 |
| ELDS INVEST | 5,0 |
| ELDS SERVICE | 32,0 |
| ELDS CONNECT | 48,0 |
| ELDS HYDROGEN | 25,0 |
| ELDS WÄRME | 38,0 |
| ELDS THINK | 3,0 |
| ELDS PLUS | 42,0 |
| **ELDS Gruppe gesamt** | **420,0** |

Bei INVEST handelt es sich um externe Dienstleistungs- und Managemententgelte, nicht um vermitteltes Finanzierungsvolumen. Die zentrale ELDS GmbH erzielt in diesem Modell keine externen Umsätze; ihre internen Serviceentgelte sind im Gruppenumsatz eliminiert.

### ELDS CONSULT – separates Modell

CONSULT wird als Beratungsunternehmen mit 65 Beschäftigten im Jahresdurchschnitt modelliert. Die folgenden Werte sind in den Gruppenwerten enthalten und dürfen nicht nochmals hinzuaddiert werden. Für CONSULT werden vereinfachend keine konzerninternen Umsätze und keine weiteren Konsolidierungsanpassungen angenommen.

| Kennzahl | Fiktiver Wert 2024 |
|---|---:|
| Umsatz | 12,0 Mio. EUR |
| EBITDA | 1,8 Mio. EUR |
| EBITDA-Marge | 15,0 % |
| Abschreibungen | 0,2 Mio. EUR |
| EBIT | 1,6 Mio. EUR |
| Nettozinsaufwand | 0,1 Mio. EUR |
| Ergebnis vor Ertragsteuern | 1,5 Mio. EUR |
| Ertragsteuern | 0,45 Mio. EUR |
| Jahresüberschuss | 1,05 Mio. EUR |
| Bilanzsumme | 8,0 Mio. EUR |
| Eigenkapital | 3,2 Mio. EUR |
| Eigenkapitalquote | 40,0 % |
| Schulden einschließlich Rückstellungen | 4,8 Mio. EUR |
| Investitionsvolumen | 0,4 Mio. EUR |
| Auftragsbestand | 16,0 Mio. EUR |

### Einordnung der Modellannahmen

Das Szenario setzt eine niedrigere Gruppenmarge als Beratungsmarge an: Anlagenbau und Energieversorgung erzeugen hohe Umsätze bei zugleich hohen Material-, Fremdleistungs- und Finanzierungskosten. CONSULT arbeitet mit geringerem Kapitaleinsatz. Der angenommene CONSULT-Umsatz entspricht rund 185.000 EUR je beschäftigter Person im Jahr. Diese Zusammenhänge dienen der Plausibilität des Übungsszenarios; sie sind keine extern validierten Branchenbenchmarks.

Die bisher fehlenden ELDS-Gruppen- und CONSULT-Kennzahlen sind damit für den Hackathon definiert. Fehlende reale GP-JOULE-Daten, insbesondere Bilanzsumme und Eigenkapital der GmbH für 2024, bleiben weiterhin unbelegt und werden nicht durch erfundene Angaben ergänzt.
