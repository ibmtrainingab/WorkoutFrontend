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
  constructor(private categoryService: CategoryService) { }
  saveCategory() {
    const observable = this.categoryService.addCategory(this.category);
    observable.subscribe(response => {
      console.log(response);
      alert("category added succesfully..")
    },
      error => {
        console.log(error);
        alert("error happened")
      })
  }

  ngOnInit(): void {
  }

}
