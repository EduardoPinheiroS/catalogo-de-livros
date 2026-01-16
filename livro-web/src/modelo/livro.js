export class Livro {
    constructor(codigo = "", codEditora = 0, titulo = "", resumo = "", autores = []) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}