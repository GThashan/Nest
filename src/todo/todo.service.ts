import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { CreateTodoDto } from 'src/DTO/create-dto.dto';
import { TodoEntity, TodoStatus} from 'src/Entity/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(TodoEntity) private repo:Repository<TodoEntity>){

    }
   async getAllTodo(){
        return await this.repo.find()
    }

    
    async createNewTodo(data: CreateTodoDto): Promise<TodoEntity> {
        const todo: TodoEntity = new TodoEntity();
        todo.title = data.title;
        todo.description = data.description;
        todo.status = TodoStatus.OPEN;
      
        this.repo.create(todo);
        return await this.repo.save(todo);
      }
      
}
