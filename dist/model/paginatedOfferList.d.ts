import { Offer } from './offer';
export declare class PaginatedOfferList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Offer>;
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
