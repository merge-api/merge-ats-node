import { JobInterviewStage } from './jobInterviewStage';
export declare class PaginatedJobInterviewStageList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<JobInterviewStage>;
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
