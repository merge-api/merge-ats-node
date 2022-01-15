import { AccountDetailsAndActionsIntegration } from './accountDetailsAndActionsIntegration';
import { AccountDetailsAndActionsStatusEnum } from './accountDetailsAndActionsStatusEnum';
import { CategoryEnum } from './categoryEnum';
export declare class AccountDetailsAndActions {
    'id': string;
    'category'?: CategoryEnum | null;
    'status': AccountDetailsAndActionsStatusEnum | null;
    'statusDetail'?: string;
    'endUserOriginId'?: string;
    'endUserOrganizationName': string;
    'endUserEmailAddress': string;
    'integration'?: AccountDetailsAndActionsIntegration;
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
