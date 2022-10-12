const express = require('express');
const app = express();
const uploadUser = require('./middlewares/uploadimage');
const cors = require('cors');



app.use((req,res,next) => {
res.header("Acess-Control-Allow-Origin", "*" );
res.header("Acess-Control-Allow-Methods", "GET, PUT, POST,DELETE");
res.header("Acess-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
app.use(cors());
next();
});

app.post("/upload-image", uploadUser.single('image'), async(req,res) =>{
if(req.file){
    console.log(req.file);
    return res.json({
        erro: false,
        mensagem: "upload realizado com sucesso!"
    }); 
}

 return res.status(400).json({
        erro:true,
        mensagem: "Erro: upload não realizado, necessário enviar uma imagem em um dos  formatos: png, jpeg, jpg, gif"
    });

   
});

app.listen(8080,() =>{
console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});