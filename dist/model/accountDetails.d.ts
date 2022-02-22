import { CategoryEnum } from './categoryEnum';
export declare class AccountDetails {
    'id'?: string;
    'integration'?: string;
    'category'?: CategoryEnum | null;
    'endUserOriginId'?: string;
    'endUserOrganizationName'?: string;
    'endUserEmailAddress'?: string;
    'status'?: string;
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
