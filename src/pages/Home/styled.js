import styled from 'styled-components';

export const HomeArea = styled.div`
  min-height: calc(100vh - 70px);
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: end;
  animation: fade_in 0.7s ease-in-out;
  position: relative;
  h1 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 15px;
    z-index: 1;
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
      0 0 15px 0 rgba(0, 183, 255, 0.76), 0 5px 53px 0 rgb(0 29 255 / 73%);
    transition: 180ms;
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
        margin: 0 auto;
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
