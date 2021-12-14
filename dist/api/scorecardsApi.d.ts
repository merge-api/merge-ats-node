/// <reference types="node" />
import http from 'http';
import { PaginatedScorecardList } from '../model/paginatedScorecardList';
import { Scorecard } from '../model/scorecard';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ScorecardsApiApiKeys {
    tokenAuth = 0
}
export declare class ScorecardsApi {
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
    setApiKey(key: ScorecardsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    scorecardsList(xAccountToken: string, applicationId?: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, expand?: 'application' | 'application,interview' | 'application,interview,interviewer' | 'application,interviewer' | 'interview' | 'interview,interviewer' | 'interviewer', includeRemoteData?: boolean, interviewId?: string, interviewerId?: string, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedScorecardList;
    }>;
    scorecardsRetrieve(xAccountToken: string, id: string, expand?: 'application' | 'application,interview' | 'application,interview,interviewer' | 'application,interviewer' | 'interview' | 'interview,interviewer' | 'interviewer', includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Scorecard;
    }>;
}
