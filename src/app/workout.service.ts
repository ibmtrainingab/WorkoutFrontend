import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workout } from './Workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  URL: string = "http://localhost:8081/";
  constructor(private http: HttpClient) { };

  putWorkout(workout: Workout) {
    return this.http.put(this.URL + workout.id, workout, { headers: { "content-type": 'application/json' } });
  }
  getActiveWorkout(id: string) {
    return this.http.get(this.URL + 'category');
  }

  validateWorkout(workoutTemp: Workout) {
    return 1;
  }
  getCategories() {
    return this.http.get(this.URL + 'category');
  }
  postWorkout(workout: Workout) {
    return this.http.post(this.URL + 'workout', workout, { headers: { "content-type": 'application/json' } });
  }
}
