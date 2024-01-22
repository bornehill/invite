import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InviteService } from './invite.service';
import { HttpCacheService } from './http-cache.service';
import { CacheInterceptor } from './cache.interceptor';


@NgModule({
  declarations: [],
  imports: [  
    HttpClientModule
  ],
  providers: [InviteService, HttpCacheService, CacheInterceptor],
  bootstrap: [],
})
export class CoreModule { }
