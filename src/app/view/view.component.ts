import { Component, OnInit } from '@angular/core';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  workoutarray:any;
  workout:Workout= new Workout();
  parent:any={button:"Update"};
  workoutAny:any;
  constructor(private workoutService: WorkoutService) { }
  getFieldData(id:string) {
    const promise = this.workoutService.getActiveWorkout();
    promise.subscribe(response => {
      this.workoutarray = response;
     
      if (this.workoutarray[0] == undefined) {
        return alert("No Records available  currently from server");
      }
    },
      error => {
        if (error.status != 200)
          return alert("Unable to fetch records from server");
      });
  }

  ngOnInit(): void {
    
  }
}
