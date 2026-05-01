// Controlador que expone los endpoints REST del CRUD de envios.
// Todos los endpoints quedan bajo /api/envios gracias al prefijo global definido en main.ts.
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { UpdateEnvioDto } from './dto/update-envio.dto';

@Controller('envios')
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

  @Post()
  create(@Body() createEnvioDto: CreateEnvioDto) {
    return this.enviosService.create(createEnvioDto);
  }

  @Get()
  findAll() {
    return this.enviosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enviosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEnvioDto: UpdateEnvioDto) {
    return this.enviosService.update(id, updateEnvioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enviosService.remove(id);
  }
}
