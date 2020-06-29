import { Component, OnInit } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  selected: string;
  fechaInicial: Date;
  fechaFinalMax: Date;
  fechaFinal: Date;

  constructor() { }

  ngOnInit() {
  }

  buscarPorFecha(type: string, event: MatDatepickerInputEvent<Date>) {
    if (type === 'fechaInicial') {
      this.fechaInicial = event.value;
      this.fechaFinalMax = new Date(this.fechaInicial.getFullYear(),
      this.fechaInicial.getMonth(), this.fechaInicial.getDate() + 10);
      // this.fechaFinalMax.setDate(this.fechaFinalMax.getDate() + 2);
      console.log(this.fechaFinalMax);
    } else {
      console.log('si cambie de fecha');
      this.fechaFinal = event.value;
    }
  }

  buscarPorTexto(informacion: string) {
    let data = {};
    if (!informacion || informacion === '') {
      return;
    }
    if (this.selected === 'correo') {
      data = {
        correo: informacion
      };
    } else if (this.selected === 'trackId') {
      data = {
        trackId: informacion
      };
    }
    console.log('voy a buscar : ' , data);
  }

}
