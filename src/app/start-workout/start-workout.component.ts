import { Component, OnInit } from '@angular/core';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.component.html',
  styleUrls: ['./start-workout.component.css']
})
export class StartWorkoutComponent implements OnInit {

  workout: Workout = new Workout();
  parent: any = { button: "Update" };
  workoutAny: any;
  dateString: any;
  constructor(private workoutService: WorkoutService) {
    this.dateString = new Date();
    var date =  this.dateString.getFullYear()+'-0'+( this.dateString.getMonth()+1)+'-0'+ this.dateString.getDate()+'T'+ this.dateString.getHours()+':'+ this.dateString.getMinutes()//new Date().toISOString();
    this.workout.startDateTime = this.dateString;
  }

  startWorkout(id: string) {
    this.getFieldData(id);
    document.getElementById('showBugTable').style.display = 'none';
    document.getElementById('showEditBug').style.display = 'block';
  }

  getFieldData(id: string) {
    const promise = this.workoutService.getActiveWorkout(id);
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
