---
title: "About me"
description: "About me"
showEdit: false
---

Sono nato a Cento (Ferrara), una piccola città vicino a Bologna. Mi sono trasferito a Bologna nel 2019 per studiare informatica per il management [@unibo](https://www.unibo.it).

Mi sono laureato a marzo 2023 mentre lavoravo a tempo pieno [@cineca](https://www.cineca.it/it). Ora sto studiando Informatica per la mia laurea magistrale, sono tutor del corso Algoritmi e Strutture Dati, tutor per il corso di laurea in Informatica e assegnista di ricerca [@unibo](https://www.unibo.it).

Grande appassionato di manga, scacchi e super fan di One Piece. Suono la chitarra a volte. Amo fare sport, correre e passare del tempo di qualità con i miei amici.

[{{< icon "link" >}} Curriculum vitae](https://michele-dinelli-cv.puter.site)

{{< mermaid >}}

%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'showBranches': true}} }%%
gitGraph
commit
branch bachelor-degree
commit id: "first-year"
commit id: "second-year"
branch cineca
commit
checkout main
merge bachelor-degree tag: "graduated"
checkout cineca
commit
checkout main
merge cineca

branch master-degree
checkout master-degree
commit

branch tutor-and-researcher
commit

checkout master-degree
commit

branch cubbit
commit

checkout tutor-and-researcher
commit

checkout cubbit
merge master-degree
{{< /mermaid >}}
