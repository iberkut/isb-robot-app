<template>
  <div class="container">
    <div class="stream">
      <img width="100%" height="100%" src="../assets/isb-eps.gif" />
    </div>

    <div class="row1 mb-4">
      <v-btn fab dark color="accent" @click="onChild">
        <v-icon dark>child_care</v-icon>
      </v-btn>
    </div>

    <div class="row2">
      <v-btn fab dark large color="info" @click="onForward">
        <v-icon dark>arrow_drop_up</v-icon>
      </v-btn>
    </div>

    <div class="row3">
      <v-btn fab dark large color="info" @click="onLeft">
        <v-icon dark>arrow_left</v-icon>
      </v-btn>
      <v-btn fab dark large color="secondary" @click="onStop">
        <v-icon dark>stop</v-icon>
      </v-btn>
      <v-btn fab dark large color="info" @click="onRight">
        <v-icon dark>arrow_right</v-icon>
      </v-btn>
    </div>
    <div class="row2">
      <v-btn fab dark large color="info" @click="onBackward">
        <v-icon dark>arrow_drop_down</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
  import { feathersClient } from '../services/feathers-client'
  import { createSession, getSession } from '../services/session-service'

  export default {
    methods: {
      doAction(argument) {
        createSession()
        feathersClient.service('robot-action').find({
          query: {
            session: getSession(),
            [argument]: true
          }
        })
      },
      onChild() {
        this.doAction('game')
      },
      onForward() {
        this.doAction('fwd')
      },
      onStop() {
        this.doAction('stop')
      },
      onLeft() {
        this.doAction('left')
      },
      onRight() {
        this.doAction('right')
      },
      onBackward() {
        this.doAction('rev')
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .container
    width 100%

  .stream
    min-height 350px

  .row1
    display flex
    justify-content flex-end

  .row3
    display flex
    justify-content center

</style>
