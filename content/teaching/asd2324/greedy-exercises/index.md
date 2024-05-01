---
title: "Greedy exercises"
description: ""
summary: "Greedy exercises"
tags: ["greedy algorithms", "algorithms and data structures"]
date: 2024-04-29
showTableOfContents: true
---

This is lecture's content for Bachelor's degree in Computer Science and Management. These are exercises on greedy algorithms.

## Esercizio 3

Siete stati assunti alla Microsoft per lavorare alla prossima versione di Word, denominata Word 2030. Il problema che dovete risolvere è il seguente. È data una sequenza di n parole, le cui lunghezze (espresse in punti tipografici, numeri interi) sono memorizzate nel vettore w[1], ..., w[n]. È necessario suddividere le parole in righe di lunghezza massima pari a L punti tipografici, in modo che lo spazio non utilizzato in ciascuna riga sia minimo possibile. Tra ogni coppia di parole consecutive posizionate sulla stessa riga viene inserito uno spazio che occupa S punti tipografici; nessuno spazio viene inserito dopo l'ultima parola di ogni riga. La lunghezza del testo su ogni riga è quindi data dalla somma delle lunghezze delle parole e degli spazi di separazione. L è maggiore della lunghezza di ogni singola parola (quindi in ogni riga può sempre essere inserita almeno una parola). Non è possibile riordinare le parole, che devono comparire esattamente nell'ordine dato.

1. Scrivere un algoritmo efficiente che, dato in input il vettore w[1], ..., w[n], e i valori S e L, stampi una suddivisione delle parole che minimizza lo spazio inutilizzato in ciascuna riga. Ad esempio, supponendo di avere 15 parole, l'algoritmo potrebbe stampare la stringa "[1 3][4 8][9 15]" per indicare che la prima riga contiene le parole da 1 a 3 (incluse), la seconda le parole da 4 a 8, e la terza le parole da 9 a 15.
2. Analizzare il costo computazionale dell'algoritmo proposto.

<!-- ### Soluzione

È possibile risolvere il problema con un semplice algoritmo greedy: si inseriscono in ciascuna riga le parole, nell'ordine indicato, finché non si supera la lunghezza massima consentita. Utilizziamo la variabile start per indicare l'indice della prima parola della riga corrente; Lres è la lunghezza residua (ancora da riempire) dalla riga corrente.

```java
algoritmo FORMATTAPARAGRAFO( array w[1..n] di int, int S, int L )
    int start := 1;
    int Lres := L - w[1];

    for i := 2 to n do
        if ( Lres ≥ S + w[i]) then // aggiungiamo la parola i-esima alla riga corrente
            Lres := Lres – S - w[i];
        else // iniziamo una nuova riga
            print “[“ + start + “ “ + (i-1) + “]”;
            start := i;
            Lres := L - w[i];
        endif
    endfor

    print “[“ + start + “ “ + n + “]”;
```

Si noti la stampa effettuata al termine del ciclo “for”, senza la quale l'algoritmo non verrebbero stampate le parole dell'ultima riga. Il costo dell'algoritmo è O(n). -->

## Esercizio 4

Supponiamo di avere n ≥ 1 oggetti, ciascuno etichettato con un numero da 1 a n;. l'oggetto i-esimo ha peso p[i] > 0. Questi oggetti vanno inseriti all'interno di scatoloni identici, disponibili in numero illimitato, ciascuno in grado di contenere un numero arbitrario di oggetti purché il loro peso complessivo sia minore o uguale a C. Si può assumere che tutti gli oggetti abbiano peso minore o uguale a C. I pesi sono valori reali arbitrari. Vogliamo definire un algoritmo che disponga gli oggetti negli scatoloni in modo da cercare di minimizzare il numero di scatoloni utilizzati. Questo genere di problema è noto col nome di bin packing problem ed è computazionalmente intrattabile nel caso generale; di conseguenza, ci accontentiamo di un algoritmo semplice che produca una soluzione non necessariamente ottima.

1. Scrivere un algoritmo basato sul paradigma greedy che, dato il vettore dei pesi p[1..n] e il valore C, restituisce il numero di scatoloni che vengono utilizzati.
2. Calcolare il costo computazionale dell'algoritmo proposto.

<!-- ### Soluzione

Un algoritmo greedy molto semplice consiste nel considerare tutti gli oggetti, nell'ordine in cui sono dati. Per ogni oggetto, si controlla se può essere inserito nello scatolone corrente senza superare il limite di peso. Se ciò non è possibile, si prende un nuovo scatolone e lo si inizia a riempire.

```java
algoritmo SCATOLONI( array p[1..n] di double, double C ) → int
    int ns := 0; // numero di scatoloni utilizzati
    int i := 1;
    while ( i ≤ n ) do
        ns := ns + 1; // iniziamo a riempire un nuovo scatolone
        double Cres := C; // capacità residua dello scatolone corrente
        while ( i ≤ n && Cres ≥ p[i] ) do
            Cres := Cres – p[i];
            i := i + 1;
        endwhile
    endwhile
    return ns;
```

L'algoritmo fa uso della variabile intera ns, che mantiene il numero di scatoloni utilizzati, e della variabile reale Cres che indica la capacità residua dello scatolone corrente. Se la capacità residua Cres supera il peso p[i] dell'oggetto i-esimo, allora tale oggetto può essere inserito nello scatolone; si provvede quindi a decrementare Cres di p[i] e si passa all'oggetto successivo. Quando Cres diventa inferiore a p[i], allora l'oggetto i non trova posto nello scatolone corrente, e si inizia a riempire il successivo.
Il costo computazionale dell'algoritmo proposto è Ο (n).
L'algoritmo qui sopra è molto efficiente, ma piuttosto "stupido": è facile pensare a varianti che in molti casi
(ma non sempre) ottengono risultati migliori, a scapito della complessità. Ne discutiamo brevemente alcuni:

1. ad ogni passo di inserisce l'oggetto nella prima scatola in grado di contenerlo
2. si ordinano gli oggetti per pesi decrescenti, in ogni scatola si inseriscono oggetti pesanti (prendendoli da inizio sequenza) finché possibile, poi oggetti leggeri (prendendoli da fine sequenza) finché
   possibile
3. si ordinano gli oggetti per pesi decrescenti, in ogni scatola si inserisce ad ogni turno l'elemento più
   pesante che ci sta

Si vede facilmente che la complessità del primo algoritmo è O(n^2) e quella del secondo è Ο (n log n). Anche la complessità del terzo algoritmo è Ο(n log n), usando un red-black tree per memorizzare i pesi. Un confronto preciso tra le qualità delle soluzioni proposte dai diversi algoritmi è molto complesso, visto che si deve considerare una distribuzione di probabilità per i valori ed eseguire ragionamenti probabilistici. -->

By **Jocelyne Elias** and **Moreno Marzolla**

<!-- See also: [pdf version of this file](https://drive.google.com/file/d/125v-4dyBAHK25r5TzVWa8Q8S8TLEgvi4/view?usp=drive_link) -->
