import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArtisanService, Artisan } from '../services/artisan';

@Component({
  selector: 'app-artisan-list',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './artisan-list.html',
  styleUrl: './artisan-list.scss'
})
export class ArtisanList implements OnInit {
  searchTerm = '';
  selectedCategory = 'Tous';
  
  categories = ['Tous', 'Bâtiment', 'Services', 'Fabrication', 'Alimentation'];
  
  artisans: Artisan[] = [];
  filteredArtisans: Artisan[] = [
    {
      id: "1",
      name: "Vallis Bellemare",
      specialty: "Plombier",
      note: "4",
      location: "Vienne",
      about: "Spécialisé dans la réparation et l'installation de systèmes de plomberie.",
      email: "v.bellemare@gmail.com",
      website: "https://plomberie-bellemare.com",
      category: "Bâtiment",
      top: false
    },
    {
      id: "2",
      name: "Amitee Lécuyer",
      specialty: "Couturier",
      note: "4.5",
      location: "Annecy",
      about: "Expert en couture sur mesure et retouches.",
      email: "a.amitee@hotmail.com",
      website: "https://lecuyer-couture.com",
      category: "Fabrication",
      top: false
    },
    {
      id: "3",
      name: "Chocolaterie Labbé",
      specialty: "Chocolatier",
      note: "4.9",
      location: "Grenoble",
      about: "Artisan chocolatier de renom.",
      email: "chocolaterie-labbe@gmail.com",
      website: "https://chocolaterie-labbe.fr",
      category: "Alimentation",
      top: true
    },
    {
      id: "4",
      name: "Leala Dennis",
      specialty: "Coiffeur",
      note: "3.8",
      location: "Chambéry",
      about: "Coiffure moderne et soins capillaires.",
      email: "l.dennis@hotmail.fr",
      website: "https://coiffure-leala-chambery.fr",
      category: "Services",
      top: false
    },
    {
      id: "5",
      name: "Martin Électricité",
      specialty: "Électricien",
      note: "4.7",
      location: "Lyon",
      about: "Installation et réparation électrique.",
      email: "martin.electricite@gmail.com",
      website: "https://martin-electricite.fr",
      category: "Bâtiment",
      top: true
    }
  ];

  constructor(
    private route: ActivatedRoute, 
    private artisanService: ArtisanService
  ) {
    // Copier les données dans artisans aussi
    this.artisans = [...this.filteredArtisans];
  }

  ngOnInit() {
    console.log('ngOnInit - Artisans initialisés:', this.filteredArtisans.length);
    
    // Essayer de charger les vraies données en arrière-plan
    this.artisanService.getArtisans().subscribe({
      next: (data: Artisan[]) => {
        console.log('Vraies données reçues:', data.length);
        if (data && data.length > 0) {
          this.artisans = data;
          this.filteredArtisans = data;
          console.log('Données mises à jour avec le service');
        }
      },
      error: (error: any) => {
        console.log('Erreur service, garde les données par défaut');
      }
    });
  }

  filterArtisans() {
    this.filteredArtisans = this.artisans.filter(artisan => {
      const matchesSearch = !this.searchTerm || 
        artisan.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        artisan.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCategory === 'Tous' || 
        artisan.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  onSearch() {
    this.filterArtisans();
  }

  onCategoryChange() {
    this.filterArtisans();
  }
}
