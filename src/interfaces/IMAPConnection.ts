export interface IMAPConnection extends Record<string, any> {
    host: string,
    port: number,
    secure: boolean,
    auth: {
        user: string,
        pass: string,
    }
}

