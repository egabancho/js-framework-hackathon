<template>
  <div class="hello">
    <count />
    <loading />
    <search-bar />
    <search-results />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import SearchResults from '@/components/SearchResults'
import Count from '@/components/Count'
import Loading from '@/components/Loading'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchView',
  components: {SearchBar, SearchResults, Count, Loading},
  methods: mapActions([
    'fetch',
    'update',
  ]),
  watch: {
    '$route' (to, from) {
      this.update(this.$route.query)
    }
  },
  mounted () {
    this.update(this.$route.query)
  },
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
