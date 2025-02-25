# Break and Continue: The Flow Controllers

In the world of loops, sometimes you need to take a detour or skip a step to keep your program flowing smoothly. Enter `break` and `continue`, the flow controllers that give you the power to manage your loops with finesse.

## Break: The Exit Strategist

The `break` statement is your exit strategist, allowing you to break free from a loop prematurely. It's like hitting the emergency stop button when you’ve reached your destination or encountered an unexpected obstacle.

### Syntax

Using `break` is straightforward:

```c
if (condition) {
    break;
}
```

### Example

Let’s see the exit strategist in action within a loop:

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            break;
        }
        printf("i = %d\n", i);
    }
    return 0;
}
```

In this example, the loop exits when `i` equals 5, cutting the journey short and printing values from 0 to 4.

## Continue: The Skipper

The `continue` statement is the skipper, allowing you to skip over certain iterations and move directly to the next one. It’s like jumping over a puddle on your path, ensuring you keep moving forward without interruption.

### Syntax

Using `continue` is just as easy:

```c
if (condition) {
    continue;
}
```

### Example

Watch the skipper in action within a loop:

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            continue;
        }
        printf("i = %d\n", i);
    }
    return 0;
}
```

In this example, the loop skips all even numbers, printing only the odd values from 1 to 9.

## Key Points

- **Break**: Use the exit strategist to stop a loop early when a specific condition is met, providing a way out in cases like searching for an item or handling errors.
- **Continue**: Use the skipper to bypass specific iterations, useful for skipping over unwanted values or implementing complex conditions.

## When to Use Break and Continue?

- **Break**: When you need an emergency exit from a loop, such as finding an element in a list or encountering an error that requires immediate termination.
- **Continue**: When you want to skip certain iterations and keep the loop running, like filtering out specific values or optimizing performance by ignoring unnecessary steps.

## Practice Exercise

Create a program that uses a `for` loop to print numbers from 1 to 10. Use `break` to stop the loop if the number is greater than 7 and `continue` to skip printing even numbers.

---

With `break` and `continue`, you now have the tools to masterfully control the flow of your loops.