import { EmailAddress } from './emailAddress';
import { PhoneNumber } from './phoneNumber';
import { RemoteData } from './remoteData';
import { Url } from './url';
export declare class Candidate {
    'id'?: string;
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
    'phone_numbers'?: Array<PhoneNumber>;
    'email_addresses'?: Array<EmailAddress>;
    'urls'?: Array<Url>;
    'tags'?: Array<string>;
    'applications'?: Array<string>;
    'attachments'?: Array<string>;
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
