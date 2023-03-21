// import axios from 'axios';
import { useContext } from 'react';
import axios from 'axios'
import Context from '../context/Context';
export default function Inputs () {
  const {       
    endPoint, headers,
    nome, setNome,
    email, setEmail,
    dataNasc, setDataNasc,
    CPF, setCPF,
    tel, setTel, setForm
  } = useContext(Context);

  const form = {
    nome: nome,
    email: email,
    dataNasc: dataNasc,
    CPF: CPF,
    tel: tel
  }
  
  const handleChange = (event) => {
    if(event.target.name === "Nome") setNome(event.target.value);
    if(event.target.name === "Email") setEmail(event.target.value);
    if(event.target.name === "Data") setDataNasc(event.target.value);
    if(event.target.name === "CPF") setCPF(event.target.value);
    if(event.target.name === "Tel") setTel(event.target.value);
  };

  const sendForm = async () => {
    //& Seria interessante adicionar um "load" para o usuario não poder clicar varias vezes
    try {
      //& Ideal adicionar um "notify" para mostrar ao usuario que deu certo
      await axios.post(endPoint, form, headers)
    } catch(e) {
      //! Ideal adicionar um "notify" para mostar ao usuario que deu erro
      console.error(e)
    }
  }
  
  function disable_() {
    if(form.nome && form.email && form.dataNasc && form.CPF && form.tel) {
      setForm(form)
      return false
    }
    else return true
  }
  // Campo telefone buscar uma lib para que ao digitar um número e teclar "enter" ele adicione e continue podendo adicionar até o limite da API
  return (
    <div className="form-inputs">
      <label className="form-labels"> 
        <p>Nome</p>
        <input name="Nome" value={nome} onChange={handleChange} type="text" className="inputs"/>
      </label>
      <label className="form-labels"> 
        <p>Email</p> 
        <input name="Email" value={email} onChange={handleChange} type="email" className="inputs" /></label>
      <label className="form-labels"> 
        <p>Data de Nascimento </p>
        <input name="Data" value={dataNasc} onChange={handleChange} type="date" className="inputs" /></label>
      <label className="form-labels"> 
        <p>CPF</p> 
        <input name="CPF" value={CPF} onChange={handleChange} type="text" className="inputs" /></label>
      <label className="form-labels">
        <p>Telefone</p> 
        <input name="Tel" value={tel} onChange={handleChange} type="text" className="inputs"/></label>
      <label className="form-labels">
        <button onClick={sendForm} className="form-button inputs" disabled={disable_()}>Enviar</button>
      </label>
    </div>
  )
}