import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeArea, LoadingScreen } from './styled'; // Importação correta
import bannerMP4 from '../../images/banner.mp4';
import bannerPNG from '../../images/banner.png';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen>
          <div className="loader"></div>
        </LoadingScreen>
      )}

      <HomeArea $isLoading={isLoading}>
        <h1>JS | Mídia</h1>
        <Link to="/conteudo-cliente">Começar</Link>
        <div>
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            playsInline 
            loop
          >
            <source src={bannerMP4} type="video/mp4" />
          </video>
          <img src={bannerPNG} alt="banner" />
        </div>
      </HomeArea>
    </>
  );
}

export default Home;