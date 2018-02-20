<template>
  <div>
    <p>Number of results {{ $store.state.search.results.length }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'count',
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
