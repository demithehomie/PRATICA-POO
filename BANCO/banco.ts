/* export module Banco { */



 export class Conta {
    nomeCliente: string;
    saldo: number;
    ativo: boolean;

    mostrarSaldo(){
        console.log(`O saldo do cliente  ${cliente.nomeCliente} é $ ${cliente.saldo}`)
    }
}

var cliente = new Conta();
cliente.nomeCliente = "Haroldo Silva";
cliente.saldo = 100000;
cliente.ativo = true;

cliente.mostrarSaldo()

/*
class Corrente {

} */

/* 
class Saldo extends Conta {
    mostrarSaldo(){}
}

cliente.mostrarSaldo()
 *//* 
}
 */

