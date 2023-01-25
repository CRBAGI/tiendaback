import { Controller, Get } from '@nestjs/common';

@Controller('carrito')
export class CarritoController {

    @Get()
    getCarrito(){
        return 'Hola esto es carrito';
    }

}
