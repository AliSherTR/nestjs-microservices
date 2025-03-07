import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { DatabaseModule } from '@app/common';
import { UsersDocument, UsersSchema } from './models/users.model';

@Module({
   imports: [
      DatabaseModule,
      DatabaseModule.forFeature([
        { name: UsersDocument.name, schema: UsersSchema },
      ]),
    ],
  providers: [UsersService , UsersRepository],
  controllers: [UsersController]
})
export class UsersModule {}
