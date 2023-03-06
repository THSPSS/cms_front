import axios from "axios";
const BASE_PATH = "http://localhost:8080/api";





export async function getBoardLists(limit = 25 , page = 1){
    const response = await axios(`${BASE_PATH}/board?limit=${limit}&page=${page}`)
    return response.data
}


export async function addBoardList({
    name,
    subject,
    content,
}) {
    return await fetch(`${BASE_PATH}/board`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body  : JSON.stringify({
            id : "id",
            name,
            subject,
            content,
            regist_day : Date.now()
        }),
    }).then((response) => response.json());
}

export async function getRecentBoardList() {
    return await fetch(`${BASE_PATH}/board/recent`,{
        method: "GET",
        header: {
            "Content-Type" : "application/json",
        }
    }).then((response) => response.json())
}



export async function getMemberPointRank() {
    return await fetch(`${BASE_PATH}/member/member_point`,{
        method : "GET",
        header: {
            "content-Type" : "application/json",
        }
    }).then((response) => response.json())
}




export async function checkID(id) {
    return await fetch(`${BASE_PATH}/auth/checkid` , {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify({id})
    })
    .then((response) => response.json())
    .then(data => {
        //handled the parsed JSON data here
        return data;
    })

}


export async function registUser({
    id,
    pass,
    name,
    email
}) {
    return await fetch(`${BASE_PATH}/auth/register`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body  : JSON.stringify({
            id ,
            pass,
            name,
            email
        }),
    }).then((response) => response.json());
}

export async function loginUser({
    id,
    pass,
}) {
    return await fetch(`${BASE_PATH}/auth/login`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body  : JSON.stringify({
            id ,
            pass
        }),
    }).then((response) => response.json());
}


export async function getBoardList(num) {
    return await fetch(`${BASE_PATH}/board/${num}`,{
        method: "GET",
        headers : {
            "Content-Type" : "application/json",
        }
    }).then((response) => response.json());
}