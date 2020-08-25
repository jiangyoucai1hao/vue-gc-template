import http from '@/api/public'

let baseUrl = process.env.BASE_ROOT_URL;
let group = process.env.BASE_GROUP;
let version = process.env.BASE_VERSION;

export const getUserInfo = function(params){
    // return http.fetchPost(baseUrl + "/api/user/getUserInfo?group="+group+"&version="+version, params);
  return null;
}

