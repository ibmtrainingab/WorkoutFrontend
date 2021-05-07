import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-update-workout',
  templateUrl: './update-workout.component.html',
  styleUrls: ['./update-workout.component.css']
})
export class UpdateWorkoutComponent implements OnInit {
  @Input() workout: Workout = new Workout();
  @Output() workoutSuccess: EventEmitter<string> = new EventEmitter<string>();
  parent: any = { button: "Update" };
  workoutAny: any;
  workoutId: Workout;
  fromParent:any;
  constructor(private workoutService: WorkoutService) {
    
  }

  successHandler(result: string) {
    this.workoutSuccess.emit(result);
  }


  getFieldData() {
    const promise = this.workoutService.getWorkout('1');
    promise.subscribe(response => {
      this.workoutAny = response;
      this.workout = this.workoutAny;
      if (this.workout[0] == undefined) {
        return alert("No Records available  currently from server");
      }
    },
      error => {
        if (error.status != 200)
          return alert("Unable to fetch records from server");
      });
  }

  putWorkout(workoutTemp: Workout) {
    if (!this.workoutService.validateWorkout(workoutTemp)) {
      return;
    }
    const promise = this.workoutService.putWorkout(this.workout);
    promise.subscribe(response => {
      console.log(response);
      alert("Workout Updated..");
      this.successHandler('1');
    },
      error => {
        console.log(error);
        if (error.status != 201) {
          alert("Error !! : " + error.headers.get("error"));
        }
        else {
          alert("Workout Updated..");
        }
      })
  }

  ngOnInit(): void {
   // this.getFieldData();
  }
}
