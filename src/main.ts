// Punto de entrada del microservicio de envios.
// Levanta la aplicacion NestJS en el puerto definido por la variable de entorno PORT (default 3000).
// El prefijo global 'api' hace que todos los endpoints queden bajo /api/...
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
