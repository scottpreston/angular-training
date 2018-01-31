import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroserviceService } from '../heroservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.css']
})
export class HeroformComponent implements OnInit {

  constructor(
    private heroService: HeroserviceService,
    private router: Router) {

  }

  model = new Hero('', '');

  ngOnInit() {
  }

  onSubmit() {
    this.heroService.addHero(this.model.name).subscribe(data => {
      alert('thank you!');
      this.router.navigateByUrl('/heros');
    });

  }

}
