import { Injectable } from '@angular/core';

export type Theme = 'light-theme' | 'dark-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {}
