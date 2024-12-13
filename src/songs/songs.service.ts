import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    private readonly songs = [];
    create(song){
        return this.songs.push(song)
        return this.songs
    }
    findAll(){
        return this.songs
    }
}
