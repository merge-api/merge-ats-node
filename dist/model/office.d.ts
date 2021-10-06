import { RemoteData } from './remoteData';
export declare class Office {
    'id'?: string;
    'remote_id'?: string | null;
    'name'?: string | null;
    'location'?: string | null;
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
