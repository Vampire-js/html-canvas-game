export class PlatformsManager {
    constructor(){
        this.PLATFORMS = new Array()
        this.color = "#ff0000"   
    }
    add(e){
        this.PLATFORMS.push(e)
    }
    init(){
        this.PLATFORMS.map(platform => {
            platform.render()
        })
    }
    update(){
        this.PLATFORMS.map(plat => {
            plat.update()
        })
    }
}