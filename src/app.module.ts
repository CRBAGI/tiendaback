import { ProductoModule } from './Modules/producto/producto.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ProductoModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
