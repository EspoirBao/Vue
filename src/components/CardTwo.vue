<template>
  <div>
    <p class="line3">验证码</p>
    <input type="text" class="input" v-model="code"/>
    <p class="line3">新密码</p>
    <input type="password" class="input" v-model="password1"/>
    <p class="line3">确认密码</p>
    <input type="password" class="input" v-model="password2"/>
    <button class="button" @click="usedCode">确认修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      password1: "",
      password2: ""
    };
  },
    methods: {
        usedCode(){

            if(this.password1!=this.password2){
                this.$message.error('两次密码不一致')
                return false
            }else{
                this.$emit('usedCode',{
                code:this.code,
                password:this.password1,
            })
            }


            
        }
    },
};
</script>

<style lang="scss" scoped>
</style>