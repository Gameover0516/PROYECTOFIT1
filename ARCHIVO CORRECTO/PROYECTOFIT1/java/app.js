const arregloEstudiantes = [
    new Estudiante("Alam Jair", "Ramirez Velazquez", "Informatica"),
    new Estudiante("Valeria del Carmen","Perez Contreras","Informatica"),
    new Estudiante("Sofia Natalia", "Echeverria", "Gestion Empresarial")
]
function mostrarEstudiantes(){
    let texto=""
    for(let item of arregloEstudiantes){
        texto += `<li>${item.nombre} ${item.apellido} ${item.carrera} </li>`
    }
    document.getElementById("alumnos").innerHTML = texto
}
function agregarEstudiante(){
    const formulario = document.forms["formulario"]
    const nombre = formulario["nombre"]
    const apellido = formulario["apellido"]
    const carrera = formulario["carrera"]
    const nvoEstudiante = new Estudiante(nombre.value,apellido.value,carrera.value)
    arregloEstudiantes.push(nvoEstudiante)
    mostrarEstudiantes()
}