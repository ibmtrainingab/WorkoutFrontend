import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.component.html',
  styleUrls: ['./start-workout.component.css']
})
export class StartWorkoutComponent implements OnInit {

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

  // startWorkout(id: string) {
  //   this.getFieldData(id);
  //   document.getElementById('showBugTable').style.display = 'none';
  //   document.getElementById('showEditBug').style.display = 'block';
  // }

  // getFieldData(id: string) {
  //   const promise = this.workoutService.getActiveWorkout();
  //   promise.subscribe(response => {
  //     this.workoutAny = response;
  //     this.workout = this.workoutAny;
  //     if (this.workout[0] == undefined) {
  //       return alert("No Records available  currently from server");
  //     }
  //   },
  //     error => {
  //       if (error.status != 200)
  //         return alert("Unable to fetch records from server");
  //     });
  // }

  putWorkout() {
    if (!this.workoutService.validateWorkout(this.workout)) {
      return;
    }
    const promise = this.workoutService.putWorkout(this.workout);
    promise.subscribe(response => {
      console.log(response);
      Swal.fire(
        'Started!',
        'Workout Satred Successfully!.',
        'success'
      )
      this.successHandler('1');
    },
      error => {
        console.log(error);
        if (error.status != 201) {
          Swal.fire(
            'Failed!',
            'Workout Start Failed ! ' + error.error
          )
        }
        else {
          Swal.fire(
            'Satred!',
            'Workout Satred Successfully!.',
            'success'
          )
        }
      })
  }

  ngOnInit(): void {
  }

}
