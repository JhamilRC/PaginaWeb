import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  aboutData: any;
  link="";

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.cargarAbouts();
    this.cargalink();
  }
  cargarAbouts(){
    this.aboutService.getAbout().subscribe(data => {
      this.aboutData = data;
    });
  }
  cargalink() {
    const cargainfo = `Hola, estoy interesado en sus medicamentos. ¿Podrían darme más información del sus productos?`;
    const phoneNumber = '59173985184'; // Número de teléfono en formato internacional
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(cargainfo)}`;
    this.link= url;
  }
}
