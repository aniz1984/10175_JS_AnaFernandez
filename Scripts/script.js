class RemeraMain {
    constructor (
        remeraNombre, 
        remeraDescripcion,) {
        this.nombre = remeraNombre;
        this.descripcion = remeraDescripcion;
    }

    mostrarRemeraMain(){
        document.getElementById("remera").innerHTML = `
        <a href="remeras.html"><h3>${this.nombre}</h3></a>
        <p>${this.descripcion}</p>
        `
    }
}

let remeraMujer = new RemeraMain("Remeras", "Remeras de modal premium. En colores gris y blanco. Talles del S al XXL. Mujer y Unisex.");

console.log(remeraMujer);

remeraMujer.mostrarRemeraMain();

class Remera {
    constructor(
        imagenRemera,
        disenoRemera,
        modeloRemera,
        talleRemera,
        stockRemera,
        colorRemera,
        colorDosRemera
    ) {
        this.imagen = imagenRemera;
        this.diseno = disenoRemera;
        this.modelo = modeloRemera;
        this.talle = talleRemera;
        this.stock = stockRemera;
        this.color = colorRemera;
        this.color2 = colorDosRemera;
    }
}

let prodRemeras = [];

let remera005 = new Remera("../imagenes/remeras.jpg", "005 • Gran Ola", "Mujer", "S", 2, "Blanco", "Gris");
let remera005Dos = new Remera("../imagenes/remeras.jpg", "005 • Gran Ola", "Unisex", "XL", 3, "Blanco", "Gris");
let remera132 = new Remera("../imagenes/remeras.jpg", "132 • Sakura Dos", "Mujer", "M", 5, "Blanco", 0);
let remera132Dos = new Remera("../imagenes/remeras.jpg", "132 • Sakura Dos", "Unisex", "M", 0, "Blanco", 0);

prodRemeras.push(remera005);
prodRemeras.push(remera005Dos);
prodRemeras.push(remera132);
prodRemeras.push(remera132Dos);

console.log(prodRemeras);
