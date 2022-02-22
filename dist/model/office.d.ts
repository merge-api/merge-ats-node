import { RemoteData } from './remoteData';
export declare class Office {
    'id'?: string;
    'remoteId'?: string | null;
    'name'?: string | null;
    'location'?: string | null;
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
