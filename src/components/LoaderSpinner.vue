<template>
  <span class="loader-spinner" />
</template>

<script>
export default {
	name: 'LoaderSpinner'
}
</script>

<style lang='scss'>
	.loader-spinner {
		&:before {
			content: "";
			position: absolute;
			animation: inProgressSpinner 0.5s infinite linear;
			border: 2px solid black;
			border-radius: 100%;
			border-right-color: transparent;
			border-top-color: transparent;
			display: block;
			height: 24px;
			width: 24px;
			top: 20%;
			left: 47%;
		}
	}

	@keyframes inProgressSpinner {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(359deg);
		}
	}
</style>
