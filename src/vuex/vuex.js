import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        count:0
    },
    getters:{
      powc(state){
        return state.count*state.count
      },
      ppowc(state,getters){
        return getters.powc*getters.powc
      }
    },
    mutations: {
        increment (state,data) {
         // console.log(data);
          //state.count++
          //Vue.set(obj,key,value) 添加属性
          //Vue.delete(obj,key) 删除属性 响应式的
        },
        decrement(state,data){
          //console.log(data);
          state.count-=data.data
        }
      },
    actions:{
      dst(context){
        return new Promise((resolve,reject)=>{
          console.log('我接受到了dst的dispatch，将要开始异步操作')
          setTimeout(()=>{
            console.log('异步操作就要结束了')
            resolve('异步操作结束了')
          },1000)
        })
      }
    },
    modules: {
      }
})
export default store