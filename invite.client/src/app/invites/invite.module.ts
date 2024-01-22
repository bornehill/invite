import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InviteListComponent } from './invite-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from '../../core/cache.interceptor';
import { CommonModule } from '@angular/common';
import { InviteFormComponent } from './invite-form.component';

@NgModule({
  declarations: [
    InviteListComponent, InviteFormComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, CoreModule,
    RouterModule.forChild([
      { path: ':id', component: InviteFormComponent },
      { path: '', component: InviteListComponent },
    ])
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
})
export class InviteModule { }
