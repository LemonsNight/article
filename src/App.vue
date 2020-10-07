<script src="../../../工作/influ-front/src/tool/request.js"></script>
<template>
  <div id="app">
    <p @click="ClickApp">
      {{Msg}}
      </p>
    <home></home>
  </div>
</template>
<script>
import Home from "./view/Home/Home.vue"
import { RequestUrl } from "./config/request.js"
export default {
  name: "App",
  data(){
    return{
      Msg: "当你看到这个页面，说明HTML已经启动成功热更新成功"
    }
  },
  methods: {
    ClickApp(){
      let list = RequestUrl("/artist/top/song?id=6452");
      console.log(list)
    }
  },
  components: {
    Home
  }
}
</script>
<style lang="less">
#app{
  font-size: 30px;
  color: blue;
  display: flex;
}
@keyframes move {
  from{
    transform: scale(3);
  }
}
</style>