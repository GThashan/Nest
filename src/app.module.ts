import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';


const ormOptions : TypeOrmModuleOptions={
  type:'mysql',
  host:'localhost',
  port:3306,
  username:'root',
  password:"",
  database:'nestjs',
  autoLoadEntities:true,
  synchronize:true
}

@Module({

  controllers: [AppController],
  providers: [AppService],
  imports: [TodoModule, TypeOrmModule.forRoot(ormOptions)],
})
export class AppModule{}
