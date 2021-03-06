export declare class PatchedApplicationRequest {
    'remoteId'?: string | null;
    'candidate'?: string | null;
    'job'?: string | null;
    'appliedAt'?: Date | null;
    'rejectedAt'?: Date | null;
    'source'?: string | null;
    'creditedTo'?: string | null;
    'currentStage'?: string | null;
    'rejectReason'?: string | null;
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
