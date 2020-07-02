import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  private stateList = [
    { value: 0, display: 'NT' },
    { value: 1, display: 'ACT' },
    { value: 2, display: 'NSW' },
    { value: 3, display: 'VIC' },
    { value: 4, display: 'QLD' },
    { value: 5, display: 'SA' },
    { value: 6, display: 'WA' },
    { value: 7, display: 'TAS' }
  ];

  get states() {
    return this.stateList;
  }

}
