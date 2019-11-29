import{ Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable()
export class ContentServices
{
    constructor(private http : HttpClient)
    {
        console.log('Content Service initiated.......');
    }
    getContents(): Observable<any>
    {
        return this.http.get('http://localhost/CMS/api/content/read.php')
        .pipe(map(res => res));
    }
    addContents(content : Content): Observable<any>
    {
        return this.http.post('http://localhost/CMS/api/content/create.php',content)
        .pipe(map(res => res));
    }
    getCategories(): Observable<any>
    {
        return this.http.get('http://localhost/CMS/api/category/read.php')
        .pipe(map(res => res));
    }
    addCategory(category : Category): Observable<any>
    {
        return this.http.post('http://localhost/CMS/api/category/create.php',category)
        .pipe(map(res => res));
    }
}

interface Content{
    id: string;
    name:string;
    description:string;
    category_id : string;
    CreatedDate : string;
}
interface Category{
    id: string;
    name:string;
    CreatedDate : string;
}