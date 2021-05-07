import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-workout',
  templateUrl: './category-workout.component.html',
  styleUrls: ['./category-workout.component.css']
})
export class CategoryWorkoutComponent implements OnInit {

  category: Category = new Category();
  categoryArray: any;
  searchedKeyword:string;
  constructor(private categoryService: CategoryService) { }
  saveCategory() {
    const observable = this.categoryService.addCategory(this.category);
    observable.subscribe(response => {
      console.log(response);
      alert("category added succesfully..");
      window.location.reload();
    },
      error => {
        console.log(error);
        alert("error happened")
      })
  }

  deleteCategory(id:string, index:number){
    let ask = confirm("Please confirm for deletion: " + id);
    if (!ask) {
      return;
    }
    const observable = this.categoryService.delete(id);
    observable.subscribe(response=>{ this.categoryArray.splice(index,1);alert("Category deleted...")})
  }

  updateCategory(id:string,index:number,ask:string){

     ask = prompt("Enter the category...");
    if(ask!=''){
      this.categoryService.update(id, index, ask).subscribe(
        response => {
          console.log(response);
          // this.categoryArray[index]=this.categoryArray[index];
          alert("Category updated....");
        },
        error =>{
          alert("error!");
        }
      )
    }
  }



  ngOnInit(): void {
    const observable = this.categoryService.getAllCategories();
    observable.subscribe(response => {
      console.log(response);
      this.categoryArray = response;
     });
  }

}
