<template>
  <v-layout xs12 class="layout">
    <v-card class="card">
      <div class="image"></div>
      <audio autoplay>
        <source src="../assets/1.mp3" type="audio/mpeg">
      </audio>
    </v-card>
  </v-layout>
</template>

<style lang="stylus" scoped>
  .layout
    width 100%
    height 100%
    .card
      width 100%
      height 100%
      .image
        width 100%
        height 100%
        background-image: url('../assets/ISB_Georg.png')
        background-size cover
        background-repeat no-repeat
</style>

