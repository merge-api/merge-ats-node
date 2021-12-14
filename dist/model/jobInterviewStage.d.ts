import { RemoteData } from './remoteData';
export declare class JobInterviewStage {
    'id'?: string;
    'remoteId'?: string | null;
    'name'?: string | null;
    'job'?: string | null;
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
