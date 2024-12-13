import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor (private songService:SongsService) {}
    @Post()
    create(){
        return this.songService.create("Animals by Martin Garrix")
    }

    @Get()
    findAll(){
        return "Find all songs endpoint"
    }

    @Get(":id")
    findOne(){
        return "Find specific song endpoint"
    }
    @Put(":id")
    update(){
        return "Update song end point"
    }

    @Delete(":id")
    delete(){
        return "Delete songs by id endpoint"
    }
}
