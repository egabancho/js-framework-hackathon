<template>
  <div>
    <b-pagination
       :total="$store.state.search.total"
       :current.sync="page"
       :size="$store.getters.getSize"
       :simple="isSimple"
       :rounded="isRounded"
       @change="(page) => {update({page:page})}"
       :per-page="$store.getters.getSize">
    </b-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'pagination',
  data () {
    return {
      page: this.$store.getters.getCurrentPage,
      isSimple: false,
      isRounded: false
    }
  },
  mounted: function () {
    this.page = this.$store.getters.getCurrentPage;
  },
  methods: mapActions([
    'update'
  ])
}
</script>
