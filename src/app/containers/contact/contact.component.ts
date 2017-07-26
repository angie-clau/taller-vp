/*tslint:disable*/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { TallerService } from './../../services/taller.service';
import { subjectConst, namePattern } from './../../model/data-constants';


@Component({
    selector: 'vp-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
    contactContent: any
    tallerForm: FormGroup;
    subjects: String[] = subjectConst;
    tempDisplay: boolean = true;
    namePattern = namePattern;

    constructor(private router: Router, private fb: FormBuilder, private tallerService: TallerService) { }

    ngOnInit() {
        this.getData();
        this.createForm();
        this.listenFormChanges();
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
            name: ['', [Validators.required, Validators.pattern(new RegExp(this.namePattern))]], //validates letters and space
            email: ['', [Validators.required, Validators.email]],
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
        this.tempDisplay = this.tempDisplay ? false : true;
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

    back = () => {
        this.router.navigate(['welcome']);
    }

    listenFormChanges = () => {
        this.tallerForm.valueChanges.subscribe((newForm: FormGroup) => {
            console.log('Form Changed!!', newForm);
        });
    }
}
