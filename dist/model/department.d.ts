import { RemoteData } from './remoteData';
export declare class Department {
    'id'?: string;
    'remote_id'?: string | null;
    'name'?: string | null;
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
