import { Department } from './department';
export declare class PaginatedDepartmentList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Department>;
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
