import '@emotion/react';
import type light from '../styles/theme/light';

// O TypeScript extrai toda a estrutura (cores, fontes, etc) automaticamente
export type AppTheme = typeof light;

declare module '@emotion/react' {
  // Substitui a interface vazia pela sua estrutura completa
  export interface Theme extends AppTheme {}
}