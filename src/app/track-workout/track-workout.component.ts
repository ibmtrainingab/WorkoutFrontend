import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import Swal from 'sweetalert2';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-track-workout',
  templateUrl: './track-workout.component.html',
  styleUrls: ['./track-workout.component.css']
})
export class TrackWorkoutComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [], label: 'Best Fruits' }
  ];
  workout: Workout;
  trackDate: Date;
  workoutArray: any;
  deleteWorkout(id: string) {

  }
  show(synopsis: string) {
    document.getElementById('showSynopsis').innerHTML = synopsis;
    return document.getElementById('synopsisButton').click();
  }
  showChart() {
    const promise = this.workoutService.getTrackWorkout(this.trackDate);
    promise.subscribe(response => {
      console.log(response);
      this.workoutArray = response;

      for (let i = 0; i < this.workoutArray.length; i++) {
        if (this.workoutArray[i].endDateTime == null)
          continue;
        // let tx:Date=this.workoutArray[i].startDateTime;
        // let txx:Date=this.workoutArray[i].endDateTime;
        // console.log((tx.getTime()))
        var time = new Date(this.workoutArray[i].startDateTime).getTime() - new Date(this.workoutArray[i].endDateTime).getTime();
        //return diffInMs / 1000;
        // var diff =(this.workoutArray[i].startDateTime.parse- this.workoutArray[i].endDateTime.parse) / 1000;
        //diff /= 60;
        console.log(Math.abs(Math.round((time / 1000) * this.workoutArray[i].caloriesBurnt)))
          ;
        this.barChartData[0].data[i] = Math.abs(Math.round((time / 1000) * this.workoutArray[i].caloriesBurnt));
        this.barChartLabels[i] = this.workoutArray[i].title;
      }
      // Swal.fire(
      //   'Success!',
      //   'Workout Satred Successfully!.',
      //   'success'
      // )
      //this.successHandler('1');
    },
      error => {
        console.log(error);
        if (error.status != 201) {
          Swal.fire(
            'Failed!',
            'Workout  Failed ! ' + error.error
          )
        }
        else { }
      });
  }



  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {

  }

}
