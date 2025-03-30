import { useState, useEffect } from 'react';
import Routes from '../../../Routes';

function ConnectApi() {
  const [date, setDate] = useState([]);

  useEffect(() => {
    fetch('https://api-gestion-murex.vercel.app/conteudo-cliente')
      .then((res) => res.json())
      .then((json) => setDate(json))
      .catch(() => console.log('erro'));
  }, []);
  return <Routes date={date} />;
}
export default ConnectApi;
