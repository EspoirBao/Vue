<template>
  <div>
    <span>
      <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
       
    </el-switch>
    </span>
     <i class="el-icon-warning-outline"></i>
    
    <p >{{value}}</p>
  </div>
</template>

<script>
import{Switch} from 'element-ui'

export default {
  data() {
    return {
      value:true
    }
  },
};
</script>

<style lang="scss" scoped>
@import url("//unpkg.com/element-ui@2.12.0/lib/theme-chalk/index.css");


.el-icon-warning-outline{
  font-size: 20px;
  margin-top: 10px;
}
</style>