import {speed, updateSnake, drawSnake, snakeBody, snakeIntersection, score} from './snake.js'
import {updateFood, drawFood} from './food.js'
import {outGrid} from './grid.js'

let lastRenderTime = 0
const gameBoard = document.querySelector('.game-board')
let gameOver = false


function main (currentTime){
    const snakeSpeed = speed()
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
          window.location = '/'
        }
        return
      }

    window.requestAnimationFrame(main)
    const scondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if (scondsSinceLastRender < 1 / snakeSpeed) return

    lastRenderTime = currentTime



   update()
   draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    score()
    death()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function death(){
    gameOver = outGrid(snakeBody[0]) || snakeIntersection()
}