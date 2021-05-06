import { Component, OnInit } from '@angular/core';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {
  title: string = "Create Workout";
  workout: Workout = new Workout();
  parent:any={button:"Add Workout"};


  constructor(private workoutService: WorkoutService) { }

  postWorkout(workoutTemp: Workout) {
    if (!this.workoutService.validateWorkout(workoutTemp)) {
      return;
    }
    const promise = this.workoutService.postWorkout(this.workout);
    promise.subscribe(response => {
      console.log(response);
      alert("Workout Created..");
    },
      error => {
        console.log(error);
        if (error.status != 201) {
          alert("Error !! : " + error.headers.get("error"));
        }
        else {
          alert("Workout Created..");
        }
      })
  }

  ngOnInit(): void {
  }

}
