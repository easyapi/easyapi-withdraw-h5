<template>
  <view class="content">
    <view class="card">
      <view class="left"> 微信号： </view>
      <input class="right" type="text" :value="wechatOpenId" placeholder="微信号" disabled placeholder-class="placeholder" />
    </view>
    <view class="bank">
      <view class="left"> 昵称： </view>
      <input class="right" type="text" :value="wechatNickname" placeholder="请输入微信昵称" @input="changeWechatNickname"
        placeholder-class="placeholder" />
    </view>

    <button class="btn" @click="updata" hover-class="active_btn">绑 定</button>
  </view>
</template>

<script>
  import {
    updataUserWithdrawAccount
  } from "../../api/withdraw.js";
  export default {
    data() {
      return {
        wechatOpenId: "",
        wechatNickname: "",
      };
    },
    onLoad() {
      this.wechatOpenId = getApp().globalData.openid;
      this.wechatNickname = getApp().globalData.nickName;
      console.log( getApp().globalData.nickName,9999)
    },
    methods: {
      //双向绑定
      changeWechatOpenId(e) {
        this.wechatOpenId = e.detail.value;
      },

      changeWechatNickname(e) {
        this.wechatNickname = e.detail.value;
      },

      updata() {
        let params = {};
        params.username = getApp().globalData.username;
        params.wechatOpenId = this.wechatOpenId;
        params.accessToken = getApp().globalData.accessToken;
        params.wechatNickname = this.wechatNickname;

        updataUserWithdrawAccount(params).then((res) => {
          if (res.data.code == 1) {
            //绑定成功 返回提现页面
            uni.showToast({
              title: res.data.message,
              icon: "none",
              duration: 2000,
            });
            setTimeout(function() {
              uni.navigateBack({
                delta: 1,
              })
            }, 1000);

          } else {
            uni.showToast({
              title: res.data.message,
              icon: "none",
              duration: 2000,
            });
          }
        });
      },
    },
  };
</script>

<style>
  @import "../../static/public.css";
  @import "./weixin.css";
</style>
