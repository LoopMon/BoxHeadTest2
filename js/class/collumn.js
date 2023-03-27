class Collumn {
    constructor (
        pos = 1
    ) {
        if (pos === 1) {
            this.x = Math.floor(cnv.width * 25 / 100), 
            this.y = Math.floor(cnv.height * 25 / 100), 
            this.w = 40, 
            this.h = 70, 
            this.c = 'gray'
        }
        if (pos === 2) {
            this.x = Math.floor(cnv.width * 75 / 100), 
            this.y = Math.floor(cnv.height * 25 / 100), 
            this.w = 40, 
            this.h = 70, 
            this.c = 'gray'
        }
        if (pos === 3) {
            this.x = Math.floor(cnv.width * 25 / 100), 
            this.y = Math.floor(cnv.height * 75 / 100), 
            this.w = 40, 
            this.h = 70, 
            this.c = 'gray'
        }      
        if (pos === 4) {
            this.x = Math.floor(cnv.width * 75 / 100), 
            this.y = Math.floor(cnv.height * 75 / 100), 
            this.w = 40, 
            this.h = 70, 
            this.c = 'gray'
        } 
    }

}