import { JobStatusEnum } from './jobStatusEnum';
import { RemoteData } from './remoteData';
export declare class Job {
    'id'?: string;
    'remoteId'?: string | null;
    'name'?: string | null;
    'description'?: string | null;
    'code'?: string | null;
    'status'?: JobStatusEnum | null;
    'remoteCreatedAt'?: Date | null;
    'remoteUpdatedAt'?: Date | null;
    'confidential'?: boolean | null;
    'departments'?: Array<string>;
    'offices'?: Array<string>;
    'hiringManagers'?: Array<string>;
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
