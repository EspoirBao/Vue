<template>
  <div class="login">
    <div class="leftbox">
      <div class="logobox">
        <img src="@/assets/img/logo.png" alt="Logo" />
      </div>

      <p class="line1">
        欢迎使用
        <span>云洞</span>
      </p>
      <p class="line2">古祠照沧波，老木閟云洞</p>
      <p class="line3">手机号或用户名</p>
      <p>
        <input type="text" class="input" v-model="userName" />
      </p>
      <p class="line3">密码</p>
      <p>
        <input type="password" class="input" v-model="password" />
      </p>
      <router-link to="/passwordreset" class="line4">忘记密码?</router-link>
      <p class="line5">
        <input type="checkbox" v-model="day7" />7天免登录
      </p>
      <p class="line6">
        还没有账号?
        <router-link to="/register">马上注册👉🏻</router-link>
      </p>
      <el-button type="primary" class="button" @click="login">登录</el-button>

      <p class="line7">Copyright © 2019 EspoirBao</p>
    </div>

    <div class="rightbox">
      <div>
        <img src="@/assets/img/1.png" alt class="img" />
      </div>
      <div class="text">
        <p class="line8">
          Good
          <span>{{good}}</span>
        </p>
        <p class="line9">
          Picture By
          <a href="https://www.pixiv.net/">Pixiv</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import {mapState,mapGetters,mapActions,mapMutations} from "vuex";
export default {
  data() {
    return {
      userName: "",
      password: "",
      good: "Morning",
      day7: false,
      token:''
    };
  },
  methods: {
    ...mapMutations(['setToken']),
    time() {
      var date = new Date();
      var hours = date.getHours();
      if (hours < 12 && hours > 4) {
        this.good = "Morning";
      } else if (hours > 12 && hours < 20) {
        this.good = "Afternoon";
      } else {
        this.good = "Evening";
      }
    },
    login() {
      const { userName, password } = this;

      if (!(userName, password)) {
        this.$message.error("请检查用户名和密码");
        return false;
      }
      this.$axios
        .post("/espoir/api/login/t", {
          userName,
          userPhone: userName,
          password
        })
        .then(res => {
          const { code, msg, token } = res.data;
           
          if (code == 1) {
            this.$message.success(msg);

            if(this.day7==true){
              localStorage.setItem("token", token);
            }else{
              this.setToken({token})
              
            }
            setTimeout(() => {
              this.$router.replace("/home");
            }, 1000);
          } else {
            this.$message.error(msg);
          }
        })
    },

    FreeLogin(){
      this.token=localStorage.getItem("token");
      if(this.token!=''){
         this.$router.replace("/home");
      }
    },




  },
  created() {
    this.time();
    this.FreeLogin();

  },
  mounted() {},
  computed: {
    ...mapState([
     "tokenX"
    ]),


  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;

  .leftbox {
    height: 660px;
    width: 470px;

    box-sizing: border-box;
    // background-color: skyblue;
    padding: 30px;
    .logobox {
      height: 100px;
      width: 100px;
      img {
        height: 100px;
        width: 100px;
      }
    }
    .line1 {
      font-size: 18px;
      font-weight: 500;
      margin-top: 10px;
      span {
        font-weight: 600;
        font-size: 22px;
      }
    }
    .line2 {
      margin-top: 8px;
      color: #a3b0b6;
    }
    .line3 {
      font-size: 12px;
      font-weight: 650;
      margin-top: 20px;
    }
    .input {
      width: 400px;
      height: 38px;
      border: 1px solid #e4e6fc;
      border-radius: 5px;
      outline: none;
      font-size: 16px;
      padding-left: 18px;
    }
    .line4 {
      float: right;
      margin-right: 50px;
      color: #6777ef;
    }
    .line5 {
      margin-top: 30px;
    }
    .line6 {
      margin-top: 15px;
    }
    .button {
      float: right;
      margin-right: 30px;
    }
    .line7 {
      margin-top: 200px;
      font-size: 8px;
    }
  }
  .rightbox {
    height: 660px;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;

    position: relative;
    .img {
      width: 100%;
    }
    .text {
      position: absolute;
      bottom: 80px;
      left: 30px;
      color: #e4e6fc;
      a {
        color: #fff;
      }
      .line8 {
        font-size: 50px;
      }
      .line9 {
        margin-top: 50px;
        a {
          color: #0096fa;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>