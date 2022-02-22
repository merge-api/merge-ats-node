"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./accountDetailsApi"), exports);
var accountDetailsApi_1 = require("./accountDetailsApi");
__exportStar(require("./accountTokenApi"), exports);
var accountTokenApi_1 = require("./accountTokenApi");
__exportStar(require("./activitiesApi"), exports);
var activitiesApi_1 = require("./activitiesApi");
__exportStar(require("./applicationsApi"), exports);
var applicationsApi_1 = require("./applicationsApi");
__exportStar(require("./attachmentsApi"), exports);
var attachmentsApi_1 = require("./attachmentsApi");
__exportStar(require("./availableActionsApi"), exports);
var availableActionsApi_1 = require("./availableActionsApi");
__exportStar(require("./candidatesApi"), exports);
var candidatesApi_1 = require("./candidatesApi");
__exportStar(require("./deleteAccountApi"), exports);
var deleteAccountApi_1 = require("./deleteAccountApi");
__exportStar(require("./departmentsApi"), exports);
var departmentsApi_1 = require("./departmentsApi");
__exportStar(require("./eeocsApi"), exports);
var eeocsApi_1 = require("./eeocsApi");
__exportStar(require("./generateKeyApi"), exports);
var generateKeyApi_1 = require("./generateKeyApi");
__exportStar(require("./interviewsApi"), exports);
var interviewsApi_1 = require("./interviewsApi");
__exportStar(require("./issuesApi"), exports);
var issuesApi_1 = require("./issuesApi");
__exportStar(require("./jobInterviewStagesApi"), exports);
var jobInterviewStagesApi_1 = require("./jobInterviewStagesApi");
__exportStar(require("./jobsApi"), exports);
var jobsApi_1 = require("./jobsApi");
__exportStar(require("./linkTokenApi"), exports);
var linkTokenApi_1 = require("./linkTokenApi");
__exportStar(require("./linkedAccountsApi"), exports);
var linkedAccountsApi_1 = require("./linkedAccountsApi");
__exportStar(require("./offersApi"), exports);
var offersApi_1 = require("./offersApi");
__exportStar(require("./officesApi"), exports);
var officesApi_1 = require("./officesApi");
__exportStar(require("./passthroughApi"), exports);
var passthroughApi_1 = require("./passthroughApi");
__exportStar(require("./regenerateKeyApi"), exports);
var regenerateKeyApi_1 = require("./regenerateKeyApi");
__exportStar(require("./rejectReasonsApi"), exports);
var rejectReasonsApi_1 = require("./rejectReasonsApi");
__exportStar(require("./scorecardsApi"), exports);
var scorecardsApi_1 = require("./scorecardsApi");
__exportStar(require("./syncStatusApi"), exports);
var syncStatusApi_1 = require("./syncStatusApi");
__exportStar(require("./tagsApi"), exports);
var tagsApi_1 = require("./tagsApi");
__exportStar(require("./usersApi"), exports);
var usersApi_1 = require("./usersApi");
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [accountDetailsApi_1.AccountDetailsApi, accountTokenApi_1.AccountTokenApi, activitiesApi_1.ActivitiesApi, applicationsApi_1.ApplicationsApi, attachmentsApi_1.AttachmentsApi, availableActionsApi_1.AvailableActionsApi, candidatesApi_1.CandidatesApi, deleteAccountApi_1.DeleteAccountApi, departmentsApi_1.DepartmentsApi, eeocsApi_1.EeocsApi, generateKeyApi_1.GenerateKeyApi, interviewsApi_1.InterviewsApi, issuesApi_1.IssuesApi, jobInterviewStagesApi_1.JobInterviewStagesApi, jobsApi_1.JobsApi, linkTokenApi_1.LinkTokenApi, linkedAccountsApi_1.LinkedAccountsApi, offersApi_1.OffersApi, officesApi_1.OfficesApi, passthroughApi_1.PassthroughApi, regenerateKeyApi_1.RegenerateKeyApi, rejectReasonsApi_1.RejectReasonsApi, scorecardsApi_1.ScorecardsApi, syncStatusApi_1.SyncStatusApi, tagsApi_1.TagsApi, usersApi_1.UsersApi];
//# sourceMappingURL=apis.js.map