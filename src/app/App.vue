<template>
  <div id="#app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>
<script>
import Layout from '../Layout/Default/index'
export default {
	name: 'App',
	components: {
		Layout
	}
}

</script>
