
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class AccountValidation {
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

            holder_name: new FormControl('', Validators.required),
            bank_name: new FormControl(),
            account_number: new FormControl('', Validators.required),
            opening_balance: new FormControl('', Validators.required),
            contact_number: new FormControl('', Validators.required),
            bank_address: new FormControl('', Validators.required),
        })
    }
}
