// Utilities
import React, { useEffect, useState } from 'react';

import { Switch, Route } from 'react-router-dom';

// Partial components
import Home from './pages/Home';

// pages
import About from './pages/Sobre';
import Events from './pages/Eventos';
import PageEvent from './pages/PageEvento';
import ComplementaryMaterial from './pages/MaterialComplementar';

function Routes() {
  const [date, setDate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api-gestion-murex.vercel.app/conteudo-cliente')
      .then((res) => res.json())
      .then((json) => setDate(json))
      .catch(() => console.log('erro'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/sobre">
        <About />
      </Route>
      <Route exact path="/conteudo-cliente">
        <Events date={date} loading={loading} />
      </Route>
      <Route exact path="/eventos/*/material-complementar">
        <ComplementaryMaterial date={date} />
      </Route>
      <Route exact path="/conteudo-cliente/*">
        <PageEvent date={date} />
      </Route>
      <Route exact path="/contato">
        Em desenvolvimento...
      </Route>
      <Route path="*">Erro 404.</Route>
    </Switch>
  );
}

export default Routes;
