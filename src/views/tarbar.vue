<template>
  <div class="tarbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
name:'tarbar'
}
</script>

<style>
.tarbar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;

    width: 100%;
    height: 49px;

    background-color: #c9c9c9;
   box-shadow: 0px -2px 0.5px  #c1c1c1;
    color: white;
}
</style>