import { AttachmentTypeEnum } from './attachmentTypeEnum';
export declare class AttachmentRequest {
    'remote_id'?: string | null;
    'file_name'?: string | null;
    'file_url'?: string | null;
    'candidate'?: string | null;
    'attachment_type'?: AttachmentTypeEnum | null;
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
