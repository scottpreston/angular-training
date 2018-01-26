# Angular Command Line Basics #

## Quick Start ##

```bash
npm install -g @angular/cli
ng new example
cd example
ng serve
```

Then open your browser to `http://localhost:4200/`.

## Generation Examples ##

The examples below `g` is short for generate.

* Component	- `ng g component my-new-component`
* Directive	- `ng g directive my-new-directive`
* Pipe - `ng g pipe my-new-pipe`
* Service - `ng g service my-new-service`
* Class	- `ng g class my-new-class`
* Guard	- `ng g guard my-new-guard`
* Interface	- `ng g interface my-new-interface`
* Enum - `ng g enum my-new-enum`
* Module - `ng g module my-module`

## Other Helpful Items ##

[https://github.com/angular/angular-cli/wiki](https://github.com/angular/angular-cli/wiki)

* `ng serve` - builds and serves the project.
* `ng lint` - lint the code using `tslint`
* `ng test` - test build with `Karma`
* `ng e2e` - run end to end test via `Protractor`
* `ng build` - build artifacts and store them in `dist/` directory
* `ng get/ng set` - get/set vales from configuration
* `ng doc` - opens officia Angular API documentation for a keyword.
* `ng eject` - ejects the app with webpack configuration and scripts.
* `ng xi18n` - extracts i18n messages from templates.


## Exercise ##

1. Install `ng`, then create your first example app.
2. Create a `component`.
3. Create a `class`.