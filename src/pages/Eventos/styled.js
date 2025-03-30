import styled from 'styled-components';

import ui from '../../helpers/ui.json';


const { colorSchemma } = ui;

export const EventsArea = styled.div`
  width: 100%;
  height: 100%;
  .apresentation {
    width: 100%;
    height: 100%;
    margin-bottom: 35px;
    background-color: ${colorSchemma.colorSecondary};
    .info {
      width: 80%;
      min-height: 250px;
      padding: 20px 0;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p:first-child {
        font-size: 3rem;
        font-weight: 600;
      }
    }
  }
  @media (max-width: 600px) {
    .apresentation {
      .info {
        min-height: 200px;
        p:first-child {
          font-size: 2rem;
        }
        p:last-child: {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .apresentation {
      .info {
        text-align: center;
      }
    }
  }
`;
