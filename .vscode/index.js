document.addEventListener("DOMContentLoaded", function() {
    const opcionFormulario = document.getElementById("opcion-formulario");
    const opcionListado = document.getElementById("opcion-listado");
    const opcionBuscar = document.getElementById("opcion-buscar");
    const formulario = document.getElementById("formulario");
    const listaAlumnos = document.getElementById("alumnos-lista");
    const buscarAlumno = document.getElementById("buscar-alumno");
    const agregarBoton = document.getElementById("agregar");
    const buscarBoton = document.getElementById("buscar");
    const ordenarBoton = document.getElementById("ordenar");

    opcionFormulario.addEventListener("click", function() {
        formulario.style.display = "block";
        listaAlumnos.style.display = "none";
        buscarAlumno.style.display = "none";
    });

    opcionListado.addEventListener("click", function() {
        formulario.style.display = "none";
        listaAlumnos.style.display = "block";
        buscarAlumno.style.display = "none";
        mostrarListaAlumnos();
    });

    opcionBuscar.addEventListener("click", function() {
        formulario.style.display = "none";
        listaAlumnos.style.display = "none";
        buscarAlumno.style.display = "block";
    });

    buscarBoton.addEventListener("click", function() {
        const buscadorRut = document.getElementById("buscador-rut").value;

        const valorBuscado = alumnos.find((alumno) => alumno.rut === buscadorRut);

        if (valorBuscado) {
            const lista2 = document.getElementById("lista2");
            lista2.innerHTML = "";

            alert("Existe el alumno")

            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.innerHTML = `
                <strong>RUT:</strong> ${valorBuscado.rut}<br>
                <strong>Nombre:</strong> ${valorBuscado.nombre}<br>
                <strong>Edad:</strong> ${valorBuscado.edad}<br>
                <strong>Grupo:</strong> ${valorBuscado.grupo}<br>
                <strong>Asignaturas:</strong> ${valorBuscado.asignaturas}<br>
                <strong>Calificaciones:</strong> ${valorBuscado.calificaciones.join("-")}<br><br>
            `;
            lista2.appendChild(listItem);
        } else {
            alert("No hay ningún alumno registrado con ese rut");
        }
    });

    ordenarBoton.addEventListener("click", function() {
        ordenarAlumnos(alumnos)
    });

    agregarBoton.addEventListener("click", function() {
        const rut = document.getElementById("rut").value;
        const nombre = document.getElementById("nombre").value;
        const edad = parseInt(document.getElementById("edad").value);
        const grupo = document.getElementById("grupo").value
        const asignaturas = document.getElementById("asignaturas").value;
        const nota1 = parseInt(document.getElementById("nota1").value);
        const nota2 = parseInt(document.getElementById("nota2").value);
        const nota3 = parseInt(document.getElementById("nota3").value);
        const nota4 = parseInt(document.getElementById("nota4").value);


        let notas = [nota1, nota2, nota3, nota4]
                

        const alumno = {
            rut: rut,
            nombre: nombre,
            edad: edad,
            grupo: grupo,
            asignaturas: asignaturas,
            calificaciones: notas
        };

        alumnos.push(alumno);

        alert("Alumno agregado exitosamente")
        document.getElementById("miFormulario").reset();
    });

    function mostrarListaAlumnos() {
        const lista = document.getElementById("lista");
        lista.innerHTML = "";

        const final = document.getElementById("final");

        let totalPromedio = 0

        for (const alumno of alumnos) {

            let sumaNotas = 0
            for (nota of alumno.calificaciones) {
                sumaNotas += nota
            }

            let promedio = sumaNotas / alumno.calificaciones.length
            totalPromedio += promedio

            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.innerHTML = `
                <strong>RUT:</strong> ${alumno.rut}<br>
                <strong>Nombre:</strong> ${alumno.nombre}<br>
                <strong>Edad:</strong> ${alumno.edad}<br>
                <strong>Grupo:</strong> ${alumno.grupo}<br>
                <strong>Asignaturas:</strong> ${alumno.asignaturas}<br>
                <strong>Calificaciones:</strong> ${alumno.calificaciones.join("-")}<br><br>
                <strong>Promedio del alumno:</strong> ${promedio.toFixed(1)}<br>

            `;
            lista.appendChild(listItem);
        }

        let promedioGlobal = totalPromedio / alumnos.length;

        final.innerHTML = "";
        final.innerHTML = `<strong>Promedio general:</strong> ${promedioGlobal.toFixed(1)}`;
    }

    function ordenarAlumnos(alumnos){
        const arr = alumnos
        const n = arr.length;
        let intercambiado;

        do {
            intercambiado = false;

            for (let i = 0; i < n - 1; i++) {
                if (arr[i].edad > arr[i + 1].edad) {
                    const temp = alumnos[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    intercambiado = true
                }
            }
        } while (intercambiado);
        for (let i = 0; i < alumnos.length; i++) {
            const objeto = alumnos[i];
            console.log(`Objeto ${i + 1}:`, objeto);
          }

        // const lista3 = document.getElementById("lista3");
        // lista3.innerHTML = "";

        // const listItem = document.createElement("li");
        //     listItem.classList.add("list-group-item");
        //     listItem.innerHTML = `
        //         ${arr}
        //     `;
        //     lista3.appendChild(listItem);

        // console.log(arr)
    }
});

const alumnos = [];