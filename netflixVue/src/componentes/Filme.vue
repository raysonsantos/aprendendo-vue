<template>
  <div v-bind:style="style" v-on:click="efeitoClick()" v-on:mouseout="removeEfeitoClick()" class="gui-card">
    <div class="gui-card__media">
      <img class="gui-card__img" v-bind:src="imagem"/>
    </div>
    <div class="gui-card__details">
      <div class="gui-card__title">{{titulo}}</div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['titulo', 'imagem'],
  data() {
    return {
      style: null
    }
  },
  methods: {
    efeitoClick: function() {
      this.style = 'transform: scale(1.9); margin-right: 110px;'
    },
    removeEfeitoClick: function() {
      this.style = null
    }
  }
}

</script>

<style lang="scss">

</style>
