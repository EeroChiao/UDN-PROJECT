<script setup lang="ts">
import {
  NmdLoading,
  NmdDigitalHeader,
  NmdService,
  NmdServiceList,
  NmdDigitalFooter,
  NmdFullReadMore,
} from '@udn-digital-center/common-components';
</script>

<template>
  <NmdLoading />
  <NmdDigitalHeader custom-bg="purple">聯合報</NmdDigitalHeader>
  <section class="key-visual"></section>
  <NmdFullReadMore
    title="遷村難解陰霾：新工業區進駐 台灣恐有下一個大林蒲"
    content="大林蒲遷村後，原地將建301公頃「新材料循環園區」引進塑橡膠原料、肥料、化學原材料等製造業，令居民批評遷村無法解決汙染，「吹西南風，我們下風處還是汙染」。環團提醒，環境乘載有限度，高雄應加速高汙染產業轉型，若不好好治理環境，到處都會有人想遷離家園。"
    href="https://vip.udn.com/vip/index"
    img-src="https://picsum.photos/620/420/"
    pad-src="https://picsum.photos/1280/768/"
    pc-src="https://picsum.photos/2560/1080/"
    vertical="center"
    horizontal="start"
    full-height
  />

  <NmdFullReadMore
    title="遷村難解陰霾：新工業區進駐 台灣恐有下一個大林蒲"
    content="大林蒲遷村後，原地將建301公頃「新材料循環園區」引進塑橡膠原料、肥料、化學原材料等製造業，令居民批評遷村無法解決汙染，「吹西南風，我們下風處還是汙染」。環團提醒，環境乘載有限度，高雄應加速高汙染產業轉型，若不好好治理環境，到處都會有人想遷離家園。"
    href="https://vip.udn.com/vip/index"
    img-src="https://picsum.photos/1920/1080/"
    horizontal="end"
  />

  <NmdFullReadMore
    title="遷村難解陰霾：新工業區進駐 台灣恐有下一個大林蒲"
    href="https://vip.udn.com/vip/index"
    img-src="https://picsum.photos/1920/1080/"
  />
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
