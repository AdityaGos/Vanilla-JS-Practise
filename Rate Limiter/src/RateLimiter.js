class RateLimiter {

    constructor()
    {
        this.requests = {}
    }

    isAllowed(clientId)
    {
        const timeInSeconds = Math.floor(Date.now() /1000)
        const last10Second =timeInSeconds-10
        const allRequests = this.requests[clientId]|| []
        allRequests.push(timeInSeconds)
        console.log('all Requests: ', allRequests)
        const updatedRequests=allRequests.filter(time=> time >last10Second)
        console.log('updatedRequests: ', updatedRequests)

        if(updatedRequests.length>10)
        {
             return false
        }
        this.requests[clientId] = updatedRequests
        console.log('----------->Updated Requests')
        console.log(this.requests)
        return true;
    }
}
module.exports = RateLimiter;