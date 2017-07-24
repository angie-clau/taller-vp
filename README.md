
> # README file in progress. Este código compila con errores. Lo estamos arreglando, muy pronto estará listo y 100% funcional :wink:



## Reglas del taller:

1. Angular y React son muy diferentes

2. Olvida lo que sabes de Angularjs (Angular 1.x)

![alt text](src/assets/img/forget.gif)



## Nuestra super app :blush: :thumbsup:

![alt text](https://github.com/angie-clau/taller-vp/blob/master/src/assets/img/taller-vp.JPG)



# Fundamentos Angular

## AngularJs y Angular
Dos frameworks totalmente diferentes

#### Por qué Angular 4?

* @angular7core         v2.3.0
* @angular/compiler     v2.3.0
* @angular/conpiler-cli v2.3.0
* @angular/http         v2.3.0
* @anguar/router        v3.3.0

#### Diferencias entre Angular en su versión 2 y 4

* Angular adopta SEMVER
* *ngif
* Módulo de animación separado
* Actualización de Typescript
* Mejoras de rendimiento gracias a FESM

## Comenzar con Angular
* opcion1: configurar el proyecto manualmente.
* opcion2: Instalar @angular/cli

#### @angular/cli
Es un generador de proyectos Angular

-instalacion
```bash
npm install -g @angular/cli
```
-crear proyectos
```bash
ng new myapp
```

podemos usar algunos comandos para configurar aun más nuestro proyecto
```bash
ng new myapp --style=scss --prefix vp //trabajar con sass y cambiar el prefix app por vp
```
[Documentación new](https://github.com/angular/angular-cli/wiki/new)

Para ejecutar el proyecto
```bash
ng serve -o
```

también hay otras configuraciones respecto al servidor
* --open //abrir el navegador
* --port //3000 el localhost en el puerto 3000
```bash
ng serve -o --port 4000
```

[Documentación serve](https://github.com/angular/angular-cli/wiki/serve)

### Arquitectura y ficheros de angular/CLI

![alt text](https://angular.io/generated/images/guide/architecture/overview2.png)

* Modules
* Components
* Templates
* Metadata
* Data binding
* Directives
* Services
* Dependency injection

### @angular/cli Generate
```bash
ng generate module mymodule
ng generate component mycomponent
ng generate service myservice
```
### @angular/cli comandos utiles
```bash
ng test
ng build
ng lint
```
si se quiere deshabilitar el lint en una clase se puede hacer con
```
/*tslint:disable*/
```
[angular wiki](https://github.com/angular/angular-cli/wiki)

## Inicio Taller = clonar el repositorio de gitHub
```bash
git clone https://github.com/angie-clau/taller-vp.git
```

### Typescript

[TypeScript](https://www.typescriptlang.org/index.html) es un superset JavaScript ES6

### Routing

El enrutador angular permite la navegación de una vista a otra a medida que los usuarios realizan tareas de aplicación.

Vamos a generar las rutas de nuestra aplicación:

* En `modules/` creamos un folder con el nombre `routing`
* en `modules/routing/` creamos un archivo con el nombre `taller.routing.module.ts`
* en el `taller.routing.module.ts` copiamos el siguiente código:

 ```bash
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { ContactComponent } from './../../containers/contact/contact.component';
import { WelcomeComponent } from './../../componets/welcome/welcome.component';

const routes: Routes = [
     { path: 'contact', component: ContactComponent }
     , { path: 'welcome', component: WelcomeComponent }
     , { path: '', component: WelcomeComponent }
     , { path: '**', component: WelcomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class TallerRoutingModule {
     constructor(router: Router) { }
}
```

En el `app/app.module.ts` importamos el modulo de las rutas

```bash
import {TallerRoutingModule} from './modules/routing/taller.routing.module';
```

y en la parte de los import de la metadata del modulo agregamos el modulo del routing

```bash
imports: [
    BrowserModule,
    TallerModule,
    TallerRoutingModule
  ]
```

Ahora, en el componete principal hacemos uso de la directiva del routing para cargar el template según las rutas configuradas.

```
imports: [
    BrowserModule,
    TallerModule,
    TallerRoutingModule
  ]
```

### Template Syntax

Antes de entrar en materia con Template Syntax vamos a combiar este HTML en `app/componets/welcome/welcome.component.html`

```bash
<div class="container">
    <div class="row mt-5">
        <div class="col d-flex justify-content-center">
            <h1 class="text-center text-danger">
                WELCOME
            </h1>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col d-flex justify-content-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, perferendis. Saepe aliquid optio itaque
                eos quo delectus voluptate, reiciendis, deleniti, dolor dolores vel dolorum voluptatum modi adipisci a nobis
                numquam!
            </p>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col d-flex justify-content-center">
            <button class="btn btn-primary">
                    opción 1
            </button>
        </div>
        <div class="col d-flex justify-content-center">
            <button class="btn btn-primary">
                    opción 2
            </button>
        </div>
    </div>

</div>

```

1. interpolacion: funcióna como en AngularJs. Con las doble llaves podemos mostrar el contenido de variables de nuestro componente o hacer operaciones.

para verlo vamos a ir a la declaración del componente `app/componets/welcome/welcome.component.ts` y vamos a declarar una variable

```bash
title = 'Welcome !!'
```
en el archivo html hacemos uso de la variable title para cambiarla por el titulo del h1

```bash
<h1 class="text-center text-danger">
  {{title}}
</h1>
```
2. Expression context:  se puede ocultar o mostrar un contenido según el valor de la variable del componente.

```bash
<span [hidden]="title !== 'a'">Angela</span>
```
3. *ngfor: iterar array de datos

definimos un arrar para mostarlo en pantalla

```bash
data = [{
    name: 'Carlos'
  },
  {
    name: 'Sara'
  }];
```

en el html agregamos el siguiente código
```bash
<div class="row mt-5">
    <div class="col d-flex justify-content-center">
      <div >
        <ul>
          <li *ngFor="let d of data">{{d.name}}</li>
        </ul>

      </div>

    </div>
  </div>
```

4. *ngif ... else

El algo nuevo en Angular 4

definimos una varia de tipo boolean

```bash
show = true;
```

Agregamos el siguiente codigo en el html
```bash
<div class="row mt-5" *ngIf="show; else elseBlock">
        <div class="col d-flex justify-content-center">
            <p>opt1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, perferendis. Saepe aliquid optio itaque
                eos quo delectus voluptate, reiciendis, deleniti, dolor dolores vel dolorum voluptatum modi adipisci a nobis
                numquam!
            </p>
        </div>
    </div>
    <ng-template #elseBlock>
        <div class="row mt-5">
            <div class="col d-flex justify-content-center">
                <p>opt2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, perferendis. Saepe aliquid optio itaque
                    eos quo delectus voluptate, reiciendis, deleniti, dolor dolores vel dolorum voluptatum modi adipisci
                    a nobis numquam!
                </p>
            </div>
        </div>
    </ng-template>
```

en los botones agregamos un evento
```bash
<button (click)="show = true" class="btn btn-primary">opción 1</button>
```

5. Template reference variables ( #var )

puedes crear id de los web components y usar sus propiedades

Agregar la siguiente función al componente

```bash
showValue (dato) {
    alert(dato);
}
```
y en el html agregar

```bash
<div class="row mt-5">
    <div class="col d-flex justify-content-center">
      <div >
        <input #phone placeholder="phone number">
        <button (click)="showValue(phone.value)" class="btn btn-primary">show data</button>

      </div>

    </div>
</div>
```
### Veanos como funcióna las rutas llamando al componente de contacto.

en el componente importamos el router de angular

```bash
import { Router } from '@angular/router';
```
hacemos referencia a el en el constructor

```bash
constructor(private router: Router) { }
```
creamos la función que redirecionara al componente de contacto

```bash
contact = () => {
    this.router.navigate(['contact']);
  }

```

en el html agregamos el siguiente codigo

```bash
<div>
    <button (click)="contact()" class="btn btn-danger contact__btn">
        <i class="fa fa-envelope" aria-hidden="true"></i>
    </button>
</div>
```

# Reactive forms and Component Interaction

We know angular 4 has a Lifecycle Hooks. A component has a lifecycle managed by Angular itself. Angular manages creation, rendering, data-bound properties etc. It also offers hooks that allow us to respond to key lifecycle events.

##### Lifecycle-sequence

![alt text](https://angular.io/generated/images/guide/lifecycle-hooks/hooks-in-sequence.png)

##### Components and Change Detection Strategies

By default Angular 1 (Angularjs) implemented two way data binding, the flow of changes was pretty much chaotic, models were able to change directives, directives were able to change models, directives were able to change other directives and models were able to change other models.

![alt text](https://angular-2-training-book.rangle.io/handout/images/angular1-vs-angular2.jpg)

In Angular the flow of information is unidirectional, even when using ngModel to implement two way data binding, which is only syntactic sugar on top of the unidirectional flow.
changes are guaranteed to propagate unidirectionally. The change detector will traverse each node only once, always starting from the root. That means that a parent component is always checked before its children components.

![alt text](https://image.slidesharecdn.com/angularjscoreconcepts-160322235139/95/angular-2-core-concepts-35-638.jpg?cb=1458691766)

###### There is a better one called OnPush

![alt text](https://image.slidesharecdn.com/angularjscoreconcepts-160322235139/95/angular-2-core-concepts-39-638.jpg?cb=1458691766)

##### What causes a change detection?

![alt text](https://image.slidesharecdn.com/angularjscoreconcepts-160322235139/95/angular-2-core-concepts-43-638.jpg?cb=1458691766)


##### Let's take advantage of this change detection strategy with Smart and Dumb components

![alt text](https://i.imgur.com/hxusLJ2.png)

##### So, why Reactive Forms?

* Reactive forms is an Angular technique for creating forms in a reactive style
Favors explicit management of the data flowing: In keeping with the reactive paradigm.

* With reactive forms, you create a tree of Angular form control objects in the component class and bind them to native form control elements in the component template.

* One advantage of working with form control objects directly is that value and validity updates are always synchronous and under your control.

* Using reactive form directives does not require you to follow all reactive priniciples, but it does facilitate the reactive programming approach should you choose to use it.


##### Async vs. sync

Reactive forms are synchronous. Template-driven forms are asynchronous. It's a difference that matters.

In reactive forms, you create the entire form control tree in code.

Template-driven forms delegate creation of their form controls to directives. That means you must wait a tick before manipulating any of the controls from within the component class.

The asynchrony of template-driven forms also complicates unit testing.


##### Which is better, reactive or template-driven?

Neither is "better". They're two different architectural paradigms, with their own strengths and weaknesses. Choose the approach that works best for you. You may decide to use both in the same application.


#### Comenzamos adicionando los dumb components al stmart component `contact.component`
> Smart component: 
> - Contiene todos los components que no saben qué hacer con sus datos
> - Pasan los datos a los los hijos
> - Se comunican con los servicios
> - Render child componets


##### En el `contact.component.ts` importamos el modulo del router
> `contact.component` es un smart component

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // <= router module

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

    //router module variable
    constructor(private router: Router) { }

    ngOnInit() { }
}
```


##### En `contact.component.html` adicionamos los controles que mostraran la información recibida 

```
 <div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <!-- Form and fields component  -->
    </div>
    <div class="mt-5">
        <!-- contact-info Component -->
    </div>
</div>
```


##### En `contact.component.ts` Adicionamos la función Back() que nos llevará de vuelta al componente `welcome.component`

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }

    // ⇣⇣ added back() fn ⇣⇣
    back() {
      this.router.navigate(['welcome']);
    }
}
```


##### En `contact.component.html` llamamos la función `back()` al hacer click sobre botón en `contact.component.html`

```
<div class="container-fluid">
    <div class="mt-5">
        <!-- ⇣⇣ calling back() on click event ⇣⇣-->
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <!-- Form and fields component  -->
    </div>
    <div class="mt-5">
        <!-- contact-info Component -->
    </div>
</div>
```


##### En `contact.component.html` Adicionamos el primer dumb component: `contact-info.component`
> `contact-info.component` y `contact-fields.component` son dumb components

```
<div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <!-- ⇣⇣ contact-info.component added ⇣⇣ -->
        <vp-contact-info></vp-contact-info>
    </div>
    <div class="mt-5">
        <!-- contact-info Component -->
    </div>
</div>
```


#### Ahora vamos a adicionar los controles y las funciones que recibiran y emitiran los datos a los dumb components
> Dumb component: 
> - Aceptan datos via Inputs
> - Emiten datos via Outputs


##### En `contact-info.component.html` añadimos los controles que mostrarán el contenido enviado por el smart component

```
<div class="container">
    <div class="row mt-5">
        <div class="col">
            <div class="row d-flex justify-content-center icon mb-4">
                <i class="fa fa-phone text-danger" aria-hidden="true"></i>
            </div>
            <div class="row d-flex justify-content-center">
                <h3>título</h3>
            </div>
            <div class="row d-flex justify-content-center">
                <p class="info">texto</p>
            </div>
        </div>
    </div>
</div>
```

##### En el componente `contact-info.component` vamos a recibir los datos enviados por el smart component con el @Input Decorator
> Binding to an @Input property: It's called an input property because data flows from the binding expression into the directive. Without that input metadata, Angular rejects the binding;


#### Primero importamos los simbolos necesarios del Angular Core y los adicionamos a `contact-info.component.ts`

```
/*tslint:disable*/
import { Component, OnInit, Input, SimpleChange } from '@angular/core'; // <--  Input and SimpleChange symbols added

@Component({
  selector: 'vp-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})

export class ContactInfoComponent{

  constructor() { }

  ngOnInit() {}
}
```


#### Añadimos la propiedad Input al `contact-info.component.ts`
> @Input Decorator adds metadata to the class

```
/*tslint:disable*/
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'vp-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})

export class ContactInfoComponent{

  constructor() { }
  
   // ⇣⇣ @Input added ⇣⇣
  @Input()
  contactContent: string[];
  
  ngOnInit() {}
}
```


##### Interceptamos los cambios de la propiedad Input con ngOnChanges() en `contact-info.component.ts`
> ngOnChanges() of the OnChanges lifecycle hook interface detects and acts upon changes to input property values method 
> You may prefer this approach to the property setter when watching and interacting with multiple input properties.

```
/*tslint:disable*/
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'vp-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})

export class ContactInfoComponent{

  constructor() { }
  
  @Input()
  contactContent: string[];
  
  ngOnInit() {}

   // ⇣⇣ ngOnChanges added ⇣⇣
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        for (let propName in changes) {
            let changedProp = changes[propName];
        }
    }
}
```


##### Creamos una variable para almacenar el último valor recibido y la cual mostraremos en los controles

```
/*tslint:disable*/
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'vp-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})

export class ContactInfoComponent{

  constructor() { }
  companyInfo: any; // <-- property companyInfo added

   
  @Input()
  contactContent: string[];
  
  ngOnInit() {}

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        for (let propName in changes) {
            let changedProp = changes[propName];
            this.companyInfo = changedProp.currentValue; // <-- save latest changes
        }
    }
}
```


##### Mostramos los datos en `contact-info.component`
> NgClass and Directives
> There are two other kinds of Angular directives: components and attribute directives.
> A component manages a region of HTML in the manner of a native HTML element. Technically it's a directive with a template, like NgFor
> An attribute directive changes the appearance or behavior of an element, component, or another directive. For example, the built-in NgStyle directive changes several element styles at the same time.
> You can apply many attribute directives to one host element. You can only apply one structural directive to a host element.
> Notes how we are using the NgClass to add and remove CSS classes on an HTML element.

```
<div class="container">
    <div class="row mt-5">
        <div class="col" *ngFor="let info of companyInfo; let i = index;">
            <div class="row d-flex justify-content-center icon mb-4">
                <i class="fa fa-phone text-danger" [class.fa-phone]="info.type === 'Phone'" [class.fa-envelope]="info.type === 'Email'" [class.fa-map-marker]="info.type === 'Address' " aria-hidden="true"></i>
            </div>
            <div class="row d-flex justify-content-center">
                <h3>{{info.type}}</h3>
            </div>
            <div class="row d-flex justify-content-center">
                <p class="info">{{info.value}}</p>
            </div>
        </div>
    </div>
</div>
```


##### Para poder obtener los datos en el smart component debemos crear y llamar el WS. Primero adicionamos el modulo HttpClient al `taller.module.ts`
> En versione inferiores a Angular 4.3.x se usaba el HttpModule, The HttpModule is not a core NgModule. HttpModule is Angular's optional approach to web access. It exists as a separate add-on module called @angular/http and is shipped in a separate script file as part of the Angular npm package.
> En este taller usaremos el nuevo HttpClient API. With HttpClient, @angular/common/http provides a simplified API for HTTP functionality for use with Angular applications, building on top of the XMLHttpRequest interface exposed by browsers. Additional benefits of HttpClient include testability support, strong typing of request and response objects, request and response interceptor support, and better error handling via apis based on Observables.
> Para mayor información sobre la diferencias entre ambos [https://github.com/angular/angular/commit/37797e2]

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'; // <--- import HttpClientModule

// Components
import { WelcomeComponent } from './../../componets/welcome/welcome.component';
import { ContactFieldsComponent } from 'app/componets/contact-fields/contact-fields.component';
import { ContactInfoComponent } from 'app/componets/contact-info/contact-info.component';

// containers
import { ContactComponent } from 'app/containers/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule // <--- add HttpClientModule
  ],
  declarations: [
    WelcomeComponent,
    ContactFieldsComponent,
    ContactInfoComponent,
    ContactComponent
  ],
  providers: []
})

export class TallerModule { }
```


##### En `taller.service.ts` Creamos el servicio
> The Angular http.get returns an RxJS Observable. Observables are a powerful way to manage asynchronous data flows.

```
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TallerService {
    constructor(private http: HttpClient) {}

    getFormContent(): Observable < any > {
      return this.http
      .get<any>('/api/contactInfo')
    }
}
```


##### Adicionamos al servio al moudlo del taller en `taller.module.ts`

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

// Components
import { WelcomeComponent } from './../../componets/welcome/welcome.component';
import { ContactFieldsComponent } from 'app/componets/contact-fields/contact-fields.component';
import { ContactInfoComponent } from 'app/componets/contact-info/contact-info.component';

// containers
import { ContactComponent } from 'app/containers/contact/contact.component';

//Services
import { TallerService } from 'app/services/taller.service'; // <--- import TallerService


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    WelcomeComponent,
    ContactFieldsComponent,
    ContactInfoComponent,
    ContactComponent
  ],
  providers: [TallerService] // <--- add TallerService Provider
})

export class TallerModule { }
```


##### En `contact.component.ts` haremos el llamado al WS y escuchamos el resultado
> RxJS is The Reactive Extensions for JavaScript
>...is a set of libraries to compose asynchronous and event-based programs using observable collections and Array#extras style composition in JavaScript

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable"; // <--- import RxJS Observable
import { TallerService } from 'app/services/taller.service'; // <--- import TallerService

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contactContent: any // <--- variable to recieve response
    constructor(private router: Router, private tallerService: TallerService) { } // <--- instance TallerService

    ngOnInit() {
      this.getData(); // <--- call getData()
     }
    
    // ⇣⇣ added getData() fn ⇣⇣
    getData = () => {
        let serviceData = this.tallerService.getFormContent(); // <--- call WS
        serviceData.subscribe((data) => { // <--- subscribe to response
            if (data) {
                console.log(data);
                this.contactContent = data;
            }
        });
    }

    back() {
      this.router.navigate(['welcome']);
    }
}
```


##### Ahora que ya hicimos el llamado al WS y guardamos los datos, vamos al `contact.component.html` y con el Input binding le enviamos los datos del WS al dumb componente `contact-info.component`
![alt text](https://angular.io/generated/images/guide/template-syntax/input-output.png)
> Component Interaction: Passing data from parent to child with input binding

```
<div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <!-- ⇣⇣ WS data sent trough Input binding ⇣⇣ -->
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
    <div class="mt-5">
        <!-- contact-info Component -->
    </div>
</div>
```


##### Quedando como resultado final:

**`contact-info.component.ts`**
```
/*tslint:disable*/
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'vp-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})

export class ContactInfoComponent implements OnInit {

    companyInfo: any;
    constructor() { }

    @Input()
    contactContent: string[];

    ngOnInit() { }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        for (let propName in changes) {
            let changedProp = changes[propName];
            this.companyInfo = changedProp.currentValue;
        }
    }
}
```

**`contact-info.component.html`**

```
<div class="container">
    <div class="row mt-5">
        <div class="col" *ngFor="let info of companyInfo; let i = index;">
            <div class="row d-flex justify-content-center icon mb-4">
                <i class="fa fa-phone text-danger" [class.fa-phone]="info.type === 'Phone'" [class.fa-envelope]="info.type === 'Email'" [class.fa-map-marker]="info.type === 'Address' " aria-hidden="true"></i>
            </div>
            <div class="row d-flex justify-content-center">
                <h3>{{info.type}}</h3>
            </div>
            <div class="row d-flex justify-content-center">
                <p class="info">{{info.value}}</p>
            </div>
        </div>
    </div>
</div>
```

##### Comenzaremos a crear el formulario. En `taller.module.ts` importamos el modulo de ReactiveForms
>we need to ensure that the ReactiveFormsModule was imported in the bootstrap phase of the application module.
>This will give us access to components, directives and providers like FormBuilder, FormGroup, and FormControl

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // <--- import ReactiveFormsModule

// Components
import { WelcomeComponent } from './../../componets/welcome/welcome.component';
import { ContactFieldsComponent } from 'app/componets/contact-fields/contact-fields.component';
import { ContactInfoComponent } from 'app/componets/contact-info/contact-info.component';

// containers
import { ContactComponent } from 'app/containers/contact/contact.component';

//Services
import { TallerService } from 'app/services/taller.service'; 


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule // <--- add ReactiveFormsModule
  ],
  declarations: [
    WelcomeComponent,
    ContactFieldsComponent,
    ContactInfoComponent,
    ContactComponent
  ],
  providers: [TallerService] 
})

export class TallerModule { }
```


####En `contact.component.html` adicionamos el Formulario y el segundo dumb component: `contact-fields.component.html`
> `contact-info.component` y `contact-fields.component` son dumb components

```
<div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
    <div class="mt-5">
        <form novalidate>
          <!-- ⇣⇣ contact-fields.component added ⇣⇣ -->
          <vp-contact-fields></vp-contact-fields>
        </form>
    </div>
</div>
```


##### En `contact.component.ts` creamos el modelo de datos del formulario reactivo
>In Reactive Forms you create the form control model in code. You write the template with form elements and form... directives from the Angular ReactiveFormsModule. At runtime, Angular binds the template elements to your control model based on your instructions.
> Essential form classes are AbstractControl, FormControl, FormGroup, and FormArray
> **AbstractControl** is the abstract base class for the three concrete form control classes: FormControl, FormGroup, and FormArray. It provides their common behaviors and properties, some of which are observable.
> **FormControl** tracks the value and validity status of an individual form control. It corresponds to an HTML form control such as an input box or selector.
> **FormGroup** tracks the value and validity state of a group of AbstractControl instances. The group's properties include its child controls. The top-level form in your component is a FormGroup.
>The FormBuilder class helps reduce repetition and clutter by handling details of control creation for you.

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { TallerService } from 'app/services/taller.service'; 
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms'; // <--- import Form symbols

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contactContent: any;
    tallerForm: FormGroup; // <--- Form model variable

    constructor(private router: Router, private tallerService: TallerService, private fb: FormBuilder) { } // <--- instance Formbuilder

    ngOnInit() {
      this.getData();
      this.createForm(); // <--- call createForm();
     }
    
    getData = () => {
        let serviceData = this.tallerService.getFormContent();
        serviceData.subscribe((data) => {
            if (data) {
                console.log(data);
                this.contactContent = data;
            }
        });
    }

    // ⇣⇣ added createForm() fn ⇣⇣
    createForm = () => {
      this.tallerForm = this.fb.group({
          name: [''],
          email: [''],
          message: '',
          purpose: '',
          subject: ['']
      })
    }

    back() {
      this.router.navigate(['welcome']);
    }
}
```


##### El campo `Purpose` no es mas que un array de opciones para los checkboxes, en `contact.component.ts` adicionamos la funcion `setPurpose()` que retornará el FormArray
> Sometimes you need to present an arbitrary number of controls or groups. Use FormArray to present an array of FormGroups
> **FormArray** tracks the value and validity state of a numerically indexed array of AbstractControl instances.
> To work with a FormArray you do the following:
> 1. Define the items (FormControls or FormGroups) in the array.
> 2. Initialize the array with items created from data in the data model.
> 3. Add and remove items as the user requires.
> **FormGroup** tracks the value and validity state of a group of AbstractControl instances. The group's properties include its child controls. The top-level form in your component is a FormGroup.

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { TallerService } from 'app/services/taller.service'; 
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contactContent: any;
    tallerForm: FormGroup;

    constructor(private router: Router, private tallerService: TallerService, private fb: FormBuilder) { }

    ngOnInit() {
      this.getData();
      this.createForm();
     }
    
    getData = () => {
        let serviceData = this.tallerService.getFormContent();
        serviceData.subscribe((data) => {
            if (data) {
                console.log(data);
                this.contactContent = data;
            }
        });
    }

    createForm = () => {
      this.tallerForm = this.fb.group({
          name: [''],
          email: [''],
          message: '',
          purpose: this.setPurpose(), // <---  call setPurpose()
          subject: ['']
      })
    }

    // ⇣⇣ added setPurpose() fn ⇣⇣
    setPurpose = () => {
    let porpuseFormArray = this.fb.array([
          this.fb.group({ id: 0, selected: false, name: 'Say Hello' }),
          this.fb.group({ id: 1, selected: false, name: 'Complain' })
      ])
      return porpuseFormArray;
    }

    back() {
      this.router.navigate(['welcome']);
    }
}
```


##### El campo `Subject` es otro array de opciones para el dropdown de Subjects, este array lo vamos a crear en un archivo denomidao `data-constants.ts` que importaremos en nuestro componente. Creamos una carpeta `Model` y le añadimos un archivo llamado `data-constants.ts`. Vamos a `data-constants.ts` y adicionamos el array con los posibles asuntos para el forulario:

```
export const subjectConst = [
    'Better than a pumpkin spice latte',
    'There are no deals in this email',
    'Where to Drink Beer Right Now',
    'Look what you did, you little jerk…',
    'Your Butt Will Look Great in These Workout Pants'
]
```


#### Luego lo importamos y se lo asignamos a la variable que almacenará el objeto en `contact.component.ts` 

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { TallerService } from 'app/services/taller.service'; 
import { subjectConst } from './../../model/data-constants'; // <--- import data-constants.ts file

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contactContent: any;
    tallerForm: FormGroup;
    subjects: String[] = subjectConst; // <--- store subject constants

    constructor(private router: Router, private tallerService: TallerService, private fb: FormBuilder) { }

    ngOnInit() {
      this.getData();
      this.createForm();
     }
    
    getData = () => {
        let serviceData = this.tallerService.getFormContent();
        serviceData.subscribe((data) => {
            if (data) {
                console.log(data);
                this.contactContent = data;
            }
        });
    }

    createForm = () => {
      this.tallerForm = this.fb.group({
          name: [''],
          email: [''],
          message: '',
          purpose: this.setPurpose(),
          subject: ['']
      })
    }

    setPurpose = () => {
    let porpuseFormArray = this.fb.array([
          this.fb.group({ id: 0, selected: false, name: 'Say Hello' }),
          this.fb.group({ id: 1, selected: false, name: 'Complain' })
      ])
      return porpuseFormArray;
    }

    back() {
      this.router.navigate(['welcome']);
    }
}
```

`NOTE`
> When working with Reactive Forms keep in mind that designing the Form structure is everything

> RULE 1: Whenever there is a formControl(smallest entity of a form like an input) with any other basic block like FormControl, FormGroup, FormArray. We have to nest them under a FormGroup.

> RULE 2: Whenever you find yourself saying something like X has many Y, that is when you should know you are looking at a possible FormArray of Y inside X(where X is almost always a FormGroup).


##### Una vez creado el modelo de datos debemos registrar el formulario adentro del FormGroup que hemos creado, nos vamos a `contact.component.html` y lo adicionamos
> Usually, if you have multiple FormControls, you'll want to register them within a parent FormGroup. This is simple to do. To add a FormGroup, add it to the imports section of hero-detail.component.ts:

```
<div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
    <div class="mt-5">
        <!-- ⇣⇣ register Form within a parent FormGroup  ⇣⇣ -->
        <form novalidate [formGroup]="tallerForm">
            <vp-contact-fields></vp-contact-fields>
         </form>
    </div>
</div>
```


##### Luego de haber creado el modelo y haber registrado el formulario nos comuniacaremos de padre a hijo, por lo tanto vamos a `contact-fields.component.ts` y adicionamos las propiedades que recibiran los datos
> You can intercept input property changes with a setter. Use this approach to intercept and act upon a value from the parent.

```
/*tslint:disable*/
import { Component, OnInit, Input } from '@angular/core'; // <--- Add Input symbol to the core import
import { FormArray } from '@angular/forms'; // <--- Import Reactive Form symbols

@Component({
    selector: 'vp-contact-fields',
    templateUrl: './contact-fields.component.html',
    styleUrls: ['./contact-fields.component.scss']
})

export class ContactFieldsComponent implements OnInit {
    private _subjects = []; // <--- add private property

    constructor() { }

    // ⇣⇣ recieve Form model ⇣⇣ 
    @Input()
    parent: FormGroup;

    // ⇣⇣ recieve subjects object with a setter ⇣⇣ 
    @Input()
    set subjects(subject: string[]) {
        this._subjects = subject;
    }

    get subjects(): string[] {
        return this._subjects;
    }
    
    // ⇣⇣ filter purpose object from Form model ⇣⇣ 
    get purpose(): any {
        return (this.parent.get('purpose') as FormArray).controls;
    };

    ngOnInit() {  }
}
```


#### Ahora enviamos el modelo de datos y el objecto Subjects con Input binding en `contact.component.html`. 
> Component Interaction: Passing data from parent to child with input binding

```
<div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
    <div class="mt-5">
        <form novalidate [formGroup]="tallerForm">
            <!-- ⇣⇣ sending data: tallerForm and subjects  ⇣⇣ -->
            <vp-contact-fields [parent]="tallerForm" [subjects]="subjects"></vp-contact-fields>
         </form>
    </div>
</div>
```


####  En `contact-fields.component.html` creamos el template para mostrar los datos del formulario reactivo
> FormControl is a directive that allows you to create and manage a FormControl instance directly.
> To let Angular know that there is an input that you want to associate to the name FormControl in the class, you need [formControl]="modelcontrolname" in the template on the html tag.
> Nesting groups and controls allows you to mirror the hierarchical structure of the data model and helps track validation and state for related sets of controls.

```
<!-- ⇣⇣ register withing parent FormGroup  ⇣⇣ -->
<div class="container" [formGroup]="parent">
    <div class="row mt-5">
        <div class="col">
            <h1 class="text-center text-danger">
                CONTACT US
            </h1>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="form-group">
                <label for="name">Name</label>
                <!-- ⇣⇣ add FormControl Name to associate to the name FormControl in the class ⇣⇣ -->
                <input type="text" class="form-control custom-input" name="name" placeholder="Name" formControlName="name">
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <label for="email">Email</label>
                <!-- ⇣⇣ add FormControl Name to associate to the name FormControl in the class ⇣⇣ -->
                <input type="email" class="form-control custom-input" name="email" placeholder="Email" formControlName="email">
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <!-- ⇣⇣ Nesting groups: set formArrayName directive to the Purpose object as this will set the context for form controls in the inner ⇣⇣ -->
            <div class="form-group" formArrayName="purpose">
                <legend class="col-form-legend">What's this all about?</legend>
                <!-- ⇣⇣ Each repeated FormGroup needs a unique formGroupName which must be the index of the FormGroup in the FormArray ⇣⇣ -->
                <div class="form-check form-check-inline" *ngFor="let porp of purpose; let i = index;" [formGroupName]="i">
                    <label class="form-check-label">
                        <!-- ⇣⇣ add FormControl Name to associate to the name FormControl in the class ⇣⇣ -->
                        <input class="form-check-input" type="checkbox" formControlName="selected">
                        {{porp.value.name}}
                    </label>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <label for="select">Subject</label>
                <!-- ⇣⇣ add FormControl Name to associate to the name FormControl in the class ⇣⇣ -->
                <select class="form-control custom-input" formControlName="subject">
                    <option value="">Select</option>
                    <option *ngFor="let sub of subjects; let i = index;" >{{sub}}</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="form-group">
                <label for="textarea">Message</label>
                <!-- ⇣⇣ add FormControl Name to associate to the name FormControl in the class ⇣⇣ -->
                <textarea class="form-control custom-input" name="textarea" rows="3" formControlName="message"></textarea>
            </div>
        </div>
    </div>
    <div class="row mt-5 pb-5">
        <div class="col">
            <div class="text-center">
                <button type="button" class="btn btn-danger">Cancel</button>
                <button type="submit" class="btn btn-primary" [disabled]="!parent.valid">Enviar</button>
            </div>
        </div>
    </div>
</div>
```


##### Inspect FormControl Properties: en Angular tenemos la posibilidad de inspeccionar el formulario. En `contact.component.ts` añadimos la función que mostrará u ocultará el div
> You can inspect an individual FormControl within a form by extracting it with the .get() method. You can do this within the component class or display it on the page by adding the following to the template, immediately after the {{form.value | json}} interpolation

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { TallerService } from 'app/services/taller.service'; 
import { subjectConst } from './../../model/data-constants';

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contactContent: any;
    tallerForm: FormGroup;
    subjects: String[] = subjectConst;
    tempDisplay: boolean = true; // <--- add toggle property

    constructor(private router: Router, private tallerService: TallerService, private fb: FormBuilder) { }

    ngOnInit() {
      this.getData();
      this.createForm();
     }
    
    getData = () => {
        let serviceData = this.tallerService.getFormContent();
        serviceData.subscribe((data) => {
            if (data) {
                console.log(data);
                this.contactContent = data;
            }
        });
    }

    createForm = () => {
      this.tallerForm = this.fb.group({
          name: [''],
          email: [''],
          message: '',
          purpose: this.setPurpose(),
          subject: ['']
      })
    }

    setPurpose = () => {
    let porpuseFormArray = this.fb.array([
          this.fb.group({ id: 0, selected: false, name: 'Say Hello' }),
          this.fb.group({ id: 1, selected: false, name: 'Complain' })
      ])
      return porpuseFormArray;
    }

    // ⇣⇣ add toggle fn ⇣⇣ 
    toggleTempDisplay = () => {
        this.tempDisplay = this.tempDisplay ? false: true;
    }

    back() {
      this.router.navigate(['welcome']);
    }
}
```


#####  En `contact.component.html` adicionamos los elementos que mostraran los datos del formulario
> You can also check the validity of a FormControl using tallerForm.status: Possible values: VALID, INVALID, PENDING, or DISABLED.

```
<div class="container-fluid">
    <!-- ⇣⇣ add toggle btn ⇣⇣ -->
    <button type="button" class="ml-4 mt-3 btn btn-danger" aria-label="Close" (click)="toggleTempDisplay()">Form Object</button>
    <!-- ⇣⇣ add div container ⇣⇣ -->
    <div class="mt-2 formDataDisplay" [hidden]="tempDisplay">
        <p>Form status: {{tallerForm.status}}</p>
        <p>Form: {{tallerForm.value | json}}</p>
    </div>
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
    <div class="mt-5">
        <form novalidate [formGroup]="tallerForm">
            <vp-contact-fields [parent]="tallerForm" [subjects]="subjects"></vp-contact-fields>
         </form>
    </div>
</div>
```


##### Form Validation.
> Improve overall data quality by validating user input for accuracy and completeness.


#### En este taller haremos 3 tipos de validaciones: required, email and pattern. Para hacer una validacion con una expresion regular lo que haremos será añadirla a nuestro archivo `data-constants.ts` para restringir los caracteres que se ingresan al nombre del usuario
> Angular provides many validators out of the box. They can be imported along with the rest of dependencies for procedural forms.

```
export const subjectConst = [
    'Better than a pumpkin spice latte',
    'There are no deals in this email',
    'Where to Drink Beer Right Now',
    'Look what you did, you little jerk…',
    'Your Butt Will Look Great in These Workout Pants'
]

export const namePattern = "^[a-zA-Z ]*$"; // <--- export namePattern constant
```


##### Vamos a `contact.component.ts` y adicionamos la expresion regular que validara nuestro campo `name`
> A FormControl constructor accepts three, optional arguments: the initial data value, an array of validators, and an array of async validators.

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { TallerService } from 'app/services/taller.service'; 
import { subjectConst, namePattern } from './../../model/data-constants'; // <--- add namePattern symbol

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contactContent: any;
    tallerForm: FormGroup;
    subjects: String[] = subjectConst;
    tempDisplay: boolean = true;
    namePattern = namePattern; // <--- add namePattern property

    constructor(private router: Router, private tallerService: TallerService, private fb: FormBuilder) { }

    ngOnInit() {
      this.getData();
      this.createForm();
     }
    
    getData = () => {
        let serviceData = this.tallerService.getFormContent();
        serviceData.subscribe((data) => {
            if (data) {
                console.log(data);
                this.contactContent = data;
            }
        });
    }

    createForm = () => {
      this.tallerForm = this.fb.group({
          name: ['', [Validators.pattern(new RegExp(this.namePattern))]], // <--- validates letters and space,
          email: [''],
          message: '',
          purpose: this.setPurpose(),
          subject: ['']
      })
    }

    setPurpose = () => {
    let porpuseFormArray = this.fb.array([
          this.fb.group({ id: 0, selected: false, name: 'Say Hello' }),
          this.fb.group({ id: 1, selected: false, name: 'Complain' })
      ])
      return porpuseFormArray;
    }

    // ⇣⇣ add toggle fn ⇣⇣ 
    toggleTempDisplay = () => {
        this.tempDisplay = this.tempDisplay ? false: true;
    }

    back() {
      this.router.navigate(['welcome']);
    }
}
```


##### Ahora adicionaremos las validaciones required and email type en el modelo del formulario en `contact.component.ts` 

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { TallerService } from 'app/services/taller.service'; 
import { subjectConst, namePattern } from './../../model/data-constants';

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contactContent: any;
    tallerForm: FormGroup;
    subjects: String[] = subjectConst;
    tempDisplay: boolean = true;
    namePattern = namePattern;

    constructor(private router: Router, private tallerService: TallerService, private fb: FormBuilder) { }

    ngOnInit() {
      this.getData();
      this.createForm();
     }
    
    getData = () => {
        let serviceData = this.tallerService.getFormContent();
        serviceData.subscribe((data) => {
            if (data) {
                console.log(data);
                this.contactContent = data;
            }
        });
    }

    createForm = () => {
      this.tallerForm = this.fb.group({
          name: ['', [Validators.pattern(new RegExp(this.namePattern))]],
          email:  ['', [Validators.required, Validators.email]], // <---  add required and email validation
          message: '',
          purpose: this.setPurpose(),
          subject: ['', Validators.required] // <--- add required validation
      })
    }

    setPurpose = () => {
    let porpuseFormArray = this.fb.array([
          this.fb.group({ id: 0, selected: false, name: 'Say Hello' }),
          this.fb.group({ id: 1, selected: false, name: 'Complain' })
      ])
      return porpuseFormArray;
    }

    // ⇣⇣ add toggle fn ⇣⇣ 
    toggleTempDisplay = () => {
        this.tempDisplay = this.tempDisplay ? false: true;
    }

    back() {
      this.router.navigate(['welcome']);
    }
}
```


##### Una vez adicionadas las validaciones al modelo vamos a tener que mostrar los mensajes de error en el template del formulario, la ventaja de este tipo de formularios es que lo podemos hacer directamente desde la clase del componente y no desde el Html. Para hacer esto lo que haremos será escuchar los cambios de nuestros controles en el componente hijo `contact-fields.component` usando `ngOnChanges`
> The Angular safe navigation operator (?.) is a fluent and convenient way to guard against null and undefined values in property paths.

```
/*tslint:disable*/
import { Component, OnInit, Input } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
    selector: 'vp-contact-fields',
    templateUrl: './contact-fields.component.html',
    styleUrls: ['./contact-fields.component.scss']
})

export class ContactFieldsComponent implements OnInit {
    private _subjects = [];

    // ⇣⇣ add formErrors object ⇣⇣ 
    formErrors = {
        'name': '',
        'email': '',
        'subject': ''
    };
    
    // ⇣⇣ add validationMessages object ⇣⇣ 
    validationMessages = {
        'name': {
            'required': "Sorry, you can't send the form without your name",
            'pattern': 'Sorry, only words and spaces'
        },
        'email': {
            'email': 'Please enter a valid email address'
        },
        'subject': {
            'required': "Please select a subject",
        }
    };
    constructor() { }

    @Input()
    parent: FormGroup;

    @Input()
    set subjects(subject: string[]) {
        this._subjects = subject;
    }

    get subjects(): string[] {
        return this._subjects;
    }
    
    get purpose(): any {
        return (this.parent.get('purpose') as FormArray).controls;
    };

    ngOnInit() { 
      this.parent.valueChanges.subscribe(data => this.onValueChanged(data)); // <--- subscribe to Form changes
      // this.onValueChanged(); // <--- call onValueChanged()
     }

     // ⇣⇣ add onValueChanged fn ⇣⇣ 
    onValueChanged = (data?: any) => { // <---- notes the Angular Safe operator

        if (!this.parent) { return; }

        const form = this.parent;
        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control.dirty && control.hasError('email')) {
                const messages = this.validationMessages[field];
                this.formErrors[field] = messages[field];
            }
            else if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] = messages[key];
                }
            }
        }
    }
}
```


#### Despúes de hacer las validaciones en la clase mostraremos y ocultaremos los mensajes en el template `contact-fields.component.html` usando una structural directive como NgIf
> You can add or remove an element from the DOM by applying an NgIf directive to that element (called the host element). Bind the directive to a condition expression
> Hiding an element is quite different from removing an element with NgIf.
> When you hide an element, that element and all of its descendents remain in the DOM. All components for those elements stay in memory and Angular may continue to check for changes. You could be holding onto considerable computing resources and degrading performance, for something the user can't see.
> When NgIf is false, Angular removes the element and its descendents from the DOM. It destroys their components, potentially freeing up substantial resources, resulting in a more responsive user experience.
> The show/hide technique is fine for a few elements with few children. You should be wary when hiding large component trees; NgIf may be the safer choice.
> The ngIf directive is often used to guard against null. Show/hide is useless as a guard. Angular will throw an error if a nested expression tries to access a property of null.

```
<div class="container" [formGroup]="parent">
    <div class="row mt-5">
        <div class="col">
            <h1 class="text-center text-danger">
                CONTACT US
            </h1>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="form-group" [class.has-danger]="formErrors.name">
                <label for="name">Name</label>
                <input type="text" class="form-control custom-input" name="name" placeholder="Name" formControlName="name">
                <!-- ⇣⇣ check for formErrors.name ⇣⇣ -->
                <div class="form-control-feedback" *ngIf="formErrors.name">{{formErrors.name}}</div>
            </div>
        </div>
        <div class="col">
            <div class="form-group" [class.has-danger]="formErrors.email">
                <label for="email">Email</label>
                <input type="email" class="form-control custom-input" name="email" placeholder="Email" formControlName="email">
                <!-- ⇣⇣ check for formErrors.email ⇣⇣ -->
                <div class="form-control-feedback" *ngIf="formErrors.email">{{formErrors.email}}</div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="form-group" formArrayName="purpose">
                <legend class="col-form-legend">What's this all about?</legend>
                <div class="form-check form-check-inline" *ngFor="let porp of purpose; let i = index;" [formGroupName]="i">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" formControlName="selected">
                        {{porp.value.name}}
                    </label>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="form-group" [class.has-danger]="formErrors.subject">
                <label for="select">Subject</label>
                <select class="form-control custom-input" formControlName="subject">
                    <option value="">Select</option>
                    <option *ngFor="let sub of subjects; let i = index;" >{{sub}}</option>
                </select>
                  <!-- ⇣⇣ check for formErrors.subject ⇣⇣ -->
                   <div class="form-control-feedback" *ngIf="formErrors.subject">{{formErrors.subject}}</div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="form-group">
                <label for="textarea">Message</label>
                <textarea class="form-control custom-input" name="textarea" rows="3" formControlName="message"></textarea>
            </div>
        </div>
    </div>
    <div class="row mt-5 pb-5">
        <div class="col">
            <div class="text-center">
                <button type="button" class="btn btn-danger">Cancel</button>
                <button type="submit" class="btn btn-primary" [disabled]="!parent.valid">Enviar</button>
            </div>
        </div>
    </div>
</div>

```


##### Enviando el formulario. En `contact.component.ts` agregamos la función que envia los formularios
>Clicking a button of type "submit" triggers the ngSubmit event which calls the component's onSubmit method
> The form and data model structures need not match exactly. You often present a subset of the data model on a particular screen. But it makes things easier if the shape of the form model is close to the shape of the data model.

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { TallerService } from 'app/services/taller.service'; 
import { subjectConst, namePattern } from './../../model/data-constants';

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contactContent: any;
    tallerForm: FormGroup;
    subjects: String[] = subjectConst;
    tempDisplay: boolean = true;
    namePattern = namePattern;

    constructor(private router: Router, private tallerService: TallerService, private fb: FormBuilder) { }

    ngOnInit() {
      this.getData();
      this.createForm();
     }
    
    getData = () => {
        let serviceData = this.tallerService.getFormContent();
        serviceData.subscribe((data) => {
            if (data) {
                console.log(data);
                this.contactContent = data;
            }
        });
    }

    createForm = () => {
      this.tallerForm = this.fb.group({
          name: ['', [Validators.pattern(new RegExp(this.namePattern))]],
          email:  ['', [Validators.required, Validators.email]],
          message: '',
          purpose: this.setPurpose(),
          subject: ['', Validators.required]
      })
    }

    setPurpose = () => {
    let porpuseFormArray = this.fb.array([
          this.fb.group({ id: 0, selected: false, name: 'Say Hello' }),
          this.fb.group({ id: 1, selected: false, name: 'Complain' })
      ])
      return porpuseFormArray;
    }

    toggleTempDisplay = () => {
        this.tempDisplay = this.tempDisplay ? false: true;
    }

    back() {
      this.router.navigate(['welcome']);
    }

    // ⇣⇣ add submitted fn ⇣⇣ 
    submitted = () => {
        console.log('Form submitted!!', this.tallerForm.value);
        this.resetForm(); // <--- clean form fields
    }
    // ⇣⇣ add resetForm fn ⇣⇣ 
    resetForm = () => {
        this.tallerForm.reset({
            name: '',
            email: '',
            message: '',
            purpose: [{ id: 0, selected: false, name: 'Say Hello' }, { id: 1, selected: false, name: 'Complain' }],
            subject: ''
        });
    }
}
```


##### En `contact.component.html` adicionamos el evento ngSubmit que enviará el formulario

```
<div class="container-fluid">
    <button type="button" class="ml-4 mt-3 btn btn-danger" aria-label="Close" (click)="toggleTempDisplay()">Form Object</button>
    <div class="mt-2 formDataDisplay" [hidden]="tempDisplay">
        <p>Form status: {{tallerForm.status}}</p>
        <p>Form: {{tallerForm.value | json}}</p>
    </div>
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
    <div class="mt-5">
        <!-- ⇣⇣ add ngSubmit event ⇣⇣ -->
        <form novalidate [formGroup]="tallerForm" (ngSubmit)="submitted()">
            <vp-contact-fields [parent]="tallerForm" [subjects]="subjects"></vp-contact-fields>
         </form>
    </div>
</div>
```


##### Cancelando el envío del Form: Parent listens for child event. En `contact-fields.component.ts` adicionamos el Output decorator:
> Output properties expose event producers, such as EventEmitter objects.
> The child component exposes an EventEmitter property with which it emits events when something happens. The parent binds to that event property and reacts to those events.
> The child's EventEmitter property is an output property, typically adorned with an @Output decoration 

```
/*tslint:disable*/
import { Component, OnInit, Input, Output } from '@angular/core'; // <---- import Output symbol
import { FormArray } from '@angular/forms';

@Component({
    selector: 'vp-contact-fields',
    templateUrl: './contact-fields.component.html',
    styleUrls: ['./contact-fields.component.scss']
})

export class ContactFieldsComponent implements OnInit {
    private _subjects = [];

    formErrors = {
        'name': '',
        'email': '',
        'subject': ''
    };
    
    validationMessages = {
        'name': {
            'required': "Sorry, you can't send the form without your name",
            'pattern': 'Sorry, only words and spaces'
        },
        'email': {
            'email': 'Please enter a valid email address'
        },
        'subject': {
            'required': "Please select a subject",
        }
    };
    constructor() { }
    
    // ⇣⇣ add Output decorator ⇣⇣ 
    @Output()
    cancelled = new EventEmitter<any>();


    @Input()
    parent: FormGroup;

    @Input()
    set subjects(subject: string[]) {
        this._subjects = subject;
    }

    get subjects(): string[] {
        return this._subjects;
    }
    
    get purpose(): any {
        return (this.parent.get('purpose') as FormArray).controls;
    };

    ngOnInit() { 
      this.parent.valueChanges.subscribe(data => this.onValueChanged(data)); 
      // this.onValueChanged();
     }

    onValueChanged = (data?: any) => {

        if (!this.parent) { return; }

        const form = this.parent;
        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control.dirty && control.hasError('email')) {
                const messages = this.validationMessages[field];
                this.formErrors[field] = messages[field];
            }
            else if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] = messages[key];
                }
            }
        }
    }
    
    // ⇣⇣ add onCancel fn ⇣⇣ 
    onCancel(event: Event) {
        this.cancelled.emit(event);
    }
}
```


##### En `contact-fields.component.html` adicionamos el evento Click que le informará al padre que el formulario fue cancelado

```
<div class="container" [formGroup]="parent">
    <div class="row mt-5">
        <div class="col">
            <h1 class="text-center text-danger">
                CONTACT US
            </h1>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="form-group" [class.has-danger]="formErrors.name">
                <label for="name">Name</label>
                <input type="text" class="form-control custom-input" name="name" placeholder="Name" formControlName="name">
                <div class="form-control-feedback" *ngIf="formErrors.name">{{formErrors.name}}</div>
            </div>
        </div>
        <div class="col">
            <div class="form-group" [class.has-danger]="formErrors.email">
                <label for="email">Email</label>
                <input type="email" class="form-control custom-input" name="email" placeholder="Email" formControlName="email">
                <div class="form-control-feedback" *ngIf="formErrors.email">{{formErrors.email}}</div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="form-group" formArrayName="purpose">
                <legend class="col-form-legend">What's this all about?</legend>
                <div class="form-check form-check-inline" *ngFor="let porp of purpose; let i = index;" [formGroupName]="i">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" formControlName="selected">
                        {{porp.value.name}}
                    </label>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="form-group" [class.has-danger]="formErrors.subject">
                <label for="select">Subject</label>
                <select class="form-control custom-input" formControlName="subject">
                    <option value="">Select</option>
                    <option *ngFor="let sub of subjects; let i = index;" >{{sub}}</option>
                </select>
                   <div class="form-control-feedback" *ngIf="formErrors.subject">{{formErrors.subject}}</div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="form-group">
                <label for="textarea">Message</label>
                <textarea class="form-control custom-input" name="textarea" rows="3" formControlName="message"></textarea>
            </div>
        </div>
    </div>
    <div class="row mt-5 pb-5">
        <div class="col">
            <div class="text-center">
                <!-- ⇣⇣ click event ⇣⇣ -->
                <button type="button" class="btn btn-danger" (click)="onCancel($event)">Cancel</button>
                <button type="submit" class="btn btn-primary" [disabled]="!parent.valid">Enviar</button>
            </div>
        </div>
    </div>
