const express = require('express');
const app = express();
const uploadUser = require('./middlewares/uploadimage');

app.post("/upload-image", uploadUser.single('image'), async(req,res) =>{
if(req.file){
    return res.json({
        erro: false,
        mensagem: "upload realizado com sucesso!"
    }); 
}

 return res.status(400).json({
        erro:true,
        mensagem: "Erro: upload não realizado"
    });

   
});

app.listen(8080,() =>{
console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});