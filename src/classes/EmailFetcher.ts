import {ConstructorOptions} from "../interfaces/ConstructorOptions"
import {EmailObject} from "../interfaces/EmailObject"
import {FetchOptions} from "../interfaces/FetchOptions"
import {_fetchEmails} from "../core/_fetchEmails"
import {IMAPConnection} from "../interfaces/IMAPConnection"
import {_standardizeOptions} from "../core/_standardizeOptions"


export class EmailFetcher {
    private readonly options: IMAPConnection

    constructor(options: ConstructorOptions) {
        this.options = _standardizeOptions(options)
    }

    public async fetch(options?: FetchOptions): Promise<Array<EmailObject>> {
        return _fetchEmails(this.options, options)
    }
}
