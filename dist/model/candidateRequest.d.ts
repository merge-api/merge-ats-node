import { EmailAddressRequest } from './emailAddressRequest';
import { PhoneNumberRequest } from './phoneNumberRequest';
import { UrlRequest } from './urlRequest';
export declare class CandidateRequest {
    'remote_id'?: string | null;
    'first_name'?: string | null;
    'last_name'?: string | null;
    'company'?: string | null;
    'title'?: string | null;
    'remote_created_at'?: Date | null;
    'remote_updated_at'?: Date | null;
    'last_interaction_at'?: Date | null;
    'is_private'?: boolean | null;
    'can_email'?: boolean | null;
    'locations'?: Array<string> | null;
    'phone_numbers'?: Array<PhoneNumberRequest>;
    'email_addresses'?: Array<EmailAddressRequest>;
    'urls'?: Array<UrlRequest>;
    'tags'?: Array<string>;
    'applications'?: Array<string>;
    'attachments'?: Array<string>;
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
