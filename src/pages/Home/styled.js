import styled, { keyframes } from 'styled-components';

// Animação do spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg, 
    rgba(0,0,0,0.9) 0%,
    rgba(10, 107, 146, 0.8) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);

  .loader {
    border: 5px solid rgba(255, 255, 255, 0.1);
    border-top: 5px solid #009cda;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
    box-shadow: 0 0 15px rgba(0, 183, 255, 0.5);
  }
`;

export const HomeArea = styled.div`
  min-height: calc(100vh - 70px);
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: end;
  position: relative;
  opacity: ${props => props.$isLoading ? 0 : 1};
  transition: opacity 0.7s ease-in-out;

  h1 {
    font-size: 4rem;
    text-align: center;
    z-index: 1;
    margin-bottom: 15px;
    text-shadow: 0 0 10px rgba(0, 156, 218, 0.7);
  }

  a {
    color: #fff;
    font-weight: 500;
    border-radius: 20px;
    background-image: linear-gradient(
        200deg,
        #009cda,
        rgba(142, 97, 255, 0) 34%
      ),
      radial-gradient(
        circle farthest-corner at 0% -100%,
        rgb(61, 132, 255) 20%,
        rgba(205, 219, 248, 0) 51%
      ),
      linear-gradient(180deg,rgb(25, 146, 194),rgb(10, 107, 146));
    padding: 15px 40px;
    box-shadow: 1px 1px 3px 1px rgb(0 0 0 / 19%),
      0 0 15px 0 rgba(0, 183, 255, 0.76), 
      0 5px 53px 0 rgb(0 29 255 / 73%);
    transition: all 180ms ease;
    z-index: 1;

    &:hover {
      filter: hue-rotate(-20deg);
      box-shadow: none;
      transform: scale(1.1);
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    video {
      width: 150%;
      height: 100%;
      max-height: 350px;
      opacity: ${props => props.$isLoading ? 0 : 1};
      transition: opacity 0.5s ease;
    }

    img {
      display: none;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
    
    h1 {
      font-size: 3rem;
    }

    > div {
      position: absolute;
      bottom: 0;
      
      video {
        width: 200%;
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(93, 23, 234, 0) 39%,
      rgba(23, 90, 234, 0.25) 100%
    );

    > div {
      bottom: 65px;
      
      video {
        display: none;
      }

      img {
        display: block;
        width: 90%;
      }
    }
  }
`;