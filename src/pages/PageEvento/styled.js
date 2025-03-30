import styled from 'styled-components';

import ui from '../../helpers/ui.json';

const { colorSchemma } = ui;

export const PageEventArea = styled.div`
  width: 100%;
  .path {
    display: flex;
    padding: 35px 0;
    a:nth-child(1) {
      color: #acacac;
      font-weight: 600;
      &:hover {
        color: #fff;
      }
    }
    div:nth-child(2) {
      fill: #acacac;
    }
    div:nth-child(3) {
      color: #fff;
    }
  }
  .eventWrapper {
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .video {
      position: relative;
      padding-bottom: 36.25%;
      flex: 1 1 0%;
      background-color: #111111;
      img {
        width: 100%;
        max-height: 500px;
        object-fit: cover;
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        border: none;
      }
    }
    .sidebarPlaylist {
      min-width: 20rem;
      margin-left: 35px;
      border-radius: 5px;
      background-color: #11111155;
      position: relative;
      overflow: hidden;

      .wrapperPlaylist {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow-y: auto;
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-thumb {
          background: #444444;
          border-radius: 10px;
        }

        .playlist {
          height: 100%;
          .info {
            background-color: #66666622;
            border-radius: 5px 5px 0 0;
            padding: 10px 25px;
            h2 {
              color: #fff;
              font-size: 1.1rem;
            }
          }
          .eps {
            display: flex;
            flex-direction: column;
            padding: 0 10px;
            margin-top: 15px;
            position: relative;
            overflow: hidden;
            .materialComplementary{
                display: flex;
                align-items: center;
                color: #fff;
                justify-content: center;
                margin: 10px 0;
                &:hover {
                  background-color: #ffffff11;
                  border-radius: 8px;
                  transition: 100ms;
                }
                svg {
                  margin-right: 5px;
                }
            }
            .sidebar-itens{
            }
            a {
              display: flex;
              align-items: center;
              color: ${colorSchemma.colorTerciary};
              font-size: 0.9rem;
              font-weight: 500;
              padding: 7px 14px;
              position: relative;
              border-radius: 5px;
              cursor: pointer;
              &:hover {
                color: #fff;
                background-color: #ffffff11;
                transition: 150ms;
              }
              svg.circleTemporal {
                width: 11px;
                z-index: 1;
                position: absolute;
                left: -3px;
                margin-right: 5px;
                fill: #444;
                transition: 150ms;
              }
              &:hover {
                svg.circleTemporal {
                  fill: ${colorSchemma.colorSecondary};
                }
              }
            }
            &:after {
              content: '';
              position: absolute;
              top: 20px;
              left: 12px;
              width: 2px;
              height: calc(100% - 35px);
              background-color: #444;
            }
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    .eventWrapper {
      flex-direction: column;
      .video {
        padding-bottom: 56.25%;
      }
      .sidebarPlaylist {
        width: 100%;
        height: 20rem;
        margin: 30px auto 20px;
        min-width: 200px;
        .wrapperPlaylist {
          .playlist {
            .info {
              text-align: center;
            }
            .eps {
              a {
                padding: 15px;
                margin: 0;
              }
              &:after {
                top: 20px;
                height: calc(100% - 40px);
              }
            }
          }
        }
      }
    }
  }
`;
