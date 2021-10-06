import { AccessRoleEnum } from './accessRoleEnum';
import { RemoteData } from './remoteData';
export declare class RemoteUser {
    'id'?: string;
    'remote_id'?: string | null;
    'first_name'?: string | null;
    'last_name'?: string | null;
    'email'?: string | null;
    'disabled'?: boolean | null;
    'remote_created_at'?: Date | null;
    'access_role'?: AccessRoleEnum | null;
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
