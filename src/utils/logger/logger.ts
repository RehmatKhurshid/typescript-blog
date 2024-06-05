
import winston, { format } from 'winston';


const { combine, timestamp, label, prettyPrint } = format;


export const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [


        new winston.transports.Console(),     //to view on terminal too
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});
