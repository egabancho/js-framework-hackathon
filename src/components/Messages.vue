<template>
  <div>
    <p>{{ $store.state.search.loading ? 'Loading...' : '' }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'messages',
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
