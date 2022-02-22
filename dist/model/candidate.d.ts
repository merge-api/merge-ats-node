import { EmailAddress } from './emailAddress';
import { PhoneNumber } from './phoneNumber';
import { RemoteData } from './remoteData';
import { Url } from './url';
export declare class Candidate {
    'id'?: string;
    'remoteId'?: string | null;
    'firstName'?: string | null;
    'lastName'?: string | null;
    'company'?: string | null;
    'title'?: string | null;
    'remoteCreatedAt'?: Date | null;
    'remoteUpdatedAt'?: Date | null;
    'lastInteractionAt'?: Date | null;
    'isPrivate'?: boolean | null;
    'canEmail'?: boolean | null;
    'locations'?: Array<string> | null;
    'phoneNumbers'?: Array<PhoneNumber>;
    'emailAddresses'?: Array<EmailAddress>;
    'urls'?: Array<Url>;
    'tags'?: Array<string>;
    'applications'?: Array<string>;
    'attachments'?: Array<string>;
    'remoteData'?: Array<RemoteData> | null;
    'customFields'?: {
        [key: string]: any;
    } | null;
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
