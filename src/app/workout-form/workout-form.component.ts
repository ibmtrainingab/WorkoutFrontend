import { EventEmitter, Input, Output } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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
  //@Output() workoutSuccess: EventEmitter<string> = new EventEmitter<string>();
  categories: any;

  constructor(private workoutService: WorkoutService) { }

  sendWorkout() {
    this.sendWorkouParentt.emit(this.workout);
  }

  // successHandler(result: string) {
  //   this.workoutSuccess.emit(result);
  // }

  cancelUpdate() {

  }

  caloriesPlusMinus(increment: number) {
    this.workout.caloriesBurnt = +this.workout.caloriesBurnt.toPrecision(3) + (+(increment * 0.1).toPrecision(3));
    this.workout.caloriesBurnt = +this.workout.caloriesBurnt.toPrecision(3);
    document.getElementById('inputCalories').focus();
  }


  ngOnInit(): void {
    const observable = this.workoutService.getCategories();
    observable.subscribe(response => {
      this.categories = response;
      if (this.categories[0] == undefined) {
        return alert("No Records available  currently from server");
      }
    },
      error => {
        if (error.status != 200)
          return alert("Unable to fetch records from server");
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
