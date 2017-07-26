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

En el `app/app.module.ts` importamos el módulo de las rutas

```bash
import {TallerRoutingModule} from './modules/routing/taller.routing.module';
```

y en la parte de los import de la metadata del módulo agregamos el módulo del routing

```bash
imports: [
    BrowserModule,
    TallerModule,
    TallerRoutingModule
  ]
```

Ahora, en el componete principal hacemos uso de la directiva del routing para cargar el template según las rutas configuradas.

```bash
@Component({
  selector: 'vp-root',
  template: '<router-outlet></router-outlet>'
})
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

1. interpolacion: funciona como en AngularJs. Con las doble llaves podemos mostrar el contenido de variables de nuestro componente o hacer operaciones.

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
### Veamos cómo funcionan las rutas llamando al componente de contacto.

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

Sabemos que angular 4 tiene un Lifecycle Hooks. Un componente tiene un ciclo de vida gestionado por Angular mismo. Angular gestiona la creación, el rendering, las propiedades vinculadas a los datos, etc. También ofrece hooks que nos permiten responder a eventos claves del ciclo de vida.

### Lifecycle-sequence

![alt text](https://angular.io/generated/images/guide/lifecycle-hooks/hooks-in-sequence.png)

### Components and Change Detection Strategies

Por defecto, Angular 1 (Angularjs) implementó two way data binding, el flujo de cambios fue bastante caótico, los modelos fueron capaces de cambiar las directivas, las directivas fueron capaces de cambiar los modelos, las directivas fueron capaces de cambiar otras directivas y los modelos pudieron cambiar otros modelos.

![alt text](https://angular-2-training-book.rangle.io/handout/images/angular1-vs-angular2.jpg)

En Angular el flujo de información es unidireccional, incluso cuando se utiliza ngModel para implementar two way data binding, que es sólo azúcar sintáctico en la parte superior del flujo unidireccional.
En Angular se garantiza que los cambios se propagarán unidireccionalmente. El change detector recorrerá cada nodo sólo una vez, siempre partiendo de la raíz. Esto significa que un componente padre siempre se comprueba antes de que sus componentes hijos.


![alt text](https://image.slidesharecdn.com/angularjscoreconcepts-160322235139/95/angular-2-core-concepts-35-638.jpg?cb=1458691766)

Hay uno diferente llamado OnPush

![alt text](https://image.slidesharecdn.com/angularjscoreconcepts-160322235139/95/angular-2-core-concepts-39-638.jpg?cb=1458691766)

**¿Qué causa change detection?**

![alt text](https://image.slidesharecdn.com/angularjscoreconcepts-160322235139/95/angular-2-core-concepts-43-638.jpg?cb=1458691766)

**Aprovechemos esta estrategia de change detection e implementando Smart y Dumb componentes**

![alt text](https://i.imgur.com/hxusLJ2.png)

### Por lo tanto ¿por qué Reactive Forms?

* Reactive forms son una técnica de Angular para crear formularios con un estilo reactivo
* Favorece el manejo explícito del flujo de datos: De acuerdo con el paradigma reactivo.
* Con reactive forms, se crea un árbol de controles de formularios de Angular en la clase del componente y se enlazan a los controles nativos del formulario en el template del componente.
* Una ventaja de trabajar directamente con los controles del formulario es que las actualizaciones de los datos y las validaciones siempre seran sincrónicas y bajo su control.
* El uso de las directivas de los reactive forms no requiere que se sigan todos los principios reactivos, pero facilita el enfoque de programación reactiva si decide utilizarlo.

**Async vs. sync**

* Los formularios reactivos son síncronos. Template-driven forms son asíncronos. Es una diferencia que importa.
* En formularios reactivos, se crea todo el árbol de controles de formulario en el código.
* Template-driven forms delegan la creación de sus controles de formulario a las directivas. Esto significa que se debe esperar una señal antes de poder manipular cualquiera de los controles desde la clase del componente.
* La asincronía de los Template-driven forms también complica el unit testing.


**¿Cuál es mejor?, reactive or template-driven?**

Ninguno es "mejor". Son dos paradigmas arquitectónicos diferentes, con sus propias fortalezas y debilidades. Elija el enfoque que mejor funcione para usted. Usted puede decidir usar ambos en la misma aplicación.


#### Creando componentes

Comenzamos adicionando los dumb componentes al smart component _`contact.component`_

> Smart component: 
> - Contiene todos los components que no saben qué hacer con sus datos
> - Pasan los datos a los los hijos
> - Se comunican con los servicios
> - Render child componets


En el `contact.component.ts` importamos el módulo del router

> `contact.component` es un smart component

```bash
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


