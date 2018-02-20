<template>
  <div>
    <h1>RESULTS</h1>
      <search-item
        v-for="item in $store.state.search.results"
        :item='item'
        :key='item.id'>
      </search-item>
  </div>
</template>

<script>
import SearchItem from '@/components/SearchItem'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'search-results',
  components: {SearchItem},
  data () {
    return {}
  },
  computed: mapGetters([
  ]),
  methods: mapActions([
  ])
}
</script>
