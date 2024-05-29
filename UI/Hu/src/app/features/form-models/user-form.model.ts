import { FormControl } from "@angular/forms";
import { EntityForm } from "src/app/core/models/entity-form.model";

export class UserForm extends EntityForm {
    userName!: FormControl<string | null | undefined>;
    firstName!: FormControl<string | null | undefined>; 
    surname!: FormControl<string | null | undefined>; 
    password!: FormControl<string | null | undefined>; 
    email!: FormControl<string | null | undefined>; 
    mumsName!: FormControl<string | null | undefined>; 
	dateOfBirth!: FormControl<Date | null | undefined>; 
	gender!: FormControl<number | null | undefined>; 
}

