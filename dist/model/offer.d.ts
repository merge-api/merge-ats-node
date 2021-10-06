import { OfferStatusEnum } from './offerStatusEnum';
import { RemoteData } from './remoteData';
export declare class Offer {
    'id'?: string;
    'remote_id'?: string | null;
    'application'?: string | null;
    'creator'?: string | null;
    'remote_created_at'?: Date | null;
    'closed_at'?: Date | null;
    'sent_at'?: Date | null;
    'start_date'?: Date | null;
    'status'?: OfferStatusEnum | null;
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
