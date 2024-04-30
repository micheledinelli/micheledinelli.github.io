---
title: "Greedy exercises"
description: ""
summary: "Greedy exercises"
tags: []
date: 2024-03-09
showTableOfContents: true
---

This is lecture's content for Bachelor's degree in Computer Science and Management. These are exercises on greedy algorithms.

## Esercizio 3

Siete stati assunti alla Microsoft per lavorare alla prossima versione di Word, denominata Word 2030. Il problema che dovete risolvere è il seguente. È data una sequenza di n parole, le cui lunghezze (espresse in punti tipografici, numeri interi) sono memorizzate nel vettore w[1], ..., w[n]. È necessario suddividere le parole in righe di lunghezza massima pari a L punti tipografici, in modo che lo spazio non utilizzato in ciascuna riga sia minimo possibile. Tra ogni coppia di parole consecutive posizionate sulla stessa riga viene inserito uno spazio che occupa S punti tipografici; nessuno spazio viene inserito dopo l'ultima parola di ogni riga. La lunghezza del testo su ogni riga è quindi data dalla somma delle lunghezze delle parole e degli spazi di separazione. L è maggiore della lunghezza di ogni singola parola (quindi in ogni riga può sempre essere inserita almeno una parola). Non è possibile riordinare le parole, che devono comparire esattamente nell'ordine dato.

1. Scrivere un algoritmo efficiente che, dato in input il vettore w[1], ..., w[n], e i valori S e L, stampi una suddivisione delle parole che minimizza lo spazio inutilizzato in ciascuna riga. Ad esempio, supponendo di avere 15 parole, l'algoritmo potrebbe stampare la stringa "[1 3][4 8][9 15]" per indicare che la prima riga contiene le parole da 1 a 3 (incluse), la seconda le parole da 4 a 8, e la terza le parole da 9 a 15.
2. Analizzare il costo computazionale dell'algoritmo proposto.

## Esercizio 4

Supponiamo di avere n ≥ 1 oggetti, ciascuno etichettato con un numero da 1 a n;. l'oggetto i- esimo ha peso p[i] > 0. Questi oggetti vanno inseriti all'interno di scatoloni identici, disponibili in numero illimitato, ciascuno in grado di contenere un numero arbitrario di oggetti purché il loro peso complessivo sia minore o uguale a C. Si può assumere che tutti gli oggetti abbiano peso minore o uguale a C. I pesi sono valori reali arbitrari. Vogliamo definire un algoritmo che disponga gli oggetti negli scatoloni in modo da cercare di minimizzare il numero di scatoloni utilizzati. Questo genere di problema è noto col nome di bin packing problem ed è computazionalmente intrattabile nel caso generale; di conseguenza, ci accontentiamo di un algoritmo semplice che produca una soluzione non necessariamente ottima.

1. Scrivere un algoritmo basato sul paradigma greedy che, dato il vettore dei pesi p[1..n] e il valore C, restituisce il numero di scatoloni che vengono utilizzati.
2. Calcolare il costo computazionale dell'algoritmo proposto.

By **Jocelyne Elias** and **Moreno Marzolla**

<!-- See also: [pdf version of this file](https://drive.google.com/file/d/125v-4dyBAHK25r5TzVWa8Q8S8TLEgvi4/view?usp=drive_link) -->
