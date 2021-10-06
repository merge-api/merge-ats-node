import { RemoteData } from './remoteData';
export declare class Application {
    'id'?: string;
    'remote_id'?: string | null;
    'candidate'?: string | null;
    'job'?: string | null;
    'applied_at'?: Date | null;
    'rejected_at'?: Date | null;
    'source'?: string | null;
    'credited_to'?: string | null;
    'current_stage'?: string | null;
    'reject_reason'?: string | null;
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
