// Navigation
export interface NavLink {
  label: string;
  href: string;
}

// Use Cases
export interface UseCase {
  title: string;
  icon: string;
  problem: string;
  features: string[];
  idealFor: string;
}

// Testimonials
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  location?: string;
  rating?: number;
  metric?: string;
  avatarSeed?: string;
  color?: string;
}

// Theme extensions
declare module '@mui/material/styles' {
  interface PaletteOptions {
    brand?: {
      DEFAULT: string;
      light: string;
      dark: string;
    };
    accent?: {
      red: string;
      orange: string;
      purple: string;
      yellow: string;
    };
    background?: {
      primary: string;
      secondary: string;
      dark: string;
    };
  }
}