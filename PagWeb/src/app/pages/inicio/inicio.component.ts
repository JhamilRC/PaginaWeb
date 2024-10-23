import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ApiService } from '../../services/api.service';
import { NovedadService } from '../../services/novedad.service';
import { Novedades } from '../../models/novedades';
import { InicioService } from '../../services/inicio.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  products: Product[] = [];
  novedad: Novedades[] = [];
  inicio: any;
  //link = this.cargalink();
  //carga un Array para organizar
  chunkedProducts: any[] = [];

  constructor(
    private inicioService: InicioService,
    private novedadService: NovedadService,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.cargarinicio();
    this.getProducts();
    //this.cargalink();
    this.cargarNovedad();
  }

  getProducts(): void {
    this.apiService.getProducts().subscribe(response => {
      const { products } = response;
      this.products = products;
      // Ahora que los productos están cargados, los dividimos en grupos de 4
      this.chunkedProducts = this.chunkArray(this.products, 4);
    });
  }
  // Método para dividir el array en grupos de tamaño especificado
  chunkArray(array: any[], size: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  cargarinicio() {
    this.inicioService.getInicio().subscribe(data => {
      this.inicio = data;
    });
  }
  cargarNovedad() {
    this.novedadService.getNovedad().subscribe(data => {
      this.novedad = data;
    });
  }

//Mensaje Whatsapp
  cargarlink(productName: string) {
    const cargainfo = `¿Hola podrían darme más información del producto: ${productName}?`;
    const phoneNumber = '59173985184'; // Número de teléfono en formato internacional
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(cargainfo)}`;
    console.log("entre al metodo cargarlink");
    return url;
  }
}
