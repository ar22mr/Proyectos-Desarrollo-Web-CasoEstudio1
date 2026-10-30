const formulario = document.getElementById("formEstudiantes");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

     const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const nota = document.getElementById("nota").value;
    if (nombre=== "" || apellidos ==="" || nota === "") {
        mostrarMensaje ("Por favor, complete todos los campos");
        return;
    }

    const tabla = document.getElementById("listaEstudiantes");

    const fila = document.createElement("tr");

    let claseNota = "";
    if (Number(nota) >=80){
        claseNota = "nota-alta";
    } else if (Number(nota)<=65){
        claseNota = "nota-baja";
    }

    fila.innerHTML = "<td>" + nombre + "</td>"+
                        "<td>" + apellidos + "</td>"+
                        "<td class= '" + claseNota + "'>" + nota + "</td>";

    tabla.appendChild(fila);
    actualizarResumen();

    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("nota").value = "";

});

function mostrarMensaje(texto){
    
    document.getElementById("textoMensaje").textContent = texto;
    document.getElementById("mensaje").style.display = "flex";
}
function cerrarMensaje(){
    document.getElementById("mensaje").style.display = "none";
}

function actualizarResumen(){
    const tabla = document.getElementById("listaEstudiantes");
    const filas = tabla.getElementsByTagName("tr");

    let suma = 0;
    let notaMayor = -1;
    let notaMenor = 101;
    let estudianteMayor = "";

    for (let i = 0; i < filas.length; i++){
        const celdas = filas[i].getElementsByTagName("td");
        const nombre = celdas[0].textContent;
        const apellidos = celdas[1].textContent;
        const nota = Number (celdas[2].textContent);

        suma = suma+nota;

        if (nota > notaMayor){
            notaMayor = nota;
            estudianteMayor = nombre + " " + apellidos;
        }
        if (nota< notaMenor){
            notaMenor = nota;
        }
    }
    const promedio = suma / filas.length;

    document.getElementById("estudianteMayor").textContent = estudianteMayor;
    document.getElementById("notaMayor").textContent = notaMayor;
    document.getElementById("promedioNotas").textContent = promedio.toFixed(2);
    document.getElementById("notaMenor").textContent = notaMenor;
}    
    actualizarResumen();

  


