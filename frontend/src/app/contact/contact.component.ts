import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../score/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: any[] = [];

  constructor(private contactService: ContactService ) {}

  ngOnInit(): void {
    this.contactService.getContactPage().subscribe(data => {
      this.contacts = data;
    });
  }
}
