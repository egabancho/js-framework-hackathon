<template>
  <div>
    {{ record.metadata.title.title }}
  </div>
</template>

<script>
export default {
  name: 'item-default',
  props: ['record']
}
</script>
