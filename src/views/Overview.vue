<template>
	<Header title="Speelpleinen" />

	<!-- <button @click="Logout">Log out</button> -->

	<main class="overview">
		<div @click="Transition" class="overview__banner">
			<img src="https://picsum.photos/350/200?random=1" class="banner__image"/>
			<div class="banner__details">
				<h2 class="banner__title">Speelplein Assenede</h2>
				<div class="banner__info-wrapper">
					<Icon name="info" classname="banner__info"/>
				</div>
			</div>
		</div>

		<h1 class="overview__others">Andere speelpleinen</h1>

		<div @click="Transition" class="overview__banner">
			<img src="https://picsum.photos/350/200?random=2" class="banner__image"/>
			<div class="banner__details">
				<h2 class="banner__title">Speelplein Assenede</h2>
				<div class="banner__info-wrapper">
					<Icon name="info" classname="banner__info"/>
				</div>
			</div>
		</div>
		<div @click="Transition" class="overview__banner">
			<img src="https://picsum.photos/350/200?random=3" class="banner__image"/>
			<div class="banner__details">
				<h2 class="banner__title">Speelplein Assenede</h2>
				<div class="banner__info-wrapper">
					<Icon name="info" classname="banner__info"/>
				</div>
			</div>
		</div>
		<div @click="Transition" class="overview__banner">
			<img src="https://picsum.photos/350/200?random=4" class="banner__image"/>
			<div class="banner__details">
				<h2 class="banner__title">Speelplein Assenede</h2>
				<div class="banner__info-wrapper">
					<Icon name="info" classname="banner__info"/>
				</div>
			</div>
		</div>
		<div @click="Transition" class="overview__banner">
			<img src="https://picsum.photos/350/200?random=5" class="banner__image"/>
			<div class="banner__details">
				<h2 class="banner__title">Speelplein Assenede</h2>
				<div class="banner__info-wrapper">
					<Icon name="info" classname="banner__info"/>
				</div>
			</div>
		</div>
		<div @click="Transition" class="overview__banner">
			<img src="https://picsum.photos/350/200?random=6" class="banner__image"/>
			<div class="banner__details">
				<h2 class="banner__title">Speelplein Assenede</h2>
				<div class="banner__info-wrapper">
					<Icon name="info" classname="banner__info"/>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	methods: {
		Transition(e) {
			let el = e.currentTarget;

			let { top, left } = el.getBoundingClientRect();

			let header = document.querySelector(".header");
			let headerHeight = window.getComputedStyle(header).height;
			let topOffset = parseInt(headerHeight) - 30;

			el.style.zIndex = "5";
			el.style.transform = `translate(-${left}px, -${top - topOffset}px)`;
			el.style.width = "100vw";
			el.style.borderRadius = "0";

			setTimeout(() => {
				this.$router.push("/toys");
			}, 500);
		},
	},
};
</script>

<style lang="scss">
.overview {
	margin: 0 auto;
	margin-top: calc(#{$headerHeight} + #{$offset});
	@include columns('width', 8);
	
}

.overview__others {
	font-size: 2rem;
	padding-top: 1em;
	margin-bottom: 1em;
	font-weight: 400;
	@include columns('margin-left', 0.5);
}

.overview__banner {
	height: 20vh;
	background: lightblue;
	margin-bottom: 3em;
	transition: all 0.5s $animate-ease;
	width: 100%;
	border-radius: 1rem;
	overflow: hidden;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		color: rgba($color: $color-white, $alpha: 0.44);
		background: linear-gradient(to bottom, rgba($color: $color-white, $alpha: 0.44) 0%, rgba($color: $color-black, $alpha: 0.35) 70%);
		z-index: 1;
	}
}

.banner__image {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.banner__details {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	// height: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: $color-white;
	padding-bottom: 1rem;
	z-index: 2;
}

.banner__title {
	flex: 1;
	font-size: 2rem;
	@include columns('padding-left', 0.5);
}

.banner__info-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	@include columns('width', 1);
}

.banner__info {
	width: 50%;

	& .info__circle {
		stroke: $color-orange-accent;
		// color: $color-orange-accent;
	}
}
</style>