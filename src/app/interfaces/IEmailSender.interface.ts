export interface IEmailSender {
    subject: string;
    body: string;
    toEmails: Array<string>;
    attachmentsFiles: Array<IAttachMentsFiles>;
}

export interface IAttachMentsFiles {
    file: string;
    name: string;
    ext: string;
}