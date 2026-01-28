import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisanService, Artisan } from '../services/artisan';

@Component({
  selector: 'app-artisan-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './artisan-detail.html',
  styleUrl: './artisan-detail.scss'
})
export class ArtisanDetail implements OnInit {
  artisan: Artisan | null = null;
  loading = true;
  
  // Formulaire de contact
  contactForm = {
    name: '',
    subject: '',
    message: ''
  };
  
  messageSent = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artisanService: ArtisanService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadArtisan(id);
    } else {
      this.router.navigate(['/artisans']);
    }
  }

  loadArtisan(id: string) {
    this.artisanService.getArtisans().subscribe({
      next: (artisans) => {
        this.artisan = artisans.find(a => a.id === id) || null;
        this.loading = false;
        if (!this.artisan) {
          this.router.navigate(['/404']);
        }
      },
      error: (error) => {
        console.error('Erreur lors du chargement de l\'artisan:', error);
        this.loading = false;
        this.router.navigate(['/404']);
      }
    });
  }

  getStars(note: string): string[] {
    const rating = parseFloat(note);
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push('☆');
    }
    return stars;
  }

  onSubmitContact() {
    if (!this.artisan || !this.contactForm.name || !this.contactForm.subject || !this.contactForm.message) {
      return;
    }

    // Simuler l'envoi d'email (en réalité, vous utiliseriez un service backend)
    const subject = encodeURIComponent(`Contact depuis Trouve ton artisan: ${this.contactForm.subject}`);
    const body = encodeURIComponent(
      `Bonjour ${this.artisan.name},\n\n` +
      `Nom: ${this.contactForm.name}\n` +
      `Sujet: ${this.contactForm.subject}\n\n` +
      `Message:\n${this.contactForm.message}\n\n` +
      `Cordialement,\n${this.contactForm.name}`
    );
    
    const emailUrl = `mailto:${this.artisan.email}?subject=${subject}&body=${body}`;
    window.open(emailUrl);
    
    // Réinitialiser le formulaire et afficher un message de confirmation
    this.contactForm = { name: '', subject: '', message: '' };
    this.messageSent = true;
    
    setTimeout(() => {
      this.messageSent = false;
    }, 5000);
  }

  goBack() {
    this.router.navigate(['/artisans']);
  }
}
