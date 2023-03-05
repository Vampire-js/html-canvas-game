import { ele } from "../js/utils";

export function MainMenu(e){
    let stylesheet = {
        main:`
            position:absolute;
            top:0%;
            height:100vh;
            width:100vw;
            background:black;
            color:white;
            display:none;
        `
    }
    
    e.innerHTML = `
    <div style="${stylesheet.main}">
    hi
    </div>
    `
}