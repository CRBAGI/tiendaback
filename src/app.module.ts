import { ProductoModule } from './Modules/producto/producto.module';
import { ValidationPipe } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { LandingModule } from './Modules/landing/landing.module';
import { CarritoModule } from './Modules/carrito/carrito.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usuarioModule } from './Modules/Login/login.module';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './Modules/confing/constans';
import { usuario } from './Modules/Login/entitys/usuario.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        //entities: [__dirname + '/**/*.entity{.ts}'],
        entities: [usuario,],
        synchronize: false,
      }),
      inject: [ConfigService],
/*    }),
/* 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username:'root',
      password: '',
      database: 'tienda',
      autoLoadEntities: true,
   */   
    }),
    ProductoModule, 
    LandingModule, 
    CarritoModule, 
    usuarioModule,
    ],
  controllers: [AppController],
  providers: [AppService,ValidationPipe],
})
export class AppModule { }
