import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  private baseUrl = 'https://logo.clearbit.com/';
  constructor() {}
  /**
   * @method getUrlToLogo
   * @description
   * Constructs and returns the full URL to the logo for a given domain. This method combines
   * the base URL with the specified domain to form the complete logo URL.
   * @param {string} domain - The domain for which the logo URL is to be generated.
   * @returns {string} The full URL to the logo associated with the specified domain.
   */
  getUrlToLogo(domain: string): string {
    return `${this.baseUrl}${domain}`;
  }

}
