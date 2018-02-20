<template>
  <div>

  <b-pagination
     :total="total"
     :current.sync="current"
     :order="order"
     :size="size"
     :simple="isSimple"
     :rounded="isRounded"
     :per-page="perPage">
  </b-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'pagination',
  data () {
  return {
        total: 200,
        current: 1,
        perPage: 20,
        order: '',
        size: '',
        isSimple: false,
        isRounded: false
    }
  },
  computed: mapGetters([

  ]),
  methods: mapActions([
  ])
}
</script>
