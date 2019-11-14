<template>
  <div class="home">
    <div class="bar"></div>

    <div class="leftbox" :style="Ls1">
      <p>云洞</p>

      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="collapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/home/">用户中心</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/home/shop">商店</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">使用</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link to="/home/mine">我的账号</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/home/wallet">我的钱包</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">我的</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <router-link to="/home/nodelist">节点列表</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to="/home/tutorial">下载教程</router-link>
            </el-menu-item>
            <el-submenu index="3-3">
              <span slot="title">工单系统</span>
              <el-menu-item index="3-4-1">
                <router-link to="/home/workorder">新建工单</router-link>
              </el-menu-item>
              <el-menu-item index="3-4-1">
                <router-link to="/home/workorderlist">工单列表</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>

      <p class="line1" v-show="line1">Copyright © 2019 EspoirBao</p>
    </div>

    <div class="rightbox" :style="Rs1">
      <div class="content">
        <i class="el-icon-s-operation" @click="menu"></i>

        <el-dropdown trigger="click" class="headrightbox" @command="handleCommand">
          <span class="el-dropdown-link">
            Hi,{{user}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user-solid" command="/home">我的账号</el-dropdown-item>
            <el-dropdown-item icon="el-icon-s-finance" command="/home/wallet">我的钱包</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button" style="color:red" command="Exit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="card">
          
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      collapse: true,
      Ls1: { width: "200px" },
      Rs1: { width: "calc(100% - 240px)" },
      user: "bao",
      line1: "",
      userinfo:{},
    };
  },
  created() {
   
    this.style();
  },
  methods: {
    ...mapState(["tokenX","title"]),
    ...mapMutations(["setToken","setUserinfo"]),
    menu() {
      this.collapse = !this.collapse;
    },
    style() {
      if (this.collapse == true) {
        this.Ls1 = { width: "65px" };
        this.Rs1 = { width: "calc(100% - 65px)" };
        this.line1 = false;
      } else {
        this.Ls1 = { width: "200px" };
        this.Rs1 = { width: "calc(100% - 200px)" };
        this.line1 = true;
      }
    },
    handleCommand(command) {
      if (command == "Exit") {
        localStorage.setItem("token", "");
        this.setToken({});
        this.$router.replace("/");
      } else {
        this.$router.push({ path: command });
      }
    },
    Loginjudgment() {
      var tokenX = this.$store.state.tokenX.token;
      var tokenL = localStorage.getItem("token");
      if (!tokenL && !tokenX) {
        this.$message.error("用户未登录");
        localStorage.setItem("token", "");
        this.$router.replace("/");
      } else {
        var token = tokenX ? tokenX : tokenL;
        // console.log(token)
        this.$axios
          .post("/espoir/api/home/t/info", {
            token,
          })
          .then(res => {
            if(res.data.code!=1){
              localStorage.setItem("token", "");
              this.$router.replace("/")
              
            }else{
              console.log(res.data.msg)
              var userinfo=res.data.data
              this.setUserinfo({userinfo})
              // console.log(this.$store.state.userinfo)
              this.user=res.data.data[0].userName
            }
          })
          .catch(err => {
            this.$message.error('发生错误')
            console.log(err);
          });
      }
    }
  },
  mounted() {
    this.Loginjudgment();
    
  },
  watch: {
    collapse(val) {
      if (val == true) {
        this.Ls1 = { width: "65px" };
        this.Rs1 = { width: "calc(100% - 65px)" };
        this.line1 = false;
      } else {
        this.Ls1 = { width: "200px" };
        this.Rs1 = { width: "calc(100% - 200px)" };
        this.line1 = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  position: relative;
  height: 100%;


  .bar {
    width: 100%;
    height: 120px;
    background: #6777ef;
    position: relative;
    z-index: -10;
  }

  .leftbox {
    width: 240px;
    height: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 15;
    overflow: auto;
    box-sizing: border-box;
    p {
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      margin-top: 10px;
    }
    .line1 {
      position: absolute;
      bottom: 5px;
      left: 5px;
      font-weight: 300;
      font-size: 8px;
    }
  }
  .rightbox {
    position: absolute;
    top: 60px;
    right: 0;
    height: calc(100% - 80px);
    width: calc(100% - 240px);
    z-index: 10;
    
    
    .content {
      height: 100%;
      width: 90%;
      margin: 20px auto 0;
      // background: yellowgreen;
      position: relative;
      .el-icon-s-operation {
        position: absolute;
        top: -40px;
        font-size: 25px;
        color: #fff;
      }
      .headrightbox {
        position: absolute;
        top: -40px;
        right: 0;
        height: 25px;
        color: #fff;
      }
      .iconfont {
        height: 10px;
        width: 10px;
      }
     
    }
  }
}
</style>