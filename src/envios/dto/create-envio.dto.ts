import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { EstadoEnvio } from '../envio.entity';

export class CreateEnvioDto {
  @IsString()
  @IsNotEmpty()
  pedidoId: string;

  @IsString()
  @IsNotEmpty()
  direccionDestino: string;

  @IsString()
  @IsNotEmpty()
  ciudadDestino: string;

  @IsOptional()
  @IsEnum(EstadoEnvio)
  estado?: EstadoEnvio;

  @IsOptional()
  @IsString()
  transportista?: string;

  @IsOptional()
  @IsString()
  codigoSeguimiento?: string;
}
