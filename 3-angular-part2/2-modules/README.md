# Angular Modules #

## Bootstrapping ##

From Angular.io...

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Declarations ###

 The module's declarations array tells Angular which components belong to that module. As you create more components, add them to declarations.

 ```typescript
 declarations: [
  YourComponent,
  YourPipe,
  YourDirective
],
 ```

 ### Imports ###

 The module's imports array appears exclusively in the @NgModule metadata object. It tells Angular about other NgModules that this particular module needs to function properly.

### Providers ###

The providers array is where you list the services the app needs. When you list services here, they are available app-wide. You can scope them when using feature modules and lazy loading. For more information, see Providers.

## Frequently Used Modules ##

* BrowserModule -	When you want to run your app in a browser
* CommonModule - When you want to use NgIf, NgFor
* FormsModule -	When you build template driven forms (includes NgModel)
* ReactiveFormsModule	- When building reactive forms
* RouterModule - For Routing and when you want to use RouterLink,.forRoot(), and .forChild()
* HttpClientModule - When you to talk to a server

## Services ##

Create a service by:

`ng generate service User`

Why Services?

Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.

### Hero Example ###

The Component.

Notice `constructor` and the `getHeros()` method. The `subscribe` is from the returned
observable.

```typescript
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  selectedHero: Hero;
 
  heroes: Hero[];
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
```

The Service

```typescript
@Injectable()
export class HeroService {
 
  constructor(private messageService: MessageService) { }
 
  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
```

Things about services:

* Singletons - Because you want only 1 insance of a service in your app.

## Exercise ##

1. Create a service for your demo app to return a list of heros.
2. Create CRUD methods on your service.