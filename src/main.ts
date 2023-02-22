import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SERVER_PORT } from './Modules/confing/constans';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService =app.get(ConfigService);

  //Apartado De Angular
  app.enableCors({
    origin: 'http://localhost:4200',
  });
  //

  //server port
  const port= +configService.get<number>(SERVER_PORT);
  await app.listen(port);
  //console.log(`listening on port ${(await app.getUrl)}`);
}
bootstrap();
