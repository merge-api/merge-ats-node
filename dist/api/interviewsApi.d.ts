/// <reference types="node" />
import http from 'http';
import { PaginatedScheduledInterviewList } from '../model/paginatedScheduledInterviewList';
import { ScheduledInterview } from '../model/scheduledInterview';
import { ScheduledInterviewRequest } from '../model/scheduledInterviewRequest';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum InterviewsApiApiKeys {
    tokenAuth = 0
}
export declare class InterviewsApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        tokenAuth: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InterviewsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    interviewsCreate(xAccountToken: string, remoteUserId?: string, runAsync?: boolean, scheduledInterviewRequest?: ScheduledInterviewRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ScheduledInterview;
    }>;
    interviewsList(xAccountToken: string, applicationId?: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, expand?: 'application' | 'application,job_interview_stage' | 'interviewers' | 'interviewers,application' | 'interviewers,application,job_interview_stage' | 'interviewers,job_interview_stage' | 'interviewers,organizer' | 'interviewers,organizer,application' | 'interviewers,organizer,application,job_interview_stage' | 'interviewers,organizer,job_interview_stage' | 'job_interview_stage' | 'organizer' | 'organizer,application' | 'organizer,application,job_interview_stage' | 'organizer,job_interview_stage', includeRemoteData?: boolean, jobInterviewStageId?: string, modifiedAfter?: Date, modifiedBefore?: Date, organizerId?: string, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedScheduledInterviewList;
    }>;
    interviewsRetrieve(xAccountToken: string, id: string, expand?: 'application' | 'application,job_interview_stage' | 'interviewers' | 'interviewers,application' | 'interviewers,application,job_interview_stage' | 'interviewers,job_interview_stage' | 'interviewers,organizer' | 'interviewers,organizer,application' | 'interviewers,organizer,application,job_interview_stage' | 'interviewers,organizer,job_interview_stage' | 'job_interview_stage' | 'organizer' | 'organizer,application' | 'organizer,application,job_interview_stage' | 'organizer,job_interview_stage', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ScheduledInterview;
    }>;
}
