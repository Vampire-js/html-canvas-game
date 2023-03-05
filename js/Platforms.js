export class PlatformsManager {
    constructor(){
        this.PLATFORMS = new Array()
        this.color = "#ff0000"   
    }
    add(e){
        this.PLATFORMS.push(e)
    }
    init(e){
        this.PLATFORMS.map(platform => {
            platform.render(e)
        })
    }
    update(e){
        this.PLATFORMS.map(plat => {
            plat.size = {x:200 , y:30}
            plat.update(e)
        })
    }
}