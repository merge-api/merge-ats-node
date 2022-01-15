import { Attachment } from './attachment';
import { ValidationProblem } from './validationProblem';
export declare class AttachmentResponse {
    'errors': Array<ValidationProblem>;
    'warnings': Array<ValidationProblem>;
    'model': Attachment;
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
