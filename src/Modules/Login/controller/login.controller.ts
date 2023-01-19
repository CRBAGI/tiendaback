import { Controller , Get} from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get()
    getLogin(){
        return 'Hola esto es login';
    }
}
