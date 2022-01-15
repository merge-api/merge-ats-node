import { Candidate } from './candidate';
import { ValidationProblem } from './validationProblem';
export declare class CandidateResponse {
    'errors': Array<ValidationProblem>;
    'warnings': Array<ValidationProblem>;
    'model': Candidate;
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
