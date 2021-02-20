
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class ProductValidation {
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
            description: new FormControl(),
            sale_price: new FormControl('', Validators.required),
            purchase_price: new FormControl('', Validators.required),
            tax_id: new FormControl('', Validators.required),
            category_id: new FormControl('', Validators.required),
            unit_id: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
        })
    }
}
