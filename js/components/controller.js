import { Model } from "./model.js";
import { View } from "./view.js";

export class Controller{
    constructor(gridElement){
        this.view = new View(gridElement)
        this.board = this.view.getBoard();
        this.data = new Model().getShips();
        this.fire = 0;
//////////Time
        this.timerElement = document.getElementById('time');
        this.timer = 0;
        this.timerInterval = null;
////
    }

    startGame(){
        ////Time
        this.startTimer();
        //
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board.length; j++) {
               this.board[i][j].addEventListener('click',()=>{
                if(this.checkShipFire(i,j)){
                    this.view.showShips(this.board[i][j])
                    this.fire++;
                    if(this.fire == 20){
                        this.endGame();
                    }
                }
                else{
                    this.view.showHits(this.board[i][j])
                }
                // console.log(this.view)
                // this.view.showShips(this.board[i][j])
               })
            } 
        }
    }

    endGame(){
        clearInterval(this.timerInterval);
        this.view.winGame();
    }
////////////Time
    //1
    // startTimer() {
    //     this.timerInterval = setInterval(() => {
    //         this.timer++;
    //         this.timerElement.textContent = this.timer;
    //     }, 1000);
    // }
    //2
    // startTimer() {
    //     this.timerInterval = setInterval(() => {
    //         this.timer++;
    //         const minutes = Math.floor(this.timer / 60);
    //         const seconds = this.timer % 60;
    //         this.timerElement.textContent = `${minutes} min ${seconds} `;
    //     }, 1000);
    // }
    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timer++;
            const minutes = Math.floor(this.timer / 60);
            const seconds = this.timer % 60;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
            document.getElementById('minutes').style.color = 'rgb(47, 176, 176)';
            document.getElementById('minutes').style.marginLeft = '10px';
            // document.getElementById('minutes').style.marginRight = '10px';
            document.getElementById('seconds').style.color = 'rgb(47, 176, 176)';
            document.getElementById('seconds').style.marginLeft = '10px';
        }, 1000);
    }
    
    
////////
    checkShipFire(x,y){
        // this.data.forEach((el)=>{
        //     el.location.forEach((ship)=>{
        //         if(ship[0] == x && ship[1] == y){
        //             return true;
        //         }
        //     })
        // })
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].location.length; j++) {
                if(this.data[i].location[j][0] == x && this.data[i].location[j][1] == y){
                    return true;
                }
                
            }
            
        }
        return false;
    }
}