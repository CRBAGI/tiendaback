import { Controller, Get } from '@nestjs/common';

@Controller('landing')
export class LandingController {
    @Get()
        getlanding(){
            return 'Hola mundo';
        }


}
