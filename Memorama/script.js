
const objetoCuatro = [
    {
        id:1,
        img:'http://placekitten.com/g/200/243',
    },
    {
        id:2,
        img:'http://placekitten.com/g/300/304',
    },
    {
        id:3,
        img:'http://placekitten.com/g/200/243',
    },
    {
        id:4,
        img:'http://placekitten.com/g/300/304',
    }
];
const objetoSeis = [
    {
        id:1,
        img:'http://placekitten.com/g/202/205',
    },
    {
        id:2,
        img:'http://placekitten.com/g/300/304',
    },
    {
        id:3,
        img:'http://placekitten.com/g/200/243',
    },
    {
        id:4,
        img:'http://placekitten.com/g/300/304',
    },
    {
        id:5,
        img:'http://placekitten.com/g/202/205',
    },
    {
        id:6,
        img:'http://placekitten.com/g/200/243',
    }
];
const objetoOcho = [
    {
        id:1,
        img:'https://placekitten.com/g/300/230',
    },
    {
        id:2,
        img:'http://placekitten.com/g/300/304',
    },
    {
        id:3,
        img:'http://placekitten.com/g/200/243',
    },
    {
        id:4,
        img:'http://placekitten.com/g/202/205',
    },
    {
        id:5,
        img:'http://placekitten.com/g/300/304',
    },
    {
        id:6,
        img:'https://placekitten.com/g/300/230',
    },
    {
        id:7,
        img:'http://placekitten.com/g/202/205',
    },
    {
        id:8,
        img:'http://placekitten.com/g/200/243',
    }
];

let contador=0
let arregloGeneralDeObjetos=[];

let primeraImagen = '';
let objetoPrimeraImagen={};
let numeroCarta = 0;

const tamaño = () => {
    var opcion = document.getElementById('seleccion').value;
    const $tablero = document.querySelector(".tablero");
    if(contador>0)
    {
        const $vistas= document.getElementsByTagName('div');
        for(var q=0; q= $vistas.length; q++)
        {
            $tablero.removeChild($vistas[0]);
        }
        
    }

    switch(opcion)
    {
        case "4":
            arregloGeneralDeObjetos=objetoCuatro;
        break;
        case "6":
            arregloGeneralDeObjetos=objetoSeis;
        break;
        case "8":
            arregloGeneralDeObjetos=objetoOcho;
        break;
    }

    for(var i=0; i< opcion; i++)
    {
        
        var opcion = document.getElementById('seleccion').value;
        const $tarjeta = document.createElement('div');
        $tarjeta.innerHTML=`<figure onclick="Seleccion(this)" class="muestra">
        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/64ELCwfZfer5gVEdCr844m/ddd6d0962dee3c2d7d7c47b6c6fa8f1a/dev_icon.png" alt="back"  id="card" class="i" >
        <img src="${arregloGeneralDeObjetos[i].img}" alt="front" onclick="Seleccion(this)" id="card" class="a">
        </figure>`;
        $tablero.appendChild($tarjeta);
    }
    contador++;
};

const Seleccion = (e) =>{
    const mensaje = document.getElementById('mensajeDime');
    const imagen = e.children[1].attributes.src.value;
    numeroCarta++;
    if(numeroCarta === 1){
        primeraImagen=imagen;
        objetoPrimeraImagen=e;
        e.classList.toggle('closed')
    }else if (numeroCarta === 2){
        if(primeraImagen == imagen){
            Buena(e,mensaje,'SIIIIIUUUU !!!!!', objetoPrimeraImagen);
        }else{
            Mala(e,mensaje,'HA...NO*carita triste*',objetoPrimeraImagen);
        }
    }

}
const Buena =(e,mensaje,texto,objetoPrimeraImagen)=>{
    mensaje.innerHTML=texto;
    e.classList.toggle('closed');
    setTimeout(function(){
        mensaje.innerHTML="";
    }, 2000);
    e.attributes[0].value='';
    objetoPrimeraImagen.attributes[0].value='';
    primeraImagen = '';
    numeroCarta = 0;
}
const Mala =(e,mensaje,texto,objetoPrimeraImagen)=>{
    mensaje.innerHTML=texto;
    e.classList.toggle('closed');
    setTimeout(function(){
        e.classList.toggle('closed');
        objetoPrimeraImagen.classList.toggle('closed');
        mensaje.innerHTML="";
    }, 2000);
    Vidas(mensaje);
    primeraImagen = '';
    numeroCarta = 0;
}
let vidasRestantes=2;
const Vidas = (mensaje) =>{
    const vida = document.getElementById('vidas');
    vida.innerHTML=`Vidas : ${vidasRestantes--}`;
    if(vidasRestantes == -1){
        mensaje.innerHTML='SE ACABO EL JUEGO!!!';
        vida.innerHTML=`Vidas : 3`;
        vidasRestantes=2;
        const $tablero = document.querySelector(".tablero");
        while($tablero.childElementCount !== 0)
        {
            $tablero.removeChild($tablero.children[0]);
        }
        const n =0;
    }
}