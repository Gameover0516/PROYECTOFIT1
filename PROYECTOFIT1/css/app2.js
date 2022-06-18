const ingresos = [
    new INGRESO ('APROBADOS',8998),
    new INGRESO ('FOLIOS INGRESADOS',8223),
    
]
const egresos = [
    new egreso  ('APROBADOS', 1100),
    new egreso ('FOLIOS INGRESADOS', 1600),
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
const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', {style:'currency', currency: 'USD', minimumFractionDigits:2})
}
  const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2})
}
let cargarcabecera = () => {
    console.log('************************')
    let presupuesto = totalingresos() - totalegresos()
    console.log(presupuesto)
    let porcentajeegreso = totalegresos() / totalingresos()
    console.log(porcentajeegreso)
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto)
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeegreso)
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
return ingresosHTML
}
const eliminaringresos = (id) => {
    let indiceeliminar = ingresos.findIndex (ingreso => ingreso.id === id)
    ingresos.splice(indiceeliminar,1)
    cargarcabecera()
    cargaringresos()
}
let agregardato = () =>{
    let form = document.forms ['form']
    let tipo = form ['tipo']
    let descripcion = form ['descripcion']
    let valor = form ['valor']
    if (tipo.value == 'ingreso'){
        ingresos.push(new ingreso (descripcion.value, +valor.value))
        cargarcabecera()
        cargaringresos()
    }
}