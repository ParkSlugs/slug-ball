import { Entity } from "src/app/core/models/entity.model";
import { Gender } from "../enums";

export class User extends Entity {
    userName: string | undefined;
    firstName: string | undefined; 
    surname: string | undefined; 
    password: string | undefined; 
    mumsName: string | undefined; 
	dateOfBirth: Date | undefined; 
    email: string | undefined;
    gender: Gender | undefined;
}

