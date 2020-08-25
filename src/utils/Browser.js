// //判断是否是微信浏览器的函数
// function isWeiXinBrowser() {
//
//   //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
//   var ua = window.navigator.userAgent.toLowerCase();
//   let infos = ua.match(/MicroMessenger/i);
//   //通过正则表达式匹配ua中是否含有MicroMessenger字符串
//   if (infos && infos[0] == 'micromessenger') {
//     return true;
//   } else {
//     console.log('非微信登录');
//     return false;
//   }
// }
//
// //判断是否是百度浏览器的函数
// function isBaiduBrowser() {
//
//   //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
//   var ua = window.navigator.userAgent.toLowerCase();
//   let infos = ua.match(/baidu/i);
//   //通过正则表达式匹配ua中是否含有MicroMessenger字符串
//   if (infos && infos[0] == 'baidu') {
//     return true;
//   } else {
//     console.log('非百度登录');
//     return false;
//   }
// }
//
// /**判断是否是PC端 */
// function IsPCBrowser() {
//   var userAgentInfo = navigator.userAgent;
//   var Agents = ["Android", "iPhone",
//               "SymbianOS", "Windows Phone",
//               "iPad", "iPod", "pc"];
//   var flag = true;
//   for (var v = 0; v < Agents.length; v++) {
//       if (userAgentInfo.indexOf(Agents[v]) > 0) {
//           flag = false;
//           break;
//       }
//   }
//   return flag;
// }
//
// //判断是否是手机钉钉
// function isDingDingPhone() {
//   return (dd.env.platform == "android" || dd.env.platform == "ios")
// }
//
// //判断是否是手机钉钉
// function isDingDingPc() {
//   return (dd.env.platform == "pc")
// }
//
// /**
//  * 跳转到登录前访问页面
//  * @param {路由} router
//  */
// import LoginStore from '@/store/loginStore'
// const toHistoryPage = function (router) {
//   let historyPage = LoginStore.getHistoryPage();
//   let historyPageName = LoginStore.getHistoryPageName();
//   let historyPageParams = LoginStore.getHistoryPageParams();
//
//   if (historyPageName && historyPageParams) {
//     router.replace({
//       name: historyPageName,
//       query: historyPageParams.query,
//       params: historyPageParams.params
//     })
//   } else if (historyPage) {
//     window.location.href = historyPage;
//   } else {
//     router.replace({
//       name: 'index'
//     })
//
//   }
//   LoginStore.removeHistoryPage();
//   LoginStore.removeHistoryPageName();
//   LoginStore.removeHistoryPageParams();
// }


import EnvEnum from '@/config/enum/BrowserEnv'

// function setEnv(env) {
//   let ltApp = window.ltApp;
//   if (!ltApp) {
//     ltApp = {};
//   }
//   ltApp.ENV = env;
//   window.ltApp = ltApp;
// }
//
// function getEnv() {
//   let ltApp = window.ltApp;
//   // console.log(window);
//   if (!ltApp) {
//     ltApp = {};
//   }
//   return ltApp.ENV;
// }

/** 初始化当前浏览器环境 */
function initEnv() {
  return new Promise((resolve, reject) => {
    // if(isDingDingPc()){
    //   resolve(EnvEnum.DingDingPc);
    // }else if (isDingDingPhone()) {
    //   resolve(EnvEnum.DingDingPhone);
    // }
    // else if(IsPCBrowser()){
    //   resolve(EnvEnum.PCBrowser);
    // }else {
    //   resolve(EnvEnum.OtherBrowser);
    // }
    resolve(EnvEnum.OtherBrowser);
  })
}

// export const isPcEnv = function(){
//   let env = getEnv();
//   return env.key == EnvEnum.DingDingPc.key || env.key == EnvEnum.PCBrowser.key;
// }

export default {
  // isWeiXinBrowser,
  // isBaiduBrowser,
  // toHistoryPage,
  // EnvEnum,
  // getEnv,
  // setEnv,
  initEnv,
  // isPcEnv,
}
