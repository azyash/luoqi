<template>
  <el-container class="outline">
    <el-aside>
      <div class="title">Mabinogi</div>
      <el-menu router default-active="base">
        <el-menu-item index="base">基础设置</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <el-dropdown>
          <span class="pointer">王小虎</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 56px;
}
.outline {
  height: 100vh;
  border: 1px solid #eee;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
