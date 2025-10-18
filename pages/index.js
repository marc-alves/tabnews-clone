import React, { useEffect } from "react";

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
        const offsetX = (botaoX - mouseX) * 2;
        const offsetY = (botaoY - mouseY) * 4.1;

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        margin: 0,
      }}
    >
      <h1
        style={{
          marginBottom: "40px",
          color: "#333",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        Oi! Querida Laura, você me deve duas massagens(por dia) e 100 beijos??
      </h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 50px",
          position: "relative",
        }}
      >
        <button
          onClick={() =>
            alert(
              "Parabéeens gatinha❤️,OPÇÃO CORRETA, você pode pagar o mais rápido possível!",
            )
          }
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(45deg, #32CD32, #228B22)",
            color: "white",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Siim! ❤️
        </button>

        <button
          id="botao-fugitivo"
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(45deg, #5f5fff, #8a2be2)",
            color: "white",
            position: "absolute",
            left: "calc(100% - 180px)", // Ajuste para o botão começar à direita
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Talvez.. 🤔
        </button>
      </div>
    </div>
  );
}

function teste() {
  console.log("Teste teste");
}
function teste2() {
  console.log("teste 2");
}
export default Home;
