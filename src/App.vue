<script setup lang="ts">
import {
  NmdDigitalHeader,
  NmdService,
  NmdServiceList,
  NmdDigitalFooter
} from '@udn-digital-center/common-components';
</script>

<template>
  <NmdDigitalHeader custom-bg="purple">聯合報</NmdDigitalHeader>
  <section class="key-visual"></section>
  <NmdService title-color="#cd2529">
    <NmdServiceList></NmdServiceList>
  </NmdService>
  <NmdDigitalFooter />
</template>

<style lang="scss">
.key-visual {
  height: 200dvh;
  background-color: blue;
}
</style>
