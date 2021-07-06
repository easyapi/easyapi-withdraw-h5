<template>
  <view class="content">
    <view class="card">
      <view class="left">
        银行卡卡号：
      </view>
      <input class="right" type="number" value="" placeholder="请输入银行卡卡号" placeholder-class="placeholder" />
    </view>
    <view class="bank">
      <view class="left">
        开户银行：
      </view>
      <input class="right" type="text" value="" placeholder="请输入开户银行" placeholder-class="placeholder" />
    </view>
    <view class="name">
      <view class="left">
        持卡人姓名：
      </view>
      <input class="right" type="text" value="" placeholder="请输入持卡人姓名" placeholder-class="placeholder" />
    </view>
    <!-- <view class="phone">
			<view class="left">
				手机号码
			</view>
			<input class="right" type="number" value="" placeholder="请输入银行卡预留手机号码" placeholder-class="placeholder"/>
		</view>
		<view class="code">
			<view class="left">
				验证码
			</view>
			<input class="centre" type="number" value="" placeholder="请输入验证码" placeholder-class="placeholder" />
			<view class="yanzhengma">
				<view class="_yanzhengma" hover-class="_yanzhengma_active">
					获取验证码
				</view>
			</view>
		</view> -->

    <button class="btn" hover-class="active_btn">添加</button>
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
  @import './bank.css';
</style>
