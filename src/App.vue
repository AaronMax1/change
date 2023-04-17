<template>
  <div id="app">
    <div class="header"></div>
    <div class="mainF">
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style lang="less">
.mainF {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.main {
  width: 70vw;
  height: 80vh;
  box-sizing: border-box;
  padding: 40px 0;
  background-image: url("./assets/mainBgc.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-width: 300px;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  position: relative;
  background-image: url("./assets/bgc.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#app,
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}
</style>
