import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from 'src/DTO/create-dto.dto';

@Controller('todo')

export class TodoController {
    constructor (private todoservice:TodoService){}
    @Get()
    getAllTodo(){
        return this.todoservice.getAllTodo()
    }

    @Post()
    createNewTodo(@Body(ValidationPipe) data:CreateTodoDto){
    
      return this.todoservice.createNewTodo(data)
    }
}
