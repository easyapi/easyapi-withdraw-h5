<template>
  <view class="content">
    <view class="card">
      <view class="left">
        微信号：
      </view>
      <input class="right" type="number" value="" placeholder="请输入微信号" placeholder-class="placeholder" />
    </view>
    <view class="bank">
      <view class="left">
        确认账号：
      </view>
      <input class="right" type="text" value="" placeholder="请再次输入微信号" placeholder-class="placeholder" />
    </view>

    <button class="btn" hover-class="active_btn">绑 定</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {

    }
  }
</script>


<style>
  @import '../../static/public.css';
  @import './weixin.css';
</style>
