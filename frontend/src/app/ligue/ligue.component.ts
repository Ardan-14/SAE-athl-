import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapLeafletComponent } from '../component/map-leaflet/map-leaflet.component';
import { LigueService } from '../score/ligue.service'; 

@Component({
  selector: 'app-ligue',
  standalone: true,
  imports: [MapLeafletComponent,CommonModule],
  templateUrl: './ligue.component.html',
  styleUrl: './ligue.component.css'
})
export class LigueComponent implements OnInit {

  athletes: any[] = [];

  constructor(private ligueService: LigueService) {}

  ngOnInit(): void {
    this.ligueService.getCardAthlete().subscribe(data => {
      this.athletes = data;
    });
  }

}
