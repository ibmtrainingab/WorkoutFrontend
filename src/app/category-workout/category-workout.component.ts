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

  // updateCategory(id:string,category:Category){

  //   category.title = prompt("Enter the category...");
  //   if(category.title!=''){
  //     this.categoryService.update(id,category.title).subscribe(
  //       response => {
  //         console.log(response);
  //         // this.categoryArray[index]=this.categoryArray[index];
  //         alert("Category updated....");
  //       },
  //       error =>{
  //         alert("error!");
  //       }
  //     )
  //   }
  // }

  update1(index:number,id:string){
    console.log(this.categoryArray[index].title);
    let ask=prompt("Enter category");
    if(ask===''){
      return;
    }
    this.category.title=ask;
    console.log(this.category.title);
    const observable=this.categoryService.update(id,this.category);
    observable.subscribe(response=>{
      this.categoryArray[index].title=ask;
      alert("Category updated");
    },
    error=>{
      alert("error occured");
    });

  }


  ngOnInit(): void {
    const observable = this.categoryService.getAllCategories();
    observable.subscribe(response => {
      console.log(response);
      this.categoryArray = response;
     });
  }

}
