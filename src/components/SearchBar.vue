<template>
  <div>
    <p>The results {{ $store.state.search.results.length }}</p>
    <b-field>
      <b-input placeholder="Search..."
               type="search"
               icon="magnify">
      </b-input>
      <p class="control">
        <button class="button is-primary" @click="fetch">Search</button>
      </p>
    </b-field>
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
