const Contenedor = require("./file")
const Product = require("./Product")

let documento = new Contenedor('productos');

(async () => {
    //No existe el archivo. Por lo que estos serán los primeros 3 elemento
    let id1 = await documento.save(new Product("Escuadra", 123, "some_link"))
    let id2 = await documento.save(new Product("Calculadora", 234, "some_link"))
    let id3 = await documento.save(new Product("Globo Terráqueo", 345, "some_link"))

    // console.log(id1, id2, id3)

    // //Obtener un elemento
    // let element = await documento.getById(1)

    // console.log(element)

    // //obtiene todos
    // let all = await documento.getAll()

    // console.log(all)

    // //Borrado. Tras la primera ejecucion no deberia existir este elemento con id = 1
    // await documento.deleteById(1)

    // //Eliminado completo. Tras la primera ejecucion el archivo esta vacio
    // await documento.deleteAll()

})()

