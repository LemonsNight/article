// 网络发送请求
import { URL } from "./api.js"
import Vue from "vue"
function RequestUrl(Url){
    if(process.env.NODE_ENV==="development"){
        Vue.prototype.RequireUrl = URL.DevUrl
    }else {
        Vue.prototype.RequireUrl = URL.ProUrl
    }
    let res = fetch(`${Vue.prototype.RequireUrl}${Url}`, {
        "method": "POST",
    }).then(response => response.json());
    return res
}
export { RequestUrl }