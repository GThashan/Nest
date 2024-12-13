import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
    getAllTodo(){
        return ['todo1','todo2']
    }
}
