
import {
  baseUrl,
  request
} from './request.js'

/**
 * 获取指定username用户的提现帐号信息
 */
export const getUserWithdrawAccount = (params) => {
  params.accessToken = 'token'
  return request(`${baseUrl}/withdraw-account/mine`, 'GET', params);
}

/**
 * 更新提现账号信息
 */
export const updataUserWithdrawAccount = (params) => {
  params.accessToken = 'token'
  return request(`${shopUrl}/withdraw-account`, 'POST', params);
}

/**
 * 申请提现
 */
export const Withdraw = (params) => {
  params.accessToken = 'token'
  return request(`${shopUrl}/withdraw`, 'POST', params);
}
