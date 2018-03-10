async function addOrder(data) {

    let xhr = new XMLHttpRequest();
    let request = new Promise((resolve, reject) => {

        try {
            xhr.open('POST', "https://my-mobile-crm-1331.firebaseio.com/apps/" + token + "/" + id + "/orders.json", false);

            xhr.send(JSON.stringify({ ...data }));

            switch ( xhr.status ) {
                case 200:
                    resolve(JSON.parse(xhr.response));
                    return null;
                case 400:
                    reject(new Error('bad request'));
                    return null;
                case 401:
                    reject(new Error('unauthorized request 401'));
                    return null;
                case 404:
                    reject(new Error('Database was not found'));
                    return null;
                case 500:
                    reject(new Error('The server returned an error. See the error message for further details'));
                    return null;
                case 503:
                    reject(new Error('Service Unavailable'));
                    return null;
                case 412:
                    reject(new Error('Precondition Failed'));
                    return null;
            }
        }

        catch ( e ) {
            throw Error('Unknown error')
        }
    });

    return request;
}

async function getOrders() {

}

function addUser() {

}