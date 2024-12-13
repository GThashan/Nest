import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor (private todoservice:TodoService){}
    @Get()
    getAllTodo(){
        return this.todoservice.getAllTodo()
    }
}
