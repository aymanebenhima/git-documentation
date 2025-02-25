# Operators in C: The Action Heroes

Operators in C are the action heroes of your code, performing various operations that make your programs powerful and dynamic. From arithmetic calculations to logical decisions, operators are essential for manipulating data and driving your code forward.

## Types of Operators

C offers a variety of operators, each with a unique role. Let's meet the action heroes:

### Arithmetic Operators: The Calculators

These operators perform basic arithmetic operations:

- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `%` : Modulus (remainder of division)

### Example

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("a + b = %d\n", a + b);
    printf("a - b = %d\n", a - b);
    printf("a * b = %d\n", a * b);
    printf("a / b = %d\n", a / b);
    printf("a %% b = %d\n", a % b);
    return 0;
}
```

### Relational Operators: The Comparators

These operators compare two values and return a boolean result:

- `==` : Equal to
- `!=` : Not equal to
- `>`  : Greater than
- `<`  : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

### Example

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("a == b: %d\n", a == b);
    printf("a != b: %d\n", a != b);
    printf("a > b: %d\n", a > b);
    printf("a < b: %d\n", a < b);
    printf("a >= b: %d\n", a >= b);
    printf("a <= b: %d\n", a <= b);
    return 0;
}
```

### Logical Operators: The Decision Makers

These operators are used to combine multiple conditions:

- `&&` : Logical AND
- `||` : Logical OR
- `!`  : Logical NOT

### Example

```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("(a > 5) && (b < 5): %d\n", (a > 5) && (b < 5));
    printf("(a > 5) || (b > 5): %d\n", (a > 5) || (b > 5));
    printf("!(a > 5): %d\n", !(a > 5));
    return 0;
}
```

### Assignment Operators: The Assigners

These operators assign values to variables:

- `=`  : Assignment
- `+=` : Addition assignment
- `-=` : Subtraction assignment
- `*=` : Multiplication assignment
- `/=` : Division assignment
- `%=` : Modulus assignment

### Example

```c
#include <stdio.h>

int main() {
    int a = 10;
    a += 5;
    printf("a += 5: %d\n", a);
    a -= 3;
    printf("a -= 3: %d\n", a);
    a *= 2;
    printf("a *= 2: %d\n", a);
    a /= 4;
    printf("a /= 4: %d\n", a);
    a %= 3;
    printf("a %%= 3: %d\n", a);
    return 0;
}
```

## Key Points

- **Arithmetic Operators**: Use for basic math operations.
- **Relational Operators**: Use for comparing values.
- **Logical Operators**: Use for combining conditions.
- **Assignment Operators**: Use for assigning values.

## Practice Exercise

Create a program that uses each type of operator at least once. Experiment with different values and observe the results to deepen your understanding.

---

With operators, you have the action heroes that empower your code to perform a wide range of operations. Next, let’s dive into the [Booleans](./booleans.md) chapter to explore how true and false values can drive decision-making and control the flow of your programs.