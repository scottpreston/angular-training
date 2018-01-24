# Angular Routing #

A sample router. Most of this information comes directly from:
[https://angular.io/guide/router](https://angular.io/guide/router).

```typescript
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
```

To view these `routed` components enter the following:

`<router-outlet></router-outlet>` in the primary HTML of the bootstrapped `App`.

```html
<h1>Angular Router</h1>
  <nav>
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
```


## Router Events ##

* NavigationStart - An event triggered when navigation starts.
* RoutesRecognized - An event triggered when the Router parses the URL and the routes are recognized.
* RouteConfigLoadStart - An event triggered before the Router lazy loads a route configuration.
* RouteConfigLoadEnd - An event triggered after a route has been lazy loaded.
* NavigationEnd - An event triggered when navigation ends successfully.
* NavigationCancel - An event triggered when navigation is canceled. This is due to a Route Guard returning false during navigation.
* NavigationError - An event triggered when navigation fails due to an unexpected error.


## Router Parts ##

* Router - Displays the application component for the active URL. Manages navigation from one component to the next.
* RouterModule - A separate NgModule that provides the necessary service providers and directives for navigating through application views.
* Routes - Defines an array of Routes, each mapping a URL path to a component.
* Route - Defines how the router should navigate to a component based on a URL pattern. Most routes consist of a path and a component type.
* RouterOutlet - The directive (<router-outlet>) that marks where the router displays a view.
* RouterLink -	The directive for binding a clickable HTML element to a route. Clicking an element with a routerLink directive that is bound to a string or a link parameters array triggers a navigation.
* RouterLinkActive - The directive for adding/removing classes from an HTML element when an associated routerLink contained on or inside the element becomes active/inactive.
* ActivatedRoute -	A service that is provided to each route component that contains route specific information such as route parameters, static data, resolve data, global query params, and the global fragment.
* RouterState -	The current state of the router including a tree of the currently activated routes together with convenience methods for traversing the route tree.

## Query Parameters ##

To prevent users from accessing areas of the site or certain routes, you create and utilize
`Route Guards`.

```typescript
canLoad(route: Route): boolean {
  let url = `/${route.path}`;

  return this.checkLogin(url);
}
//...
{
  path: 'admin',
  loadChildren: 'app/admin/admin.module#AdminModule',
  canLoad: [AuthGuard]
},
```

Passing Parameters to a route:

```typescript
// Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
```

Reading Parameters from a route:

```typescript
  this.sessionId = this.route
      .queryParamMap
      .map(params => params.get('session_id') || 'None');
```

## Exercise ###

1. Create a new Angular app.
2. Add simple components hello1 and hello2. 
3. Add navigation and routing to this app routing between components.
4. Advanced - Create an Async Guarded Route Simulating a Login