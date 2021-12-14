import { ActivityTypeEnum } from './activityTypeEnum';
import { RemoteData } from './remoteData';
import { VisibilityEnum } from './visibilityEnum';
export declare class Activity {
    'id'?: string;
    'remoteId'?: string | null;
    'user'?: string | null;
    'remoteCreatedAt'?: Date | null;
    'activityType'?: ActivityTypeEnum | null;
    'subject'?: string | null;
    'body'?: string | null;
    'visibility'?: VisibilityEnum | null;
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
