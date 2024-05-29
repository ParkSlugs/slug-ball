export enum Gender {
    Male = 0,
    Female,
    NonBinary
}

export namespace Gender {
    export function getDescription(gender?: Gender): string | undefined {
        switch(gender) {
            case Gender.Male:
                return 'Male';
            case Gender.Female:
                return 'Female';
            case Gender.NonBinary:
                return 'Non-Binary';
            default:
                return undefined;
        }
    }
}