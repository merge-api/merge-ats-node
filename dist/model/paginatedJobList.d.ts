import { Job } from './job';
export declare class PaginatedJobList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Job>;
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
