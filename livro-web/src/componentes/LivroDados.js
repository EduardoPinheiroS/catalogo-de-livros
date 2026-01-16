import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from '../controle/ControleLivros';

const controleLivros = new ControleLivros();

const LivroDados = () => {
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(0);
    const navigate = useNavigate();

    const incluir = (event) => {
        event.preventDefault();
        const livro = {
            codigo: "",
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
            codEditora: parseInt(codEditora)
        };
        controleLivros.incluir(livro).then(() => navigate('/'));
    };

    return (
        <main className="container mt-3">
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Resumo</label>
                    <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Autores (um por linha)</label>
                    <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Editora</label>
                    <select className="form-control" value={codEditora} onChange={(e) => setCodEditora(e.target.value)}>
                        <option value="0">Alta Books</option>
                        <option value="1">Pearson</option>
                        <option value="2">Addison Wesley</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
            </form>
        </main>
    );
};

export default LivroDados;