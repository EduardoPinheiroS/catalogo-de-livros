const baseURL = "http://localhost:3005/livros";

export class ControleLivros {
    async obterLivros() {
        const response = await fetch(baseURL, { method: 'GET' });
        return response.json();
    }

    async incluir(livro) {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livro)
        });
        return response.ok;
    }

    async excluir(codigo) {
    // Note que usamos a porta 3005 que você configurou no bin/www
    const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return response.ok;
}
}