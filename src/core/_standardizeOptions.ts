import {ConstructorOptions} from "../interfaces/ConstructorOptions"
import {IMAPConnection} from "../interfaces/IMAPConnection"


export const _standardizeOptions = (options: ConstructorOptions): IMAPConnection => {
    return {
        host: '',
        secure: true,
        port: 933,
        auth: {
            user: '',
            pass: ''
        }
    }
}

