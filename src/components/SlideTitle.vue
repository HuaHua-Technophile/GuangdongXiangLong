<template>
  <div
    class="text-center text-xlxl fs-1 fw-bold flex-shrink-0"
    style="text-shadow: 0 0 5px white"
    :style="[props.pt ? 'paddingTop : 4rem' : '']">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      pt?: boolean;
    }>(),
    { pt: false }
  );
</script>
