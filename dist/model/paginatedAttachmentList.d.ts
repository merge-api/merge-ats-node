import { Attachment } from './attachment';
export declare class PaginatedAttachmentList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Attachment>;
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
