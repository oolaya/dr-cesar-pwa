import { Component, Input } from '@angular/core';
import { ISeccion } from './../../../../interfaces/ISeccion.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input()
  set section(q: ISeccion) {
    this.seccionT = q;
  }
  seccionT: ISeccion;
  constructor(private router:Router){  }

  redirect(path: string) {
    this.router.navigate([path])
  }
  
}
