import { ActivityTypeEnum } from './activityTypeEnum';
import { RemoteData } from './remoteData';
import { VisibilityEnum } from './visibilityEnum';
export declare class Activity {
    'id'?: string;
    'remote_id'?: string | null;
    'user'?: string | null;
    'remote_created_at'?: Date | null;
    'activity_type'?: ActivityTypeEnum | null;
    'subject'?: string | null;
    'body'?: string | null;
    'visibility'?: VisibilityEnum | null;
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
