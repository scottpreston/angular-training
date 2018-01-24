# Angular HTTP #

## The Basics ##

Where should HTTP calls Go? `@Component` or `Service`?

For a component.

```typescript
@Component(...)
export class MyComponent implements OnInit {

  results: string[];

  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('/api/items').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }
}
```

For a service.

```typescript
import {HttpClientx`} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
  ],
})
export class MyAppModule {}
```

`HttpClientModule` vs `HttpClient`

`HttpClientModule` is the module that contains the service `HttpClient`.

## Modifying Your Request ##

```typescript
http.post('/api/items/add', body, {
    headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
  })
```

```typescript
http.post('/api/items/add', body, {
    params: new HttpParams().set('id', '3'),
  })
```

## Subscribing To Data ##

```typescript
interface ItemsResponse {
  results: string[];
}
http.get<ItemsResponse>('/api/items').subscribe(data => {
  // data is now an instance of type ItemsResponse, so you can do this:
  this.results = data.results;
});
```

```typescript
export interface MyJsonData {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

http.get<MyJsonData>('/data.json', )
  .subscribe(resp => {
    console.log(res.json())
  });
```

## Exercise ##

1. Replace your dummy services with HTTP calls to dummy JSON. 
2. Use GET calls.
3. Modify your data and refresh the browser.