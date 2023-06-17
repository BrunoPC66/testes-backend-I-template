export const pratica3 = (x: number, y: number): {sum: number, mult: number} | null => {
    if (typeof x !== "number" || typeof y !== "number") {
        return null
    }

    const result = {
        sum: x + y,
        mult: x * y
    }

    return result
}