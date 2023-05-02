class Dato{
    constructor(descripcion, valor){
        this._descripcion = descripcion; // definir atributos asignar el valor que se recibe
        this._valor= valor;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}