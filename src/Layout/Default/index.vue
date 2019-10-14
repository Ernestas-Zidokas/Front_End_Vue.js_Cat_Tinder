<template>
  <main>
    <Header />
    <KeepAlive v-if="!this.$route.meta.noKeepAlive">
      <slot />
    </KeepAlive>
    <div v-else>
      <slot />
    </div>
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
