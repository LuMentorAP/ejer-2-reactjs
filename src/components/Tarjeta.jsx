/* eslint-disable react/prop-types */
import "./style/Card.css"
export default function Tarjeta({titulo, desc, txtBtn}) {
    return (
        <div className="card">
        <h2 className="card-title">{titulo}</h2>
        <p className="card-desc">{desc}</p>
        <button className="card-button">{txtBtn}</button>
      </div>
    )
}