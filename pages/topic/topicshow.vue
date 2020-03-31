<template>
  <div class="test-component">
    <hm-news-detail :options="options"></hm-news-detail>
  </div>
</template>
<script>
import HmNewsDetail from '@/pages/topic/index.vue'
import interfaces from '@/utils/interfaces.js'
export default {
 components: {HmNewsDetail},
 
 onLoad(option) {
	this.topicinfo = JSON.parse(option.topicsinfo)
	console.log(this.topicinfo);
   /* this.options.yunshu = this.topicinfo.user.data.avatar,
    this.options.author = this.topicinfo.user.data.name,
    this.options.time = this.topicinfo.created_at,
    this.options.title = this.topicinfo.title,
    this.options.content = this.topicinfo.body */
	
	//访问接口
	uni.request({   
		url:'http://bbs.dailynt.com/api/topics/'+this.topicinfo+'?include=user,category',
		success:(res)=>{
			console.log(res.data.data);
			 this.options.yunshu = res.data.data.user.data.avatar,
			 this.options.author = res.data.data.user.data.name,
			 this.options.time = res.data.data.created_at,
			 this.options.title = res.data.data.title,
			 this.options.content = res.data.data.body
		}
	})
	//访问接口
 },
  data() {
    return {
	  topicinfo: {
		body:"",
		user:[],
		title:""
	  },
      options: {
          yunshu:"",
          author:"",
          like:
            '/static/hm-news-detail/images/img_22946_0_1.png',
          share:
            '/static/hm-news-detail/images/img_22946_0_2.png',
          time: "",
          title: "",
          img:
            '/static/hm-news-detail/images/img_22946_0_3.png',
          content: ""
            
        }
    };
  },
  methods: {
   
  },
  mounted() {
  	
  }
};
</script>
<style>
</style>
