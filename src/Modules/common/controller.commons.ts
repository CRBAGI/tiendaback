import {Body, Controller , Get, Post, HttpStatus, HttpCode, Param, UseGuards} from '@nestjs/common';
import { BaseService } from './service.commons';

export abstract class BaseController<T>{

    abstract getService() : BaseService<T>

    @Get('todo')
    async findAll() : Promise<T[]> {
        return await this.getService().findAll();
    }

    @Get('usuario/id')
    async findOne(@Param('id')id) : Promise<T> {
        return await this.getService().findOne(id);
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity : T) : Promise<T> {
        return await this.getService().save(entity);
    }
    @Post('save/many')
    @HttpCode(HttpStatus.CREATED)
     async saveMany(@Body() entities : T[] ) : Promise <T[]> {
        return await this.getService().saveMany(entities);
    }

    @Post('delete/id')
    async delete(@Param('id')id : any) {
        return this.getService().delete(id);
    }

    @Get('count')
    async count() : Promise <number> {

        return this.getService().count()
    }


}