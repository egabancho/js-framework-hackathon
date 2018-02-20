<template>
  <div>
    <p style="white-space: pre-line;">{{ q }}</p>
    <b-field>
      <b-input placeholder="Search..."  type="search" v-model="q" icon="magnify"></b-input>
      <p class="control">
        <button class="button is-primary" @click="fetch({q:q})">Search</button>
      </p>
    </b-field>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'search-bar',
  data () {
    return {
      q: 'dadas'
    }
  },
  computed: mapGetters([

  ]),
  methods: mapActions([
    'fetch',
    'updateQuery'
  ]),
  mounted: function () {
  	this.fetch();
  }
}
</script>
