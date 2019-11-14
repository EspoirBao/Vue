import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {http} from "@/utils/axios";

export default new Vuex.Store({
  state: {
    userphone:'',
    res:'',
    tokenX:'',
    userinfo:'',
    title:''
  },
  mutations: {
    getuserphone(state,userphone){
      state.userphone=userphone
    },
    getCode(state,userphone){
      state.userphone=userphone
    },
    getRes(state,res){
      console.log(res.data)
      state.res=res.data
    },
    setToken(state,token){
      state.tokenX=token
    },
    setUserinfo(state,userinfo){
      state.userinfo=userinfo
    },
    setTitle(state,title){
      state.title=title
    }
  },
  actions: {
    getCode({commit},{tel}){
      http.post("/espoir/api/register/getcode",{
        tel,
      })
      .then(res=>{
        commit("getRes",res)
      })
      .catch(err=>{
        commit("getRes",err)
      })
    }
  },
  modules: {
  }
})
