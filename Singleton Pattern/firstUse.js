import FancyLogger from "./fancyLogger.js";
// we are creating new instance of the FancyLogger
// This lead to data inconsistency
// we don't get shared info from the logger 
const logger = new FancyLogger()

export default function logFirstImplementation()
{
    logger.printLogCount()
    logger.log('First File')
    logger.printLogCount()
}