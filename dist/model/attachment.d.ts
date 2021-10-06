import { AttachmentTypeEnum } from './attachmentTypeEnum';
import { RemoteData } from './remoteData';
export declare class Attachment {
    'id'?: string;
    'remote_id'?: string | null;
    'file_name'?: string | null;
    'file_url'?: string | null;
    'candidate'?: string | null;
    'attachment_type'?: AttachmentTypeEnum | null;
    'remote_data'?: Array<RemoteData> | null;
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
