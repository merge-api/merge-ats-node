import { Application } from './application';
import { ValidationProblem } from './validationProblem';
export declare class ApplicationResponse {
    'errors': Array<ValidationProblem>;
    'warnings': Array<ValidationProblem>;
    'model': Application;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
