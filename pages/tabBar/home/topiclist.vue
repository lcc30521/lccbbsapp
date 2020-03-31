<template>
	<view>
	<!--tab切换-->
	<view class="header1">
	 <view @tap="lcc(index)" class="target" v-for="(target,index) in filterByList" :key="index" :class="{'on':target.selected}">
			 	{{target.text}}
	</view>
	</view>
	<!--tab切换-->
	
	<view class="list-header" >
		<view v-for="(topic,index) in topiclist" :key="index" @tap="gsn(topic.id)">
		<view class="list-up">
			<view class="list-up-img">
				<image class="lcc" :src="topic.user.data.avatar" ></image>
			</view>
			<view class="list-up-info">
				<p style="color:#595A5C;font-size: 24upx;">{{topic.user.data.name}}</p>
				<p style="color:#DADDDF;font-size: 20upx;">{{topic.created_at}}</p>
			</view>
		</view>
		<view class="list-down">
			<view class="lcchhh">
				
			</view>
			<view class="list-down-desc">
				<span>{{topic.title}}</span>
			</view>
			
		</view>
		</view>
	</view>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interfaces.js'
	export default{
		data() {
			return {
				topiclist: [],
				filterByList:[
					{text:"全部",selected:true, filterby:"all"},
					{text:"最新",selected:false, filterby:"new"},
					{text:"招聘",selected:false, filterby:"zp"},
					{text:"求职",selected:false, filterby:"qz"}
					
				]
			}
		},
		onReady(){
			this.initData();
		},
		methods: {
			initData(){
				uni.request({    //因为已经把httpsjs挂载到了vue的 request
					url:interfaces.getTopics,
					success:(res)=>{
						console.log(res.data.data);
						this.topiclist = res.data.data
					}
				})
			},
			initDataTab(aa){
			
				//切换
				switch (aa){
					case "all":
					   uni.request({
					   	url:interfaces.getTopics,
					   	success:(res)=>{
					   		console.log(res.data.data);
					   		this.topiclist = res.data.data
					   	}
					   });
						
						break;
					case "new":
					    uni.request({
					    	url:interfaces.getTopicsnew,
					    	success:(res)=>{
					    		console.log(res.data.data);
					    		this.topiclist = res.data.data
					    	}
					    });
						console.log('最新');
						break;
					case "zp":
					uni.request({
						url:interfaces.getTopicszp,
						success:(res)=>{
							console.log(res.data.data);
							this.topiclist = res.data.data
						}
					});
						console.log('招聘');
						break;
					case "qz":
					uni.request({
						url:interfaces.getTopicsqz,
						success:(res)=>{
							console.log(res.data.data);
							this.topiclist = res.data.data
						}
					});
						console.log('求职');
						break;
					default:
					   
						break;
				}
				
			},
			lcc(index){
			
				for(let i= 0;i<this.filterByList.length;i++){
					this.filterByList[i].selected=false;
				}
				this.filterByList[index].selected=true;
				let order = this.filterByList[index].filterby;
				this.initDataTab(order);
			
				
			},
			gsn(topic){
				/* console.log(JSON.stringify(topic));
				return false; */
				uni.navigateTo({
					url:"../../topic/topicshow?topicsinfo="+topic
				})
			}
			
			
		
		
		}
	}
</script>

<style lang="scss">
	.header1{
		width: 92%;
		
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		/* position: fixed; */
		z-index: 11;
		background-color: #fff;
		border-bottom: solid 1upx #eee;
		
		.target{
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: left;font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;
			 &.on{
				 color: #555;
				 font-weight: 600;
				 font-size: 30upx;
			
				 border-bottom: solid 4upx #FFC549;
			 }
			 .icon{
				 font-size: -2upx;
			 }
		}
	}
	
	.list-header{
		height: auto;
		margin-top: 20upx;
	
		.list-up{
			display: flex;
			align-items: center;
			width: 100%;
			.list-up-img{
				
				align-items: center;
				
				flex:1;
				height: 68upx;
				.lcc{
					border-radius: 50%;
					width: 70upx;
					height: 70upx;
				}
			}
			.list-up-info{
				
				justify-content: space-around;
				align-items: center;
				flex:8;
				
				margin: 8upx 20upx;
			}
		}
		.list-down{
		    width: 100%;
			min-height: 70upx;
			border-bottom: 2upx solid  #eee;
			display: flex;
			margin-bottom: 20upx;
			.lcchhh{
				flex: 1;
			}
			.list-down-desc{
				flex: 8;
				margin-left: 20upx;
			}
		}
		
	}
</style>
