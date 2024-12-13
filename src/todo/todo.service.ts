import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { TodoEntity, TodoStatus} from 'src/Entity/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(TodoEntity) private repo:Repository<TodoEntity>){

    }
   async getAllTodo(){
        return await this.repo.find()
    }

    
   async  createNewTodo(title:string,description:string):Promise<TodoEntity>{
     const todo:TodoEntity = new TodoEntity();
     todo.title = title;
     todo.description=description;
     todo.status=TodoStatus.OPEN

     this.repo.create(todo)
     return await this.repo.save(todo)
    }
}
