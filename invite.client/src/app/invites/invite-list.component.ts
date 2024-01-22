import { Component, OnInit, OnDestroy } from '@angular/core';
import { InviteService } from '../../core/invite.service';
import { Invite } from '../../models/invite';
import { Subscription } from 'rxjs';

@Component({
  selector: 'invite-list',
  templateUrl: './invite-list.component.html',
  styleUrl: './invite-list.component.css'
})
export class InviteListComponent implements OnInit, OnDestroy {
  public invites: Invite[] = [];
  private sub!: Subscription;

  constructor(private inviteService: InviteService) { }

  ngOnInit() {
    this.getForecasts();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getForecasts() {
    this.sub = this.inviteService.getInvites().subscribe(
      (result) => {
        this.invites = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'Invite list';
}
