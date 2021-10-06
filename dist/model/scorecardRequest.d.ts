import { OverallRecommendationEnum } from './overallRecommendationEnum';
export declare class ScorecardRequest {
    'remote_id'?: string | null;
    'application'?: string | null;
    'interview'?: string | null;
    'interviewer'?: string | null;
    'remote_created_at'?: Date | null;
    'submitted_at'?: Date | null;
    'overall_recommendation'?: OverallRecommendationEnum | null;
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
