import { Module } from '@nestjs/common';
import { isObject } from '@nestjs/common/utils/shared.utils';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { cyanBright, green, magentaBright, red, yellow, Format } from 'cli-color';
import * as moment from 'moment';

@Module({
    imports: [
        CqrsModule,
        ConfigModule.forRoot(process.env.NODE_ENV !== 'production' && { envFilePath: 'development.env' }),
        WinstonModule.forRoot({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.ms(),
                winston.format.printf(({ timestamp, level, message, ms, context }) => {
                    const color = (lvl: string): Format => {
                        const colorMap = {
                            error: red,
                            warn: yellow,
                            info: green,
                            verbose: cyanBright,
                            debug: magentaBright,
                        };

                        return colorMap[lvl];
                    };

                    const contextMessage = context ? yellow(`[${context}] `) : '';
                    const levelMessage = color(level)(`[${level}] ${process.pid}   -`);
                    const messageText = isObject(message)
                        ? `\n${JSON.stringify(message, null, 2)}`
                        : color(level)(message);
                    return `${levelMessage} ${moment(timestamp)
                        .utc()
                        .format('MM/DD/YYYY, HH:mm:ss')}  ${contextMessage}${messageText} ${yellow(ms)}`;
                }),
            ),
            transports: [
                new winston.transports.Console({
                    level: 'silly',
                    handleExceptions: true,
                }),
            ],
        }),
    ],
    providers: [],
    exports: [CqrsModule],
})
export class SharedModule {}
