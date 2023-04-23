import { API_BASE_URL } from "../api-config";
import axios from "axios";

export function call(api, method, request) {
    let options = {
        headers: new Headers({ "Content-Type": "application/json" }),
        url: API_BASE_URL + api,
        method: method,
    };

    if (request) {
        options.body = JSON.stringify(request);
    }

    console.log("options => " + JSON.stringify(options));

    return fetch(options.url, options)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log(res.status);
            }
        })
        .catch((err) => {
            console.log("http error : " + err);
        });

    // return axios({ options })
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch()
    //     .finally();
}
