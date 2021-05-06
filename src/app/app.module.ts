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
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CreateWorkoutComponent,
    WorkoutFormComponent,
    FooterComponent,
    UpdateWorkoutComponent,
    HeaderComponent
  ],
  imports: [BrowserModule,RouterModule.forRoot([
    {path: 'create', component: CreateWorkoutComponent},
    {path: '', redirectTo: '/create', pathMatch: 'full'},
  ],{useHash: true}),
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
