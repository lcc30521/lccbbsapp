<template>
	<view class="">
		
	
	<pageHeader/>
	<!--轮播-->
	<view class="swiper">
		<view class="swiper-box">
			<swiper  autoplay="true"  circular="true">
				<swiper-item>
					<image src="../../../static/lunbo/1.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../../static/lunbo/2.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../../static/lunbo/3.jpg"></image>
				</swiper-item>
			</swiper>
			
		</view>
	</view>
	<!--论坛分类-->
	<view class="category-list">
		<view class="category">
			<view class="img">
				<image src="../../../static/cat/1215856.png" mode=""></image>
			</view>
			<view class="text">
				关注南通
			</view>
		</view>
		<view class="category" @tap="gotoCategory(1)">
			<view class="img">
				<image src="../../../static/cat/1223844.png" mode=""></image>
			</view>
			<view class="text">
				闲聊杂谈
			</view>
		</view>
		<view class="category" @tap="gotoCategory(1)">
			<view class="img">
				<image src="../../../static/cat/1239700.png" mode=""></image>
			</view>
			<view class="text">
				招聘求职
			</view>
		</view>
		<view class="category" @tap="gotoCategory(1)">
			<view class="img">
				<image src="../../../static/cat/1239704.png" mode=""></image>
			</view>
			<view class="text">
				学习交流
			</view>
		</view>
	</view>
	<!--论坛分类-->
	<!--tab切换-->
	  <!--  <view style="width:92%;margin:0 4%;height:43px;;">
			
	         
		</view> -->
	<!--tab切换-->
	<!--list-->
	
	<view style="width:92%;margin:0 4%;margin-top:4upx;margin-bottom:12upx;">
		<!-- 使用组件并绑定ref, 动态绑定height属性 -->
	     <lcclist/>
	</view>
	<!--list-->
	</view>
</template>

<script>
	import pageHeader from './pageHeader.vue'

	import lcclist from './topiclist.vue'
	
	
	

	export default {
		components:{
			pageHeader,
		
			lcclist
		
		},
	
		onReady() {
			
		},
		data() {
			return {
				
				
			}
		},
	
	}
</script>

<style lang="scss">
   .swiper{
	   
	   width: 100%;
	   margin-top: 10upx;
	   display: flex;
	   justify-content: center;
	   .swiper-box{
		   width: 92%;
		   height: 30.7vw;
		   overflow: hidden;
		   border-radius: 15upx;
		   box-shadow: 0upx 8upx 25upx rgba(0,0,0,0.2);
		   //兼容ios
		   position: relative;
		   z-index: 1;
		   swiper{
			   width: 100%;
			   height: 30.7vw;
			   swiper-item{
				   image{
					   width: 100%;
					   height:40vw;
				   }
			   }
			   
		   }
	   }
   }
   
   .category-list{
	   width: 92%;
	   margin: 0 4%;
	   padding: 0 0 30upx 0;
	   border-bottom: solid 2upx #f6f6f6;
	   display: flex;
	   justify-content: space-between;
	   flex-wrap: wrap;
	   .category{
		   width: 25%;
		   margin-top: 50upx;
		   display: flex;
		   flex-wrap: wrap;
		   .img{
			   width: 100%;
			   display: flex;
			   justify-content: center;
			   image{
				   width: 11vw;
				   height: 11vw;
			   }
		   }
		   .text{
			   margin-top: 16upx;
			   width: 100%;
			   display: flex;
			   justify-content: center;
			   font-size: 24upx;
			   color: #3c3c3c;
		   }
	   }
	   
   }
   .content {
   	width: 100%;
   }
   .topView{
   	height: 44px;
   	display: flex;
   	flex-direction: row;
   	justify-content: space-between;
   	align-items: center;
   	font-size:  18px;
   	padding: var(--status-bar-height) 20px 0 20px;
   }
   .topViewItem{
   	font-size: 16px;
   	color: #999;
   	width: 15%;
   }
</style>
