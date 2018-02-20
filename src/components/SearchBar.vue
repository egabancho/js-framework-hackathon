<template>
  <div>
    <b-field>
      <b-input placeholder="Search..."  type="search" v-model="q" icon="magnify"></b-input>
      <p class="control">
        <button class="button is-primary" @click="update({q})">Search</button>
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
      q: null
    }
  },
  computed: mapGetters([

  ]),
  methods: mapActions([
    'update',
  ]),
  mounted: function () {
  	this.update();
  }
}
</script>
