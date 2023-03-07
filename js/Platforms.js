export class PlatformsManager {
    constructor(){
        this.PLATFORMS = new Array()
        this.color = "#222222"   
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
            plat.color = this.color
            plat.update(e)
        })
    }
}