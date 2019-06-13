import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showdrop = false;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  onSignout() {
    this.route.navigate([''], { relativeTo: this.router });
  }

  onOpenProfile() {
    this.route.navigate(['profile']);
  }

  toggleDrop() {
    this.showdrop = !this.showdrop;
  }
}
