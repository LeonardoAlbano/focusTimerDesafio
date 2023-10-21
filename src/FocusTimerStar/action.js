import state from "./state.js"
import * as Sounds from "./sounds.js";
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function playSound(soundFunction){
    if (state.somAtual) {
        state.somAtual.play();
    }

    state.somAtual = soundFunction;

    if(state.isMute){
        state.somAtual.pause();
    }
}

export function arvore(){
    playSound(Sounds.arvore)

    if (state.isMute) {
        Sounds.arvore.play()
    } else{
        Sounds.arvore.pause()
    }

    state.isMute = !state.isMute
}

export function nuvem(){
    playSound(Sounds.nuvem)

    if (state.isMute) {
        Sounds.nuvem.play()
    } else {
        Sounds.nuvem.pause()
    }

    state.isMute = !state.isMute
}

export function casa(){
    if(state.isMute){
        Sounds.casa.play()
    } else {
        Sounds.casa.pause()
    }

    state.isMute = !state.isMute
}

export function fogo(){

    if(state.isMute) {
        Sounds.mandela.play()
    } else {
        Sounds.mandela.pause()
    }
    
    state.isMute = !state.isMute
}

export function toggleRunning(){

    state.isRunning = document.documentElement.classList.toggle('light')

    timer.countdown()
    Sounds.buttonPressAudio.play()      

}

export function toggleStop() {
        state.isRunning = false
        document.documentElement.classList.remove('running')
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function aumentar(){
    timer.aumentar()
}

export function diminuir(){
    timer.diminuir()
}