<template>
  <component
    :is="itemComponent"
    :record="item">
  </component>
</template>

<script>
import config from '../utils/configure'

export default {
  name: 'search-item-proxy',
  components: config.itemComponents,
  props: ['item', 'itemComponent']
}
</script>
