/*                                  FUNCIONES                                             */
function bienvenido(){

    let eleccion = parseInt(prompt(`Busque en nuestro catalogo sus productos favoritos: 1.BIJOUTERIE / 2.VITROFUSION / 3.TALLADOSDEMADERA / 4.SALIR`));
    
    while(eleccion != 4){
        if (eleccion === 1){
            let eleccionProducto = parseInt(prompt(`BIJOUTERIE: ${catalogoBijouterie}`));
            switch(eleccionProducto){
                case 1:
                    alert("Usted ha elegido ANILLOS");
                    break;
                case 2:
                    alert("Usted ha elegido un COLGANTE");
                    break;
                case 3:
                    alert("Usted ha elegido COLLARES");
                    break;
                case 4:
                    alert("Usted ha elegido un PULSERAS");
                    break;
                case 5:
                    alert("Usted ha elegido AROS");
                    break;
                case 6:
                    alert("Usted ha elegido PENDIENTES");
                    break;
                case 9: 
                    bienvenido();
                    break;
                case 0:
                    eleccion = 4;
                    break;
                default:
                    alert("Ha habido un problema, vuelva a intentar");
                    break;
                }
        
        
            } else if (eleccion === 2){
                let eleccionProducto = parseInt(prompt(`VITROFUSION: ${catalogoVitroFusion}`));
                switch(eleccionProducto){
                    case 1:
                        alert("Usted ha elegido BANDEJAS");
                        break;
                    case 2:
                        alert("Usted ha elegido un PLATOS");
                        break;
                    case 3:
                        alert("Usted ha elegido ADORNOS");
                        break;
                    case 9: 
                        bienvenido();
                        break;
                    case 0:
                        eleccion = 4;
                        break;
                    default:
                        alert("Ha habido un problema, vuelva a intentar");
                        break;
                }
            } else if (eleccion === 3){
                let eleccionProducto = parseInt(prompt(`TALLADOS EN MADERA: ${catalogoTallados}`));
                switch(eleccionProducto){
                    case 1:
                        alert(`Usted a elegido un CUADRO`);
                        break;
                    case 2:
                        alert(`Usted a elegido una ESCULTURA`);
                        break;
                    case 3:
                        alert(`Usted a elegido CUBIERTOS`);
                        break;
                    case 4:
                        alert(`Usted a elegido un PLATOS`);
                        break;
                    case 5:
                        alert(`Usted a elegido un TABLAS`);
                        break;
                    case 6:
                        alert(`Usted a elegido un VASIJAS`);
                        break;
                    case 9:
                        bienvenido();
                        break;
                    case 0:
                        eleccion = 4;
                        break;
                    default:
                        alert("Ha habido un problema, vuelva a intentar");
                        break;
                    }
            }
         }
    } 
    
    let bijouteriePrecio = 750;
    let vitroFusionPrecio = 1000;
    let talladoAMano = 850;
    
    
    function calcularPrecio(productoPrincipal){
    if (productoPrincipal == "1"){
        let precioTotal = bijouteriePrecio + 500;
        alert(precioTotal);
    } else if (productoPrincipal == "2"){
        let precioTotal = vitroFusionPrecio + 500;
        alert(precioTotal);
    } else if (productoPrincipal == "3"){
        let precioTotal = talladoAMano + 500;
        alert(precioTotal);
    } else {
        alert("Disculpamos las molestias pero algo ha salido mal, por favor vuelva a intentar")
        let productoPrincipal = prompt(`${persona} le ayudaremos a saber cuanto va a ser su monto final con envio incluido, que tipo de producto compro: 1.BIJOUTERIE / 2.VITROFUSION / 3.TALLADO A MANO / 9.NADA`);
        calcularPrecio(productoPrincipal);
    }
    }

/*                                                      INICIO DE LOS ALGORITMOS                                                    */
// pide nombre y apellido

let persona = prompt("Ingrese su nombre y apellido para que sea registrado en nuestro sistema");

while (persona === ""){ 
    persona = prompt("Por favor, debe ingresar un nombre valido. Intente nuevamente");
}
alert(`Se ha registrado como ${persona}`);


//mensaje bienvenida

const alertMessage = `Hola ${persona}!, te damos la bienvenida a "Tu Manufactureo", donde podras encontrar todo tipo de articulos y accesorios 100% hechos a mano por artesanos locales`;
alert(alertMessage);


let propositoDeCompra = "Indiquenos con que motivo realizara su compra: 1.REGALO / 2.USO PROPIO";
let catalogoBijouterie = "1.ANILLOS / 2.COLGANTES / 3.COLLARES / 4.PULSERAS / 5.AROS / 6.PENDIENTES / 9.VOLVER / 0.SALIR";
let catalogoVitroFusion = "1.BANDEJAS / 2.PLATOS / 3.ADORNOS / 9.VOLVER / 0.SALIR";
let catalogoTallados = "1.CUADROS / 2.ESCULTURAS / 3.CUBIERTOS / 4.PLATOS / 5.TABLAS / 6. VASIJAS / 9.VOLVER / 0.SALIR";

bienvenido();

let productoPrincipal = prompt(`${persona} le ayudaremos a saber cuanto va a ser su monto final con envio incluido, que tipo de producto compro: 1.BIJOUTERIE / 2.VITROFUSION / 3.TALLADO A MANO / 9.NADA`);

calcularPrecio(productoPrincipal);