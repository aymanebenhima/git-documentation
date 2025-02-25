# If-Else Statements: The Decision Makers

In C programming, decision-making is crucial. Enter the `if-else` statements, your program's decision makers, guiding the flow of execution based on various conditions. They act like crossroads, where different paths lead to different outcomes based on the choices made.

## If Statement: The Gatekeeper

The `if` statement is the gatekeeper, allowing your program to take a specific path if a certain condition is true. It checks the condition and, if true, lets the code inside its block run.

### Syntax

Here’s the basic structure of an `if` statement:

```c
if (condition) {
    // code to be executed if condition is true
}
```

### Example

Let’s see the gatekeeper in action:

```c
#include <stdio.h>

int main() {
    int number = 10;

    if (number > 5) {
        printf("The number is greater than 5.\n");
    }

    return 0;
}
```

In this example, the gatekeeper checks if `number` is greater than 5. If true, it prints a message.

## Else Statement: The Backup Plan

What if the condition is false? The `else` statement steps in as the backup plan, providing an alternative path if the `if` condition isn't met.

### Syntax

Adding an `else` gives your program a fallback:

```c
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}
```

### Example

Here’s an `if-else` in action:

```c
#include <stdio.h>

int main() {
    int number = 3;

    if (number > 5) {
        printf("The number is greater than 5.\n");
    } else {
        printf("The number is 5 or less.\n");
    }

    return 0;
}
```

In this scenario, since `number` is 3, the `else` block executes, providing a different message.

## Else If Statement: The Multi-Option Checker

Sometimes, decisions aren't binary. The `else if` statement lets you handle multiple conditions, checking each one in sequence until a match is found.

### Syntax

Here’s how you use `else if`:

```c
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if both conditions are false
}
```

### Example

Let’s explore a more complex decision-making process:

```c
#include <stdio.h>

int main() {
    int number = 10;

    if (number > 10) {
        printf("The number is greater than 10.\n");
    } else if (number == 10) {
        printf("The number is exactly 10.\n");
    } else {
        printf("The number is less than 10.\n");
    }

    return 0;
}
```

In this example, the program has three possible paths, checking if `number` is greater than, equal to, or less than 10.

## Key Points

- **If**: The gatekeeper checks a condition and runs the code block if true.
- **Else**: The backup plan provides an alternative if the `if` condition is false.
- **Else If**: The multi-option checker allows handling multiple conditions, making your code more versatile.

## When to Use If-Else Statements?

- **If**: Use when you need to execute code only if a specific condition is true.
- **Else**: Use when you need a fallback plan for when the `if` condition is false.
- **Else If**: Use when you have multiple conditions to check and need to choose among various paths.

## Practice Exercise

Create a program that asks the user for a number and uses `if-else` statements to print whether the number is positive, negative, or zero.

---

With `if-else` statements, you can make your programs smarter and more responsive to different scenarios. Next, explore the [Switch Statement](./switch.md) chapter to see another way of handling multiple conditions with style and ease.