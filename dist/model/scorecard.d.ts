import { OverallRecommendationEnum } from './overallRecommendationEnum';
import { RemoteData } from './remoteData';
export declare class Scorecard {
    'id'?: string;
    'remoteId'?: string | null;
    'application'?: string | null;
    'interview'?: string | null;
    'interviewer'?: string | null;
    'remoteCreatedAt'?: Date | null;
    'submittedAt'?: Date | null;
    'overallRecommendation'?: OverallRecommendationEnum | null;
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
