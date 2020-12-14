import { Cliente } from "./cliente.model";

export interface Conta {
    hcode?: string;
    cliente?: Cliente;
    saldo?: number;
}
