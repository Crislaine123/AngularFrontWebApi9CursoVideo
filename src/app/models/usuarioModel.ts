
export interface UsuarioModel{
    id:number,
    usuario:string,
    nome:string,
    sobrenome:string,
    email:string,
    token:string,
    dataCriacao:Date,
    dataAlteracao:Date,
    senhaHash: Uint8Array,
    senhaSalt: Uint8Array
}