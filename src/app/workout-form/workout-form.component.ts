import { EventEmitter, Input, Output } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {
  @Input() parent: any = { button: "gg" };
  @Input() workout: Workout = new Workout();
  @Output() sendWorkouParentt: EventEmitter<Workout> = new EventEmitter<Workout>();
  @Output() successHandler1: EventEmitter<Workout> = new EventEmitter<Workout>();
  //@Output() workoutSuccess: EventEmitter<string> = new EventEmitter<string>();
  categories: any;

  constructor(private workoutService: WorkoutService) { }

  sendWorkout() {
    this.sendWorkouParentt.emit(this.workout);
  }
  sendWorkout1() {
    this.successHandler1.emit(this.workout);
  }

  // successHandler(result: string) {
  //   this.workoutSuccess.emit(result);
  // }

  cancelUpdate() {

  }

  caloriesPlusMinus(increment: number) {
    if (!(this.workout.caloriesBurnt + (increment * 0.1))) {
      Swal.fire(
        'Failed!',
        'Calories Cant be zero or negative'
      );
    }
    else {
      this.workout.caloriesBurnt += increment * 0.1;
      this.workout.caloriesBurnt = +this.workout.caloriesBurnt.toPrecision(3);
      document.getElementById('inputCalories').focus();
    }
  }


  ngOnInit(): void {
    const observable = this.workoutService.getCategories();
    observable.subscribe(response => {
      this.categories = response;
      if (this.categories[0] == undefined) {
        Swal.fire(
          'Failed!',
          'No Records available  currently from server'
        );
      }
    },
      error => {
        if (error.status != 200)
        {
          Swal.fire(
            'Failed!',
            'Unable to fetch records from server'
          );
        }
      });
  }

  // ngOnChanges(changes: SimpleChanges) {

  //   for (let propName in changes) {
  //     let change = changes[propName];
  //     this.parent = change.currentValue;
  //     //this.bug.etaString = this.bug.eta.toString().split('T')[0];
  //   }
  // }


}
