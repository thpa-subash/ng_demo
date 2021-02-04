import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesFeaturedComponent } from './courses-featured/courses-featured.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesRecentComponent } from './courses-recent/courses-recent.component';
import { CoursesCategoriesComponent } from './courses-categories/courses-categories.component';


@NgModule({
  declarations: [CoursesFeaturedComponent, CoursesListComponent, CoursesDetailComponent, CoursesRecentComponent, CoursesCategoriesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports:[CoursesFeaturedComponent,CoursesListComponent]
})
export class CoursesModule { }
