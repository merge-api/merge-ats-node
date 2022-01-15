import { CategoriesEnum } from './categoriesEnum';
import { ModelOperation } from './modelOperation';
export declare class AccountDetailsAndActionsIntegration {
    'name': string;
    'categories': Array<CategoriesEnum>;
    'image'?: string;
    'squareImage'?: string;
    'color': string;
    'slug': string;
    'passthroughAvailable': boolean;
    'availableModelOperations'?: Array<ModelOperation>;
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
