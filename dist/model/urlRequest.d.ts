import { UrlTypeEnum } from './urlTypeEnum';
export declare class UrlRequest {
    'value'?: string | null;
    'url_type'?: UrlTypeEnum | null;
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
