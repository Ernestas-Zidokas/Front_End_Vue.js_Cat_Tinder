<template>
  <footer class="footer">
    <BaseButton class="footer__button">
      ❌
    </BaseButton>
    <BaseButton class="footer__button">
      ❤️
    </BaseButton>
  </footer>
</template>

<script>
import BaseButton from '../../components/BaseButton'
export default {
	name: 'Footer',
	components: {
		BaseButton
	}
}
</script>

<style lang='scss'>
	.footer {
		display: flex;
		justify-content: space-around;
		&__button {
			cursor: pointer;
		}
	}
</style>
