import { Component, OnInit } from '@angular/core';
import { HarryService } from 'src/app/services/harry.service';
import { DataDto } from 'src/app/models/DataDto';

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.component.html',
  styleUrls: ['./harry-potter.component.css']
})
export class HarryPotterComponent implements OnInit {

  characters!: Array<DataDto>;

  home: string = '';

  constructor(private harryServise: HarryService) { }

  ngOnInit() {
    this.Characters();
  }

  Characters() {
    this.harryServise.getCharacters().subscribe((res) => {
      this.characters = res;
    });
  }
  Students() {
    this.harryServise.getStudents().subscribe((res) => {
      this.characters = res;
    });
  }
  Staff() {
    this.harryServise.getStaff().subscribe((res) => {
      this.characters = res;
    });
  }

  Change(){
    this.harryServise.getCharacters().subscribe((res) => {

      this.characters = res.filter(el => el.house == this.home);
    });
  }
}