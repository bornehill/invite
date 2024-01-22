import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Invite } from '../models/invite';

@Injectable({
  providedIn: 'root'
})

export class InviteService extends BaseService
{
  getInvites(): Observable<Invite[]> {
    return this.get<Invite[]>('/api/invites');
  }
}
