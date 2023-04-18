<template>
  <div id="app">
    <div class="header">
      <div
        style="
          width: 70vw;
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        "
      >
        <div class="hederS">
          <div
            style="padding: 20px"
            :class="{ hederSh: cutNav == 1, headerSs: true }"
            @click="cutNav = 1"
          >
            HOME
          </div>
          <div
            style="padding: 20px"
            :class="{ hederSh: cutNav == 2, headerSs: true }"
            @click="cutNav = 2"
          >
            PLAY
          </div>
        </div>
        <div class="btn">
          <ele-button name="CONNECT WALLET"></ele-button>
          <ele-button
            name="CREATE"
            style="margin-left: 1vw"
            class="btnS2"
          ></ele-button>
        </div>
      </div>
    </div>
    <div class="mainF">
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cutNav: 1,
    };
  },
};
</script>

<style lang="less">
@media (max-width: 800px) {
  .btnS2 {
    display: none;
  }
}
.header {
  font-size: 1vw;
  height: 61px;
  position: absolute;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  .btn {
    display: flex;
    position: absolute;
    right: 0;
  }
  .hederS {
    -webkit-tap-highlight-color: transparent;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    cursor: pointer;
    align-self: center;
    .hederSh {
      color: rgba(47, 141, 80, 0.7);
    }
    .headerSs:hover {
      color: rgba(47, 141, 80, 0.7);
    }
  }
}
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
  overflow: hidden;
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
