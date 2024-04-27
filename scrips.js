const URL = "http://localhost:3000/data.json";

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log("data:", data.datos)
    });