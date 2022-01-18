<template>
  <div>
      <div v-for="todo in getTodos" v-bind:key="todo">
         {{todo}}
      </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    computed :{
      ...mapGetters(["getTodos"])
    },
    mounted(){
      this.fetchTodos();
    },
    data(){
        return {

        }
    },
    methods:{
        ...mapActions(["fetchTodos"])
    }
}
</script>

<style>

</style>