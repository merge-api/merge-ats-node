import { RemoteData } from './remoteData';
export declare class JobInterviewStage {
    'id'?: string;
    'remote_id'?: string | null;
    'name'?: string | null;
    'job'?: string | null;
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
