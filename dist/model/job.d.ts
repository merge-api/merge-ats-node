import { JobStatusEnum } from './jobStatusEnum';
import { RemoteData } from './remoteData';
export declare class Job {
    'id'?: string;
    'remote_id'?: string | null;
    'name'?: string | null;
    'description'?: string | null;
    'code'?: string | null;
    'status'?: JobStatusEnum | null;
    'remote_created_at'?: Date | null;
    'remote_updated_at'?: Date | null;
    'confidential'?: boolean | null;
    'departments'?: Array<string>;
    'offices'?: Array<string>;
    'hiring_managers'?: Array<string>;
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
