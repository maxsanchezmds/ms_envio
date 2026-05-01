import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Envio } from './envio.entity';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Envio])],
  controllers: [EnviosController],
  providers: [EnviosService],
})
export class EnviosModule {}
