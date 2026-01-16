import React, { useState, useEffect } from 'react';
import { ControleLivros } from '../controle/ControleLivros';

const controleLivros = new ControleLivros();

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        controleLivros.obterLivros().then((dados) => {
            setLivros(dados);
            setCarregado(true);
        });
    }, [carregado]);

    const excluir = (codigo) => {
        controleLivros.excluir(codigo).then(() => setCarregado(false));
    };

    return (
        <main className="container mt-3">
            <h1>Catálogo de Livros</h1>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.length > 0 ? (
                        livros.map((livro) => (
                            <tr key={livro._id}>
                                <td>{livro.titulo}</td>
                                <td>{livro.resumo}</td>
                                <td>{livro.codEditora}</td>
                                <td>
                                    <ul className="list-unstyled">
                                        {livro.autores.map((autor, index) => (
                                            <li key={index}>{autor}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => excluir(livro._id)}>
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-4">
                                <strong>Nenhum livro encontrado no catálogo.</strong>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;