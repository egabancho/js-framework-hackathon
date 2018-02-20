<template>
  <div>
    <h1 v-if="$store.state.search.total === 0">No results</h1>
    <search-item-proxy v-for="item in $store.state.search.results"
      :key="item.id"
      :itemComponent="itemComponentName(item)"
      :item="item">
    </search-item-proxy>
  </div>
</template>

<script>
import SearchItemProxy from '@/components/SearchItemProxy'
import config from '../utils/configure'

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'search-results',
  components: {SearchItemProxy},
  data () {
    return {}
  },
  methods: {
    itemComponentName: (item) => {
      return config.itemComponentFactory(item)
    }
  }
}
</script>
