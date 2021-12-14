import { AttachmentTypeEnum } from './attachmentTypeEnum';
export declare class AttachmentRequest {
    'remoteId'?: string | null;
    'fileName'?: string | null;
    'fileUrl'?: string | null;
    'candidate'?: string | null;
    'attachmentType'?: AttachmentTypeEnum | null;
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
