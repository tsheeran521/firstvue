<template>
  <div id="app">
    <router-view></router-view>
    <tarbar>
      <tarbaritem path="/home">
        <i slot="islot" class="fa fa-address-book"></i>
        <div slot="divslot">电话本</div>
      </tarbaritem>
      <tarbaritem path="/my">
        <i slot="islot" class="fa fa-address-card"></i>
        <div  slot="divslot">身份证</div>
      </tarbaritem>
      <tarbaritem path="/app">
        <i slot="islot" class="fa fa-battery"></i>
        <div  slot="divslot">电池</div>
      </tarbaritem>
      <tarbaritem path="/people">
        <i slot="islot" class="fa fa-bed"></i>
        <div slot="divslot">家具</div>
      </tarbaritem>
    </tarbar>
    {{$store.state.count}}
    <button @click="increment(16)">+</button>
    <button @click="subtion">-</button>
    {{$store.getters.powc}}
    {{$store.getters.ppowc}}
    <button @click="dst">点击</button>
  </div>
</template>

<script>
import tarbar from './views/tarbar'
import tarbaritem from "./components/tarbaritem";
export default {
  name:'app',
  components:{
    tarbar,
    tarbaritem
  },
  methods:{
     increment(data) {
    this.$store.commit('increment',{data,a:1})
  },
    subtion(){
     // this.$store.commit('decrement')
      this.$store.commit({
        type:'decrement',
        data:1
      })
    },
    dst(){
      this.$store.dispatch('dst').then(data=>{
        console.log(data)
        console.log('结束then')
      })
    }
  }
}
</script>
<style>
@import url('./assets/font-awesome-4.7.0/css/font-awesome.css');
</style>
