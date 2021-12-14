import { OfferStatusEnum } from './offerStatusEnum';
import { RemoteData } from './remoteData';
export declare class Offer {
    'id'?: string;
    'remoteId'?: string | null;
    'application'?: string | null;
    'creator'?: string | null;
    'remoteCreatedAt'?: Date | null;
    'closedAt'?: Date | null;
    'sentAt'?: Date | null;
    'startDate'?: Date | null;
    'status'?: OfferStatusEnum | null;
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
