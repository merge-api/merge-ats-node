import { Office } from './office';
export declare class PaginatedOfficeList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Office>;
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
