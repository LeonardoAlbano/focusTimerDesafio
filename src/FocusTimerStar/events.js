import { controlsOne } from "./elements.js"
import { controlsTwo } from "./elements.js"
import { registerControlsTimer } from "./elements.js";

import { minutes } from "./elements.js"

import * as actions from './action.js'
import { aumentar, cronometro } from "./timer.js";
import state  from "./state.js";

export function registerControls() {

    //monitorar os registro de click 
    controlsOne.addEventListener('click', (event) =>{
        const actionOne = event.target.dataset.action
        if(typeof actions[actionOne] === "function"){

            actions[actionOne]();
        }

    })

    controlsTwo.addEventListener('click', (event) => {
        const actionTwo = event.target.dataset.action
        if( typeof actions[actionTwo] === "function" ){
            
            actions[actionTwo]()
        }
        
    })

    registerControlsTimer.addEventListener('click', (event) =>{
        const actionTimer = event.target.dataset.action
        if(typeof actions[actionTimer] === "function"){
            actions[actionTimer]()
        }
    })



}

export function setMinutes() {
    minutes.addEventListener('focus', () =>{
        minutes.textContent = ""
    })

    minutes.onkeypress = () => /\d/.test(event.key) //expressão regular

    minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        cronometro()
        minutes.removeAttribute('contenteditable')
    })
}

