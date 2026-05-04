---
date: "2026-04-11T11:35:22+02:00"
title: "Lab 01"
summary: "Lecture content for the first laboratory session"
math: true
---

The Euclidean algorithm calculates the Greatest Common Divisor (GCD) between two numbers. For given integers \\(a\\) and \\(b\\), the extended Euclidean algorithm not only calculates the GCD between \\(a\\) and \\(b\\) but also two additional integers \\(s\\) and \\(t\\) that satisfy the equation \\(as + bt = gcd(a, b)\\).

### Exercise 1

- Compute \\(gcd(1759, 550)\\) using the Euclidean algorithm, and find integers \\(s\\) and \\(t\\) such that \\[1759s + 550t = gcd(1759, 550)\\]
- Compute \\(gcd(57, 39)\\) using the Euclidean algorithm, and find integers \\(s\\) and \\(t\\) such that \\[57s + 93t = gcd(57, 93)\\]

### Solution 1

```go {style=base16-snazzy}
// Euclidean algorithm iterative version
func Gcd(a, b int) int {
    for b != 0 {
        a, b = b, a % b
    }
    return a
}

// ExtendedGCD computes the greatest common
// divisor of a and b, along with coefficients
// x and y satisfying: ax + by = gcd(a, b)
//
// Returns: (gcd(a, b), x, y)
func ExtendedGCD(a, b int) (int, int, int) {
	// Base case: when a is 0, gcd is b
	// and the equation becomes: 0·x + b·y = b
	// which is satisfied by x=0, y=1
	if a == 0 {
		return b, 0, 1
	}

	// Recursive call with (b mod a, a)
	gcd, x1, y1 := ExtendedGCD(b%a, a)

	// Update coefficients using the recurrence relation:
	// x = y1 - (b/a) * x1
	// y = x1
	x := y1 - (b/a)*x1
	y := x1

	return gcd, x, y
}
```

Using algorithms above one can verify that

- \\(gcd(1759, 550) = 1\\), \\(s = -111\\) and \\(t = 355\\).
- \\(gcd(57, 93) = 3\\), \\(s = -13\\) and \\(t = 8\\).

### Exercise 2

One of the most common uses of the Extended Euclidean Algorithm is computing modular inverses which is essential in RSA cryptography.

Compute the following multiplicative inverses:

1. \\(17^{−1} \ mod \ 101\\)
2. \\(357^{−1} \ mod \ 1234\\)
3. \\(3125^{−1} \ mod \ 9987\\)

### Solution 2

An element \\(x\\) in \\(\\mathbb{Z}\_n\\) has a multiplicative inverse if and only if \\(\\gcd(x, n) = 1\\), i.e., \\(x\\) and \\(n\\) are coprime. Two integers are coprime if and only if \\(\\gcd(x, n) = 1\\), which holds if and only if there exist integers \\(s, t\\) such that \\(xs + nt = 1\\). In \\(\\mathbb{Z}\_n\\), the term \\(nt\\) is congruent to \\(0\\), so reducing modulo \\(n\\) gives \\(xs + nt \\equiv 1 \\ (\\text{mod } n)\\), which is equivalent to \\(xs \\equiv 1 \\ (\\text{mod } n)\\). Thus, \\(s\\) is the multiplicative inverse of \\(x\\) in \\(\\mathbb{Z}\_n\\).

Using the extended Euclidean algorithm one can solve \\(xs + nt \\equiv 1 \\ (\\text{mod } n)\\)

- \\(17^{−1} \ (mod \ 101) = 6\\) and \\(17 \times 6 \ (mod \ 101) = 1\\)
- \\(357^{−1} \ (mod \ 1234) = 1075\\) and \\(357 \times 1075 \ (mod \ 1234) = 1\\)
- \\(3125^{−1} \ (mod \ 9987) = 1844\\) and \\(3125 \times 1844 \ (mod \ 9987) = 1\\)
