<template>
	<view>
	<view class="header">    
		<!--logo view 相当于div标签-->
		 <view class="addr">
			  <view class="icon iconfont">
			  &#xe607;
			  </view>
		 	
		 </view>
		<!--search-->
		<view class="input-box">
			<input type="text" value="" placeholder="搜索" placeholder-style="color:#c0c0c0"/>
			<view class="icon iconfont">&#xe600;</view>
		</view>
		<view class="icon-btn">
			<view class="icon iconfont">
				&#xe601;
			</view>
			
		</view>
	</view>
	<view class="place"></view>
	</view>
</template>

<script>
	export default{
		
		
	}
</script>

<style lang="scss">
	.header{
		 width: 92%;
		 padding: 0 4%;
		 height: 100upx;
		 display: flex;
		 align-items: center;
		/* position: fixed; */
		 z-index: 11;
		 background-color: #FFFFFF;
		 top: 0;
		 /*#ifdef APP-PLUS*/
		 top: var(--status-bar-height);
		 /*#endif*/
		
		.addr{
			width: 60upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			font-size: 28upx;
			.icon{
				height: 60upx;
				margin-right: 5upx;
				display: flex;
				align-items: center;
				font-size: 42upx;
				color: #F0AD4E;
				
			}
		}
		.input-box{
			width:100%;
			height: 60upx;
			background-color: #f5f5f5;
			border-radius: 30upx;
			position: relative;
			display: flex;
			align-items: center;
			.icon{
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				right: 0;
				width: 60upx;
				height: 60upx;
				font-size: 34upx;
				color: #c0c0c0;
				
			}
			input{
				padding-left: 28upx;
				height: 28upx;
				font-size: 28upx;
			}
		}
		.icon-btn{
			
			width: 60upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon{
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
				color:#F0AD4E;
			}
		}
		
	}
	.place{
		background-color: #ffffff;
		/* height: 100upx; */
		/*#ifdef APP-PLUS*/
		top: var(--status-bar-height);
		/*#endif*/
	}
</style>
