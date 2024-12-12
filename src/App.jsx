
// // eslint-disable-next-line react/prop-types

import Boton from "./components/Boton";
import Lista from "./components/Lista";
import Tarjeta from "./components/Tarjeta";


function App() {
  const productos = ['Manzanas', 'Peras', 'Naranjas'];  

  const tarjetaInfo = {
    titulo: 'Titulo Card',
    desc: 'asdasdasdasdasdasdasd',
    txtBtn: 'Click me!'
  }

  return (
    <>
      <Lista productos={productos}/>
      <Tarjeta titulo={tarjetaInfo.titulo} desc={tarjetaInfo.desc} txtBtn={tarjetaInfo.txtBtn} />
      <Boton />
    </>
  )
}

export default App
