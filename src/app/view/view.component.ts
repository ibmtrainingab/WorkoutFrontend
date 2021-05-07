import { Component, OnInit } from '@angular/core';
import { Category } from '../Category';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  title: String = "SEARCH Template";
  category: Category = new Category();
  templateArray: any;
  showShortDesciption: any;
  constructor(private workoutService: WorkoutService) { }
  // getworkout(name: String) {
  //   const observable = this.workoutService.getworkouts(name);
  //   observable.subscribe(response => {
  //     console.log(response);
  //     this.templateArray = response
  //     if (this.templateArray[0] == undefined) {
  //       return alert('Template not found  by using the given  name')
  //     } else {
  //       return alert('Template found by using the given name')
  //     }
  //   });
  // }

  ngOnInit(): void {
  }

}
