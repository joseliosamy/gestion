import React, { useEffect, useState } from 'react';

import { ComplementaryMaterialArea } from './styled';
import { Delimiters } from '../../components/MainComponets';
import { Link } from 'react-router-dom';

import Downloads from '../../components/partials/Downloads';
import RepositoryGIT from '../../components/partials/RepositoryGIT';
import Notion from '../../components/partials/Notion';
import Figma from '../../components/partials/Figma';

function ComplementaryMaterial(props) {
  var currentEvent = { redirectURL: '/' };
  var complementaryMaterial;
  var downloadURL, repositoryGIT, figma, notion;
  const [path, setPath] = useState('');
  const [pathLen, setPathLen] = useState('');

  //Setando o path e o pathLen
  useEffect(() => {
    setPath(window.location.pathname);
    setPathLen(window.location.pathname.length);
  }, []);
  //Formatando o path de acordo com o tamanho da url e removendo o /material-complementar - length === 22
  var formatedPath = path.substring(0, pathLen - 22);

  //Conseguindo o valores na api relativos ao path
  props.date.map((item) => {
    if (item.redirectURL === formatedPath) {
      currentEvent = item;
      return;
    }
  });

  if (currentEvent.complementaryMaterial != undefined) {
    complementaryMaterial = currentEvent.complementaryMaterial;

    complementaryMaterial.map((item) => {
      if (item.downloadURL) downloadURL = item.downloadURL;
      else if (item.repositoryGIT) repositoryGIT = item.repositoryGIT;
      else if (item.figma) figma = item.figma;
      else if (item.notion) notion = item.notion;
    });
  }

  return (
    <Delimiters>
      <ComplementaryMaterialArea>
        <div className="path">
          <Link to="/conteudo-cliente">Conteúdo</Link>

          <div>
            <svg
              height="24"
              id="Layer_1"
              version="1.1"
              fill=""
              viewBox="0 0 512 512"
              width="24"
            >
              <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
            </svg>
          </div>

          <Link to={currentEvent.redirectURL}>{currentEvent.eventName}</Link>
          <div>
            <svg
              height="24"
              id="Layer_1"
              version="1.1"
              fill=""
              viewBox="0 0 512 512"
              width="24"
            >
              <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
            </svg>
          </div>

          <div>Material Complementar</div>
        </div>

        {repositoryGIT != undefined && (
          <RepositoryGIT repositoryGIT={repositoryGIT} />
        )}

        {downloadURL != undefined && <Downloads downloadURL={downloadURL} />}

        {notion != undefined && <Notion notion={notion} />}

        {figma != undefined && <Figma figma={figma} />}
      </ComplementaryMaterialArea>
    </Delimiters>
  );
}
export default ComplementaryMaterial;
