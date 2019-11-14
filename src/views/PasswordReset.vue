<template>
  <div class="content">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="Logo" />
    </div>

    <div class="cardbox">
      <p class="line1">找回密码</p>
      <div class="cardOne" v-if="card1">
        <span class="line2">我们将会发送包含验证码的短信到您的手机</span>

        <p class="line3">手机号</p>
        <input type="text" class="input" placeholder="请输入手机号" v-model="phonenum" />

        <!-- <p>{{phonenum}}</p> -->
        <button class="button" @click="getcode">发送短信</button>
      </div>

      <CardTwo v-if="card2"></CardTwo>
    </div>

    <p class="bottom1">
      <router-link to="/">返回登录</router-link>
    </p>

    <p class="bottom2">Copyright © 2019 EspoirBao</p>
  </div>
</template>

<script>
import store from "@/store";
import CardTwo from "@/components/CardTwo.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      card1: true,
      card2: false
    };
  },
  components: {
    CardTwo
  },
  computed: {
    ...mapState(["userphone", "res"]),
    
    phonenum: {
      get() {
        return this.$store.state.userphone;
      },
      set(val) {
        this.$store.commit("getuserphone", val);
      }
    }
  },
  methods: {
    ...mapActions(["getCode"]),

    getcode() {
      var tel = this.userphone;
     
      if (!/^1\d{10}$/.test(tel)) {
        this.$message.error("请输入正确的手机号");
        return false;
      } else {
        this.getCode({ tel });
        if (this.res.code == 1) {
           this.$message.success("发送成功");
           this.card1 = false;
        }else{
          this.$message.error("发送失败");
        }
      }
    },

    usedCode(data) {
      console.log(111);
      this.$axios
        .post("/espoir/api/register/changePassword", {
          code: data.code,
          userPhone: this.userphone,
          password: data.password
        })
        .then(res => {
          const { code, msg } = res.data;
          if (code == 1) {
            this.$message.success("修改成功");
            this.$router.replace("/login");
          } else {
            console.log(res);
            this.$message.error(msg);
          }
        });
    }
  },
  watch: {
    card1(val) {
      this.card2 = !this.card1;
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 400px;
  height: 800px;
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
  .cardbox {
    width: 400px;
    height: 570px;
    background: #fff;
    margin-top: 30px;
    border-top: 2px solid #6777ef;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 30px;
    position: relative;

    .line1 {
      font-weight: 800;
      color: #6777ef;
      margin-bottom: 30px;
    }
    .line2 {
      font-size: 14px;
      font-weight: 400;
      color: #98a6ad;
    }
    /deep/.line3 {
      font-size: 12px;
      font-weight: 600;
      margin-top: 25px;
      color: #343982;
    }
    /deep/ .input {
      height: 42px;
      width: 340px;
      box-sizing: border-box;
      border: 1px solid #e4e6fc;
      border-radius: 5px;
      font-size: 14px;
    }
    /deep/ .button {
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
    margin-top: 20px;
  }
  .bottom2 {
    margin-top: 35px;
    text-align: center;
    font-size: 12px;
    padding-bottom: 30px;
  }
}
</style>