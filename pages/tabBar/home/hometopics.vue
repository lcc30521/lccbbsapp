<template>
<view class="header1">
 <view @tap="lcc(index)" class="target" v-for="(target,index) in filterByList" :key="index" :class="{'on':target.selected}">
		 	{{target.text}}
</view>
</view>
</template>

<script>
	export default
	{
		data(){
			return {
				filterByList:[
					{text:"全部",selected:true, filterby:"all"},
					{text:"最新",selected:false, filterby:"new"},
					{text:"招聘",selected:false, filterby:"zp"},
					{text:"求职",selected:false, filterby:"qz"}
					
				]
				
			}
		},
		methods:{
			lcc(index){
				console.log(1);
				for(let i= 0;i<this.filterByList.length;i++){
					this.filterByList[i].selected=false;
				}
				this.filterByList[index].selected=true;
				//
				
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
</style>
