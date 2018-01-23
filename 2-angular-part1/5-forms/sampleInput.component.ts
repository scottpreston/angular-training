@Component({
    selector: 'sample-component',
    template: `
      <input #newHero
        (keyup.enter)="addHero(newHero.value)"
        (blur)="addHero(newHero.value); newHero.value='' ">
  
      <button (click)="addHero(newHero.value)">Add</button>
  
      <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
    `
  })
  export class SampleComponent {
    heroes = ['Iron Man', 'Thor', 'Hulk', 'Captain America'];
    addHero(newHero: string) {
      if (newHero) {
        this.heroes.push(newHero);
      }
    }
  }