const URL = "http://localhost:3000/data.json";

fetch(URL)
    .then(response => response.json())
    .then(data => {
        const datosOrdenados = data.datos;
        datosOrdenados.sort((a,b)=> {
            if(a.id > b.id) return 1;
            if(a.id < b.id) return -1;
            return 0;
        })
        return datosOrdenados;
    })
    .then(data => {
        console.log("data modificada: ", data)
    })