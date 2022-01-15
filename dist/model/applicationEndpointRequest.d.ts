import { ApplicationRequest } from './applicationRequest';
export declare class ApplicationEndpointRequest {
    'model': ApplicationRequest;
    'remoteUserId': string;
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
