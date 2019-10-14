<template>
  <main>
    <Header />
    <keep-alive>
      <slot />
    </keep-alive>
    <Footer v-if="!this.$route.meta.noFooter" />
  </main>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
	name: 'Layout',
	components: {
		Header, Footer
	}
}
</script>

<style>
</style>
