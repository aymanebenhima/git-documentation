# Loops in C

Loops are the heartbeats of programming, allowing you to repeat actions, automate tasks, and create dynamic programs. In C, we have powerful loops like `for` and `while` to control the flow of our code and make our programs dance to our tunes.

## For Loop: The Precision Dancer

The `for` loop is like a precision dancer, perfect when you know exactly how many steps to take. It’s the go-to loop for fixed iterations, bringing order and structure to your code.

### Syntax

The `for` loop's choreography consists of three main parts: initialization, condition, and increment/decrement.

```c
for (initialization; condition; increment) {
    // code to be executed
}
```

### Example

Let’s watch our precision dancer in action:

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("Step %d\n", i + 1);
    }
    return 0;
}
```

In this performance, our loop gracefully executes 5 times, counting each step from 1 to 5.

## While Loop: The Free Spirit

The `while` loop is the free spirit of loops, continuing its journey as long as the condition is true. It’s ideal when the number of iterations isn’t known upfront, giving your code the freedom to explore.

### Syntax

The `while` loop’s mantra is simple:

```c
while (condition) {
    // code to be executed
}
```

### Example

Here’s our free spirit in action:

```c
#include <stdio.h>

int main() {
    int i = 0;

    while (i < 5) {
        printf("Journey Step %d\n", i + 1);
        i++;
    }
    return 0;
}
```

In this adventure, our loop runs 5 times, counting each step from 1 to 5, just like our `for` loop, but with a more open-ended approach.

## Key Points

- **Initialization**: The `for` loop sets up its dancer before the performance starts. The `while` loop checks the condition before each step.
- **Condition**: Both loops evaluate a condition before executing their moves. If the condition fails, the loop takes a bow and exits.
- **Increment/Decrement**: The `for` loop gracefully updates the counter after each step. In the `while` loop, you must ensure the counter advances within the loop.

## When to Use For and While Loops?

- **For Loop**: Use the precision dancer when you have a clear number of steps, like iterating through an array or performing a set number of calculations.
- **While Loop**: Embrace the free spirit when the path is unknown, like reading input until a certain condition is met or processing data until a specific state is achieved.

## Practice Exercise

Create a program where the precision dancer (`for` loop) prints the first 10 even numbers and the free spirit (`while` loop) prints the first 10 odd numbers. Watch your loops perform and bring your code to life!

---

Now that you’ve seen the elegance of loops in C, move on to the [Break and Continue](./breakContinue.md) chapter to learn how to control the flow and add more finesse to your programming dance.