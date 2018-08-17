<template>
        <v-container>
            <v-layout row wrap>
            <v-flex xs11 offset-xs1>
                <p 
                class="display-3 font-weight-bold heading">
                    {{ heading }}
                </p>
            </v-flex>
            <v-flex xs12 mt-5 pt-5>
                <v-btn
                    color="accent"
                    round
                    class="button display-2"
                    @click.native="parentClick">
                    Parent
                </v-btn>
                <v-btn
                    color="accent"
                    round
                    class="button display-2"
                    @click.native="childClick">
                    Child
                </v-btn>
            </v-flex>
        </v-layout>
        </v-container>
</template>

<script>
export default {
    data() {
      return {
        heading: 'Who are you?'
      }
    },
    methods: {
        parentClick() {
            this.$router.push('parent')
        },
        childClick() {
            this.$router.push('child')
        }
    }
}
</script>

<style lang="stylus" scoped>
.heading
    color #4f4f4f //black
    font-family "FaktBlond", Helvetica, Arial, sans-serif

.button
    color white //red
    font-family "FaktBlond", Helvetica, Arial, sans-serif
    height 175px
    width 350px 
    margin-left 60px

</style>
