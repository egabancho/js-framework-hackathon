<template>
  <div>
    <ul>
      <li v-for="item in $store.state.search.results">
        {{ item.metadata.title }}
        {{ item.description }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'search-results',
  data () {
    return {}
  },
  computed: mapGetters([
  ]),
  methods: mapActions([
  ])
}
</script>
