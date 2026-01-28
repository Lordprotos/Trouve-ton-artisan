import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  note: string;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private mockData: Artisan[] = [
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
      name: "Leala Dennis",
      specialty: "Coiffeur",
      note: "3.8",
      location: "Chambéry",
      about: "Salon de coiffure moderne avec les dernières tendances.",
      email: "l.dennos@hotmail.fr",
      website: "https://coiffure-leala-chambery.fr",
      category: "Services",
      top: false
    },
    {
      id: "4",
      name: "Chocolaterie Labbé",
      specialty: "Chocolatier",
      note: "4.9",
      location: "Grenoble",
      about: "Chocolats artisanaux de haute qualité.",
      email: "chocolaterie-labbe@gmail.com",
      website: "https://chocolaterie-labbe.fr",
      category: "Alimentation",
      top: true
    },
    {
      id: "5",
      name: "Jean Électricité",
      specialty: "Électricien",
      note: "4.7",
      location: "Lyon",
      about: "Installations électriques et dépannages en urgence.",
      email: "jean.electricite@gmail.com",
      website: "https://jean-electricite.fr",
      category: "Bâtiment",
      top: true
    },
    {
      id: "6",
      name: "Marie la Boulangère",
      specialty: "Boulangère",
      note: "4.8",
      location: "Annecy",
      about: "Pains et pâtisseries traditionnels fait maison.",
      email: "marie.boulangere@gmail.com",
      website: "https://boulangerie-marie.fr",
      category: "Alimentation",
      top: true
    }
  ];

  constructor(private http: HttpClient) { }

  getArtisans(): Observable<Artisan[]> {
    // Retourner directement les données de test avec un délai court pour simuler l'async
    console.log('Getting artisans - returning test data');
    return of(this.mockData).pipe(
      // Petit délai pour simuler un appel async
      // delay(10)
    );
    
    // Ancien code commenté
    // return this.http.get<Artisan[]>('assets/data/datas.json').pipe(
    //   catchError((error) => {
    //     console.error('Erreur lors du chargement du JSON, utilisation des données de test:', error);
    //     return of(this.mockData);
    //   })
    // );
  }

  // Méthode synchrone pour récupérer les artisans
  getArtisansSync(): Artisan[] {
    console.log('Getting artisans synchronously');
    return this.mockData;
  }
}
