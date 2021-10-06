import { RemoteUser } from './remoteUser';
export declare class PaginatedRemoteUserList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<RemoteUser>;
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
