const URL = "http://localhost:3000/data.json";

const consultarDatos = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    const datosOrdenados = data.datos;
    datosOrdenados.sort((a,b)=> {
        if(a.id > b.id) return 1;
        if(a.id < b.id) return -1;
        return 0;
    })
    console.log("data modificada: ", datosOrdenados)
}

consultarDatos();