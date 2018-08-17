<template>
<v-layout wrap>
    <v-flex xs3>
      <img src="../assets/logo_31-10-2017.png"/>
    </v-flex>
    <v-flex mt-5 xs12>
      <Welcome />
    </v-flex>
</v-layout>
</template>

<script>
import Welcome from '@/components/Welcome.vue'

export default {
  components: {
    Welcome
  }
}
</script>
