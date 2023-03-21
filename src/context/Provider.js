/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/api';
import Context from './Context';

function Provider({ children })  {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [data, setData] = useState([
    {
        "id": 3,
        "name": "Fernando José Lehmkuhl",
        "numbers": [
            {
              "id": 11,
              "id_schedule": 3,
              "number": 48991372146
            },
            {
              "id": 13,
              "id_schedule": 3,
              "number": 65311328946
            },
            {
              "id": 21,
              "id_schedule": 3,
              "number": 123123124
            }
        ],
        "email": "fernando@email.com",
        "cpf": "08188697988",
        "date_born": "1992-12-19"
    },
    {
        "id": 4,
        "name": "Nome do usuario",
        "numbers": [
            {
                "id": 10,
                "id_schedule": 4,
                "number": 4831210110
            }
        ],
        "email": "user@email.com",
        "cpf": "08188697988",
        "date_born": "1992-12-19"
    }
]);
  const [dataNasc, setDataNasc] = useState();
  const [CPF, setCPF] = useState();
  const [tel, setTel] = useState();
  const [form, setForm] = useState({
    nome: nome,
    email: email,
    dataNasc: dataNasc,
    CPF: CPF,
    tel: tel
  });
  const [endPoint, setEndPoint] = useState('http://teste-frontend.saperx.com.br/api/schedule');
  const [headers, setHeaders] =  useState({'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': ''});


  async function setResponse() {
    try {
      const response = await fetchApi();
      setData(response)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    setResponse();
  }, []);

  return(
    <Context.Provider
      value={ 
        {
          endPoint, headers,
          form, setForm,
          data, setData,
          nome, setNome,
          email, setEmail,
          dataNasc, setDataNasc,
          CPF, setCPF,
          tel, setTel
        }
       }
    >
      { children }
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;