En `contact.component.html` creamos el template que mostrará la información recibida 

```bash
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


En `contact.component.ts` Adicionamos la función _`back()`_ que nos llevará de vuelta al componente _`welcome.component`_

```bash
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


En `contact.component.html` llamamos la función _`back()`_ al hacer click sobre el botón

```bash
<div class="container-fluid">
    <div class="mt-5">
        <!-- ⇣⇣ calling back() on click ⇣⇣-->
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


En `contact.component.html` Adicionamos el primer component hijo _`contact-info.component`_

> `contact-info.component` es un dumb component

```bash
<div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <!-- contact-fields Component -->
    </div>
    <div class="mt-5">
        <!-- ⇣⇣ contact-info.component added ⇣⇣ -->
        <vp-contact-info></vp-contact-info>
    </div>
</div>
```


Ahora vamos a adicionar los controles y las funciónes que recibiran y emitiran los datos en los dumb components

> **Dumb component:**
> - Aceptan datos via Inputs
> - Emiten datos via Outputs


En `contact-info.component.html` creamos el template que mostrará el contenido enviado por el smart component

```bash
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

En `contact-info.component.ts` vamos a recibir los datos enviados por el smart component con el @Input Decorator

> **Component Interaction: Pasar datos de padres a hijos con input binding**
> * Binding a una propiedad @Input: Se denomina propiedad de entrada porque los datos fluyen de la expresión de enlace a la directiva. Sin esos metadata de entrada, Angular rechaza el binding;


En `contact-info.component.ts` importamos los simbolos necesarios del Angular Core

```bash
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


En `contact-info.component.ts` añadimos la propiedad Input 

> @Input Decorator agrega metadata a la clase

```bash
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


En `contact-info.component.ts` interceptamos los cambios de la propiedad Input con _`ngOnChanges()`_

> *ngOnChanges() del OnChanges lifecycle hook, detecta y actúa sobre los cambios en el método values del input property
> * Es posible que prefiera este enfoque al property setter cuando se observa e interactúa con varias propiedades Input.


```bash
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


Creamos una variable _`companyInfo`_ para almacenar el último valor recibido

```bash
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


En `contact-info.component.html` mostramos los datos usando directivas de Angular

> **NgClass and Directives**
> * Existen otros dos tipos de directivas: componentes y attribute directives.
> * Un componente maneja una región de HTML en la forma de un elemento HTML nativo. Técnicamente es una directiva con un template, como NgFor por ejemplo
> * Una attribute directive cambia la apariencia o el comportamiento de un elemento, componente u otra directiva. Por ejemplo, la directiva NgStyle cambia varios estilos de elementos al mismo tiempo.
> * Puede aplicar muchas attribute directives a un elemento host pero sólo se puede aplicar una directiva estructural a un elemento host.
> * Observa cómo estamos utilizando la clase NgClass para añadir y eliminar clases CSS en un elemento HTML.

```bash
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


Para poder obtener los datos en el smart component debemos crear y llamar el WS. Primero adicionamos el módulo HttpClient al `taller.module.ts`

> En versiones inferiores a Angular 4.3.x se usaba el HttpModule, El módulo HttpModule no es core NgModule. HttpModule es el enfoque opcional de Angular para el acceso a la web. Existe como un módulo add-on separado llamado @angular/http y se envía en un archivo de script separado como parte del paquete Angular npm.

> En este taller usaremos el nuevo HttpClient API. Con HttpClient, @angular/common/http proporciona una API simplificada para la funcionalidad HTTP para ser usada en las aplicaciones de Angular, construyendo sobre el XMLHttpRequest una interfaz expuesta por los navegadores. Las ventajas adicionales de HttpClient incluyen el soporte a pruebas, fuerte typing de los objetos request y response, soporte con el interceptor de la petición y de la respuesta, y mejor manejo de errores vía apis basado en Observables.

> Mayor información sobre la diferencias entre ambos [https://github.com/angular/angular/commit/37797e2]

```bash
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


En `taller.service.ts` creamos el servicio

> El http.get de Angular devuelve un RxJS Observable. Los observables son una forma poderosa de administrar los flujos de datos asíncronos.

```bash
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TallerService {
    constructor(private http: HttpClient) {}

    getFormContent(): Observable < any > {
      return this.http
      .get<any>('/api/contactInfo')
    }
}
```


En `taller.module.ts` adicionamos el servio al módulo del taller 

```bash
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


En `contact.component.ts` haremos el llamado al WS y escuchamos el resultado

> * RxJS es ls extension reactiva para JavaScript
> * RxJS es un conjunto de librerías para desarrollar programas asíncronos y basados en eventos utilizando colecciones observables y Array#extras de estilos en JavaScript


```bash
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


Ahora que ya hicimos el llamado al WS y guardamos los datos, vamos al `contact.component.html` y con el Input binding le enviamos los datos del WS al dumb componente _`contact-info.component`_

![alt text](https://angular.io/generated/images/guide/template-syntax/input-output.png)

> Component Interaction: psando datos de padres a hijos con input binding

```bash
<div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <!-- contact-fields Component -->
    </div>
    <div class="mt-5">
        <!-- ⇣⇣ WS data sent trough Input binding ⇣⇣ -->
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
</div>
```


#### Quedando como resultado final:

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

Comenzaremos a crear el Formulario Reactivo. En `taller.module.ts` importamos el módulo de ReactiveForms

> * Debemos asegurarnos de que el módulo ReactiveFormsModule fue importado en la fase bootstrap del módulo de aplicación.
> * Esto nos dará acceso a componentes, directivas y providers como FormBuilder, FormGroup y FormControl

```bash
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


En `contact.component.html` adicionamos el Formulario y el segundo dumb component _`contact-fields.component.html`_

> `contact-info.component` y `contact-fields.component` son dumb components

```bash
<div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <!-- ⇣⇣ contact-fields.component added ⇣⇣ -->
        <vp-contact-fields></vp-contact-fields>
    </div>
    <div class="mt-5">
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
</div>
```


En `contact.component.ts` creamos el modelo de datos del formulario reactivo

> En los formularios reactivos se crea el modelo de los controles del formulario en el código. Se crea el Template con elementos de formularios y formularios desde el ReactiveFormsModule de Angular. En tiempo de ejecución, Angular vincula los elementos del Template a su modelo de controles basado en sus instrucciones.

> Las clases de formularios esenciales son AbstractControl, FormControl, FormGroup y FormArray
> * **AbstractControl** es la clase base abstracta para las tres clases concretas de control de formulario: FormControl, FormGroup y FormArray. Proporciona comportamientos y propiedades comunes, algunos de los cuales son observables.
> * **FormControl** rastrea el valor y el estado de validez de un control individual. Corresponde a un control de formulario HTML, como un input o un select.
> * **FormGroup** rastrea el valor y el estado de validez de un grupo de instancias de AbstractControl. Las propiedades del grupo incluyen sus controles hijos. El formulario de mayor nivel en un componente es FormGroup.
> * La clase FormBuilder ayuda a reducir la repetición y el desorden al manejar los detalles de la creación de los controles.

```bash
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


El campo _`Purpose`_ no es mas que un array de opciones para los checkboxes, en `contact.component.ts` adicionamos la función _`setPurpose()`_ que creará el FormArray

> A veces es necesario presentar un número arbitrario de controles o grupos. Utilice FormArray para presentar una array de FormGroups
> * **FormArray** rastrea el valor y el estado de validez de una array numéricamente indexada de instancias de AbstractControl.

> Para trabajar con un FormArray:
> * Defina los elementos (FormControls o FormGroups) en el array.
> * Inicialice el array con elementos creados a partir de datos en el modelo de datos.
> * Adicionar y quitar elementos como el usuario lo requiera.
> * **FormGroup** rastrea el valor y el estado de validez de un grupo de instancias de AbstractControl. Las propiedades del grupo incluyen sus controles hijos. El formulario de mayor nivel en un componente es FormGroup.


```bash
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


El campo _`Subject`_ es otro array de opciones para el dropdown de Subjects, este array lo vamos a crear en un archivo `data-constants.ts` que importaremos en nuestro componente. Vamos a la carpeta _`Model`_ y le añadimos un archivo llamado `data-constants.ts`. Vamos a `data-constants.ts` y adicionamos el array con los posibles asuntos para el forulario:

```bash
export const subjectConst = [
    'Better than a pumpkin spice latte',
    'There are no deals in this email',
    'Where to Drink Beer Right Now',
    'Look what you did, you little jerk…',
    'Your Butt Will Look Great in These Workout Pants'
]
```


Luego lo importamos y se lo asignamos a la variable que almacenará el objeto en `contact.component.ts` 

```bash
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

`NOTA`
> Cuando se trabajan con Reactive Forms recuerde que el diseño de la estructura del Formulario lo es todo

> **REGLA 1:** Siempre que haya un formControl (entidad más pequeña de un formulario como una input) con cualquier otro bloque básico como un FormControl, FormGroup, FormArray. Tenemos que anidarlos bajo un FormGroup.

> **REGLA 2:** Siempre que te encuentres diciendo algo como X tiene muchos Y, es cuando deberías saber que estás buscando un posible FormArray de Y dentro de X (donde X es casi siempre un FormGroup).



Una vez creado el modelo de datos debemos registrar el formulario adentro del `FormGroup` que hemos creado, nos vamos a `contact.component.html` y lo adicionamos

> Normalmente, si tienen varios FormControls, se deberá registrarlos en un FormGroup principal

```bash
<div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <!-- ⇣⇣ register Form within a parent FormGroup  ⇣⇣ -->
        <form novalidate [formGroup]="tallerForm">
            <vp-contact-fields></vp-contact-fields>
         </form>
    </div>
    <div class="mt-5">
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
</div>
```


Luego de haber creado el modelo y haber registrado el formulario nos comuniacaremos de padre a hijo, por lo tanto vamos a `contact-fields.component.ts` y adicionamos las propiedades que recibiran los datos

> Component Interaction: 
> * Se Pueden interceptar cambios de propiedad input con un setter.
> * Utilice este método para interceptar y actuar sobre un valor del padre.

```bash
/*tslint:disable*/
import { Component, OnInit, Input } from '@angular/core'; // <--- Add Input symbol to the core import
import { FormArray, FormGroup } from '@angular/forms'; // <--- Import Reactive Form symbols

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


En `contact.component.html` enviamos el modelo de datos y el objecto Subjects

> Component Interaction: pasando datos desde el padre al hijo con input binding

```bash
<div class="container-fluid">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" (click)="back()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <form novalidate [formGroup]="tallerForm">
            <!-- ⇣⇣ sending data: tallerForm and subjects  ⇣⇣ -->
            <vp-contact-fields [parent]="tallerForm" [subjects]="subjects"></vp-contact-fields>
         </form>
    </div>
    <div class="mt-5">
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
</div>
```


En `contact-fields.component.html` creamos el template para mostrar los datos del formulario reactivo

> * FormControl es una directiva que le permite crear y administrar directamente una instancia de FormControl.
> * Para que Angular sepa que hay un input que se desea asociar al nombre FormControl en la clase, se necesita [formControl]="modelcontrolname" en el Template en el tag html.
> * Nesting grupos y controles permite reflejar la estructura jerárquica del modelo de datos y ayuda a rastrear la validación y el estado de los conjuntos de controles relacionados.

```bash
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


En Angular tenemos la posibilidad de inspeccionar las propiedades de un formulario. En `contact.component.ts` haremos eso creando un toggle que nos mostrará u ocultará un div con la información del formulario

> Un FormControl se puede inspeccionar dentro de un formulario extrayéndolo con el método _.get()_. También se puede hacer dentro de la clase del componente o mostrarlo en la página agregando la interpolacion {{form.value | json}}

```bash
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


En `contact.component.html` adicionamos los tags que mostrarán los datos del formulario

> También puede comprobar la validez de un FormControl usando _`tallerForm.status`_ Los posibles valores son: VALID, INVALID, PENDING, or DISABLED.

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
        <form novalidate [formGroup]="tallerForm">
            <vp-contact-fields [parent]="tallerForm" [subjects]="subjects"></vp-contact-fields>
         </form>
    </div>
    <div class="mt-5">
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
</div>
```


#### Form Validation.

> Mejorar la calidad general de los datos mediante la validación de la información de los usuarios para su exactitud e integridad.



En este taller haremos 3 tipos de validaciones: _`required`_, _`email`_ y _`pattern`_. Para hacer una validacion con una expresion regular lo que haremos será añadirla a nuestro archivo `data-constants.ts` para restringir los caracteres que se ingresan al campo que guarda el nombre del usuario

> Angular proporciona muchos validadores por defecto. Se pueden importar junto con el resto de dependencias para los procedural forms.

```bash
export const subjectConst = [
    'Better than a pumpkin spice latte',
    'There are no deals in this email',
    'Where to Drink Beer Right Now',
    'Look what you did, you little jerk…',
    'Your Butt Will Look Great in These Workout Pants'
]

export const namePattern = "^[a-zA-Z ]*$"; // <--- export namePattern constant
```


Vamos a `contact.component.ts` y adicionamos la expresion regular que validara nuestro campo `name`

> Un FormControl acepta tres argumentos opcionales: el valor de datos inicial, un array de validaciones y un array de validaciones asíncronas.

```bash
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


En `contact.component.ts` adicionamos las validaciones _`required`_ y _`email`_ en el modelo del formulario 

```bash
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


Una vez adicionadas las validaciones al modelo vamos a tener que mostrar los mensajes de error en el template del formulario, la ventaja de este tipo de formularios es que las validaciones las podemos hacer directamente desde la clase del componente y no desde el Html. Para hacer esto lo que haremos será escuchar los cambios de nuestros controles en el componente hijo `contact-fields.component.ts` usando _`ngOnChanges`_

> El operador safe navigation de Angular (?.) Es una manera fluida y conveniente de protegerse contra valores nulos y no definidos en rutas de propiedad.

```bash
/*tslint:disable*/
import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

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


Despúes de hacer las validaciones en la clase mostraremos y ocultaremos los mensajes en el template `contact-fields.component.html` usando una directiva estructural como NgIf

> * Se puede agregar o quitar elementos del DOM aplicando una directiva NgIf a ese elemento (llamado el elemento host). Vincular la directiva a una expresión de condición
> * Ocultar un elemento es muy diferente a eliminar un elemento con NgIf.
> * Cuando se oculta un elemento, ese elemento y todos sus descendientes permanecen en el DOM. Todos los componentes de esos elementos permanecen en la memoria y Angular puede seguir escuchando sus cambios. Se podría estar desperdiciando recursos considerables y disminuyendo el rendimiento por algo que el usuario no puede ver.
> * Cuando el NgIf es falso, Angular elimina el elemento y sus descendientes del DOM. Destruye sus componentes, potencialmente liberando recursos sustanciales, resultando en una experiencia de usuario más responsable.
> * La técnica show/hide es buena para algunos elementos con pocos hijos.Sed debe ser cuidadoso al ocultar los árboles de componentes grandes; NgIf puede ser la opción más segura.
> * La directiva ngIf se utiliza a menudo para proteger contra null. Mostrar/ocultar es inútil contra null. Angular lanzará un error si una expresión anidada intenta tener acceso a una propiedad null.


```bash
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


#### Enviando el formulario.

En `contact.component.ts` agregamos la función que envia y luego limpia el formulario

> * Al hacer clic sobre un botón de tipo "submit" se activa el evento ngSubmit que llama al método onSubmit del componente
> * La estructura del modelo del formulario y de los datos no tienen que coincidir exactamente. A menudo se presenta un subconjunto del modelo de datos en una pantalla en particular. Pero facilita las cosas si la forma del modelo del formulario se parece a la estructura del modelo de datos.


```bash
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


En `contact.component.html` adicionamos el evento ngSubmit que enviará el formulario

```bash
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
        <!-- ⇣⇣ add ngSubmit event ⇣⇣ -->
        <form novalidate [formGroup]="tallerForm" (ngSubmit)="submitted()">
            <vp-contact-fields [parent]="tallerForm" [subjects]="subjects"></vp-contact-fields>
         </form>
    </div>
    <div class="mt-5">
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
</div>
```


#### Cancelando el envío del Form
En `contact-fields.component.ts` adicionamos el Output decorator:

> **Component interaction, el padre escucha los cambios del hijos**
> * Las propiedad Output expone a los productores de eventos, como los objetos EventEmitter.
> * El componente hijo expone una propiedad EventEmitter con la que emite eventos cuando sucede algo. El padre se une a esa propiedad de evento y reacciona a esos eventos.
> * La propiedad EventEmitter del hijo es una propiedad de salida, normalmente adornada con un @Output decorator

```bash
/*tslint:disable*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // <---- import Output and EventEmitter symbols
import { FormArray, FormGroup } from '@angular/forms';

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


En `contact-fields.component.html` adicionamos el evento Click que le informará al padre que el formulario fue cancelado

```bash
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


En `contact.component.html` recibimos el evento y le asociamos la función _`resetForm()`_ que habíamos creado para limpiar los campos del formulario

```bash
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
        <form novalidate [formGroup]="tallerForm" (ngSubmit)="submitted()">
            <!-- ⇣⇣ recieve cancelled event ⇣⇣ -->
            <vp-contact-fields [parent]="tallerForm" [subjects]="subjects" (cancelled)="resetForm($event)"></vp-contact-fields>
         </form>
    </div>
    <div class="mt-5">
        <vp-contact-info [contactContent]="contactContent"></vp-contact-info>
    </div>
</div>
```
Tambien tenemos la posibilidad de escuchar los cambios del modelo directamente desde el smart component. En `contact.component.ts` adicionamos una función que escuchará los cambios

> * Angular llama ngOnChanges cuando el usuario actualiza un control
> * Estas son propiedades, como valueChanges, que devuelven un RxJS Observable. No es necesario saber mucho sobre RxJS Observable para controlar los valores de control de formulario.

```bash
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


#### Accessing Child Component Classes. @ViewChild and @ViewChildren

> * Los decoradores @ViewChild y @ViewChildren proporcionan acceso a la clase del componente hijo del componente que lo contiene.
> * El @ViewChild es una función decorator que toma el nombre de la clase de un componente como su entrada y encuentra su selector en el Template del componente que lo va a enlazar. @ViewChild también se puede usar como una variable de referencia de un Template

<https://embed.plnkr.co/TovrRFke9NrsCKPYE57m/>


#### Style Guide

<https://angular.io/guide/styleguide>



*`More:`*

<https://angular.io/docs>
<https://angular-2-training-book.rangle.io/handout/advanced-components/component_lifecycle.html>
<https://toddmotto.com/angular-2-forms-reactive>
<https://angular-2-training-book.rangle.io/handout/forms/template-driven/template-driven_forms.html>
