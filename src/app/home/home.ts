import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  artisansDuMois = [
    {
      id: "4",
      name: "Chocolaterie Labbé",
      specialty: "Chocolatier",
      note: "4.9",
      location: "Grenoble"
    },
    {
      id: "6",
      name: "Marie la Boulangère",
      specialty: "Boulangère",
      note: "4.8",
      location: "Annecy"
    },
    {
      id: "5",
      name: "Jean Électricité",
      specialty: "Électricien",
      note: "4.7",
      location: "Lyon"
    }
  ];

  constructor() {
    console.log('Home constructor - artisans:', this.artisansDuMois);
  }

  ngOnInit() {
    console.log('Home ngOnInit - artisans:', this.artisansDuMois);
  }

  getStars(note: string): string[] {
    const noteNumber = parseFloat(note);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= noteNumber) {
        stars.push('★');
      } else {
        stars.push('☆');
      }
    }
    return stars;
  }
}
