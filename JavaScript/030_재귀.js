`
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n-1)

# n * n-1 * n-2 * ..... * 1
# 5 * 4 * 3 * 2 * 1 = 120
`

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

factorial(5)    5 * factorial(4)    5 * 24
factorial(4)    4 * factorial(3)    4 * 6
factorial(3)    3 * factorial(2)    3 * 2
factorial(2)    2 * factorial(1)    2 * 1
factorial(1)