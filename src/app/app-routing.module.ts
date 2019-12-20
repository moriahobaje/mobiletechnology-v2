import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login' } // any other request
];

@NgModule({
  imports: [ RouterModule.forRoot(routes/*, { enableTracing: true }*/) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { } 