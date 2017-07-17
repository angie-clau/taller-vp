## Reglas del taller:

1. Angular y React son muy diferentes

2. Olvida lo que sabes de Angularjs (Angular 1.x)

![alt text](src/assets/img/200w_d.gif)



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

Agregar la siguiente funcion al componente

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
### Veanos como funciona las rutas llamando al componente de contacto.

en el componente importamos el router de angular

```bash
import { Router } from '@angular/router';
```
hacemos referencia a el en el constructor

```bash
constructor(private router: Router) { }
```
creamos la funcion que redirecionara al componente de contacto

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

# Reactive forms:

We know angular 4 has a Lifecycle Hooks. A component has a lifecycle managed by Angular itself. Angular manages creation, rendering, data-bound properties etc. It also offers hooks that allow us to respond to key lifecycle events.

#### Lifecycle-sequence

![alt text](https://angular.io/generated/images/guide/lifecycle-hooks/hooks-in-sequence.png)


#### So, why Reactive Forms?

* Reactive forms is an Angular technique for creating forms in a reactive style
Favors explicit management of the data flowing: In keeping with the reactive paradigm.

* With reactive forms, you create a tree of Angular form control objects in the component class and bind them to native form control elements in the component template.

* One advantage of working with form control objects directly is that value and validity updates are always synchronous and under your control.

* Using reactive form directives does not require you to follow all reactive priniciples, but it does facilitate the reactive programming approach should you choose to use it.


#### Async vs. sync

Reactive forms are synchronous. Template-driven forms are asynchronous. It's a difference that matters.

In reactive forms, you create the entire form control tree in code.

Template-driven forms delegate creation of their form controls to directives. That means you must wait a tick before manipulating any of the controls from within the component class.

The asynchrony of template-driven forms also complicates unit testing.


#### Which is better, reactive or template-driven?

Neither is "better". They're two different architectural paradigms, with their own strengths and weaknesses. Choose the approach that works best for you. You may decide to use both in the same application.

#### Components and Change Detection Strategies

By default Angular 1 (Angularjs) implemented two way data binding, the flow of changes was pretty much chaotic, models were able to change directives, directives were able to change models, directives were able to change other directives and models were able to change other models.

![alt text](https://angular-2-training-book.rangle.io/handout/images/angular1-vs-angular2.jpg)

In Angular the flow of information is unidirectional, even when using ngModel to implement two way data binding, which is only syntactic sugar on top of the unidirectional flow.
changes are guaranteed to propagate unidirectionally. The change detector will traverse each node only once, always starting from the root. That means that a parent component is always checked before its children components.

![alt text](https://image.slidesharecdn.com/angularjscoreconcepts-160322235139/95/angular-2-core-concepts-35-638.jpg?cb=1458691766)

##### There is a better one called OnPush

![alt text](https://image.slidesharecdn.com/angularjscoreconcepts-160322235139/95/angular-2-core-concepts-39-638.jpg?cb=1458691766)

#### What causes a change detection?

![alt text](https://image.slidesharecdn.com/angularjscoreconcepts-160322235139/95/angular-2-core-concepts-43-638.jpg?cb=1458691766)


#### Let's take advantage of this change detection strategy with Smart and Dumb components

![alt text](https://i.imgur.com/hxusLJ2.png)

### Let's create our app components

![alt text](https://image.slidesharecdn.com/angularjscoreconcepts-160322235139/95/angular-2-core-concepts-8-638.jpg?cb=1458691766)

### En el `contact.component.ts` importamos las librerías a utilizar

> contact.component es un smart component

```
/*tslint:disable*/
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
```

```
constructor(private router: Router, private fb: FormBuilder) { }
```


### Creamos el html con los componentes hijos

```
 <div class="container-fluid" *ngIf="tallerForm.controls">
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" aria-label="Close" (click)="back()">
            <span aria-hidden="true">&times;</span>
        </button>
        <!-- Form and fields component  -->
    </div>
    <div class="mt-5">
        <!-- contact-info Component -->
    </div>
</div>
```

### Adicionamos la funcion Back()

```
back = () => {
    this.router.navigate(['welcome']);
}
```

### En `contact-info.component.ts` creamos el html que tendrá la info de la empresa

> contact-info.component es un dumb component

```
<div class="container">
    <div class="row mt-5">
        <div class="col" *ngFor="let info of companyInfo; let i = index;">
            <div class="row d-flex justify-content-center icon mb-4">
                <i class="fa fa-phone text-danger" aria-hidden="true"></i>
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

### Importamos las librerías que necesitamos

```
/*tslint:disable*/
import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
```

### Adicionamos los inputs y el NgOnChange dentro de la clase

> @Input Decorator: pass data from parent to child with input binding
> Detect and act upon changes to input property values with the ngOnChanges() method of the OnChanges lifecycle hook interface

```
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
```

### Creamos el formulario y añadimos el contact-info.component

```
    <div class="mt-5">
        <button type="button" class="close mr-4 closeBtn text-danger" aria-label="Close" (click)="back()">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="mt-5">
        <contact-info></contact-info>
    </div>
```

### Hacemos el llamado al WS.
### En `taller.service.ts` copiamos y reemplazamos el código que hará el llamado al WS

> The HttpModule is not a core NgModule. HttpModule is Angular's optional approach to web access. It exists as a separate add-on module called @angular/http and is shipped in a separate script file as part of the Angular npm package.
> The Angular http.get returns an RxJS Observable. Observables are a powerful way to manage asynchronous data flows.

```
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TallerService {
    constructor(private http: Http) {}

    getFormContent(): Observable < any > {
        return this.http
            .get('/api/contactInfo')
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
}
```


### En `contact.component.ts` importamos el servicio y hacemos el llamado al WS
> RxJS is The Reactive Extensions for JavaScript
>...is a set of libraries to compose asynchronous and event-based programs using observable collections and Array#extras style composition in JavaScript

```
import { TallerService } from './../../services/taller.services';
```

```
constructor(private router: Router, private fb: FormBuilder, private tallerService: TallerService) { }
```

Pero antes creamos la variable que será enviada a child component

```
contactContent: any
```

```
  getData = () => {
        let serviceData = this.tallerService.getFormContent();
        serviceData.subscribe((data) => {
            if (data) {
                this.contactContent = data;
            }
        });
    }
```
Y llamamos la funcion en `ngOnInit`

```
ngOnInit() {
    this.getData();
}
```

### Vamos al `contact.component.html` y le enviamos los datos del WS al componente hijo

> Passing data from parent to child with input binding

```
    <div class="mt-5">
        <contact-info [parent]="tallerForm" [contactContent]="contactContent"></contact-info>
    </div>
```

### Vamos al `contact-info.component.html` mostramos el contenido que llega del WS

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

### Quedando como resultado final:

**`contact-info.component.ts`**
```
/*tslint:disable*/
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
    selector: 'contact-info',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit { //ya
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

### En `contact-fields.component.html` comenzamos a crear el formulario reactivo

```
<div class="container">
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
                <input type="text" class="form-controlt" name="name" placeholder="Name">
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-controlt" name="email" placeholder="Email">
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="form-group">
                <legend class="col-form-legend">What's this all about?</legend>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox">
                        Option
                    </label>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <label for="select">Subject</label>
                <select class="form-controlt">
                    <option value="">Select</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="form-group">
                <label for="textarea">Message</label>
                <textarea class="form-controlt" name="textarea" rows="3"></textarea>
            </div>
        </div>
    </div>
    <div class="row mt-5 pb-5">
        <div class="col">
            <div class="text-center">
                <button type="button" class="btn btn-danger">Cancel</button>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </div>
    </div>
</div>
```

### En `contact.component.ts` creamos el modelo del formulario reactivo

>In Reactive Forms you create the form control model in code. You write the template with form elements and form... directives from the Angular ReactiveFormsModule. At runtime, Angular binds the template elements to your control model based on your instructions.
>we need to ensure that the ReactiveFormsModule was imported in the bootstrap phase of the application module.
>This will give us access to components, directives and providers like FormBuilder, FormGroup, and FormControl
>The FormBuilder class helps reduce repetition and clutter by handling details of control creation for you.

```
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
```

```
tallerForm: FormGroup;
```

```
createForm = () => {
    this.tallerForm = this.fb.group({
        name: [''],
        email: [''],
        message: '',
        purpose: '',
        subject: ['']
    })
}
```

```
ngOnInit() {
    this.getData();
    this.createForm();
}
```

### En `contact.component.ts` creamos el array de opciones para los checkboxes

> Sometimes you need to present an arbitrary number of controls or groups. Use FormArray to present an array of FormGroups
> To work with a FormArray you do the following:
> 1. Define the items (FormControls or FormGroups) in the array.
> 2. Initialize the array with items created from data in the data model.
> 3. Add and remove items as the user requires.

```
setPurpose = () => {
    let porpuseFormArray = this.fb.array([
        this.fb.group({ id: 0, selected: false, name: 'Say Hello' }),
        this.fb.group({ id: 1, selected: false, name: 'Complain' })
    ])
    return porpuseFormArray;
}
```
```
createForm = () => {
    this.tallerForm = this.fb.group({
        name: [''],
        email: [''],
        message: '',
        purpose: this.setPurpose(),
        subject: ['']
    })
}
```
`NOTE`
> When working with Reactive Forms keep in mind that designing the Form structure is everything

> RULE 1: Whenever there is a formControl(smallest entity of a form like an input) with any other basic block like FormControl, FormGroup, FormArray. We have to nest them under a FormGroup.

> RULE 2: Whenever you find yourself saying something like X has many Y, that is when you should know you are looking at a possible FormArray of Y inside X(where X is almost always a FormGroup).


### En `contact.component.ts` vamos a crear el array de opciones para el Subject pero antes creamos una carpeta `Model` y le añadimos un archivo llamado `data-constants.ts`

```
export const subjectConst = [
    'Better than a pumpkin spice latte',
    'There are no deals in this email',
    'Where to Drink Beer Right Now',
    'Look what you did, you little jerk…',
    'Your Butt Will Look Great in These Workout Pants'
]
```

Luego lo importamos en ``contact.component.ts``

```
import { subjectConst, namePattern } from './../../model/data-constants';
```

```
subjects: String[] = subjectConst;
```

### En `contact.component.html` añadimos el componente y le enviamos el modelo y los subjects

> Passing data from parent to child with input binding

```
    <form novalidate>
        <contact-fields [parent]="tallerForm" [subjects]="subjects"></contact-fields>
    </form>
```


### En `contact-fields.component.ts` recibimos los datos

>Intercept input property changes with a setter
>Use an input property setter to intercept and act upon a value from the parent.


```
    private _subjects = [];
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

    ngOnInit() { }
```

### En `contact-fields.component.html` los mostramos


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
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control custom-input" name="name" placeholder="Name" formControlName="name">
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control custom-input" name="email" placeholder="Email" formControlName="email">
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
            <div class="form-group">
                <label for="select">Subject</label>
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

### En `contact.component.html` crearemos un div para visualizar los cambios en el formulario

```
 <button type="button" class="ml-4 mt-3 btn btn-danger" aria-label="Close" (click)="toggleTempDisplay()">Form Object</button>

<div class="mt-2 formDataDisplay" [hidden]="tempDisplay">
    <p>Form status: {{tallerForm.status}}</p>
    <p>Form: {{tallerForm.value | json}}</p>
</div>
```

>myControl.status: the validity of a FormControl. Possible values: VALID, INVALID, PENDING, or DISABLED.

### En `contact.component.ts` añadimos la funcion que mostrará u ocultará el div

```
tempDisplay: boolean = true;
```

```
toggleTempDisplay = () => {
    this.tempDisplay = this.tempDisplay ? false: true;
}
```

### En `data-constants.ts` adicionamos la expresion regular para restringir el nombre del usuario

```
export const namePattern = "^[a-zA-Z ]*$";
```

### En `contact.component.ts` Adicionamos las validaciones al formulario. En `contact.component.ts` adicionaremos las validaciones

> Angular provides many validators out of the box. They can be imported along with the rest of dependencies for procedural forms.
> A FormControl constructor accepts three, optional arguments: the initial data value, an array of validators, and an array of async validators.

```
namePattern = namePattern;
```

```
createForm = () => {
    this.tallerForm = this.fb.group({
        name: ['', [Validators.required, Validators.pattern(new RegExp(this.namePattern))]], //validates letters and space
        email: ['', [Validators.required, Validators.email]],
        message: '',
        purpose: this.setPurpose(),
        subject: ['', Validators.required]
    })
}
```

### En `contact.component.html` adicionaremos los mensajes de error

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
            <div class="form-group" [class.has-danger]="parent.get('name').touched && parent.get('name').hasError('pattern') || parent.get('name').touched &&  parent.get('name').hasError('required')">
                <label for="name">Name</label>
                <input type="text" class="form-control custom-input" [class.form-control-danger]="parent.get('name').dirty && parent.get('name').invalid"
                    name="name" placeholder="Name" formControlName="name">
                <div class="form-control-feedback" *ngIf="parent.get('name').touched && parent.get('name').hasError('pattern')">Sorry, only words and spaces</div>
                <div class="form-control-feedback" *ngIf="parent.get('name').touched && parent.get('name').hasError('required')">Sorry, you can't send the form without your name</div>
            </div>
        </div>
        <div class="col">
            <div class="form-group" [class.has-danger]="parent.get('email').touched && parent.get('email').hasError('email')">
                <label for="email">Email</label>
                <input type="email" class="form-control custom-input" name="email" placeholder="Email" formControlName="email">
                <div class="form-control-feedback" *ngIf="parent.get('email').touched && parent.get('email').hasError('email')">Please enter a valid email address</div>
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
            <div class="form-group" [class.has-danger]="parent.get('subject').touched && parent.get('subject').hasError('required')">
                <label for="select">Subject</label>
                <select class="form-control custom-input" formControlName="subject">
                    <option value="">Select</option>
                    <option *ngFor="let sub of subjects; let i = index;" >{{sub}}</option>
                </select>
                <div class="form-control-feedback" *ngIf="parent.get('subject').touched && parent.get('subject').hasError('required')">Please select a subject</div>
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

```
submitted = () => {
    console.log('Form submitted!!', this.tallerForm.value);
    this.resetForm();

}
```

### Enviamos el formulario. En `contact.component.ts` guardamos los datos

>Clicking a button of type "submit" triggers the ngSubmit event which calls the component's onSubmit method

```
submitted = () => {
    console.log('Form submitted!!', this.tallerForm.value);
    this.resetForm();
}
```
```
resetForm = () => {
    this.tallerForm.reset({
        name: '',
        email: '',
        message: '',
        purpose: [{ id: 0, selected: false, name: 'Say Hello' }, { id: 1, selected: false, name: 'Complain' }],
        subject: ''
    });
}
```

### En `contact.component.html` creamos la funcion que guardara el formulario

```
<form novalidate [formGroup]="tallerForm" (ngSubmit)="submitted()">
    <contact-fields [parent]="tallerForm" [subjects]="subjects" (cancelled)="resetForm($event)"></contact-fields>
</form>
```

### Cancelando el envío del Form. En `contact-info.component.ts` adicionamos el Output decorator:

> Output properties expose event producers, such as EventEmitter objects.


```
    private _subjects = [];
    constructor() { }

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

    ngOnInit() { }

    onCancel(event: Event) {
        this.cancelled.emit(event);
    }
```

### En `contact-info.component.html` adicionamos el evento Click

```
<button type="button" class="btn btn-danger" (click)="onCancel(true)">Cancel</button>
```

### En `contact.component.html` recibimos el evento

```
<form novalidate [formGroup]="tallerForm" (ngSubmit)="submitted()">
    <contact-fields [parent]="tallerForm" [subjects]="subjects" (cancelled)="resetForm($event)"></contact-fields>
</form>
```

### En `contact.component.ts` podemos escuchar los cambios del formulario

>Angular calls ngOnChanges when the user updates a control
>These are properties, such as valueChanges, that return an RxJS Observable. You don't need to know much about RxJS Observable to monitor form control values.

```
listenFormChanges = ()=> {
    this.tallerForm.valueChanges.subscribe((newForm:FormGroup)=>{
        // console.log('Form Changed!!', newForm);
    });
}
```

```
ngOnInit() {
    this.getData();
    this.createForm();
    this.listenFormChanges();
}
```


### Accessing Child Component Classes. @ViewChild and @ViewChildren

>The @ViewChild and @ViewChildren decorators provide access to the class of child component from the containing component.
>The @ViewChild is a decorator function that takes the name of a component class as its input and finds its selector in the template of the containing component to bind to. @ViewChild can also be passed a template reference variable.


<https://embed.plnkr.co/TovrRFke9NrsCKPYE57m/>


### Style Guide

<https://angular.io/guide/styleguide>



*`More detail:`*

https://angular.io/guide/lifecycle-hooks#lifecycle-sequence
https://angular-2-training-book.rangle.io/handout/advanced-components/component_lifecycle.html
