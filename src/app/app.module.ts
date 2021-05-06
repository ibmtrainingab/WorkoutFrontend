import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateWorkoutComponent } from './update-workout/update-workout.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateWorkoutComponent,
    WorkoutFormComponent,
    FooterComponent,
    UpdateWorkoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
