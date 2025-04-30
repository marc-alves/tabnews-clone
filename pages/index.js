import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const botao = document.getElementById("botao-fugitivo");

    function handleMouseMove(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const botaoRect = botao.getBoundingClientRect();
      const botaoX = botaoRect.left + botaoRect.width / 2;
      const botaoY = botaoRect.top + botaoRect.height / 2;

      const distancia = Math.hypot(botaoX - mouseX, botaoY - mouseY);

      if (distancia < 100) {
        const offsetX = (botaoX - mouseX) * 1.5;
        const offsetY = (botaoY - mouseY) * 1.5;

        let novoX = botao.offsetLeft + offsetX;
        let novoY = botao.offsetTop + offsetY;

        const maxX = window.innerWidth - botao.offsetWidth;
        const maxY = window.innerHeight - botao.offsetHeight;

        novoX = Math.max(0, Math.min(novoX, maxX));
        novoY = Math.max(0, Math.min(novoY, maxY));

        botao.style.left = `${novoX}px`;
        botao.style.top = `${novoY}px`;
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ marginBottom: '40px' }}>Oi! Querida Laura, você me deve duas massagens(por dia) e 100 beijos??</h1>

      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 50px',
        position: 'relative'
      }}>
        <button 
        onClick={() => alert("Parabéeens, você pode pagar o mais rápido possível!")}
        style={{ padding: '10px 20px', fontSize: '16px' }}>
          Siim! ❤️
        </button>
        <button
          id="botao-fugitivo"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            position: 'absolute',
            cursor: 'pointer'
          }}
        >
          Não 🙁
        </button>
      </div>
    </div>
  );
}

export default Home;
