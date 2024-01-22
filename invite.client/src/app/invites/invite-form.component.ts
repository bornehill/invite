import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite',
  templateUrl: './invite-form.component.html',
  styleUrl: './invite-form.component.css'
})
export class InviteFormComponent implements OnInit {
  inviteForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inviteForm = this.fb.group({
      id: [0, [Validators.required, Validators.min(1)]],
      fullName: ['', [Validators.required, Validators.minLength(2)]], 
      startDate: [Date.now, Validators.required],
      endDate: [Date.now, Validators.required]
    })
  }
}
