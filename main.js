var pakimanDesk = [];
pakimanDesk['pikachu'] = './img/pollo.png';
pakimanDesk['vacatron'] = './img/vaca.png';
pakimanDesk['ceriyard'] = './img/cerdo.png';

console.log(pakimanDesk)

class Pakiman {
    constructor(name,hp,str){
        this.name = name;
        this.hp = hp;
        this.str = str;
        this.img = new Image()

        this.img.src = pakimanDesk[this.name];
    }

    talk(){
        console.log(this.name + ' !!!!');
    }

    deskRender(){
        let cardDesk = document.createElement('div');
        cardDesk.classList.add('card');
        let imgDesk = document.createElement('img');
        imgDesk.setAttribute('src',this.img.src);
        let statsDesk = document.createElement('div');
        statsDesk.classList.add('stats');
        let pNameDesk = document.createElement('p');
        pNameDesk.innerText = `nombre: ${this.name}`;
        let pVidaDesk = document.createElement('p');
        pVidaDesk.innerText = `vida: ${this.hp}`;
        let pPoderDesk = document.createElement('p');
        pPoderDesk.innerText = `poder: ${this.str}`;

        statsDesk.appendChild(pNameDesk)
        statsDesk.appendChild(pVidaDesk)
        statsDesk.appendChild(pPoderDesk)

        cardDesk.appendChild(imgDesk)
        cardDesk.appendChild(statsDesk)

        const aside = document.querySelector('aside');
        aside.appendChild(cardDesk)
    }
}

let coleccion = [];

coleccion.push(new Pakiman('pikachu',34,87688))
coleccion.push(new Pakiman('vacatron',32, 5933))
coleccion.push(new Pakiman('ceriyard',234,9999))
// let iterador = 0;
// while (iterador < coleccion.length) {
//     coleccion[iterador].deskRender()
//     console.log(iterador)
//     iterador++
// }

coleccion.map( pakiman => {
    console.log(pakiman)
    pakiman.deskRender();
})
