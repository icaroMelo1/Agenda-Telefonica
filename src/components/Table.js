import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import axios from 'axios'

function Table() {
  const { data, endPoint, headers, form } = useContext(Context);

  const editar = (event) => {
    //? Lógica para editar ainda não criada
    //* O ideal seria abrir um "modal" (dialog) com um form preenchido com os dados do contato e lá ele editasse
    //& Seria interessante adicionar um "load" para o usuario não poder clicar varias vezes
    try {
      //& Ideal adicionar um "notify" para mostrar ao usuario que deu certo
      const id = event.target.id
      axios.put(endPoint + '/' + id, form, headers)
    } catch (e) {
      //! Ideal adicionar um "notify" para mostar ao usuario que deu erro
      console.error(e)
    }
  }

  const deletar = (event) => {
    //* O ideal seria abrir um "modal" (dialog) quando o usuario clicasse para adicionar uma função de "Confirmar deleção"
    //& Seria interessante adicionar um "load" para o usuario não poder clicar varias vezes
    try {
      //& Ideal adicionar um "notify" para mostrar ao usuario que deu certo
      const id = event.target.id
      axios.delete(endPoint + '/' + id, headers)
    } catch (e) {
      //! Ideal adicionar um "notify" para mostar ao usuario que deu erro
      console.error(e)
    }
  }

  const tableBody = () => {
    const tbody = data.map((infos, key) => {
      return infos.numbers.map((number, index) => {
        if(index === 0) {
          return (
            <tr key={index}>
              <td>{infos.name}</td>
              <td>{infos.email}</td>
              <td>{infos.date_born}</td>
              <td>{infos.cpf}</td>
              <td className='table-td'>{number.number}</td>
              <td className='table-td'><button className='table-button' number_id={number.id} id={infos.id} onClick={editar}>✏️</button></td>
              <td className='table-td'><button className='table-button' number_id={number.id} id={infos.id} onClick={deletar}>🗑️</button></td>
            </tr>
          )
        } else {
          return (
            <tr key={index}>
              <td/>
              <td/>
              <td/>
              <td/>
              <td className='table-td'>{number.number}</td>
              <td/>
              <td/>
            </tr>
          )
        }
        
      })
    });
    return tbody;
  }

  useEffect(() => {
    tableBody();
  });

  
  return (
    <>
      <table className="table">
        <thead className="thead">
          <tr>
            <th className="td tarefa tdhead">Nome</th>
            <th className="tdhead">Email</th>
            <th className="tdhead">Data de Nascimento</th>
            <th className="tdhead">CPF</th>
            <th className="tdhead">Telefones</th>
            <th className="tdhead">Editar</th>
            <th className="tdhead">Apagar</th>
          </tr>
        </thead>
        <tbody>
          {tableBody()}
        </tbody>
      </table>
    </>
  )
};

export default Table;
