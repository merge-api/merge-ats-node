import { DisabilityStatusEnum } from './disabilityStatusEnum';
import { GenderEnum } from './genderEnum';
import { RaceEnum } from './raceEnum';
import { RemoteData } from './remoteData';
import { VeteranStatusEnum } from './veteranStatusEnum';
export declare class EEOC {
    'id'?: string;
    'remoteId'?: string | null;
    'candidate'?: string | null;
    'submittedAt'?: Date | null;
    'race'?: RaceEnum | null;
    'gender'?: GenderEnum | null;
    'veteranStatus'?: VeteranStatusEnum | null;
    'disabilityStatus'?: DisabilityStatusEnum | null;
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
