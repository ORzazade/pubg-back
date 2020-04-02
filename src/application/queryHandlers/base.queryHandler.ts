import { DbContext } from '../../infrastructure/dbContext';
import { Inject } from '@nestjs/common';

export abstract class BaseQueryHandler {
    @Inject() protected readonly dbContext: DbContext;
}
