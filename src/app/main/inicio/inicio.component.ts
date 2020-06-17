import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@arch/services/translation-loader.service';

import { sistema } from 'environments/environment';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  public nomeSistema: string = sistema.nomeSistema;
  /**
   * Constructor
   *
   * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
   */
  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService
  ) {}
}
