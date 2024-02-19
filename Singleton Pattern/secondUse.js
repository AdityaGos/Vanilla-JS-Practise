import FancyLogger from "./fancyLogger.js";

const logger = new FancyLogger()

export default function logSecondtImplementation()
{
    logger.printLogCount()
    logger.log('Second File')
    logger.printLogCount()
}