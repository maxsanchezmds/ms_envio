// Servicio que contiene la logica de negocio del CRUD de envios.
// Usa el repositorio de TypeORM para interactuar con la base de datos PostgreSQL.
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Envio } from './envio.entity';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { UpdateEnvioDto } from './dto/update-envio.dto';

@Injectable()
export class EnviosService {
  constructor(
    @InjectRepository(Envio)
    private readonly envioRepository: Repository<Envio>,
  ) {}

  create(createEnvioDto: CreateEnvioDto): Promise<Envio> {
    const envio = this.envioRepository.create(createEnvioDto);
    return this.envioRepository.save(envio);
  }

  findAll(): Promise<Envio[]> {
    return this.envioRepository.find();
  }

  async findOne(id: string): Promise<Envio> {
    const envio = await this.envioRepository.findOneBy({ id });
    if (!envio) throw new NotFoundException(`Envio con id ${id} no encontrado`);
    return envio;
  }

  async update(id: string, updateEnvioDto: UpdateEnvioDto): Promise<Envio> {
    const envio = await this.findOne(id);
    Object.assign(envio, updateEnvioDto);
    return this.envioRepository.save(envio);
  }

  async remove(id: string): Promise<void> {
    const envio = await this.findOne(id);
    await this.envioRepository.remove(envio);
  }
}
