/// <reference types="node" />
export * from './accountDetailsApi';
import { AccountDetailsApi } from './accountDetailsApi';
export * from './accountTokenApi';
import { AccountTokenApi } from './accountTokenApi';
export * from './activitiesApi';
import { ActivitiesApi } from './activitiesApi';
export * from './applicationsApi';
import { ApplicationsApi } from './applicationsApi';
export * from './attachmentsApi';
import { AttachmentsApi } from './attachmentsApi';
export * from './availableActionsApi';
import { AvailableActionsApi } from './availableActionsApi';
export * from './candidatesApi';
import { CandidatesApi } from './candidatesApi';
export * from './deleteAccountApi';
import { DeleteAccountApi } from './deleteAccountApi';
export * from './departmentsApi';
import { DepartmentsApi } from './departmentsApi';
export * from './eeocsApi';
import { EeocsApi } from './eeocsApi';
export * from './generateKeyApi';
import { GenerateKeyApi } from './generateKeyApi';
export * from './interviewsApi';
import { InterviewsApi } from './interviewsApi';
export * from './issuesApi';
import { IssuesApi } from './issuesApi';
export * from './jobInterviewStagesApi';
import { JobInterviewStagesApi } from './jobInterviewStagesApi';
export * from './jobsApi';
import { JobsApi } from './jobsApi';
export * from './linkTokenApi';
import { LinkTokenApi } from './linkTokenApi';
export * from './linkedAccountsApi';
import { LinkedAccountsApi } from './linkedAccountsApi';
export * from './offersApi';
import { OffersApi } from './offersApi';
export * from './officesApi';
import { OfficesApi } from './officesApi';
export * from './passthroughApi';
import { PassthroughApi } from './passthroughApi';
export * from './regenerateKeyApi';
import { RegenerateKeyApi } from './regenerateKeyApi';
export * from './rejectReasonsApi';
import { RejectReasonsApi } from './rejectReasonsApi';
export * from './scorecardsApi';
import { ScorecardsApi } from './scorecardsApi';
export * from './syncStatusApi';
import { SyncStatusApi } from './syncStatusApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export { RequestFile } from '../model/models';
export declare const APIS: (typeof AccountDetailsApi | typeof AccountTokenApi | typeof ActivitiesApi | typeof ApplicationsApi | typeof AttachmentsApi | typeof AvailableActionsApi | typeof CandidatesApi | typeof DeleteAccountApi | typeof DepartmentsApi | typeof EeocsApi | typeof GenerateKeyApi | typeof InterviewsApi | typeof IssuesApi | typeof JobInterviewStagesApi | typeof JobsApi | typeof LinkTokenApi | typeof LinkedAccountsApi | typeof OffersApi | typeof OfficesApi | typeof PassthroughApi | typeof RegenerateKeyApi | typeof RejectReasonsApi | typeof ScorecardsApi | typeof SyncStatusApi | typeof TagsApi | typeof UsersApi)[];
