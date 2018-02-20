<template>
  <div class="video">
    {{ record.metadata.title.title }}
  </div>
</template>

<script>
export default {
  name: 'item-video',
  props: ['record']
}
</script>
