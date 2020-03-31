<template>
  <div class="hm-news-detail">
    <div class="hd">
      <img class="yunshu" :src="options.yunshu" />
      <div class="container">
        <div class="outer">
          <span class="author">{{ options.author }}</span>
          <div class="wrap">
            <img class="like" :src="options.like" />
            <img class="share" :src="options.share" />
          </div>
        </div>
        <span class="time">{{ options.time }}</span>
      </div>
    </div>
    <span class="title">{{ options.title }}</span>
    <div class="main">
      <div class="entryPicWrap"><img class="img" :src="options.img" /></div>
    </div>
    <div class="ft">
      <span class="content" v-html = options.content></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HmNewsDetail',
  props: {
    dataId: {
      type: String,
      default: 'hm-news-detail'
    },
    options: {
      type: Object,
    
    }
  },
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>
<style>
@import './index.response.css';
</style>
