import { Tag } from './tag';
export declare class PaginatedTagList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Tag>;
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
