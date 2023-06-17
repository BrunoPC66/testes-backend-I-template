import {pratica2} from "../src/pratica2"

describe("Teste da prática 2", () => {
    test("Retornar null se o 'n' for diferente de number", () => {
        const result = pratica2("abc" as any)

        expect(result).toBe(null) // OK
        // expect(result).not.toBe(null)
    });

    test("Não retornar null se o 'n' for número inteiro", () => {
        const result = pratica2(5)

        // expect(result).toBeNull()
        expect(result).not.toBe(null) // OK
    });

    test("Retornar true se o 'n' for um número par", () => {
        const result = pratica2(6)

        expect(result).toBe(true) // OK
    });

    test("Retornar false se o 'n' for um número impar", () => {
        const result = pratica2(6)

        expect(result).toBe(false) // FAIL
    });
})