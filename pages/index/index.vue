<template>
  <view class="content">

    <!-- 支付宝已绑定 -->
    <view class="alipay" v-if="alipayAccounts">
      <view class="left">
        <text class="iconfont icon-zhifubao"></text>
      </view>
      <view class="centre">
        <view class="payname">
          支付宝
        </view>
        <view class="info">
          {{alipayName}}
        </view>
      </view>
      <view class="right">
        <view @click="gotoModify('支付宝')">修改</view>
      </view>
      <view class="right">
        <radio :checked="payWay === '支付宝'" @click="radio('支付宝')" />
      </view>
    </view>

    <!-- 支付宝未绑定 -->
    <view @click="gotoBind('支付宝')" class="alipay" v-else>
      <view class="left">
        <text class="iconfont icon-zhifubao"></text>
      </view>
      <view class="centre">
        <view class="payname">
          支付宝
        </view>
        <view class="info">
          未绑定，请绑定后再进入提现
        </view>
      </view>
      <view class="right">
        <text class="iconfont icon-xiangyou"></text>
      </view>
    </view>

    <!-- 微信已绑定 -->
    <view class="weixin" v-if="weixinAccounts">
      <view class="left">
        <text class="iconfont icon-weixin"></text>
      </view>
      <view class="centre">
        <view class="payname">
          微信支付
        </view>
        <view class="info">
          {{wechatNickname}}
        </view>
      </view>
     <!-- <view class="right">
        <view @click="gotoModify('微信支付')">修改</view>
      </view> -->
      <view class="right">
        <radio :checked="payWay === '微信支付'" @click="radio('微信支付')" />
      </view>
    </view>

    <!-- 微信未绑定 -->
    <view @click="gotoBind('微信支付')" class="weixin" v-else>
      <view class="left">
        <text class="iconfont icon-weixin"></text>
      </view>
      <view class="centre">
        <view class="payname">
          微信支付
        </view>
        <view class="info">
          未绑定，请绑定后再进入提现
        </view>
      </view>
      <view class="right">
        <text class="iconfont icon-xiangyou"></text>
      </view>
    </view>

    <!-- 银行已绑定 -->
    <!-- <view class="bank" v-if="bankAccounts">
      <view class="left">
        <text class="iconfont icon-yinhang-nonghang"></text>
      </view>
      <view class="centre">
        <view class="payname">
          中国农业银行
        </view>
        <view class="info">
          尾号9918 储蓄卡
        </view>
      </view>
      <view class="right">
        <radio :checked="payWay === '银行'" @click="radio('银行卡')" />
      </view>
    </view> -->

    <!-- 银行未绑定 -->
    <!-- <navigator url="../bank/bank" class="bank" v-else>
      <view class="left">
        <text class="iconfont icon-yinhang-nonghang"></text>
      </view>
      <view class="centre">
        <view class="payname">
          中国农业银行
        </view>
        <view class="info">
          未绑定
        </view>
      </view>
      <view class="right">
        <text class="iconfont icon-xiangyou"></text>
      </view>
    </navigator> -->



    <view class="withdraw">
      <view class="word">
        提现金额
      </view>
      <view class="money">
        <input type="text" :value="money" @input="changeMoney" class="input" />
        <view class="icon iconfont icon-delete" hover-class="icon_active" @click="clear"></view>
      </view>
      <view class="hint">
        <text class="txt-1">可提现余额{{balance}}元</text>
        <view class="txt-2" hover-class="txt-2_active" @click="allWithdrawal">全部提现</view>
      </view>
    </view>

    <button class="btn" hover-class="active_btn" @click="withdraw">确认提现</button>

  </view>
