class agregarDato extends nombre{
    static idnombre = 2345
    constructor(descripcion, valor){
        super(descripcion,valor)
        this._id = ++nombre.idnombre
    }
    get id(){
        return this._id
    }
}