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
