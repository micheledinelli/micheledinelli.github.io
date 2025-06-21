---
title: "Nota Bene"
summary: "Specifiche del progetto per l'a.a 24/25"
date: 2025-04-01
tags: ["software engineering"]
weight: 1
showTableOfContents: true
---

- [Slides](https://docs.google.com/presentation/d/1yNNTWdt1vaGre9BpsBpNXeBiVmMxqHZqJQPjcBju39c/edit#slide=id.g346801b4d5f_0_48) di presentazione del progetto
- [Documento](https://docs.google.com/document/d/166FxV4g8O0D9Y1YEr7OKFyLFn4uTenbT6ygy7VtFwzg/edit?usp=sharing) di specifica

# Descrizione del Progetto

Versione 1.0.0 - 26/03/2025  
Anno accademico 2023/24

Il progetto consiste nella realizzazione di una applicazione web per scrivere e condividere note tra utenti.  
Il progetto è da svolgere in gruppi da 3 o 4 persone.

---

## Specifiche

### Creazione di Note

- Gli utenti registrati possono creare note testuali (max 280 caratteri).
- Ogni nota può avere:
  - Titolo
  - Contenuto testuale
  - Data di creazione
  - Data di ultima modifica
  - Utente proprietario
- Le note possono essere organizzate in:
  - Cartelle
  - Tag

### Gestione dei Permessi di Condivisione

- Ogni nota può essere:
  - Privata (visibile solo al proprietario)
  - Condivisa in sola lettura
  - Condivisa con permessi di scrittura
- Il proprietario può modificare i permessi in qualsiasi momento.

### Collaborazione su Note Condivise

- Le note condivise con permessi di scrittura sono modificabili da più utenti.
- Deve essere presente un sistema di versionamento.
- [Opzionale per gruppi da 3, obbligatorio per gruppi da 4] Gestione dei conflitti in modifiche simultanee.

### Ricerca e Organizzazione delle Note

- Ricerca tramite:
  - Parole chiave (titolo o contenuto)
  - Filtri: tag, autore, data creazione/modifica
  - Struttura a cartelle

### Registrazione degli Utenti

- Obbligatoria per creare e gestire note.
- Richiede almeno:
  - Username
  - Password

### Gestione delle Note

- Un utente può:
  - Modificare le proprie note o quelle con permessi di scrittura
  - Eliminare le proprie note o rimuoversi da una nota condivisa
  - Creare copie di note esistenti

### Persistenza dei Dati

- Tutti i dati devono essere persistenti tra riavvii.

### Gestione dei Conflitti (Approfondimento)

- Esempi di conflitto:

  - Sezioni diverse: modifiche parallele a paragrafi diversi possono coesistere
  - Salvataggio asincrono: un salvataggio ritardato può sovrascrivere modifiche recenti

- Strategie suggerite:
  - Blocco della modifica: un solo utente può editare alla volta
  - Versioning: ogni modifica è una nuova versione
  - Merge manuale o semiautomatico

---

## Tecnologie Obbligatorie

- Git per il versionamento
- GitHub per:
  - Repository remoto
  - Issue tracking
  - Project management board
- [Opzionale per gruppi da 3, obbligatorio per gruppi da 4] GitHub Actions per CI/CD:
  - Test automatici
  - Controlli di formattazione
  - Build automatico
  - Containerizzazione
  - Deploy su GitHub Pages

---

## Stack Tecnologico Proposto (con supporto)

- **Java**
- **Maven** (gestione dipendenze e build)
- **GWT** (frontend web)
- **MapDB** (persistenza)
- **Gson** (gestione JSON)
- **JUnit** (unit testing)

---

## Modello di Processo

### Fase 1: Inception

- Artefatti richiesti:
  - Modellazione dei casi d’uso
  - Modello di dominio
  - Glossario

### Fase 2: Construction

- Processo Scrum:

  - Ruoli:
    - Development team [2]
    - Scrum master [1 se gruppo da 4, o 1 nel team se da 3]
    - Product owner [1]
  - Eventi:
    - Sprint planning
    - Daily scrum
    - Sprint review
    - Sprint retrospective
  - Artefatti:
    - Product backlog
    - Sprint backlog
    - Burn down chart

- **Workflow Git**: feature branch + pull request

---

## Product Backlog e Sprint Backlog

- Utilizzo della board di GitHub Projects
- Colonne suggerite:
  - UC raffinati
  - Product Backlog
  - Sprint Backlog

#### Esempio (iniziale)

```
UC raffinati     | Product Backlog | Sprint Backlog
-----------------|-----------------|---------------
UC-1             |
UC-2             |
```

#### Esempio (dopo sprint planning)

```
UC raffinati     | Product Backlog | Sprint Backlog
-----------------|-----------------|---------------
UC-1             |                 | Task 1 per UC-1
UC-2             |                 | Task 2 per UC-1
```

---

## Prodotti da Consegnare

- Modello dei casi d’uso
- Modello di dominio
- Burn down chart

### Documentazione Richiesta

- **Manuale utente**: guida per utenti inesperti
- **Manuale sviluppatore**: istruzioni di installazione, panoramica implementativa, uso di design pattern
- **Diario del progetto**:
  - Inizio/fine sprint
  - Ruoli coperti
  - Stato board inizio/fine sprint

---

## Testing

- Implementazione di test di unità
- È consigliato l’uso di TDD
- I test non sono richiesti per il frontend/GUI

---

## Modalità e Tempi di Consegna

- Controllo delle consegne il **15 di ogni mese a mezzanotte**
- Discussione il periodo successivo (es: 15 giugno → discussione tra 19–23 giugno)
- Mesi validi per consegnare:
  - Giugno 2025
  - Luglio 2025
  - Settembre 2025
  - Ottobre 2025
  - Dicembre 2025
  - Gennaio 2025
  - Febbraio 2025
  - Marzo 2025

### Modalità di Consegna

1. Creare una Release GitHub con:
   - Codice sorgente
   - Tutti i documenti in PDF
2. Inviare email a [m.dinelli@unibo.it](mailto:m.dinelli@unibo.it) con:
   - Link al progetto
   - CC a tutti i membri
3. Invitare l’utente [micheledinelli](https://github.com/micheledinelli) al repository GitHub privato

---

## Valutazione

Saranno considerati i seguenti criteri:

- Copertura delle specifiche funzionali
- Scelte tecnologiche appropriate
- Semplicità di deploy
- Qualità e organizzazione del codice
- Adozione corretta di metodologie e strumenti
- Completezza e qualità della documentazione
- Qualità della discussione orale

---

## Consigli Utili

- In caso di dubbi, scrivere sul forum di Virtuale o via email
- Strumenti suggeriti per documenti:
  - Google Docs, Word, Markdown, Asciidoc, LaTeX
- Strumenti per diagrammi:
  - plantUML, StarUML, draw.io, Miro, Excalidraw, mermaid
- Richiedere accesso al **GitHub Student Developer Pack**
- Condividere solo risorse accessibili senza login (esclusi GitHub/OneDrive UNIBO)

---

## Stack Tecnologico Proposto

- Esempio di repository di partenza: [https://github.com/jjocram/gwt-stockwatch-maven](https://github.com/jjocram/gwt-stockwatch-maven)
- In alternativa usare `webAppCreator` di GWT (con progetto Maven):  
  [GWT CLI Docs](https://www.gwtproject.org/doc/latest/RefCommandLineTools.html#webAppCreator)

---

## Appendice: Come Effettuare una Release

1. Aprire la pagina del repository GitHub
2. Nella colonna di destra, cliccare su Releases
3. Cliccare su Create new release
4. Compilare i campi richiesti
5. Allegare i file PDF
6. Cliccare su Publish release
