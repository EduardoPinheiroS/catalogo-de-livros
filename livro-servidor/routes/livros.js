const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    await incluir(req.body);
    res.json({ mensagem: "Livro incluído!" });
});

router.delete('/:id', async (req, res) => {
    await excluir(req.params.id);
    res.json({ mensagem: "Livro excluído!" });
});

module.exports = router;