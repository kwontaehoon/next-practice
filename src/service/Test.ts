import { client } from ".";

const ACCOUNT_URL = {
    info: "/api/info"
}

// 내 정보
export const getTest = (params:object) => { console.log(params); return client(ACCOUNT_URL.info, { params: params })};