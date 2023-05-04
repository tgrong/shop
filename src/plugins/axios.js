import axios from "axios";

axios.defaults.baseURL="http://rttop.cn/api";
axios.defaults.timeout=2000;

const request = axios.create({
    baseURL: "http://rttop.cn/api",
    timeout: 2000,
    // url: "/",
    // method: "POST",
    // transformRequest: [(data, headers) => {
    //     console.log(data, headers)
    // }],
    // transformResponse: [(data) => {
    //     console.log(data)
    // }],
    // headers: {},
    // params: {
    //     id: 123
    // },
    // data: {
    //     firstName: "tao"
    // },
    // responseType: "json",
    // responseEncoding: "utf8",
    // onUploadProgress: (progressevent => {
    //     console.log(progressevent)
    // }),
    // onDownloadProgress: (progressevent => {
    //     console.log(progressevent)
    // }),
    // maxBodyLength: 2000,
    // maxContentLength: 2000
})

request.defaults.timeout=3000;

export default request;

// const post = (url, data) => {
//     return request.post(url, data)
// }

// const get = (url, data) => {
//     return request.get(url, {
//         params: data
//     })
// }

// export {
//     post, get
// }