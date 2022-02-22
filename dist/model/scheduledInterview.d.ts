import { RemoteData } from './remoteData';
import { ScheduledInterviewStatusEnum } from './scheduledInterviewStatusEnum';
export declare class ScheduledInterview {
    'id'?: string;
    'remoteId'?: string | null;
    'application'?: string | null;
    'jobInterviewStage'?: string | null;
    'organizer'?: string | null;
    'interviewers'?: Array<string>;
    'location'?: string | null;
    'startAt'?: Date | null;
    'endAt'?: Date | null;
    'remoteCreatedAt'?: Date | null;
    'remoteUpdatedAt'?: Date | null;
    'status'?: ScheduledInterviewStatusEnum | null;
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
