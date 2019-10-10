<template>
  <button
    :class="[
      'button',
      { 'button--secondary':
        secondary }]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
	name: 'BaseButton',
	props: {
		secondary: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		handleClick (e) {
			this.$emit('click', e)
		}
	}
}
</script>

<style lang="scss">
	.button {
		-webkit-appearance: none;
		border-radius: 4px;
		border: 0;
		text-transform: uppercase;
		font-size: 0.75rem;
		transition: 0.2s opacity ease;
		background-color: transparent;
		font-size: 30px;

		&:focus {
			outline: 0;
			opacity: 0.9;
		}

		&:active {
			opacity: 0.5;
		}

		&:hover {
			cursor: pointer;
		}

		&--secondary {
			font-size: 18px;
		}
	}
</style>
