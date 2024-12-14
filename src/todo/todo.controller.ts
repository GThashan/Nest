import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from 'src/DTO/create-dto.dto';
import { TodoStatus } from 'src/Entity/todo.entity';

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
    @Patch(':id/status')
    updateTodoStatus(@Param('id') id: number, @Body('status') status: TodoStatus) {
        return this.todoservice.updateTodoStatus(+id, status);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: number) {
        return this.todoservice.deleteTodo(+id);
    }
}