</template>
<script>
  import {
    getUserWithdrawAccount,
    withdraw,
    updataUserWithdrawAccount
  } from '../../api/withdraw.js';
  export default {
    data() {
      return {
        money: null, //提现的金额
        balance: 0, //最多可以提现的金额，接口获取

        //是否设置了结算方式
        alipayAccounts: false,
        weixinAccounts: false,
        bankAccounts: false,

        //微信账户
        wechatOpenId: '',
        wechatNickname: '',

        //支付宝账户
        alipayAccount: '',
        alipayName: '',

        //银行卡账户
        bankName: '',
        bankCardNo: '',
        bankAccountName: '',

        //用户选择的提现方式
        payWay: '微信支付',
      }
    },
    onLoad(option) {
      if (option.username) {
        getApp().globalData.username = option.username
        this.balance = option.balance
        getApp().globalData.accessToken = option.accessToken
        getApp().globalData.withdrawType = option.withdrawType
        getApp().globalData.withdrawNo = option.withdrawNo
        getApp().globalData.openid = option.openid
        getApp().globalData.nickname = option.nickname
      }
      let params = {};
      params.username = getApp().globalData.username;
      params.wechatOpenId = getApp().globalData.openid;
      params.accessToken = getApp().globalData.accessToken;
      params.wechatNickname = getApp().globalData.nickname;

      updataUserWithdrawAccount(params).then((res) => {
        if (res.data.code == 1) {
          //绑定成功 返回提现页面
          uni.showToast({
            title: res.data.message,
            icon: "none",
            duration: 2000,
          });
        } else {
          uni.showToast({
            title: res.data.message,
            icon: "none",
            duration: 2000,
          });
        }
      });

      // let params = {}
      // params.username = getApp().globalData.username
      // params.accessToken = getApp().globalData.accessToken
      // updataUserWithdrawAccount(params).then(res => {
      //   this.decideAccount()
      // });

    },
    onShow() {
      let params = {}
      params.username = getApp().globalData.username
      params.accessToken = getApp().globalData.accessToken
      getUserWithdrawAccount(params).then(res => {
        //微信账户
        this.wechatOpenId = res.data.content.wechatOpenId
        this.wechatNickname = res.data.content.wechatNickname
        //支付宝账户
        this.alipayAccount = res.data.content.alipayAccount
        this.alipayName = res.data.content.alipayName
        //银行卡账户
        this.bankName = res.data.content.bankName
        this.bankCardNo = res.data.content.bankCardNo
        this.bankAccountName = res.data.content.bankAccountName
        this.decideAccount()
      });
    },
    methods: {
      //双向绑定金额
      changeMoney(e) {
        this.money = e.detail.value;
      },

      //全部提现
      allWithdrawal() {
        this.money = this.balance
      },

      //清空提现金额
      clear() {
        this.money = null
      },

      //单选按钮方法
      radio(e) {
        this.payWay = e
      },

      //判断用户有哪些提现账户
      decideAccount() {

        if (this.wechatOpenId && this.wechatNickname) {
          this.weixinAccounts = true
        } else {
          this.weixinAccounts = false
        }

        if (this.alipayAccount && this.alipayName) {
          this.alipayAccounts = true
        } else {
          this.alipayAccounts = false
        }

        if (this.bankCardNo && this.bankAccountName) {
          this.bankAccounts = true
        } else {
          this.bankAccounts = false
        }
      },

      //跳转绑定
      gotoBind(type) {
        if (type == '微信支付') {
          uni.navigateTo({
            url: '/pages/weixin/weixin',
          });
        } else if (type == '支付宝') {
          uni.navigateTo({
            url: '/pages/alipay/alipay',
          });
        }
      },

      // 跳转修改
      gotoModify(type) {
        if (type == '微信支付') {
          uni.navigateTo({
            url: '/pages/weixin/weixin?wechatOpenId=' + this.wechatOpenId + '&wechatNickname=' + this
              .wechatNickname,
          });
        } else if (type == '支付宝') {
          uni.navigateTo({
            url: '/pages/alipay/alipay?alipayAccount=' + this.alipayAccount + '&alipayName=' + this.alipayName,
          });
        }
      },
      //点击确认提现
      withdraw() {

        if (this.payWay == '微信支付') {
          console.log("微信")
          if (this.weixinAccounts == false) {
            uni.showToast({
              title: "请绑提现账号",
              icon: 'none',
              duration: 2000
            });
          } else if (this.money == null) {
            uni.showToast({
              title: "请填写提现金额",
              icon: 'none',
              duration: 2000
            });
          } else if (this.money <= 0) {
            uni.showToast({
              title: "请填写正确的提现金额",
              icon: 'none',
              duration: 2000
            });
          } else {
            let params = {}
            params.username = getApp().globalData.username
            params.accessToken = getApp().globalData.accessToken
            params.withdrawType = getApp().globalData.withdrawType
            params.withdrawNo = getApp().globalData.withdrawNo
            params.price = this.money
            params.way = '微信'
            params.remark = '微信提现'
            params.account = this.wechatOpenId

            withdraw(params).then(res => {
              if (res.data.code == 1) {
                uni.showToast({
                  title: res.data.content.message,
                  icon: 'none',
                  duration: 2000
                });
                if (res.data.content.success == "true") {
                  let price = this.balance
                  this.balance = price - this.money
                  this.money = null
                }
              } else {
                uni.showToast({
                  title: res.data.message,
                  icon: 'none',
                  duration: 2000
                });
              }
            });
          }
        }

        if (this.payWay == '支付宝') {
          console.log("支付宝")
          if (this.money == null) {
            uni.showToast({
              title: "请填写提现金额",
              icon: 'none',
              duration: 2000
            });
          } else if (this.money <= 0) {
            uni.showToast({
              title: "请填写正确的提现金额",
              icon: 'none',
              duration: 2000
            });
          } else {
            console.log("支付提现")
            let params = {}
            params.username = getApp().globalData.username
            params.accessToken = getApp().globalData.accessToken
            params.withdrawType = getApp().globalData.withdrawType
            params.withdrawNo = getApp().globalData.withdrawNo
            params.price = this.money
            params.way = '支付宝'
            params.account = this.alipayAccount

            withdraw(params).then(res => {
              console.log(666)
              if (res.data.code == 1) {
                uni.showToast({
                  title: res.data.content.message,
                  icon: 'none',
                  duration: 2000
                });
                let price = this.balance
                this.balance = price - this.money
                this.money = null
              } else {
                uni.showToast({
                  title: res.data.message,
                  icon: 'none',
                  duration: 2000
                });
              }
            });
          }
        }


        if (this.payWay == '银行卡') {
          uni.showToast({
            title: '暂未开通',
            icon: 'none',
            duration: 2000
          });
        }
      }
    }
  }
</script>


<style>
  @import '../../static/public.css';
  @import '../../static/iconfont.css';
  @import './index.css';
</style>
