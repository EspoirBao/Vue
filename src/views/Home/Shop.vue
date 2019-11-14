<template>
  <div class="mine">
    <div class="cardhead">
      <p>商店</p>
    </div>
    <div class="cardtitle">
      <p class="line1">
        <i class="el-icon-caret-right"></i>选择合适的会员订阅计划
      </p>
      <p class="line2">云洞竭尽全力为您提供最优质的服务</p>

      <el-dialog title="支付" :visible.sync="dialogTableVisible" :modal="false" width="250px">
        <img src="@/assets/img/pay.jpg" alt="付款码" class="pay" />
      </el-dialog>

      <div class="row">
        <div class="box">
          <div class="VIP">VIP</div>
          <div class="line3">¥12.9</div>
          <p>每月</p>
          <ul>
            <li>
              <i class="el-icon-success"></i>100GB 使用流量
            </li>
            <li>
              <i class="el-icon-success"></i>2个 在线客户端
            </li>
            <li>
              <i class="el-icon-success"></i>工单技术支持
            </li>
            <li>
              <i class="el-icon-success"></i>国际标准节点
            </li>
            <li>
              <i class="el-icon-error"></i>国际优质节点
            </li>
            <li>
              <i class="el-icon-error"></i>国内中转节点
            </li>
            <li>
              <i class="el-icon-error"></i>IPLC专线节点
            </li>
          </ul>
          <div class="boxbottom" @click="dialogTableVisible = true">
            订阅
            <i class="el-icon-right"></i>
          </div>
        </div>
        <div class="box" >
          <div class="SVIP">SVIP</div>
          <div class="line3">¥18.9</div>
          <p>每月</p>

          <ul>
            <li>
              <i class="el-icon-success"></i>300GB 使用流量
            </li>
            <li>
              <i class="el-icon-success"></i>4个 在线客户端
            </li>
            <li>
              <i class="el-icon-success"></i>24/7 在线技术支持
            </li>
            <li>
              <i class="el-icon-success"></i>国际标准节点
            </li>
            <li>
              <i class="el-icon-success"></i>国际优质节点
            </li>
            <li>
              <i class="el-icon-success"></i>国内中转节点
            </li>
            <li>
              <i class="el-icon-success"></i>IPLC专线节点
            </li>
          </ul>
          <div class="boxbottom" @click="dialogTableVisible = true">
            订阅
            <i class="el-icon-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false
    };
  },
  methods: {},
  mounted() {}
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
  .cardtitle {
    .pay{
      width: 200px;
      height: 200px;
    }
    .line1 {
      font-size: 18px;
      font-weight: 600;
      height: 30px;
      line-height: 30px;
      margin-top: 18px;
      .el-icon-caret-right {
        line-height: 30px;
        font-size: 30px;
        color: #6777ef;
        margin-right: 15px;
      }
    }
    .line2 {
      font-size: 14px;
      color: #6c757d;
      margin-left: 40px;
      margin-top: 10px;
    }
    .row {
      width: 100%;
      height: 450px;
      // background: orange;
      margin-top: 20px;
      display: flex;

      .box {
        height: 650px;
        width: 300px;
        background: #fff;
        border-radius: 3px;
        margin: 15px 25px;
        text-align: center;

        .boxbottom {
          bottom: 0;
          width: 100%;
          height: 50px;
          background: #6777ef;
          color: #fff;
          margin-top: 156px;
          text-align: center;
          line-height: 50px;
          font-weight: 600;
          cursor: pointer;
        }

        .el-icon-success {
          color: #63ed7a;
          margin-right: 8px;
          font-size: 20px;
        }
        .el-icon-error {
          color: #fc544b;
          margin-right: 8px;
          font-size: 20px;
        }
        ul {
          text-align: left;
          li {
            padding-left: 85px;
            margin-top: 20px;
            font-size: 14px;
            color: #6c757d;
          }
        }

        .VIP {
          text-align: center;
          margin: 0 auto;
          width: 60px;
          border-bottom-right-radius: 3px;
          border-bottom-left-radius: 3px;
          background: #f4f6f9;
          color: #6777ef;
        }
        .SVIP {
          text-align: center;
          margin: 0 auto;
          width: 60px;
          border-bottom-right-radius: 3px;
          border-bottom-left-radius: 3px;
          background: #6777ef;
          color: #fff;
        }
        .line3 {
          font-size: 50px;
          margin-top: 30px;
          color: #6c757d;
        }
        p {
          color: #6c757d;
          padding-top: 15px;
        }
      }
    }
  }
}
</style>