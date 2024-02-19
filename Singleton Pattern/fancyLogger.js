class FancyLogger{

    constructor()
    {
        if(FancyLogger.instance ==null)
        {
            this.logs = []
            console.log(this)
            FancyLogger.instance = this
        }
        return FancyLogger.instance
    }

    log(message)
    {
        this.logs.push(message)
        console.log(`Fancy : ${message}`)
    }
    printLogCount(){
        console.log(`${this.logs.length} Logs`)
    }
}


const logger = new FancyLogger()
const logger1 = new FancyLogger()
console.log(logger ===logger1)

Object.freeze(logger)

export default logger