const domain="http://.com/"
const interfaces = {
	//获取所有话题列表  //默认
	getTopics:domain+"api/topics?include=user",
	//获取最新话题列表
	getTopicsnew:domain+"api/topics?order=recent&include=user",
	//获取最新招聘信息
	getTopicszp:domain+"api/topics?category_id=5&include=user",
	//获取最新求职信息
	getTopicsqz:domain+"api/topics?category_id=6&include=user",
	//获取话题基本信息
	getTopicsshow:domain+"api/topics/:id/include=user,category",
	
}
module.exports= interfaces;