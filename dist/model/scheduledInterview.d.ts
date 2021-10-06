import { RemoteData } from './remoteData';
import { ScheduledInterviewStatusEnum } from './scheduledInterviewStatusEnum';
export declare class ScheduledInterview {
    'id'?: string;
    'remote_id'?: string | null;
    'application'?: string | null;
    'job_interview_stage'?: string | null;
    'organizer'?: string | null;
    'interviewers'?: Array<string>;
    'location'?: string | null;
    'start_at'?: Date | null;
    'end_at'?: Date | null;
    'remote_created_at'?: Date | null;
    'remote_updated_at'?: Date | null;
    'status'?: ScheduledInterviewStatusEnum | null;
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
