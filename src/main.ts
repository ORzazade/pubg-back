import { LoggerService } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import * as path from 'path';
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from 'typeorm-transactional-cls-hooked';
import { ApiModule } from './api/api.module';
import { AllExceptionsFilter } from './api/filters/AllExceptions.filter';

async function bootstrap() {
  initializeTransactionalContext(); // Initialize cls-hooked
  patchTypeORMRepositoryWithBaseRepository(); // patch Repository with BaseRepository.

  const app = await NestFactory.create<NestFastifyApplication>(ApiModule, new FastifyAdapter());
  app.enableCors({ origin: '*' });
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useStaticAssets({ root: path.join(__dirname, './static') });

  const logger = app.get<LoggerService>(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(logger);

  //TODO: dbseeder

  const port = Number(process.env.PORT) || 3001;
  await app.listen(port, '0.0.0.0', () => {
    logger.log(`App Started on port: ${port}`);
  });
}

bootstrap().catch(console.error);
