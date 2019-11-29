import { Component } from '@angular/core';
import {ContentServices} from '../services/content.services';

@Component({
    selector : 'content',
    templateUrl: `content.component.html`,
    providers : [ContentServices]
})
export class ContentComponent  { 
    contents : Content[];
    Message : string;
    content : Content;
    categories : Category[];
    success : boolean;
    constructor(private contentServices : ContentServices)
    {
        this.success = false;
        this.Message = '';
        this.contentServices.getContents().subscribe(response => {
            this.contents = response.records;
        });
        this.contentServices.getCategories().subscribe(response => {
            this.categories = response.records;
        });
        this.content = 
        {
        name : '',
        id : '',
        category_id : '',
        description : '',
        CreatedDate : '',
        category_name : ''
        };
    }        
    addContent(){
        console.log(this.content);
        this.contentServices.addContents(this.content).subscribe(
            response => {
                this.Message = response.message;
                this.success = true; 
                this.contentServices.getContents().subscribe(response => {
                    this.contents = response.records;
                });
            });
        this.content = 
        {
        name : '',
        id : '',
        category_id : '',
        description : '',
        CreatedDate : '',
        category_name : ''
        };
    }
}
interface Content{
    id: string;
    name:string;
    description:string;
    category_id : string;
    CreatedDate : string;
    category_name : string;
}
interface Category{
    id: string;
    name:string;
    CreatedDate : string;
}
