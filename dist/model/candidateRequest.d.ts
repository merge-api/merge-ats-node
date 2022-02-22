import { EmailAddressRequest } from './emailAddressRequest';
import { PhoneNumberRequest } from './phoneNumberRequest';
import { UrlRequest } from './urlRequest';
export declare class CandidateRequest {
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
    'phoneNumbers'?: Array<PhoneNumberRequest>;
    'emailAddresses'?: Array<EmailAddressRequest>;
    'urls'?: Array<UrlRequest>;
    'tags'?: Array<string>;
    'applications'?: Array<string>;
    'attachments'?: Array<string>;
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
