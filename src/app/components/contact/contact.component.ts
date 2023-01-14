import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
})
export class ContactComponent {
    contactForm: FormGroup

    constructor() {}

    ngOnInit(): void {
        this.contactForm = new FormGroup({
            first_name: new FormControl(''),
            last_name: new FormControl(''),
            email: new FormControl(''),
            phone: new FormControl(''),
            message: new FormControl(''),
        })
    }

    submitContact() {
        console.log(this.contactForm.value)
    }
}
