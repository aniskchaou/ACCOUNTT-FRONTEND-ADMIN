
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class SupplierValidation {
    formGroup: FormGroup;

    public get formGroupInstance(): FormGroup {
        return this.formGroup;
    }

    constructor() {
        this.formGroup = this.createFormGroup()
    }

    public checkValidation() {

        if (this.formGroup.invalid) {
            return false;
        }
        return true;
    }
    createFormGroup() {
        return new FormGroup({

            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
            billing_country: new FormControl('', Validators.required),
            billing_city: new FormControl('', Validators.required),
            billing_zip: new FormControl('', Validators.required),
            shipping_country: new FormControl('', Validators.required),
            shipping_city: new FormControl('', Validators.required),
            shipping_zip: new FormControl('', Validators.required),
        })
    }
}
