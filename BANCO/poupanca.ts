import {Conta} from "./banco" 

class ContaPoupanca extends Conta {
    saldoPoupanca: number

    mostrarSaldoPoupanca(){
        console.log(`O saldo da poupança do ${cliente.nomeCliente} é igual a R$ ${clienteP.saldoPoupanca}`)
    }
}

var clienteP = new ContaPoupanca()
clienteP.saldoPoupanca = 500

clienteP.mostrarSaldoPoupanca()