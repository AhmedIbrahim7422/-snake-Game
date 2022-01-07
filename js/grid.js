

export function randGRidPos(){
    return{
        x: Math.floor(Math.random()*21) + 1 ,
        y: Math.floor(Math.random()*21) + 1 ,
    }
}

export function outGrid(postion){
   return postion.x < 1 || postion.x > 21 || postion.y < 1 || postion.y > 21

}