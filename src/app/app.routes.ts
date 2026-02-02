import { Routes } from '@angular/router';
import { admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { EventBinding } from './components/event-binding/event-binding';
import { Variables } from './components/variables/variables';
import { ControlFlow } from './components/control-flow/control-flow';
import { AttDir } from './components/att-dir/att-dir';
import { OldAngular } from './components/old-angular/old-angular';
import { GetApi } from './components/get-api/get-api';
import { PostApi } from './components/post-api/post-api';
import { CarMaster } from './components/car-master/car-master';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { LifeCycle } from './components/life-cycle/life-cycle';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: admin },
  { path: 'user', component: User },
  { path: 'variables', component: Variables },
  { path: 'dataBinding', component: DataBinding },
  { path: 'eventBinding', component: EventBinding },
  { path: 'controlFlow', component: ControlFlow },
  { path: 'attDir', component: AttDir },
  { path: 'oldAng', component: OldAngular },
  { path: 'getApi', component: GetApi },
  { path: 'postApi', component: PostApi },
  { path: 'carApi', component: CarMaster },
  { path: 'reactiveForm', component: ReactiveForm },
  { path: 'lCycle', component: LifeCycle },
];
