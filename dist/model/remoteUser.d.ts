import { AccessRoleEnum } from './accessRoleEnum';
import { RemoteData } from './remoteData';
export declare class RemoteUser {
    'id'?: string;
    'remoteId'?: string | null;
    'firstName'?: string | null;
    'lastName'?: string | null;
    'email'?: string | null;
    'disabled'?: boolean | null;
    'remoteCreatedAt'?: Date | null;
    'accessRole'?: AccessRoleEnum | null;
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
