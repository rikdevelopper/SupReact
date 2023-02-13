export function sum(a: number, b: number): number {
    return a + b;
}

export function foreach(items: any[], callback: (item: any) => void) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

export function httpOkCall(): Promise<any> {
    return fetch('https://cat-fact.herokuapp.com/facts')
        .then((response) => response.json());
}

export function http400Call(): Promise<any> {
    return fetch('https://cat-fact.herokuapp.com/fac');
}

export interface HttpErrorReponseObject {
    message: string;
    httpStatusCode: number;
}

export function httpCall(url: string): Promise<any> {
    return fetch(url).then(response => {
        if (response.ok) return response.json()
        else if (response.status >= 400 && response.status < 500) {
            return {
                message: '4XX Error',
                httpStatusCode: response.status
            } as HttpErrorReponseObject
        } else if (response.status >= 500 && response.status < 600) {
            return {
                message: '5XX Error',
                httpStatusCode: response.status
            } as HttpErrorReponseObject
        }
        return response;
    });
}