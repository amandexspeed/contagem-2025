import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  var dataContagem = new Date("Jan 1, 2025 00:00:00").getTime();

  var x = setInterval(function() {

    var agora = new Date().getTime();
   
    var diferenca = dataContagem - agora ; 
      
    if (diferenca > 0){

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000); 

    document.getElementById('segundos').textContent = segundos
    document.getElementById('minutos').textContent = minutos
    document.getElementById('horas').textContent = horas
    document.getElementById('dias').textContent = dias  
      
    }else{
      clearInterval(x);
      document.getElementById('segundos').textContent = "0";
      document.getElementById('minutos').textContent = "0";
      document.getElementById('horas').textContent = "0";
      document.getElementById('dias').textContent = "0";
      document.getElementById('mensagem').textContent = "2025 já chegou!";
    }
  }, 1000);

  return (
    <>
      <div id='box'>

        <h3>Contagem para 2025</h3>

        <div id='box2'>

          <div className='tempo'>

            <p id='dias'></p> 
            <p>Dias</p>

          </div>

          <div className='tempo'>

            <p id='horas'></p> 
            <p>Horas</p>

          </div>

          <div className='tempo'> 

            <p id='minutos'></p> 
            <p>Minutos</p>

          </div>

          <div  className='tempo'>

            <p id='segundos'></p> 
            <p>Segundos</p>

          </div>

        </div>

        <p id='mensagem'></p>

      </div>

    </>
  )
}

export default App
