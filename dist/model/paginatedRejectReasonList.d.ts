import { RejectReason } from './rejectReason';
export declare class PaginatedRejectReasonList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<RejectReason>;
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
