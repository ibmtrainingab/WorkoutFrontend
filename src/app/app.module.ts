import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { EndWorkoutComponent } from './end-workout/end-workout.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FooterComponent } from './footer/footer.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { ViewComponent } from './view/view.component';
import { WorkoutTemplateComponent } from './workout-template/workout-template.component';
import { UpdateWorkoutComponent } from './update-workout/update-workout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryWorkoutComponent } from './category-workout/category-workout.component';
import { TrackComponent } from './track/track.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WorkoutFormComponent,
    CreateWorkoutComponent,
    ViewComponent,
    WorkoutTemplateComponent,
    StartWorkoutComponent,
    EndWorkoutComponent,
    UpdateWorkoutComponent,
    CategoryWorkoutComponent,
    TrackComponent
  ],
  imports: [BrowserModule,RouterModule.forRoot([
    {path: 'create', component: CreateWorkoutComponent},
    {path: 'update', component: UpdateWorkoutComponent},
    {path: 'viewAll', component: ViewComponent},
    {path: '', redirectTo: '/viewAll', pathMatch: 'full'}
  ],{useHash: true}),
    BrowserModule,HttpClientModule,FormsModule,Ng2SearchPipeModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
