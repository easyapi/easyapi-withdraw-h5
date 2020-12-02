export const baseUrl = 'https://kkt-api.icooltu.com'; // 接口地址

export function request(url, method, data, header) {
  let requestMethod = method.toUpperCase() || "GET";
  let requestData = data || {};
  let requestHeader = header || {'content-type': 'application/json'};
  var promise = new Promise(function(resolve, reject) {
    
    uni.request({
      url: url,
      data: requestData,
      method: requestMethod,
      dataType: "json",
      header: requestHeader,
      success: function(res) {
        resolve(res)
      },
      fail: function(error) {
        console.log(error)
        reject
      }
    })
  });
  return promise;
};