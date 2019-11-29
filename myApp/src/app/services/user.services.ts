import{ Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable()
export class UserServices
{
    constructor(private http : HttpClient)
    {
        console.log('User Service initiated.......');
    }
    getPosts(): Observable<any>
    {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .pipe(map(res => res));
    }
}