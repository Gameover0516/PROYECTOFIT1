class registro extends registro{
    static idnom = 1234
    constructor(descripcion, valor){
        super(descripcion,valor)
        this._id = ++ingreso.idingreso
    }
    get id(){
        return this._id
    }
}