/* eslint-disable react/prop-types */
import "./style/Lista.css"
export default function Lista({productos}) {

    return (
        
          <div className="lista-container">
      <ul className="lista">
        {productos.map((p, index) => (
          <li key={index} className="lista-item">
            {p}
          </li>
        ))}
      </ul>
    </div>
        
    )
}