import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'vp-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
    show = true;
    constructor(private router: Router) { }

    ngOnInit() {
    }

    contact = () => {
        this.router.navigate(['contact']);
    }
}
