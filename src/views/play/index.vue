<template>
  <div class="play">
    <div class="play_header">
      <div>Inprogress</div>
      <div>Ended</div>
      <div>Filled</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.play_header {
  width: 100%;
//   background-color: #fff;
  display: flex;
  div {
    padding: 20px 30px;
    border-radius: 10px;
    background-color: #ccc;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>