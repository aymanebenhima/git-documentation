# Data Types in C: The Building Blocks of Data

In C programming, data types are like the building blocks of a structure. They determine what kind of data a variable can hold, how much space it occupies in memory, and what kind of operations can be performed on it. Understanding data types is crucial for effective programming and memory management. Let's explore the different data types available in C.

## Basic Data Types: The Core Builders

C offers several fundamental data types that serve as the core building blocks for variables. Here are the primary ones:

### `int`: The Integer

Represents whole numbers. It can be signed (positive or negative) or unsigned (only positive).

- **Signed `int`**: Can hold both positive and negative values.
- **Unsigned `int`**: Can hold only non-negative values.

#### Example

```c
#include <stdio.h>

int main() {
    int a = 10;
    unsigned int b = 20;

    printf("Signed int: %d\n", a);
    printf("Unsigned int: %u\n", b);

    return 0;
}
```

### `float`: The Floating-Point Number

Represents real numbers (numbers with a decimal point). Useful for representing values that require fractional components.

#### Example

```c
#include <stdio.h>

int main() {
    float pi = 3.14;
    printf("Value of pi: %f\n", pi);

    return 0;
}
```

### `double`: The Double Precision Floating-Point

Similar to `float` but with double the precision, allowing for more accurate representations of real numbers.

#### Example

```c
#include <stdio.h>

int main() {
    double e = 2.71828;
    printf("Value of e: %lf\n", e);

    return 0;
}
```

### `char`: The Character

Represents a single character. It’s often used to store letters, digits, and symbols.

#### Example

```c
#include <stdio.h>

int main() {
    char letter = 'A';
    printf("Character: %c\n", letter);

    return 0;
}
```

## Derived Data Types: The Complex Constructs

In addition to basic data types, C also supports derived data types, which are built from basic types:

### Arrays

A collection of elements of the same type. Useful for storing lists of items.

#### Example

```c
#include <stdio.h>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; i++) {
        printf("Number %d: %d\n", i, numbers[i]);
    }

    return 0;
}
```

### Structures

A user-defined data type that allows grouping of different types of variables under one name.

#### Example

```c
#include <stdio.h>

struct Person {
    char name[50];
    int age;
};

int main() {
    struct Person p = {"Alice", 30};
    printf("Name: %s\n", p.name);
    printf("Age: %d\n", p.age);

    return 0;
}
```

### Enumerations

A user-defined type consisting of a set of named integer constants.

#### Example

```c
#include <stdio.h>

enum Weekday {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};

int main() {
    enum Weekday today = Wednesday;
    printf("Today is: %d\n", today);

    return 0;
}
```

## Key Points

- **Basic Data Types**: `int`, `float`, `double`, `char`.
- **Derived Data Types**: Arrays, Structures, Enumerations.
- **Memory and Precision**: Different data types have varying memory sizes and precision.

## Practice Exercise

Create a program that uses different data types to store and display various kinds of data, including integers, floating-point numbers, characters, and user-defined structures. Experiment with size and precision to understand how they affect your program.

---

Data types are the foundational elements of C programming, allowing you to define and manipulate various kinds of data. Next, let’s dive into the [Operators](./operators.md) chapter to see how you can perform operations on these data types and make your programs more dynamic.