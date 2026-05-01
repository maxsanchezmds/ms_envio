import { IsString, IsOptional, IsEnum } from 'class-validator';
import { EstadoEnvio } from '../envio.entity';

export class UpdateEnvioDto {
  @IsOptional()
  @IsString()
  direccionDestino?: string;

  @IsOptional()
  @IsString()
  ciudadDestino?: string;

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
