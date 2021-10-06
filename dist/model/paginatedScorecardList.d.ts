import { Scorecard } from './scorecard';
export declare class PaginatedScorecardList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Scorecard>;
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
