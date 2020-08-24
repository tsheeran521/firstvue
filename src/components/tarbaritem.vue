<template>
  <div :style="styyle" class="tarbaritem" @click="chuanzhi" >
     <div><slot name="islot"></slot></div>
     <div><slot name="divslot"></slot></div>
     
  </div>
</template>

<script>
export default {
name:'tarbaritem',
props:{
    path:String,
}
,
computed:{
isActive(){
    return this.$route.path==this.path?true:false;
},
styyle(){
    return this.isActive?{color:'red'}:{color:'blue'}
}
},
methods:{
chuanzhi(){
    this.$router.push(this.path);
    console.log(this.path)
     console.log(this.$route.path)
}
}
}
</script>

<style>
.tarbaritem{
    flex: 1;
    text-align: center;
}
.tarbaritem i{
    margin-top:2px ;
    display: block;
    font-size: 18px;
    height: 20px;
}
.tarbaritem div{
    height: 24px;
    line-height: 24px;
}
.act{
    color: red;
}
</style>