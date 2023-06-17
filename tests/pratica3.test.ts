import {pratica3} from "../src/pratica3"

describe("Teste da prática 3", () => {
    test("Retorna null se um dos parâmetros não for do tipo number", () =>{
        const result = pratica3("2" as any, "f" as any)

        expect(result).toBe(null);
    });

    test("Retorna um objeto com soma e multiplicação dos parâmetros", () => {
        const result = pratica3(5, 5)
        const result2 = pratica3(6, 5)

        expect(result).toEqual({sum: 10, mult: 25})
        expect(result2).toEqual({sum: 11, mult: 28})
    })
})