/* azt kell megnézni jo végpont esetén megkapjuk e az adatot */
import Modell from "../Modell.js";

function getAdatTeszt_joVegpont(){
    let vegpont = "https://fakestoreapi.com/products"
    let vart = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120
        }
      };
    let modell = new Modell();
    modell.getAdat(vegpont, callbackTeszt, hibaCallbackTeszt)

    function callbackTeszt(adat){
        console.log("Jó végponttal megérkezik az adat")
        console.assert(JSON.stringify(vart)==JSON.stringify(adat[0]), "Jó végponttal hibás adatot kaptam")
        console.log("Lefutott a fetch")
    }

    function hibaCallbackTeszt(adat){

    }
}

function getAdatTeszt_nemVegpont(){
    let vegpont = "https://fakestoreapi.com/hhhhhhh"
    
    let modell = new Modell();
    modell.getAdat(vegpont, callbackTeszt, hibaCallbackTeszt)

    function callbackTeszt(adat){
        console.log("Baj ha ide futott be mer nemjó a végpont")
    }

    function hibaCallbackTeszt(adat){
        console.log("hiba: ", adat)
    }
}

getAdatTeszt_joVegpont()
getAdatTeszt_nemVegpont()