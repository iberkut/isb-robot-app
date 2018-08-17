<template>
  <div class="container">
    <div class="stream">
      <img
        src="http://192.168.43.102:8080/?action=stream"
      />
    </div>
    <div class="row1">
      <button>
        Adult
      </button>
      <button>
        Child
      </button>
    </div>

    <div class="row2">
      <button class="top">
        Forward
      </button>
    </div>

    <div class="row3">
      <button>
        Left
      </button>
      <button>
        Start
      </button>
      <button>
        Right
      </button>
    </div>
    <div class="row2">
      <button>
        Backward
      </button>
    </div>
  </div>
</template>

<script>
  import { feathersClient } from '../services/feathers-client'

  export default {
    data() {
      return {}
    },
    methods: {
      onAdult: function () {

      },
      onChild: function () {

      },
      onTop: function () {
        feathersClient.service('robot-action').find({ query: { fwd: true } })
      },
      onLeft: function () {

      },
      onRight: function () {

      },
      onBottom: function () {

      }
    }
  }

</script>

<style lang="stylus" scoped>
  .container
    width 100%

  .stream
    min-height 240px

  .row1
    display flex
    justify-content space-between

  .row3
    display flex
    justify-content space-around

  button
    border 1px solid black
    padding 10px
    width 80px
    margin 6px 0
    border-radius 15px


</style>
