import {EmailObject} from "../interfaces/EmailObject"
import {IMAPConnection} from "../interfaces/IMAPConnection"
import {FetchOptions} from "../interfaces/FetchOptions"


export const _fetchEmails = async (imapConnection: IMAPConnection, options?: FetchOptions): Promise<Array<EmailObject>> => {
    return []
}
