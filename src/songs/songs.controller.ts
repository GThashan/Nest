import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Post()
    create(){
        return "Create new song endpoint";
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
