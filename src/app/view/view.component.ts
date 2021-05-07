import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
import { Workout } from '../Workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  workoutarray: any;
  workout: Workout = new Workout();
  parent: any = { button: "Update" };
  workoutAny: any;
  id: string;
  buttonStatus: any = { start: "", end: "", edit: "", delete: "btn btn-danger disabled" }
  workoutId: Workout;
  constructor(private workoutService: WorkoutService) { this.getFieldData() }

  startClick(workout: Workout, i: number) {
    this.workout = workout;
    this.workoutarray[i].started = "started"
    document.getElementById('showView').style.display = 'none';
    document.getElementById('showStart').style.display = 'block';
  }
  editClick(workout: Workout) {
    //this.getFieldData();
    this.workout = workout;
    document.getElementById('showView').style.display = 'none';
    document.getElementById('showUpdate').style.display = 'block';
  }
  endClick(workout: Workout) {
    //this.getFieldData();
    this.workout = workout;
    document.getElementById('showView').style.display = 'none';
    document.getElementById('showEnd').style.display = 'block';
  }
  deleteClick(id:string) {
    Swal.fire({
      title: 'Are you sure want to Delete this Workout?',
      text: 'You will not be able to recover this in future!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        const promise = this.workoutService.deleteWorkout(id);
        promise.subscribe(response => {
          this.workoutarray = response;
        },
          error => {
            if (error.status != 200)
              return (Swal.fire(
                'Cancelled',
                'Due problem with server deletion failed )',
              ))
          });
        Swal.fire(
          'Deleted!',
          'Your entry has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Entry is safe :)',
        )
        window.location.reload();
      }
    })
  }
  workoutSuccess() {
    window.location.reload();
    document.getElementById('showView').style.display = 'block';
    document.getElementById('showStart').style.display = 'none';
    document.getElementById('workoutStartShow').style.display = 'block';
  }
  getFieldData() {
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
