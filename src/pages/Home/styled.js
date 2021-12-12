import styled from 'styled-components';

export const HomeArea = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: fade_in 0.7s ease-in-out;
  position: relative;
  align-items: center;
  justify-content: end;
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
        #9e61ff,
        rgba(142, 97, 255, 0) 34%
      ),
      radial-gradient(
        circle farthest-corner at 0% -100%,
        #619bff 20%,
        rgba(205, 219, 248, 0) 51%
      ),
      linear-gradient(180deg, #6c52ee, #6c52ee);
    padding: 15px 40px;
    box-shadow: 1px 1px 3px 1px rgb(0 0 0 / 19%),
      0 0 15px 0 rgb(238 1 255 / 57%), 0 5px 53px 0 rgb(0 29 255 / 73%);
    transition: 180ms;
    z-index: 1;
    &:hover {
      filter: hue-rotate(83deg);
      box-shadow: none;
    }
  }

  div {
    width: 100%;
    video {
      margin-bottom: -5px;
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 900px) {
    justify-content: center;
    h1 {
      font-size: 3rem;
    }
    > div {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      justify-content: center;
      video {
        width: 200%;
        margin: 0 auto;
      }
    }
  }
`;