</div>
```


##### En `contact.component.html` recibimos el evento y le asociamos la funcion `resetForm()` que habiamos creado para limpiar los campos del formulario

```
<div class="container-fluid">
    <button type="button" class="ml-4 mt-3 btn btn-danger" aria-label="Close" (click)="toggleTempDisplay()">Form Object</button>
    <div class="mt-2 formDataDisplay" [hidden]="tempDisplay">
        <p>Form status: {{tallerForm.status}}</p>
        <p>Form: {{tallerForm.value | json}}</p>
    </div>
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
    <div class="mt-5">
        <form novalidate [formGroup]="tallerForm" (ngSubmit)="submitted()">
            <!-- ⇣⇣ recieve cancelled event ⇣⇣ -->
            <vp-contact-fields [parent]="tallerForm" [subjects]="subjects" (cancelled)="resetForm($event)"></vp-contact-fields>
         </form>
    </div>
</div>
```
##### Tambien tenemos la posibilidad de escuchar los cambios del modelo directamente desde el smart componentEn. Vamos a `contact.component.ts` y adicionamos una funcion que escuchara los cambios

>Angular calls ngOnChanges when the user updates a control
>These are properties, such as valueChanges, that return an RxJS Observable. You don't need to know much about RxJS Observable to monitor form control values.

```
/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { TallerService } from 'app/services/taller.service'; 
import { subjectConst, namePattern } from './../../model/data-constants';

