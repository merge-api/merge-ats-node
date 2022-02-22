import { AttachmentTypeEnum } from './attachmentTypeEnum';
import { RemoteData } from './remoteData';
export declare class Attachment {
    'id'?: string;
    'remoteId'?: string | null;
    'fileName'?: string | null;
    'fileUrl'?: string | null;
    'candidate'?: string | null;
    'attachmentType'?: AttachmentTypeEnum | null;
    'remoteData'?: Array<RemoteData> | null;
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
