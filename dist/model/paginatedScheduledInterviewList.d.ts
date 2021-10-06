import { ScheduledInterview } from './scheduledInterview';
export declare class PaginatedScheduledInterviewList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<ScheduledInterview>;
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
