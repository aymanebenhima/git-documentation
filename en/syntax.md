# Basic Syntax in C: The Building Blocks

Understanding the basic syntax of C is essential for writing correct and functional programs. C syntax defines the rules and structure for how code must be written to be understood by the compiler. Let’s break down the fundamental elements of C syntax to get you started.

## Basic Structure of a C Program

A C program typically consists of several key parts:

### 1. Preprocessor Directives

Preprocessor directives are lines included at the beginning of your code that start with `#`. They provide instructions to the compiler before the actual compilation begins.

- `#include <stdio.h>`: Includes the standard input-output library, which is needed for using functions like `printf`.

### Example

```c
#include <stdio.h> // Include standard I/O library

int main() {
    // Code goes here
    return 0; // Return statement
}
```

### 2. The `main` Function

Every C program must have a `main` function. This is the entry point of the program where execution begins. The `main` function must return an integer value, usually `0`, to indicate successful completion.

### Example

```c
int main() {
    // Your code here
    return 0; // Indicates successful execution
}
```

### 3. Statements and Semicolons

Statements are individual instructions in C and must end with a semicolon (`;`). Each statement is executed in sequence.

### Example

```c
#include <stdio.h>

int main() {
    int a = 5; // Declaration and initialization of variable
    printf("Value of a: %d\n", a); // Print statement
    return 0;
}
```

### 4. Blocks and Braces

Blocks of code are enclosed within curly braces `{}`. Blocks are used to group statements together, such as in functions and control structures.

### Example

```c
int main() {
    {
        // This is a block
        int x = 10;
        printf("Value of x: %d\n", x);
    }
    return 0;
}
```

### 5. Comments

Comments are used to explain code and are ignored by the compiler. They can be single-line (`//`) or multi-line (`/* ... */`).

### Example

```c
#include <stdio.h>

int main() {
    // Single-line comment
    int y = 20; /* Multi-line comment */
    printf("Value of y: %d\n", y);
    return 0;
}
```

## Key Points

- **Preprocessor Directives**: Start with `#` and provide instructions before compilation.
- **`main` Function**: The starting point of the program, must return an integer.
- **Statements**: End with a semicolon.
- **Blocks**: Group statements using curly braces `{}`.
- **Comments**: Used for explanations, ignored by the compiler.

## Practice Exercise

Create a simple C program that includes a `main` function, a few statements, and both single-line and multi-line comments. Ensure that your program compiles and runs correctly, displaying output to the console.

---

Mastering the basic syntax is the first step towards writing functional C programs. Next, let’s dive into [Output](./output.md) to learn how to print elements in your programs.