@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contactContent: any;
    tallerForm: FormGroup;
    subjects: String[] = subjectConst;
    tempDisplay: boolean = true;
    namePattern = namePattern;

    constructor(private router: Router, private tallerService: TallerService, private fb: FormBuilder) { }

    ngOnInit() {
      this.getData();
      this.createForm();
      this.listenFormChanges(); // <---- call listenFormChanges() at ngOnInit
     }
    
    getData = () => {
        let serviceData = this.tallerService.getFormContent();
        serviceData.subscribe((data) => {
            if (data) {
                console.log(data);
                this.contactContent = data;
            }
        });
    }

    createForm = () => {
      this.tallerForm = this.fb.group({
          name: ['', [Validators.pattern(new RegExp(this.namePattern))]],
          email:  ['', [Validators.required, Validators.email]],
          message: '',
          purpose: this.setPurpose(),
          subject: ['', Validators.required]
      })
    }

    setPurpose = () => {
      let porpuseFormArray = this.fb.array([
            this.fb.group({ id: 0, selected: false, name: 'Say Hello' }),
            this.fb.group({ id: 1, selected: false, name: 'Complain' })
        ])
        return porpuseFormArray;
    }

    toggleTempDisplay = () => {
        this.tempDisplay = this.tempDisplay ? false: true;
    }

    back() {
      this.router.navigate(['welcome']);
    }

    submitted = () => {
        console.log('Form submitted!!', this.tallerForm.value);
        this.resetForm();
    }

    resetForm = () => {
        this.tallerForm.reset({
            name: '',
            email: '',
            message: '',
            purpose: [{ id: 0, selected: false, name: 'Say Hello' }, { id: 1, selected: false, name: 'Complain' }],
            subject: ''
        });
    }
    
    // ⇣⇣ add listenFormChanges fn ⇣⇣ 
    listenFormChanges = ()=> {
        this.tallerForm.valueChanges.subscribe((newForm:FormGroup)=>{
            console.log('Form Changed!!', newForm);
        });
    }
}
```


##### Accessing Child Component Classes. @ViewChild and @ViewChildren

>The @ViewChild and @ViewChildren decorators provide access to the class of child component from the containing component.
>The @ViewChild is a decorator function that takes the name of a component class as its input and finds its selector in the template of the containing component to bind to. @ViewChild can also be passed a template reference variable.


<https://embed.plnkr.co/TovrRFke9NrsCKPYE57m/>


##### Style Guide

<https://angular.io/guide/styleguide>



*`More detail:`*

<https://angular.io/guide/lifecycle-hooks#lifecycle-sequence>
<https://angular-2-training-book.rangle.io/handout/advanced-components/component_lifecycle.html>
<https://toddmotto.com/angular-2-forms-reactive>
<https://angular-2-training-book.rangle.io/handout/forms/template-driven/template-driven_forms.html>
