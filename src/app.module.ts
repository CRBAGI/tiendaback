import { ProductoModule } from './Modules/producto/producto.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingModule } from './Modules/landing/landing.module';
import { LandingController } from './Modules/landing/controller/landing.controller';
import { CarritoController } from './Modules/carrito/controller/carrito.controller';
import { LoginController } from './Modules/Login/controller/login.controller';
import { ProductoController } from './Modules/producto/controller/producto.controller';
import { CarritoModule } from './Modules/carrito/carrito.module';
import { LoginModule } from './Modules/Login/login.module';

@Module({
  imports: [
    ProductoModule, LandingModule, CarritoModule, LoginModule,],
  controllers: [AppController, LandingController, CarritoController, LoginController,ProductoController],
  providers: [AppService],
})
export class AppModule { }
