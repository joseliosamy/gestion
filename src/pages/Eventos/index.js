import React from 'react';

import { EventsArea } from './styled';
import Cards from '../../components/partials/Cards';
import { Delimiters } from '../../components/MainComponets';

function Eventos(props) {
  return (
    <EventsArea>
      <section className="apresentation">
        <div className="info">
          <p>Conteúdo disponível! 🚀</p>
          <p>
            Acesse os conteúdos necessários agora mesmo!
          </p>
        </div>
      </section>
      <Delimiters>
        <Cards date={props.date} loading={props.loading} />
      </Delimiters>
    </EventsArea>
  );
}
export default Eventos;
