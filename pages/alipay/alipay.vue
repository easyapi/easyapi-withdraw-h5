<template>
	<view class="content">
		<view class="card">
			<view class="left">
				支付宝账号：
			</view>
			<input class="right" type="text" :value="alipayAccount" @input="changeAlipayAccount" placeholder="请输入支付宝账号" placeholder-class="placeholder"/>
		</view>
		<view class="bank">
			<view class="left">
				支付宝姓名：
			</view>
			<input class="right" type="text" :value="alipayName" @input="changeAlipayName" placeholder="请输入支付宝姓名" placeholder-class="placeholder"/>
		</view>
		
		<button class="btn" hover-class="active_btn" @click="updata">绑 定</button>
	</view>
</template>

<script>
	import {
		updataUserWithdrawAccount
	} from '../../api/withdraw.js';
	export default {
		data() {
			return {
				alipayAccount: '',
				alipayName: '',
			}
		},
		onLoad() {
	
		},
		methods: {
			
			//双向绑定支付宝账号
			changeAlipayAccount(e) {
				this.alipayAccount = e.detail.value;
				console.log(this.alipayAccount)
			},
			//双向绑定支付宝姓名
			changeAlipayName(e) {
				this.alipayName = e.detail.value;
				console.log(this.alipayName)
			},
			
			updata() {
				let params = {}
				params.username = getApp().globalData.username
				params.alipayAccount = this.alipayAccount
				params.alipayName = this.alipayName
				
				updataUserWithdrawAccount(params).then(res => {
					console.log(res)
					//绑定成功 返回提现页面
					uni.navigateBack({
					    delta: 1
					});
				});
			}
		}
	}
</script>


<style>
	@import '../../static/public.css';
	@import './alipay.css';
</style>
