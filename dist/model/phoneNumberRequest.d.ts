import { PhoneNumberTypeEnum } from './phoneNumberTypeEnum';
export declare class PhoneNumberRequest {
    'value'?: string | null;
    'phoneNumberType'?: PhoneNumberTypeEnum | null;
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
