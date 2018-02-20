import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroserviceService } from '../heroservice.service';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {

  private idx: number;
  private name: string;

  constructor(private route: ActivatedRoute, private heroService: HeroserviceService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      let i = Number(params.get('id'));
      this.idx = i;
      this.fetchHeros(i)
    });
  }

  fetchHeros(i) {
    this.heroService.fetchHeros().subscribe(data => {
      const json = data.json();
      console.log(json)
      json.forEach((name, index) => {
        console.log(name)
        if (index === i) {
          this.name = name;
        }
      });
    })
  }

}
