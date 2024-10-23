import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../services/inicio.service';
import { NavfootService } from '../../services/navfoot.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  footers: any;

  constructor(
    private footerService: NavfootService
  ) { }

  ngOnInit(): void {
    this.cargarfooter();
  }

  cargarfooter(){
    this.footerService.getNavFoot().subscribe(data => {
      this.footers = data;
    });
  }
}
