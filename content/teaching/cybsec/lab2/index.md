---
date: "2026-05-04T17:50:36+02:00"
title: "Lab 02"
summary: "Lecture content for the second laboratory session"
math: true
---

Hash functions are functions that map arbitrary-length data strings to fixed-length bitstrings. To be considered computationally secure, an hash function \\(H\\) must satisfy three criteria:

- Collision resistance. It must be computationally infeasible to identify two distinct inputs \\(x\\) and \\(y\\) such that \\(H(x)=H(y)\\)
- Pre-image resistance, which ensures the function is effectively one-way (irreversible), making it infeasible to determine the original input \\(x\\) given its hash \\(h\\)
- Second pre-image resistance, preventing the discovery of a secondary input that yields the same hash as a specific known input.

In this LAB we'll try to break unsecure hash functions.

### Exercise 1

Crack the following hashes using [Rainbow Tables](https://en.wikipedia.org/wiki/Rainbow_table).

- ```bash {style=base16-snazzy}
  6e6bc4e49dd477ebc98ef4046c067b5f
  ```

- ```bash {style=base16-snazzy}
  427ade9c15ec643751860eba9899355b
  ```

Here are some useful commands:

```bash {style=base16-snazzy}
# install rainbowcrack
sudo apt install rainbowcrack
```

```bash {style=base16-snazzy}
# generate and sort a MD5 rainbowtable
sudo rtgen md5 loweralpha 1 7 0 1000 100000 0
sudo rtsort /usr/share/rainbowcrack
```

```bash {style=base16-snazzy}
rcrack /usr/share/rainbowcrack -h <hash>
```

### Solution 1

- ```bash {style=base16-snazzy}
  6e6bc4e49dd477ebc98ef4046c067b5f ciao hex:6369616f
  ```

- ```bash {style=base16-snazzy}
  427ade9c15ec643751860eba9899355b gatto hex:676174746f
  ```
