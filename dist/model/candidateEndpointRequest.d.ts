import { CandidateRequest } from './candidateRequest';
export declare class CandidateEndpointRequest {
    'model': CandidateRequest;
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
