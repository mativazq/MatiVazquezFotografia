import React from 'react'
import './botonesPresupuestos.css'

const BotonesPresupuestos = () => {
  return (
    <>
        <h2 className='rock-salt-regular'>Elegi el presupuesto que mas te guste:</h2>
        <button className='buttons'>Casamiento</button>
        <button className='buttons'>Cumpleaños de 15</button>
        <button className='buttons'>Recepcion</button>
        <button className='buttons'>Embarazo</button>
        <button className='buttons'>Fiesta Privada</button>
        <button className='buttons'>Sesion Individual</button>
        <p className='texto'>Los siguientes presupuestos tienen un valor de 10 dias posterior a la fecha de consulta.</p>
        <p>El servicio se contrata con una seña del 15% del total y se congela el valor durante 90 dias.</p>
        <p>Transcurrido ese tiempo, el valor se actualizara con un incremento mensual del 15% sobre el saldo restante.</p>
        <p>Al señar el mismo se reserva la exclusividad de la fecha y se coordina una reunion entre partes.</p>
    
    
    </>
  )
}

export default BotonesPresupuestos