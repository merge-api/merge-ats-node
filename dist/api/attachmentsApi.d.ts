/// <reference types="node" />
import http from 'http';
import { Attachment } from '../model/attachment';
import { AttachmentRequest } from '../model/attachmentRequest';
import { PaginatedAttachmentList } from '../model/paginatedAttachmentList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AttachmentsApiApiKeys {
    tokenAuth = 0
}
export declare class AttachmentsApi {
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
    setApiKey(key: AttachmentsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    attachmentsCreate(xAccountToken: string, remoteUserId?: string, runAsync?: boolean, attachmentRequest?: AttachmentRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachment;
    }>;
    attachmentsList(xAccountToken: string, candidateId?: string, createdAfter?: Date, createdBefore?: Date, cursor?: string, includeRemoteData?: boolean, modifiedAfter?: Date, modifiedBefore?: Date, pageSize?: number, remoteId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaginatedAttachmentList;
    }>;
    attachmentsRetrieve(xAccountToken: string, id: string, includeRemoteData?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachment;
    }>;
}
