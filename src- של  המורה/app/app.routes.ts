import { Routes } from '@angular/router';
import { Lesson4Component } from '../components/lesson-4/lesson-4.component';
import { Lesson5Component } from '../components/lesson-5/lesson-5.component';
import { Lesson6Component } from '../components/lesson-6/lesson-6.component';
import { Lesson7Component } from '../components/lesson-7/lesson-7.component';
import { Lesson8Component } from '../components/lesson-8/lesson-8.component';
import { Lesson9Component } from '../components/lesson-9/lesson-9.component';
import { Lesson11HttpComponent } from '../components/lesson-11-http/lesson-11-http.component';
import { Lesson11MenuComponent } from '../components/lesson-11-menu/lesson-11-menu.component';
import { Lesson12Component } from '../components/lesson12/lesson12.component';
import { Lesson12StyleComponent } from '../components/lesson12-style/lesson12-style.component';
import { Lesson13Component } from '../components/lesson-13/lesson-13.component';
import { Lesson14Component } from '../components/lesson-14/lesson-14.component';
import { authGuard } from '../guards/auth.guard';
import { Lesson14ChildComponent } from '../components/lesson-14-child/lesson-14-child.component';

export const routes: Routes = [
    { path: 'lesson4', component:  Lesson4Component},
    { path: 'lesson5', component:  Lesson5Component},
    { path: 'lesson6', component: Lesson6Component },
    { path: 'lesson7', component:  Lesson7Component},
    { path: 'lesson8', component:  Lesson8Component},
    { path: 'lesson9', component: Lesson9Component },
    //{ path: 'lesson10', component:  less},
    { path: 'lesson11http', component: Lesson11HttpComponent },
    { path: 'lesson11menu', component: Lesson11MenuComponent },
    { path: 'lesson12', component: Lesson12Component },
    { path: 'lesson12style', component: Lesson12StyleComponent },
    { path: 'lesson13', component: Lesson13Component },
    { path: 'lesson14', component: Lesson14Component, canActivate:[authGuard] },
    { path: 'student/:id', component: Lesson14ChildComponent },
];
