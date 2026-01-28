# Guide de Style - Palette de Couleurs Professionnelle

## 🎨 Palette de Couleurs

### Couleurs Principales
- **`#f1f8fc`** - Bleu très clair (backgrounds, headers)
- **`#007ac7`** - Bleu principal (boutons, liens, éléments interactifs)
- **`#004972`** - Bleu foncé (hover, emphasis, textes importants)
- **`#384050`** - Gris foncé (textes principaux, navigation)
- **`#d42c2c`** - Rouge accent (alertes, erreurs, boutons d'action)
- **`#82b864`** - Vert accent (succès, validation, highlights)

### Variables CSS

```scss
:root {
  // Couleurs principales
  --color-primary-light: #f1f8fc;    // Backgrounds clairs
  --color-primary: #007ac7;          // Éléments interactifs
  --color-primary-dark: #004972;     // Emphasis et hover
  --color-neutral: #384050;          // Textes principaux
  --color-accent-red: #d42c2c;       // Alertes et actions
  --color-accent-green: #82b864;     // Succès et validation
  
  // Couleurs dérivées
  --color-white: #ffffff;
  --color-text-dark: #384050;
  --color-text-light: #6c757d;
  --color-border: #dee2e6;
  --color-bg-light: #f8f9fa;
  --color-shadow: rgba(56, 64, 80, 0.1);
  
  // Gradients professionnels
  --gradient-primary: linear-gradient(135deg, #007ac7 0%, #004972 100%);
  --gradient-light: linear-gradient(135deg, #f1f8fc 0%, #e9ecef 100%);
  --gradient-accent: linear-gradient(135deg, #82b864 0%, #6ea54a 100%);
}
```

## 🎯 Utilisation des Couleurs

### Header & Navigation
- **Background**: `var(--color-primary-light)` - Fond clair et professionnel
- **Logo/Brand**: `var(--color-primary)` - Visibilité optimale
- **Navigation links**: `var(--color-neutral)` avec hover `var(--color-primary)`
- **Search bar**: Border `var(--color-border)`, focus `var(--color-primary)`

### Boutons & Actions
- **Boutons principaux**: `var(--gradient-primary)` - Impact visuel fort
- **Boutons secondaires**: `var(--color-accent-green)` - Actions positives
- **Boutons d'alerte**: `var(--color-accent-red)` - Actions critiques
- **Hover effects**: Utiliser `-dark` variants pour les interactions

### Cartes & Conteneurs
- **Background**: `var(--color-white)` pour les cartes
- **Borders**: `var(--color-border)` pour les contours subtils
- **Shadows**: `var(--color-shadow)` pour la profondeur
- **Accents**: Bordures colorées avec `var(--gradient-primary)`

### Textes & Typographie
- **Titres principaux**: `var(--color-neutral)` - Lisibilité maximale
- **Textes secondaires**: `var(--color-text-light)` - Hiérarchie claire
- **Liens**: `var(--color-primary)` avec hover `var(--color-primary-dark)`
- **Success messages**: `var(--color-accent-green)`
- **Error messages**: `var(--color-accent-red)`

## 🌈 Gradients Recommandés

### Gradient Principal
```scss
background: var(--gradient-primary);
// Équivaut à: linear-gradient(135deg, #007ac7 0%, #004972 100%)
```

### Gradient Léger (Backgrounds)
```scss
background: var(--gradient-light);
// Équivaut à: linear-gradient(135deg, #f1f8fc 0%, #e9ecef 100%)
```

### Gradient d'Accent
```scss
background: var(--gradient-accent);
// Équivaut à: linear-gradient(135deg, #82b864 0%, #6ea54a 100%)
```

## ✅ Bonnes Pratiques

### Contraste et Accessibilité
- Toujours vérifier le contraste (minimum 4.5:1 pour le texte)
- Utiliser `var(--color-text-dark)` sur backgrounds clairs
- Utiliser `var(--color-white)` sur backgrounds foncés

### Cohérence Visuelle
- Utiliser exclusivement les variables CSS définies
- Maintenir la hiérarchie des couleurs dans tous les composants
- Appliquer les gradients de manière cohérente

### États Interactifs
- **Hover**: Utiliser les variants `-dark` des couleurs principales
- **Focus**: Border `var(--color-primary)` avec shadow
- **Active**: Légère transparence ou saturation réduite
- **Disabled**: Opacity 0.6 avec cursor not-allowed

## 🎨 Exemples d'Application

### Bouton Principal
```scss
.btn-primary {
  background: var(--gradient-primary);
  color: var(--color-white);
  border: none;
  box-shadow: 0 4px 15px rgba(0, 122, 199, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 122, 199, 0.4);
  }
}
```

### Carte Professionnelle
```scss
.professional-card {
  background: var(--color-white);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--color-shadow);
  
  &::before {
    content: '';
    height: 4px;
    background: var(--gradient-primary);
  }
  
  &:hover {
    transform: translateY(-6px);
    border-color: var(--color-primary);
  }
}
```

Cette palette garantit une cohérence visuelle professionnelle tout en respectant les contraintes d'accessibilité et de lisibilité.