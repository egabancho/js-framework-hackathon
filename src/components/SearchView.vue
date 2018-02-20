<template>
  <div class="hello">
    <count />
    <search-bar />
    <search-results />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import SearchResults from '@/components/SearchResults'
import Count from '@/components/count'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchView',
  components: {SearchBar, SearchResults, Count},
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
