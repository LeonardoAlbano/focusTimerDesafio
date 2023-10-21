import state from './state.js'
import * as el from './elements.js'
import { kichenTimer } from './sounds.js'
import { toggleStop } from './action.js'


export function countdown() {

    clearTimeout(state.countdownId)
    

    if(!state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0){
        //quando seconds chegar em 0
        //voltar para 59
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        kichenTimer.play()
        return
    }
    
    cronometro(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(),1000) 
}



export function cronometro(minutes, seconds){
    //Se esse cara for nulo, pegar o stado 
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    //atualizar com os minutos e segundos que for 
    //padStar seria para adicionar duas casa 
    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")

}

export function aumentar(){
    let minutes = Number(el.minutes.textContent)
    minutes += 5
    el.minutes.textContent = String(minutes).padStart(2, "0")
}

export function diminuir() {
    let minutes = Number(el.minutes.textContent)
    minutes -= 5
    if (minutes < 0) {
        minutes = 0
    }
    el.minutes.textContent = String(minutes).padStart(2, "0")
}



