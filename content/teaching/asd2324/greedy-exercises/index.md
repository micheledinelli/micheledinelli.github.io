---
title: "Greedy exercises"
description: "Greedy exercises"
summary: "Lecture content containing excercises to practice greedy algorithms."
tags: ["greedy algorithms", "algorithms and data structures"]
date: 2024-04-29
showDate: true
showTableOfContents: true
---

{{< katex >}}

This is lecture's content for Bachelor's degree in computer science for management @unibo. These are exercises on greedy algorithms.

## Exercise 1

You have been hired by Microsoft to work on the next version of Word, called `Word 2030`. The problem you need to solve is as follows:

Given a sequence of \\( n \\) words, whose lengths (expressed in typographic points, integers) are stored in the array \\( w[1], \ldots, w[n] \\), the goal is to divide the words into lines of maximum length \\( L \\) typographic points, so that the unused space in each line is minimized. Between every pair of consecutive words placed on the same line, a space is inserted, which occupies \\( S \\) typographic points; no space is added after the last word of each line. The length of the text on each line is therefore given by the sum of the lengths of the words and the separating spaces. \\( L \\) is greater than the length of any single word (hence, at least one word can always be placed on each line). The words cannot be reordered and must appear in the given sequence.

1. Write an efficient algorithm that, given as input the array \\( w[1], \ldots, w[n] \\), and the values \\( S \\) and \\( L \\), prints a division of the words that minimizes the unused space in each line. For example, assuming there are 15 words, the algorithm could print the string `[1 3][4 8][9 15]` to indicate that the first line contains words from 1 to 3 (inclusive), the second line contains words from 4 to 8, and the third line contains words from 9 to 15.
2. Analyze the computational cost of the proposed algorithm.


### Solution

The problem can be solved using a simple greedy algorithm: words are added to each line, in the given order, until the maximum allowed length is exceeded. We use the variable `start` to indicate the index of the first word of the current line, and `Lres` to represent the remaining length (still available) for the current line.

```java
algorithm formatParagraph( array w[1..n] of int, int S, int L )
    int start := 1;
    int Lres := L - w[1];

    for i := 2 to n do
        if ( Lres ≥ S + w[i]) then // add the i-th word to the current line
            Lres := Lres – S - w[i];
        else // start a new line
            print “[“ + start + “ “ + (i-1) + “]”;
            start := i;
            Lres := L - w[i];
        endif
    endfor

    print “[“ + start + “ “ + n + “]”;
```

Notice the print statement at the end of the `for` loop; without it, the algorithm would not print the words for the last line. The computational cost of the algorithm is \\( O(n) \\).

## Exercise 2

Suppose we have \\( n \geq 1 \\) objects, each labeled with a number from \\( 1 \\) to \\( n \\); the \\( i \\)-th object has a weight \\( p[i] > 0 \\). These objects must be placed in identical boxes, available in unlimited supply, each capable of holding an arbitrary number of objects as long as their total weight is less than or equal to \\( C \\). It is assumed that all objects have a weight less than or equal to \\( C \\). The weights are arbitrary real values. We aim to define an algorithm that places the objects into boxes to minimize the number of boxes used. This type of problem is known as the bin packing problem and is computationally intractable in the general case; therefore, we settle for a simple algorithm that produces a solution that is not necessarily optimal.

1. Write a greedy algorithm that, given the vector of weights \\( p[1, \ldots, n] \\) and the value \\( C \\), returns the number of boxes used.
2. Discuss about the computational cost of the proposed algorithm.

### Soluton

We use a greedy approach where we iteratively place each object in the first box that has enough remaining capacity. If no such box exists, a new box is opened.

```java
algorithm binPacking( array p[1..n] of double, double C ) → int
    int ns := 0; // number of boxes used
    int i := 1;
    while ( i ≤ n ) do
        ns := ns + 1; // new box
        double Cres := C; // room left
        while ( i ≤ n && Cres ≥ p[i] ) do
            Cres := Cres – p[i];
            i := i + 1;
        endwhile
    endwhile
    return ns;
```

The algorithm uses the integer variable `ns`, which keeps track of the number of boxes used, and the variable `Cres`, which indicates the residual capacity of the current box. If the residual capacity Cres exceeds the weight \\( p[i] \\) of the \\( i \\)-th object, then that object can be placed in the box; Cres is decremented by \\( p[i] \\), and the algorithm moves to the next object. When Cres becomes less than \\( p[i] \\), the \\( i \\)-th object cannot fit in the current box, so a new box is used, and the process continues.

The computational cost of the proposed algorithm is \\( O(n) \\).

While this algorithm is very efficient, it is somewhat "naive." It is easy to think of variations that often (but not always) produce better results at the expense of increased complexity. Below, we briefly discuss some of these variations:

1. At each step, place the object in the first box that can hold it.
2. Sort the objects in decreasing order of weights. For each box, place heavy objects (starting from the beginning of the sequence) until no more can fit, then fill the box with lighter objects (starting from the end of the sequence) until no more can fit.
3. Sort the objects in decreasing order of weights. For each box, at every turn, place the heaviest object that fits.

- The complexity of the **first-fit algorithm** is \\( O(n^2) \\).
- The complexity of the **decreasing weight algorithm** is \\( O(n \log n) \\).
- The complexity of the **heaviest-fit algorithm** is \\( O(n \log n) \\), using a `red-black tree` to store the weights.

A precise comparison of the quality of the solutions produced by the different algorithms is quite complex, as it requires considering a probability distribution for the weights and performing probabilistic reasoning.


By **Jocelyne Elias** and **Moreno Marzolla**

<!-- See also: [pdf version of this file](https://drive.google.com/file/d/125v-4dyBAHK25r5TzVWa8Q8S8TLEgvi4/view?usp=drive_link) -->
