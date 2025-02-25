# Booleans: The True and False Dichotomy

In C programming, booleans are the simplest yet most powerful tools for decision-making. They represent truth values—either `true` or `false`—which guide the flow of your program based on logical conditions. Let's explore how booleans work and how they can be used effectively.

## What is a Boolean?

A boolean is a data type that can hold only two values: `true` or `false`. In C, booleans are typically represented using integers:

- `0` is considered `false`
- Any non-zero value is considered `true`

### Example

```c
#include <stdio.h>

int main() {
    int isTrue = 1; // true
    int isFalse = 0; // false

    printf("isTrue: %d\n", isTrue);
    printf("isFalse: %d\n", isFalse);

    return 0;
}
```

In this example, `isTrue` is represented by `1` (true) and `isFalse` is represented by `0` (false).

## Using Booleans in Conditions

Booleans are frequently used in conditional statements to control the flow of a program. They help in evaluating conditions and making decisions.

### Example

```c
#include <stdio.h>

int main() {
    int age = 20;
    int isAdult = age >= 18; // true if age is 18 or older

    if (isAdult) {
        printf("You are an adult.\n");
    } else {
        printf("You are not an adult.\n");
    }

    return 0;
}
```

In this example, the `isAdult` boolean determines which message to print based on the value of `age`.

## Boolean Expressions

Boolean expressions are expressions that evaluate to either `true` or `false`. They are typically created using relational and logical operators.

### Example

```c
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    int isEqual = (a == b); // false
    int isGreater = (a > b); // true
    int isNotEqual = (a != b); // true

    printf("a == b: %d\n", isEqual);
    printf("a > b: %d\n", isGreater);
    printf("a != b: %d\n", isNotEqual);

    return 0;
}
```

In this example, boolean expressions determine whether `a` is equal to, greater than, or not equal to `b`.

## Boolean Short-Circuiting

Logical operators in C use short-circuit evaluation. This means that the evaluation stops as soon as the result is determined. For instance, in an `AND` operation (`&&`), if the first condition is `false`, the overall result is `false`, and the second condition is not evaluated.

### Example

```c
#include <stdio.h>

int main() {
    int a = 0;
    int b = 1;

    if (a && b) {
        printf("Both are true.\n");
    } else {
        printf("At least one is false.\n");
    }

    return 0;
}
```

In this example, since `a` is `0` (false), `b` is not evaluated, and the program prints "At least one is false."

## Key Points

- **Boolean Values**: Represented as `true` (non-zero) and `false` (zero).
- **Boolean Expressions**: Created using relational and logical operators.
- **Short-Circuiting**: Logical operations may skip evaluation for efficiency.

## Practice Exercise

Create a program that checks if a number is both positive and even using boolean expressions and logical operators. Print appropriate messages based on the evaluation.

---

With booleans, you now have the tools to make decisions and control the flow of your programs based on simple true/false conditions. Continue to the [Conditional Statements](./ifElse.md) chapter to explore more ways to guide your program's execution with `if`, `else`, and `switch`.