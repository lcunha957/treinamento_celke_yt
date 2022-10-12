import  React, { useState } from 'react';

import api from './config/configApi'; 
ç
import './App.css';

function App() {

  const [image, setImage] = useState('');
  const [status, setStatus] = useState({
    type:'' ,
    mensagem:'' ,
  });

  const uploadImage = async e => {
    e.preventDefault();
    console.log(image);
    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      'headers': {
        'Content-type': 'application/json'
      }
    }
    await api.post("/upload-image", formData, headers)
    .then((response) => {
      console.log(response);
      setStatus({ type: 'success', mensagem: response.data.mensagem})
    }).catch((err) =>{
    if(err.response){
     console.log(err.response);
     setStatus({
      type: 'err',
      mensagem: err.response.data.mensagem
     });
    }else{
    setStatus({
      type: 'error',
      mensagem: 'Erro: tente mais tarde!'
     });
    } 
    });
  }

  return (
    <div className="App">
      <h1> Upload</h1>
      {status.type === 'sucess' ? <p style={{color: "green"}}>{status.mensagem}</p> : ""}
      {status.type === 'err' ? <p style={{color: "ff0000"}}>{status.mensagem}</p> : ""}
      <form onSubmit={uploadImage}>
        <label> Imagem: </label>
        <input type="file" name="image" onChange={e => setImage(e.target.files[0])}/>
        <br/><br/>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default App;
