import { ProductoModule } from './Modules/producto/producto.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingModule } from './Modules/landing/landing.module';
import { CarritoModule } from './Modules/carrito/carrito.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { usuarioModule } from './Modules/Login/login.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username:'root',
      password: '',
      database: 'tienda',
      autoLoadEntities: true,
      
    }),
    ProductoModule, 
    LandingModule, 
    CarritoModule, 
    usuarioModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
