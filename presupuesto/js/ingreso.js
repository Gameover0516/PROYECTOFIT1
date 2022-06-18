class ingreso extends registro{
    static idingreso = 1456
    constructor(descripcion, valor){
        super(descripcion, valor)
        this._id = ++ingreso.idingreso
    }
    get id(){
        return this._id
    }
}