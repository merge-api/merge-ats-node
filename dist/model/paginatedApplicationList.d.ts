import { Application } from './application';
export declare class PaginatedApplicationList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Application>;
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
