<template>
  <div id="app">
    <div>
      <el-drawer
        size="40vw"
        title="我是标题"
        :visible.sync="drawer"
        direction="ltr"
        :with-header="false"
        custom-class="drawer"
      >
        <div
          class="menuItem"
          :class="{ act: cutNavMobile == 1 }"
          @click="handlePushHome"
        >
          HOME
        </div>
        <div
          class="menuItem"
          :class="{ act: cutNavMobile == 2 }"
          @click="handlePushPlay"
        >
          PLAY
        </div>
      </el-drawer>
    </div>
    <div class="header">
      <div
        style="
          width: 70vw;
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          min-width: 300px;
        "
      >
        <div class="menuActive" @click="showMenu">
          <svg
            t="1681866668816"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2605"
            width="32"
            height="32"
          >
            <path
              d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
              p-id="2606"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
        <div class="hederS">
          <div
            style="padding: 20px"
            :class="{ hederSh: cutNav == 1, headerSs: true }"
            @click="handlePushHome"
          >
            HOME
          </div>
          <div
            style="padding: 20px"
            :class="{ hederSh: cutNav == 2, headerSs: true }"
            @click="handlePushPlay"
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
      drawer: false,
      cutNav: 1,
      cutNavMobile: 1,
    };
  },
  methods: {
    handlePushHome() {
      this.cutNavMobile = 1;
      this.cutNav = 1;
      this.drawer = false;
      this.$router.push("/");
    },
    handlePushPlay() {
      this.cutNavMobile = 2;
      this.cutNav = 2;
      this.drawer = false;
      this.$router.push("/play");
    },
    showMenu() {
      this.drawer = true;
    },
  },
};
</script>

<style lang="less">
.menuItem:hover {
  background-color: rgba(6, 12, 9, 0.7);
}
.act {
  color: rgba(47, 141, 80, 0.7) !important;
  background-color: rgba(6, 12, 9, 0.7);
}
.menuItem {
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}
.drawer {
  background-color: rgba(20, 42, 29, 1);
}
.menuActive {
  display: none;
}
.header {
  padding-top: 1.2vw;
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

@media (max-width: 800px) {
  .btnS2 {
    display: none;
  }
  .menuActive {
    display: block;
  }
  .hederS {
    display: none !important;
  }
  .primaryButton .el-button--primary {
    padding: 4vw 3vw !important;
    font-size: 14px !important;
  }
}
</style>
