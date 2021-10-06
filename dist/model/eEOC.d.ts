import { DisabilityStatusEnum } from './disabilityStatusEnum';
import { GenderEnum } from './genderEnum';
import { RaceEnum } from './raceEnum';
import { RemoteData } from './remoteData';
import { VeteranStatusEnum } from './veteranStatusEnum';
export declare class EEOC {
    'id'?: string;
    'remote_id'?: string | null;
    'candidate'?: string | null;
    'submitted_at'?: Date | null;
    'race'?: RaceEnum | null;
    'gender'?: GenderEnum | null;
    'veteran_status'?: VeteranStatusEnum | null;
    'disability_status'?: DisabilityStatusEnum | null;
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
