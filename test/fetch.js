const {EmailFetcher} = require('../dist')


setImmediate(async () => {
    try {
        const fetch = new EmailFetcher()

        const result = await fetch.fetch({
            auth: {
                user: '',
                password: ''
            }
        })

        console.log('result:', result)
    } catch (error) {
        console.error('ERROR', error)
    }
})

