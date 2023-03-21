import axios from 'axios';
const endPoint = 'http://teste-frontend.saperx.com.br/api/schedule';

const fetchEndPoint = async () => {
  // const promise = await fetch(endPoint);
  // Api com problema de CORS, esse headers serve para tentar corrigir
  const headers =  {'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': ''};
  const promise = await axios.get(endPoint, {}, headers).then(e => e.data);
  return promise;
};

export default fetchEndPoint;
