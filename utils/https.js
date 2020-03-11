module.exports =(param) =>{
	var url = param.url;
	var method = param.method;
	var header = param.header||{};
	var data = param.data||{};
	
	//请求方式
	if(method){
		method = method.toUpperCase();//转大写
		if(method =="post"){
			header= {"content-type":"application/x-www-form-urlencoded"}
		}
	//发起请求  加载
	if(!param.HideLoading){
		uni.showLoading({"title":"加载中..."})
		}
		
		
	//发起网络请求
	uni.request({
		url:url,
		header:header,
		method:method||"GET",
		data:data,
		success:res=>{
			if(res.statusCode!=200){
				uni.showModal({
					content:res.msg
				})
				return ;
			}
			//return
			typeof param.success =="function" &&param.success(res.data);
			
		},
		fail:(e)=>{
			uni.showModal({
				content:e.meg
			})
			//return
			typeof param.fail =="function" &&param.fail(e.data);
		},
		complete:()=>{
			console.log("请求成功");
			uni.hideLoading();
			//return
			typeof param.complete =="function" &&param.complete(res.data);
			return;
		}
		
	})
}
}