import React from 'react'

const Promesa = () => {

  
const [numeroInput, setNumeroInput] = React.useState<string>('');

const generaRandom= ():number =>{
   return  Math.floor(Math.random() * (6 - 1)) + 1;
};

const tirarDados=()=> {
  return new Promise((resolve, reject)=>{
    setTimeout(function(): void {
      const aleatorio=generaRandom();
      if(aleatorio==parseInt(numeroInput))
      {
        resolve(aleatorio);
      }else{
        reject(aleatorio);
      }
    },5000);
  });
};



function handleClick(){
  let numero= parseInt(numeroInput);
  if(numero)
  {
    if(numero<1 || numero>6)
    {
      alert('Debe ser un número entre 1 y 6')
    }
    else{
      tirarDados().then((value)=>{
        alert( `Alerta de felicitaciones. Salio el: ${value}`)
      }).catch((error)=>{   
        alert( `Soy una alerta que dice que no adivinó. Salio el: ${error}`)
      }).finally(()=>{
       
      })
    }
  }
  else{
   alert('Debe ingresar solo números')
  }
  };

  function handlerInput(event: React.ChangeEvent<HTMLInputElement>) {
    setNumeroInput(event.target.value);
  };

  return (
    <div>
      <div className="form-group">
        <label >Número</label>
        <input className="form-control" onChange={handlerInput}/>
      </div>    
      <button className="btn btn-primary"  onClick={handleClick}>Probar Suerte</button>
    </div>
  );
}

export default Promesa;