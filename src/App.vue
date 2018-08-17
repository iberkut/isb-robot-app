<template>
  <v-app id="app">
    <v-container
      fluid
      pa-0>
      <router-view/>
    </v-container>
  </v-app>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background-color #fafafa

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

.icon
  position absolute
  top 0
  left 0
  margin 4px 40px
  width 10em
  height 10em
</style>
