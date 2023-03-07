import { Levels } from "../levels/Levels"

export function LevelsMenu(e){

    let styles = {
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
            display:none;
        `
    }
e.innerHTML = `
<div style="${styles.main}" id="list">
</div>
`
let i = 0
Levels.map(e => {
    i++
    document.getElementById("list").innerHTML += `<button>LEVEL ${i}</button>`
})

}