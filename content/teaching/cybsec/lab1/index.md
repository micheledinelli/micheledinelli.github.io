---
date: '2026-04-11T11:35:22+02:00'
title: 'Lab 01'
summary: 'Lecture content for the first laboratory session'
---

The Euclidean algorithm calculates the Greatest Common Divisor (GCD) between two numbers. For given integers `a` and `b`, the extended Euclidean algorithm not
only calculates the GCD between `a` and `b` but also two additional integers `s` and `t` that satisfy the equation `as + bt  = gcd(a, b)`.

### Exercise 1

- Compute `gcd(1759, 550)` using the Euclidean algorithm, and find integers `s` and `t` such that `1759s + 550t = gcd(1759, 550)`.
- Compute `gcd(57, 93)` using the Euclidean algorithm, and find integers `s` and `t` such that `57s + 93t = gcd(57, 93)`.

### Solution 1

```go {style=base16-snazzy}
// Euclidean algorithm recursive version
func GcdRec(a, b int) int {
    if b == 0 {
        return a
    }
    return GcdRec(b, a % b)
}

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
	// and the equation becomes: 0x + by = b
	// which is satisfied by x=0, y=1
	if a == 0 {
		return b, 0, 1
	}

	// Recursive call
	gcd, x1, y1 := ExtendedGCD(b%a, a)

	// Update coefficients using the recurrence relation:
	// x = y1 - (b/a) * x1
	// y = x1
	x := y1 - (b/a)*x1
	y := x1

	return gcd, x, y
}
```

Using either one of the two versions above we can verify that 
- `gcd(1759, 550) = 1`, `s = -111` and `t = 355`.
- `gcd(57, 93) = 3`, `s = -13` and `t = 8`.