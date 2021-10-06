import { EmailAddressTypeEnum } from './emailAddressTypeEnum';
export declare class EmailAddress {
    'value'?: string | null;
    'email_address_type'?: EmailAddressTypeEnum | null;
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
