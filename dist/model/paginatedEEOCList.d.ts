import { EEOC } from './eEOC';
export declare class PaginatedEEOCList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<EEOC>;
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
