import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryWorkoutComponent } from './category-workout/category-workout.component';

import { FooterComponent } from './footer/footer.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { ViewComponent } from './view/view.component';
import { WorkoutTemplateComponent } from './workout-template/workout-template.component';
import { EndWorkoutComponent } from './end-workout/end-workout.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { UpdateWorkoutComponent } from './update-workout/update-workout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WorkoutFormComponent,
    CreateWorkoutComponent,
    ViewComponent,
    WorkoutTemplateComponent,
    EndWorkoutComponent,
    StartWorkoutComponent,
    UpdateWorkoutComponent,
    HeaderComponent,
    CategoryWorkoutComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
