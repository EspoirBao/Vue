<template>
  <div class="content">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="Logo" />
    </div>
    <div class="card">
      <p class="line1">注册</p>
      <div class="box1 box">
        <p>昵称</p>
        <input type="text"  v-model="username" :style="S1" />
        <p class="red" v-if="S1">请输入由6-19位以字母为首数字字母组成的昵称</p>
      </div>

      <div class="cardbox">
        <div class="box2 box">
          <p>手机号码</p>
          <input type="text"  :style="S2" v-model="phonenum" />
          <p class="red" v-if="S2">请输入正确的手机号</p>
        </div>

        <div class="box3 box code">
          <p>手机验证码</p>
          <input type="text" v-model="checkcode" :style="S4" />
          <button @click="getcode">获取验证码</button>
          <p class="red" v-if="S4">请输入手机验证码</p>
        </div>

        <div class="box4 box">
          <p>密码</p>
          <input type="password" v-model="password" :style="S3" />
          <p class="red" v-if="S3">请确保2次密码输入准确无误</p>
        </div>

        <div class="box5 box">
          <p>重复密码</p>
          <input type="password"  :style="S3" v-model="password2" />
        </div>
      </div>

      <p class="line2">
        <el-checkbox v-model="checked" class="check"></el-checkbox>注册即代表同意服务条款
      </p>
      <p class="red" v-show="fwtk">请同意服务条款</p>

      <button class="register" @click="register">注册</button>
    </div>

    <p class="bottom1">
      已经有账号了?
      <router-link to="/">马上登录 👉</router-link>
    </p>

    <p class="bottom2">Copyright © 2019 EspoirBao</p>
  </div>
</template>

<script>
import store from "@/store";
import {mapState,mapGetters,mapActions,mapMutations} from "vuex";
export default {
  data() {
    return {
      checked: true,
      username: "",
      password: "",
      password2: "",
     
      checkcode: "",
      S1: "",
      S2: "",
      S3: "",
      S4: "",
      C1: "",
      C2: "",
      C3: "",
      C4: "",
      fwtk:false,
      check: true
    };
  },
  computed: {
     ...mapState([
     "userphone",
     "res"
    ]),
    phonenum:{
        get(){
          return this.$store.state.userphone;
        },
        set(val){
          this.$store.commit("getuserphone",val)
        }
    }
  },
  methods: {
    ...mapActions(['getCode']),
    checkpass() {
      var reg1 = /^[a-zA-Z_$][a-zA-Z0-9_$]{1,19}$/;
      var reg2 = /^1\d{10}$/;
      if (!reg1.test(this.username)) {
        this.S1 = "border:1px solid red";
        this.C1 = false;
      } else {
        this.S1 = "";
        this.C1=true;
      }
      if (!reg2.test(this.userphone)) {
        this.S2 = "border:1px solid red";
        this.C2= false;   
      } else {
        this.S2 = "";
        this.C2=true;
      }
      if (this.password == "" || this.password2 == "") {
        this.S3 = "border:1px solid red";
        this.C3 = false;
      } else {
        this.S3 = "";
        this.C3 = true;
      }
      if (this.checkcode == "") {
        this.S4 = "border:1px solid red";
        this.C4= false;
      } else {
        this.S4 = "";
        this.C4= true;
      }
    },

    
    getcode(){
      var tel = this.userphone
      console.log(tel)
      if(!/^1\d{10}$/.test(tel)){
        console.log(111)
        this.$message.error('请输入正确的手机号')
      }else{
        //改用vuex
        this.getCode({tel})

        // this.$axios.post("/espoir/api/register/getcode",{
        //   tel,
        // })
        // .then(res=>{
        //   const{code,msg}=res
        //   this.$message.success('发送成功')
        // })
        this.$message.success('发送成功')
      }
    },
    register() {
      this.checkpass();
      if(this.C1&&this.C2&&this.C3&&this.C4&&this.checked){
        this.$axios.post("/espoir/api/register/register",{
          userName: this.username,
          password: this.password,
          userPhone: this.userphone,
          code: this.checkcode
        })

        .then(res =>{
          const{code,msg}=res.data;
          if(code==1){
             this.$message.success('注册成功')
             this.$router.replace("/");
          }else{
            console.log(res)
             this.$message.error(msg)
          }
        })
      }else{
        this.$message.error('请确认信息填写无误')
      }
    },





  },
  mounted() {
      
    
  },
  watch: {
    checked(val){
      this.fwtk=!this.checked
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 730px;
  height: 800px;
  //   background: skyblue;
  margin: 0 auto;
  padding-top: 30px;
  .logo {
    height: 120px;
    width: 120px;
    margin: 40px auto 0;
    background: #fff;
    border-radius: 60px;
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -50px;
      margin-top: -50px;
      height: 100px;
      width: 100px;
    }
  }

  .card {
    width: 730px;
    height: 570px;
    background: #fff;
    margin-top: 30px;
    border-top: 2px solid #6777ef;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 30px;
    position: relative;
    .red {
      color: red;
      font-size: 12px !important ;
      font-weight: 400 !important;
    }
    .line1 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 40px;
      color: #6777ef;
    }

    .box {
      p {
        font-weight: 600;
        font-size: 12px;
      }
      input {
        height: 42px;
        width: 300px;
        border: 1px solid #e4e6fc;
        border-radius: 5px;
        font-size: 14px;
        padding-left: 15px;
      }
      height: 70px;
      width: 330px;
      margin-top: 30px;
      //   background: yellowgreen;
    }
    .cardbox {
      display: flex;
      flex-wrap: wrap;
    }

    .code {
      position: relative;
      input {
        width: 210px;
        border-radius: 5px 0 0 5px;
      }
      button {
        position: absolute;
        top: 16px;
        width: 90px;
        height: 44px;
        border-radius: 0 5px 5px 0;
        border: none;
        outline: none;
        background: #6777ef;
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        &:hover {
          background: #394eea;
        }
      }
    }

    .line2 {
      font-size: 14px;
      font-weight: 800px;
      margin-top: 50px;
      .check {
        margin-right: 5px;
      }
    }
    .register {
      width: 100%;
      height: 43px;
      margin-top: 25px;
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      background: #6777ef;
      border: none;
      border-radius: 5px;
      &:hover {
        background: #394eea;
      }
    }
  }
  .bottom1 {
    text-align: center;
    color: #a4a6b4;
    margin-top: 40px;
  }
  .bottom2 {
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    padding-bottom: 30px;
  }
}

@media only screen and (max-width: 860px) {
  .content {
    width: 500px;
    // background: skyblue;
    .card {
      width: 500px;
      height: 800px;
      .box {
        input {
          width: 424px;
        }
      }
      .code {
        position: relative;
        input {
          width: 334px;
        }
        button {
          position: absolute;
          right: -111px;
        }
      }
    }
  }
}
</style>