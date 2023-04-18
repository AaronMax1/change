<template>
  <div class="primaryButton">
    <el-button type="primary" round>{{ name }}</el-button>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style>
.primaryButton .el-button--primary {
  -webkit-tap-highlight-color: transparent;
  background-color: rgba(24, 52, 35, 0.7);
  border-color: rgba(68, 123, 90, 0.7);
  padding: 1vw 1.2vw;
  font-size: 0.8vw;
  font-weight: 600;
}
.primaryButton .el-button--primary:hover {
  border-color: rgba(68, 123, 90, 0.7);
}
.primaryButton .el-button--primary:active {
  background-color: rgba(19, 28, 23, 0.7);
}
</style>