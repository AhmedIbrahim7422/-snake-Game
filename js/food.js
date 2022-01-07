import { onSnake , expandSnake } from "./snake.js"
import {randGRidPos} from './grid.js'

let food = getRandFoodPos()
const expanSnake = 3

export function updateFood (){
    if (onSnake(food)){
        expandSnake(expanSnake)
        food = getRandFoodPos()
    }
}

export function drawFood (gameBoard){
  
       const foodEl = document.createElement('div')
       foodEl.style.gridColumnStart = food.x
       foodEl.style.gridRowStart = food.y
       foodEl.classList.add('food')
       gameBoard.appendChild(foodEl)
    
}

function getRandFoodPos(){
    let newFoodPos
    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = randGRidPos()
    }
    return newFoodPos
}