const ingresos = [
    new ingreso ('renta', 1300),
    new ingreso ('membresia', 823),
    new ingreso ('canto', 946)
]
const egresos = [
    new egreso  ('pago', 1100),
    new egreso ('gastos', 1600),
]
let cargarappp = () => {
    cargarcabecera()
    cargaringresos()
}
let totalingresos = () => {
    let totalingresos = 0
    for (let ingreso of ingresos) {
        console.log(ingreso.valor)
        totalingresos += ingreso.valor
    }
    return totalingresos
}
let totalegresos = () => {
    let totalegresos = 0
    for (let egreso of egresos){
        console.log(egreso.valor)
        totalegresos += egreso.valor
    }
    return totalegresos
}
let cargarcabecera = () => {
    console.log('************************')
    let presupuesto = totalingresos() - totalegresos()
    console.log(presupuesto)
    let porcentajeegresos = totalegresos() / totalingresos()
    console.log(porcentajeegresos)
    document.getElementById('presupuesto').innerHTML = presupuesto
    document.getElementById('porcentaje').innerHTML = porcentajeegresos
}
const cargaringresos = () =>{ 
    let ingresosHTML = ''
    for(let ingreso of ingresos){
        ingresosHTML += crearingresoHTML(ingreso)
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML
}
const crearingresoHTML = (ingresos) => {
    let ingresosHTML= `
    <div class="elemento limpiarestilos">
    <div class="elemeto_descripcion">${ingresos.descripcion}</div>
    <div class="derecha limpiarestilos">
        <div class="elemento_valor">${ingreso.valor}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar-btn">
                <ion-icon name="close-circle-outline" 
                    onclick = 'eliminaringreso(${ingreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>`
    return ingresoHTML
}
const eliminaringresos = (id) => {
    let indiceeliminar = ingresos.findIndex (ingreso => ingreso.id === id)
    ingresos.splice(indiceeliminar,1)
    cargarcabecera()
    cargaringresos()
}