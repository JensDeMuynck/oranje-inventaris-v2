<template>
	<div class="header">
		<div class="header__go-back-wrapper" @click="GoBack">
			<Icon v-if='currentPage !== "Overview"' name="go-back" classname="header__go-back" />
		</div>
		<div class="header__page-title">{{ title }} {{  }}</div>
		<div class="header__menu-wrapper">
			<Icon name="menu" classname="header__menu" />
		</div>
	</div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
	props: ["title"],
	setup() {
		const router = useRouter();
		const currentPage = router.currentRoute.value.name

		const GoBack = () => {
			if (currentPage === 'Overview') return false
			window.scrollTo(0,0);
			router.go(-1);
		}

		return {
			currentPage,
			GoBack,
		}
	}
};
</script>

<style lang="scss">
	.header {
		display: flex;
		padding: 0 $offset;
		align-items: center;
		height: $headerHeight;
		background: $color-orange-neutral;
		border-bottom-right-radius: $offset * 1.5;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;
	}

	.header__page-title {
		flex: 1;
		text-align: center;
		color: white;
		font-size: 2rem;
		font-weight: 600;
	}

	.header__go-back-wrapper,
	.header__menu-wrapper {
		color: $color-white;
		display: flex;
		justify-content: center;
		align-items: center;

		@include columns('height', 1);
		@include columns('width', 1);
	}

	.header__go-back-wrapper > svg{
		width: 20%;
	}

	.header__menu-wrapper > svg{
		width: 50%;
	}
</style>