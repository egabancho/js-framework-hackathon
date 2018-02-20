<template>
  <div class="container is-fluid">
    <search-bar/>
    <section>
      <div class="columns">
        <div class="column is-one-quarter">
          Facets
        </div>
        <div class="column is-three-quarters">
          <search-results />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import SearchResults from '@/components/SearchResults'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchView',
  components: {SearchBar, SearchResults},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
