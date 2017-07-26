/*tslint:disable*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

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
        this.onValueChanged();
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

    onCancel(event: Event) {
        this.cancelled.emit(event);
    }
}
