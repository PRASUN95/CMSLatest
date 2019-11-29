import { Component } from '@angular/core';
import {ContentServices} from '../services/content.services';

@Component({
  selector: 'category',
  template: `
  <div class = "container">
  <form>
  <div class="form-group">
  <label for="name">Name: </label>
  <input type = "text" class="form-control" id="name" name = "category.name" [(ngModel)] = "category.name"/>
  </div>  
  <button type ="submit" class="btn btn-default" (click) = "addCategory()">Add</button>           
</form> </div>`,
providers : [ContentServices]
})
export class CategoryComponent  { 
    Message : string;
    categories : Category[];
    category : Category;
    constructor(private contentServices : ContentServices)
    {
        this.Message = '';
        this.category = 
        {
        name : '',
        id : '',
        CreatedDate : ''
        };
        this.contentServices.getCategories().subscribe(response => {
            this.categories = response.records;
        });
    }
    addCategory(){
        this.contentServices.addCategory(this.category).subscribe(
            response => {
                this.Message = response.message;
            });
            this.category = 
            {
            name : '',
            id : '',
            CreatedDate : ''
            };
    }  
}
interface Category{
    id: string;
    name:string;
    CreatedDate : string;
}
