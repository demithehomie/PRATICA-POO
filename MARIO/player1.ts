/*
 
O que eu tenho? - ATRIBUTOS - CARACTERÍSTICAS
Que coisas eu faço? - MÉTODOS - COMPORTAMENTO
Como eu estou agora? - ESTADO - ESTADO 

*/

class Player {
    //definindo padrão dos atributos 

    nome: string;
    vidas: number;
    invencivel: boolean;
    crush: Player;

    //criando método

    sinopse(){
        //definição do estado

        console.log(`O protagonista do jogo é o ${mario.nome}, que tem como objetivo salvar a Princesa ${peach.nome} das mãos do ${donkey.nome}`)

       /* console.log(`A crush do Mario é a ${mario.crush.nome}`) */
    }
}

const mario = new Player();
mario.nome = "Mario";
mario.vidas = 3;
mario.invencivel = true;

const peach = new Player();
peach.nome = "Peach";
peach.vidas = 3;
peach.invencivel = false;

mario.crush = peach


const donkey = new Player();
donkey.nome = "Donkey Kong";
donkey.vidas = 3;
donkey.invencivel = false;

donkey.crush = mario

mario.sinopse()
/* peach.sinopse()
donkey.sinopse() */







//"strictPropertyInitialization": false - Para poder rodar sem inicializar as variáveis, em casos de não utilizar explicitamente o método construtor