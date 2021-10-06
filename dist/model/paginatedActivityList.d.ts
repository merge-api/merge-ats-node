import { Activity } from './activity';
export declare class PaginatedActivityList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Activity>;
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
