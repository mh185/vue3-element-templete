<template>
  <div class="content">
    <el-menu mode="horizontal" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template #title
          ><el-avatar class="avatar" :src="circleUrl" size="small"></el-avatar>
          <span class="userName"> Vben Admin </span></template
        >
        <el-menu-item index="1-1" @click="detrusion">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { removeToken } from "@/until/auth";
export default defineComponent({
  setup() {
    const circleUrl = "http://qiniu.pigeonfan.com/1649407483000";
    const router = useRouter();
    function detrusion() {
      removeToken();
      router.push({
        path: "/login",
      });
    }
    return {
      circleUrl,
      detrusion,
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0.125rem;
  box-sizing: border-box;
  .userName {
    font-size: 0.175rem;
    padding-left: 0.125rem;
  }
}
.el-submenu__title:hover {
  background-color: rgb(3, 19, 33) !important;
}
</style>
