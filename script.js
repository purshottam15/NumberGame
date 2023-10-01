
let timer=30;
let score=0;
let rn;


const createBubble=()=>{
    let cluster="";

for(let i=0;i<100;i++){
    let randomNum=Math.floor(Math.random()*50)
    cluster+=`<div class="bubble">${randomNum}</div>`
}


document.querySelector('.bottom').innerHTML=cluster;
}



const runTimer=()=>{


    let timerInt=setInterval(()=>{
        if(timer>=0){
            document.querySelector('#timer').textContent=timer;
            timer--;
        }
         if(timer<0){
            clearInterval(timerInt);
            document.querySelector('.bottom').innerHTML=`<h1 class="game-over">Game over-score-${score-10}<h1>`;


        }

    },1000)


}


const setNumber=()=>{
    rn=Math.floor(Math.random()*50);
    document.querySelector('#number').textContent=rn;
}


const setScore=()=>{
    document.querySelector('#score').textContent=score;
    score+=10;

}

document.querySelector('.btn').addEventListener('click',()=>{
    timer=30
    createBubble()
    runTimer();
    setNumber();
    setScore();
    
})


document.querySelector('.bottom').addEventListener('click',(e)=>{
    let num=Number(e.target.textContent);
    console.log(num)

    if(num==rn){
        setScore();
        setNumber();
        createBubble();
    }
})



