const folio = [
    new folio ('FOLIOS INGRESADOS', 7800),

]
const aprobados = [
    new aprobados  ('aprobados', 1100),

]
let cargarappp = () => {
    cargarcabecera()
    cargaringresos()
}
let totalfolio = () => {
    let totalfolio = 0
    for (let folio of folio) {
        console.log(folio.valor)
        totalingresos += folio.valor
    }
    return totalfolio
}
let totalaprobados = () => {
    let totalaprobados = 0
    for (let aprobados of aprobados){
        console.log(aprobados.valor)
        totalaprobados += aprobados.valor
    }
    return totalaprobados
}
let cargarcabecera = () => {
    console.log('************************')
    let presupuesto = totalfolio() - totalaprobados()
    console.log(presupuesto)
    let porcentajefolio = totalfolio() / totalaprobados()
    console.log(porcentajeegresos)
    document.getElementById('presupuesto').innerHTML = presupuesto
    document.getElementById('porcentaje').innerHTML = porcentajefolio
}
const cargarfolio = () =>{ 
    let folioHTML = ''
    for(let folio of folio){
        folioHTML += crearfolioHTML(folio)
    }
    document.getElementById('lista-folio').innerHTML = folioHTML
}
const crearfolioHTML = (folio) => {
    let ingresosHTML= `
    <div class="elemento limpiarestilos">
    <div class="elemeto_descripcion">${ingresos.descripcion}</div>
    <div class="derecha limpiarestilos">
        <div class="elemento_folio">${ingreso.folio}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar-btn">
                <ion-icon name="close-circle-outline" 
                    onclick = 'eliminarfolio(${folio.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>`
    return ingresoHTML
}
const eliminaraprobados = (id) => {
    let indiceeliminar = aprobados.findIndex (aprobados => aprobados.id === id)
    aprobados.splice(indiceeliminar,1)
    cargarcabecera()
    cargaringresos()
}

let agregarDato = () => {
    let form = document.form['form']
    let tipo = form['tipo']
    let agregar = from['agregar']
    let nombre = form['nombre']
    let folio = form['folio']
    if (tipo.value == 'folio'){
        folio.push(new folio(nombre.value, +folio.value))
        cargarcabecera()
        cargaringresos()
    }
}