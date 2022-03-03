/*Bienvenida a js ari gameplay pasame el link cuando juegues xd xd xd
bueno, aqui primero tenemos un contador con valor a cerou
ntp ahorita por este, amos a la funcionnn
*/

let contador=0

/*aqui creamos una funcion :)*/
const tamaño = () => {

    /*aqui vamos a obtener el value (exacto el valor) de lo que seleccionemos uuu*/
    var opcion = document.getElementById('seleccion').value;
    /*aqui hacemos una busqueda en el html y buscaremos el tablero
    eaaa exacto el section
    salate hasta el fooooorrrrrrr!!! uuu uu uu*/
    const $tablero = document.querySelector(".tablero");


    /*ya conociste al for que es el que crea a los div :')
    pero como podemos hacer que si yo pongo un 4 se cree 4 divs 
    pero si le apachurramos 6 se vas a crear 10 divs haaaaaaaaa no puede serr me da amsieda
    pues nimodo tenemos que borrar los divs que estaban antes pa poner los nuevos divs no? o como?
    */
   /*recuerdas este contador de nuevo es como muy metiche no
   pues aqui en la primera apachurrada del boton hara lo mismo que tu
   ignorara el if y se pasara con el for
   pero a partir del la segunda ya no lo va a ignorar y entrara porque ya contador
   vale 1,2,3... y aqui ya se cumple el if ya contador es mayor a 0 ajuaa*/
    if(contador>0)
    {
        /*aqui nos vamos a traer al div, exacto ari gameplay, los div que creamos con el boton heaa
        */
        const $vistas= document.getElementsByTagName('div');
        /*a cab... pero porque length a caso es un arreglo??
        pues asi mero como se crean 4,6 o 8 div pus se tarera todos esos y entonces
        se convierte en array
        que hacemos un forrrrr que dice que repita todo este proceso hasta que sea igual que las cantidades
        de los divsssss
        lo mismo, si anteriormente pusimos 4, pus se borran 4 divs
        si pusimos 6 pus se borran 6 divs heaa te la sabes abril,mayo,junio...*/
        for(var q=0; q= $vistas.length; q++)
        {
            /*achis aqui se parece al de appenchild
            clarinetes que yes, pero aqui removemos osea borramos
            pero que es eso de $vistas[0] haaaaa
            pues recuerdas tu que es un arreglo las vistas osea son muchos divs
            pues cada vez que se elimina se debe de borrar la posicion 0 osea el primer div y asi y asi
            dudas me dices :')*/
            $tablero.removeChild($vistas[0]);
            

            /*y listo termina el proceso y el tablero despues de ser aguelo 
            ya solo es un tablero solito
            pero ntp aqui abajo esta el for que le dara nuevos hijos 
            fin :3*/
        }
        
    }


    /*espero no hayas visitado el if de arriba heee
    aqui que hacemos, pus facil, aqui hacemos un ciclo,
    estas iteraciones depende de lo que nosotros pongamos en el select
    osea tu, si yo elegi 4, pues se repitira esto 4 veces
    si puse 6 pues 6 si puse 8, cuantas crees? eeea
    exato 8 repeticiones pd. me acorde de la ceja de chaka me gusta me iria bien xd*/
    for(var i=0; i< opcion; i++)
    {
        /*aqui es lo que nos dijo el tio lalito chulo hermoso de bonito
        aqui vamos a CREAR si escuchaste bien, CREAR un div ( <div></div>)
        pero ooo tambien creamos un h1 :')*/
        const $tarjeta = document.createElement('div');
        const $simbolo = document.createElement('h1');

        /*aqui le decimos al h1($simbolo) oye tu h1, pintate con un ? porfis*/
        $simbolo.textContent= `?`

        /*que esta pasando doctor garcia...
        pues aqui le decimos al tablero (que es es la section que ves en el html 
            [que su variable es $tarjet]) que reprodusca, cuide y cree a sus chavito el div($tarjet)
            pero changos... el div tiene a su chavito el h1 tons el papa es div el hijo es h1 que todo esto guarda el abuelo tablero (section) :( ))*/
        $tarjeta.appendChild($simbolo);//aqui le decimos div, tu hijo es el h1
        $tablero.appendChild($tarjeta);//aqui le decimos tablero, tu hijo es el div
    }

    /*a caa... tu que haces aqui??
    este es un contador fijate un momento hasta arriba el contador que dice... ya? 
    pues contador vale 0
    pero aqui ya se le sumo 1 ahora es contador =1
    y ahora si amos al if de arribita*/
    contador++;
};