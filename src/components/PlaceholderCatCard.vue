<template>
  <div>
    <div class="placeholder" />
    <div class="description" />
  </div>
</template>

<script>
export default {
	name: 'PlaceholderCatCard'
}
</script>

<style lang='scss'>
	.placeholder {
		display: flex;
		position: relative;
		height: 400px;
		margin: 4px;
		border-radius: 5px;
		&:before {
			content: "";
			position: absolute;
			z-index: 0;
			height: 100%;
			width: 100%;
			background: linear-gradient(0deg, #000000cc 0%, #00000000 30%);
		}
	}
	.description {
		height: 36px;
	}
</style>
