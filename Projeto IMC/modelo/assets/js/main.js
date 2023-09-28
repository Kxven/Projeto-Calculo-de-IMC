const form = document.getElementById('form')

const exibirImc = (e)=>{
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if(!peso){
        setResultado('peso invalido', false)
        return;
    }
    if(!altura){
        setResultado('altura invalida', false)
        return;
    }
     
    const imc = getImc(peso, altura);
    const NivelImc = imcLevel(imc)

    const mensagem = `Seu IMC é ${imc} ${NivelImc}`
    console.log(mensagem)
    
    setResultado(mensagem, true)
};

function getImc(peso, altura){
   const imc = peso/altura**2;
   return imc.toFixed(2);

}

function criarP(){
    const p = document.createElement('p');
    p.classList.add('p-resultado');
    return p;

};

function imcLevel(imc){
    const nivel = ['Abaixo do peso','Peso normal', 'Sobrepeso' , 'Obesiade Grau 1', 'Obesiade Grau 2', 'Obesiade Grau 3'];

    if(imc>=39.9) return nivel[5];
    if(imc>= 34.9) return nivel[4];
    if(imc>= 29.9) return nivel[3];
    if(imc>= 24.9) return nivel[2];
    if(imc>= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
};

function setResultado(mensagem, isValid){
    const res = document.getElementById('res')
    res.innerHTML = '';
    const p = criarP();
    
    if(isValid){
        p.classList.add('p-resultado');
    }else{
        p.classList.add('bad');
    }

    res.appendChild(p);
    p.innerHTML = mensagem
};

form.addEventListener('submit', exibirImc);

