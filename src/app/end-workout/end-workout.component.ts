import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-end-workout',
  templateUrl: './end-workout.component.html',
  styleUrls: ['./end-workout.component.css']
})
export class EndWorkoutComponent implements OnInit {


  @Input() workout: Workout = new Workout();
  @Output() workoutSuccess: EventEmitter<string> = new EventEmitter<string>();
  parent: any = { button: "Update" };
  workoutAny: any;
  dateString: any;
  constructor(private workoutService: WorkoutService) {
    // this.dateString = new Date();
    // var date =  this.dateString.getFullYear()+'-0'+( this.dateString.getMonth()+1)+'-0'+ this.dateString.getDate()+'T'+ this.dateString.getHours()+':'+ this.dateString.getMinutes()//new Date().toISOString();
    // this.workout.startDateTime = this.dateString;
  }
  successHandler(result: string) {
    this.workoutSuccess.emit(result);
  }

  putWorkout() {
    if (!this.workoutService.validateWorkout(this.workout)) {
      return;
    }
    this.workout.status = "CLOSED";
    let newWorkout: Workout = new Workout();
    newWorkout.title = this.workout.title;
    newWorkout.note = this.workout.note;
    newWorkout.caloriesBurnt = this.workout.caloriesBurnt;
    newWorkout.category = this.workout.category;
    newWorkout.status = "OPEN";
    const promise1 = this.workoutService.postWorkout(newWorkout);
    promise1.subscribe(response => {
      console.log(response);
      alert("Workout created..");
      //this.successHandler('1');
    },
      error => {
        console.log(error);
        if (error.status != 201) {
          alert("Error !! : " + error.headers.get("error"));
        }
        else {
          alert("Workout created..");
        }
      });
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
  }
}


