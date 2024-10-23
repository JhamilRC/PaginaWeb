import { Component, OnInit } from '@angular/core';
import { NavfootService } from '../../services/navfoot.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  navbars: any;

  constructor(
    private navbarService: NavfootService
  ) { }

  ngOnInit(): void {
    this.cargarnavbar();
  }

  cargarnavbar() {
    this.navbarService.getNavFoot().subscribe(data => {
      this.navbars = data;
    });
  }
}
