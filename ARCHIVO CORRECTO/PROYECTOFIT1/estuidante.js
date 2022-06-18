class Estudiante{
    constructor(nombre, apellido, carrera){
        this._nombre=nombre
        this._apellido=apellido
        this._carrerra=carrera
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    get carrera(){
        return this._carrerra
    }
    set carrera(carrera){
        this._carrerra = carrera
    }
}