import { ele } from "../js/utils";

export function MainMenu(e){

    let SHOW_MENU = true

    let stylesheet = {
        main:`
            position:absolute;
            top:0%;
            height:100vh;
            width:100vw;
            background:#020013;
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            display:flex;
            
        `,
        buttons:`
            padding:20px;
            font-size:40px;
            background:transparent;
            color:white;
            border:none;
        `
    }

    e.innerHTML = `
    <div style="${stylesheet.main}">
    <div style="display:flex; flex-direction:column;">
    <button style="${stylesheet.buttons}" id="play">PLAY</button>
    <button style="${stylesheet.buttons}"id="levels">LEVELS</button>

</div>
    </div>
    `

    ele("play").onclick = () => {
        e.style.display= "none"
    }

    ele("levels").onclick = () => {
        document.getElementById("list").style.display = "flex"
    }
}