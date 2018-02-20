<script>
import Vue from 'vue'
import config from '../utils/configure'


export default {
  name: 'search-item',
  props: ['item'],
  render( createElement ) {
    return config.itemTemplateFactory(createElement, this.item)
  }
}
</script>
