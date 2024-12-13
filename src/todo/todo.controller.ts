import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor (private todoservice:TodoService){}
    @Get()
    getAllTodo(){
        return this.todoservice.getAllTodo()
    }

    @Post()
    createNewTodo(@Body() data){
     const {title,description} = data
      return this.todoservice.createNewTodo( title, description)
    }
}
