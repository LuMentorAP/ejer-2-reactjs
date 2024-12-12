
import "./style/Boton.css";

export default function Boton() {
    
  const aplicarEstilo1 = () => {
    document.body.style.backgroundColor = "#1e1e2f";
    document.body.style.color = "#f5f5f5";
    document.body.style.fontFamily = "'Courier New', monospace";
    document.body.style.fontSize = "18px";
  };

  const aplicarEstilo2 = () => {
    document.body.style.backgroundColor = "#ffefd5";
    document.body.style.color = "#333333";
    document.body.style.fontFamily = "'Georgia', serif";
    document.body.style.fontSize = "16px";
  };

  const aplicarEstilo3 = () => {
    document.body.style.backgroundColor = "#f0f8ff";
    document.body.style.color = "#002147";
    document.body.style.fontFamily = "'Verdana', sans-serif";
    document.body.style.fontSize = "14px";
  };

  return (
    <div className="boton-container">
      <button onClick={aplicarEstilo1} className="boton boton-oscuro">
        Estilo Oscuro
      </button>
      <button onClick={aplicarEstilo2} className="boton boton-clasico">
        Estilo Clásico
      </button>
      <button onClick={aplicarEstilo3} className="boton boton-moderno">
        Estilo Moderno
      </button>
    </div>
  );
}
