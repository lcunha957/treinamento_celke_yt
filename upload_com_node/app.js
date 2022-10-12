const express = require('express');
const app = express();

app.post("/upload-image", async(req,res) =>{
    return res.json({
        erro: false,
        mensagem: "upload realizado com sucesso!"
    });
});

app.listen(8080,() =>{
console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});