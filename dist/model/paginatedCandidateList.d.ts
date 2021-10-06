import { Candidate } from './candidate';
export declare class PaginatedCandidateList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Candidate>;
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
