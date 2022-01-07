import { getinput } from "./input.js"

export const snakeBody = [
    {x: 11, y: 11 }
]


let newSegmet = 0

export function updateSnake (){

    addsegmet()
    const inputDirection = getinput()
  for (let i = snakeBody.length - 2; i >=0 ; i--){
      snakeBody[i + 1] = {...snakeBody[i] }
  }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function drawSnake (gameBoard){
   snakeBody.forEach(segmet =>{
       const snakeEl = document.createElement('div')
       snakeEl.style.gridRowStart = segmet.y
       snakeEl.style.gridColumnStart = segmet.x
       snakeEl.classList.add('snake')
       gameBoard.appendChild(snakeEl)
    })
}


export function expandSnake(amount){
    newSegmet += amount
}

export function onSnake(postion,{ ignoreHead = false } = {}) {
    return snakeBody.some((segmet, index) =>{
        if (ignoreHead && index === 0) return false
        return equalPos(segmet, postion)
    })
}

function equalPos(pos1 , pos2){
    return  pos1.x === pos2.x && pos1.y === pos2.y 
  
}
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
  }

function addsegmet(){
    for (let i=0 ; i< newSegmet ; i++){
        snakeBody.push({...snakeBody.length - 1})
    }
    newSegmet = 0
}
export function score(){
    document.querySelector(".score").innerHTML = snakeBody.length - 1
}

export function speed(){
    if(snakeBody.length<10){
        return 2
    }
    else if(snakeBody.length<20){
        return 3
    }
    else if(snakeBody.length<30){
        return 5
    }
    else if(snakeBody.length<40){
        return 7
    }
    else if(snakeBody.length<50){
        return 9
    }
    else if(snakeBody.length<60){
        return 12
    }
    else if(snakeBody.length<70){
        return 15
    }
    else if(snakeBody.length<80){
        return 20
    }
    else return 0.1
    
}


