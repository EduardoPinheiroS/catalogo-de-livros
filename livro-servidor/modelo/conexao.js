const mongoose = require('mongoose');
const banco = mongoose;

// Note que removi a parte do "const options = ..."
const uri = "mongodb+srv://eduarddo28:uaradeiestacio@cluster0.25owu9h.mongodb.net/livraria?retryWrites=true&w=majority"; 

banco.connect(uri) // Removi o ", options" daqui de dentro
    .then(() => console.log("Conectado ao MongoDB com sucesso!"))
    .catch((err) => console.log("Erro de conexão: " + err));

module.exports = banco;