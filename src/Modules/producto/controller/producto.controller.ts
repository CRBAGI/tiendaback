import { Controller,Get } from '@nestjs/common';

@Controller('producto')
export class ProductoController {
    @Get()
    getProducto(){
        return 'Esto es producto'
    }
}
