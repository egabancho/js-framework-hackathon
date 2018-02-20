<template>
  <div>
    <h1>HELLO</h1>
    <p>The results {{ $store.state.search.results.length }}</p>
    <button @click="fetch">fetch</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'search-bar',
  data () {
  return {}
  },
  computed: mapGetters([

  ]),
  methods: mapActions([
    'fetch'
  ])
}
</script>
