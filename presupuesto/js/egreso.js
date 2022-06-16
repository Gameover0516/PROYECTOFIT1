class egreso extends registro{
    static idegreso = 2345
    constructor(descripcion, valor){
        super(descripcion,valor)
        this._id = ++egreso.idingreso
    }
    get id(){
        return this._id
    }
}