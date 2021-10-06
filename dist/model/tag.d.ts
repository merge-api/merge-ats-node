export declare class Tag {
    'remote_id'?: string | null;
    'name'?: string | null;
    'remote_data'?: Array<{
        [key: string]: any;
    }> | null;
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
