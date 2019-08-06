class Request {
    // static DEFAULT_HEADER = {
    //     'Content-Type':'application/json;charset=UTF-8'
    // }
    async get(path) {
        return this.fetch(path, 
            {
                method: 'GET', 
                headers: {
                    'Content-Type':'application/json;charset=UTF-8'
                }
            }
        )
    }

    fetch(path, params, type = 'json') {
        const stream = weex.requireModule('stream')
        return new Promise((resolve, reject) => {
            stream.fetch({
                method: params.method,
                url: path,
                headers: params.headers,
                type: type,
                body: params.method === 'GET' ? "" : params.body
            }, (response) => {
                if (response.status == 200) {
                    resolve(response)
                } else {
                    reject(response)
                }
            })
        }, (err) => {
            console.log(err)
        })
    }
}

export default new Request()