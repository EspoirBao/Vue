<template>
  <div class="mine">
    <div class="cardhead">
      <p>教程</p>
    </div>

    <div class="cardbox">
      <div class="box windows">
        <div class="card-description">
          <span>Windows</span>
          <p>适用于 Windows 7 或更高版本</p>
        </div>
        <span class="iconfont icon-windows" style="color:#2EA1E6"></span>
      </div>
      <div class="box android">
        <div class="card-description">
          <span>Android</span>
          <p>适用于 Android 5.0 或更高版本</p>
        </div>
        <span class="iconfont icon-android" style="color:#98DC47"></span>
      </div>
      <div class="box apple">
        <div class="card-description">
          <span>Apple</span>
          <p>适用于 iOS 9 或更高版本</p>
        </div>
        <span class="iconfont icon-apple" style="color:#363636"></span>
      </div>
      <div class="box mac">
        <div class="card-description">
          <span>Mac</span>
          <p>适用于 macOS Sierra (10.12) 或更高版本</p>
        </div>
        <span class="iconfont icon-mac" style="color:#B2B6BC"></span>
      </div>
      <div class="box linux">
        <div class="card-description">
          <span>Linux</span>
          <p>适用于……所有版本？</p>
        </div>
        <span class="iconfont icon-linux" style="color:#FDBE67"></span>
      </div>
      <div class="box faq" >
        <div class="card-description">
          <span>FAQ</span>
          <p>常见问题解答</p>
        </div>
        <span class="iconfont icon-FAQ" style="color:#95A0F4"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    }
  },

  methods:{}

};
</script>

<style lang="scss" scoped>
.mine {
  .cardhead {
    width: 100%;
    height: 70px;
    border-radius: 5px;
    background: #fff;
    line-height: 70px;
    padding-left: 45px;
    box-sizing: border-box;
    p {
      font-size: 22px;
      font-weight: 600;
      color: #34395e;
    }
  }
  .cardbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .box {
      width: 40%;
      height: 150px;
      background: pink;
      margin-top: 30px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      .iconfont {
        font-size: 120px;
        position: absolute;
        right: -20px;
        top: -15px;
        color: #b2b6bc;
      }
      .card-description {
        position: absolute;
        top: 30px;
        left: 30px;
        span {
          font-size: 30px;
          color: #fff;
        }
        p {
          margin-top: 8px;
          color: #fff;
        }
      }
    }
    .windows {
      background: linear-gradient(#0178d7, #2ea1e6);
    }
    .android {
      background: linear-gradient(#6ab344, #98dc47);
    }
    .apple {
      background: linear-gradient(#000000, #363636);
    }
    .mac {
      background: linear-gradient(#848484, #b2b6bc);
    }
    .linux {
      background: linear-gradient(#ffa425, #fdbe67);
    }
    .faq {
      background: linear-gradient(#6777ef, #95a0f4);
    }
  }
}
</style>