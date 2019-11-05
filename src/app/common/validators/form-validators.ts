import { ValidatorFn, AbstractControl } from '@angular/forms';

export class FormCustomValidators {
    static valueSelected(myArray: any[], arrayKey?: string): ValidatorFn {

        return (c: AbstractControl): { [key: string]: boolean } | null => {
            let selectboxValue = c.value;
            arrayKey = arrayKey || 'id';
            let pickedOrNot = myArray.filter(alias => alias[arrayKey] == selectboxValue);
            if (pickedOrNot.length > 0) {
                return null;
            } else {
                return { 'match': true };
            }
        }
    }

    static verificationCode(code: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (code == c.value) {
                return null;
            } else {
                return { 'match': true };
            }
        }
    }
}