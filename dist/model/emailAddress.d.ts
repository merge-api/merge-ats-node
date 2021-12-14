import { EmailAddressTypeEnum } from './emailAddressTypeEnum';
export declare class EmailAddress {
    'value'?: string | null;
    'emailAddressType'?: EmailAddressTypeEnum | null;
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
