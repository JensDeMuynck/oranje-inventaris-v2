<template>
	<Header title="Speelgoed" />
	<div class="toys">
		<div class="toys__banner">
			<img
				src="https://picsum.photos/350/200?random=2"
				class="banner__image"
			/>
			<div class="banner__details">
				<h2 class="banner__title">Speelplein Assenede</h2>
				<div class="banner__info-wrapper">
					<Icon name="info" classname="banner__info" />
				</div>
			</div>
		</div>

		<div class="toys__list">
			<div class="toys__controls">
				<div class="toys__search">
					<input
						class="toys__search-input"
						type="text"
						@keyup="Filter"
						ref="searchInput"
						name="filtr-search"
						value=""
						id="search"
						placeholder="Zoek speelgoed"
						data-search=""
					/>
					<div class="toys__search-icon-wrapper" @click="Filter">
						<Icon name="search" classname="toys__search-icon" />
					</div>
				</div>
				<router-link to="/add-toy" class="toys__add-toy">
					<Icon name="plus" classname="toys__add-toy-icon" />
				</router-link>
			</div>

			<div class="grid" ref="grid">
				<div class="grid__bg-rect"></div>
				<div class="gutter-sizer"></div>
				<div class="grid-item" data-toy-name="giraf">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="banaan">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="basket">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="hond">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="face">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="monkey">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="homer">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="olifant">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="sketch">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="monkey">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="homer">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="olifant">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="sketch">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="monkey">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="homer">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="olifant">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="sketch">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="monkey">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="homer">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="olifant">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
				<div class="grid-item" data-toy-name="sketch">
					<div class="grid-item__inner">
						<img :src="Rand()" class="grid-item__image"/>
						<div class="grid-item__content">
							<h2 class="grid-item__name">Teletubbies</h2>
							<Icon name="settings" classname="grid-item__settings"></Icon>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
import Isotope from "isotope-layout";
import Packery from "isotope-packery"; // Has to be imported for safari!

export default {
	setup() {
		const grid = ref(null);
		const searchInput = ref(null);
		let iso;

		onMounted(() => {
			Promise.all(
				Array.from(document.images)
					.filter((img) => !img.complete)
					.map(
						(img) =>
							new Promise((resolve) => {
								img.onload = img.onerror = resolve;
							})
					)
			).then(() => {
				// console.log("images finished loading");

				iso = new Isotope(grid.value, {
					layoutMode: "packery",
					itemSelector: ".grid-item",
					percentPosition: true,
					packery: {
						gutter: ".gutter-sizer",
					},
				});

				let gridItems = [...document.querySelectorAll('.grid-item')]
				gridItems.forEach(item => {
					let pos = parseInt(window.getComputedStyle(item).left);
					let img = item.querySelector('img')

					if (pos !== 0) {
						img.style.borderRadius = "0 0 2rem 0";
					}
					else {
						img.style.borderRadius = "0 0 0 2rem";
					}
				});
			});
		});

		const Filter = (e) => {
			// Filter items
			const el = e.target;
			const filterValue = el.value.toLowerCase();

			if (!filterValue) {
				iso.arrange({ filter: "*" });
				return false;
			}

			iso.arrange({
				// item element provided as argument
				filter: function (itemElem) {
					var value = itemElem
						.getAttribute("data-toy-name")
						.toLowerCase();
					return value.includes(filterValue);
				},
			});

			// Update Border radius
			iso.on('arrangeComplete', function( filteredItems ) {
				filteredItems.forEach(item => {
					let el = item.element
					let img = el.querySelector('img')

					if (item.position.x !== 0) {
						img.style.borderRadius = "0 0 2rem 0";
					}
					else {
						img.style.borderRadius = "0 0 0 2rem";
					}
				});
			})
		};

		const Rand = () => {
			let w = Math.round(Math.random() * 300) + 200;
			let h = Math.round(Math.random() * 500) + 200;
			return `https://picsum.photos/${w}/${h}`
		}

		return {
			grid,
			searchInput,
			Filter,
			Rand,
		};
	},
};
</script>

<style lang='scss'>
.toys {
	margin-top: calc(#{$headerHeight} - #{$offset} * 1.5);
	margin-bottom: 2rem;
}

.toys__banner {
	height: 20vh;
	background: lightblue;
	transition: all 0.5s $animate-ease;
	width: 100%;
	overflow: hidden;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		color: rgba($color: $color-white, $alpha: 0.44);
		background: linear-gradient(
			to bottom,
			rgba($color: $color-white, $alpha: 0.44) 0%,
			rgba($color: $color-black, $alpha: 0.35) 70%
		);
		z-index: 1;
	}
}

.toys__list {
	margin: 0 $offset;
	@include columns("width", 8);
}

.toys__controls {
	display: flex;
	@include columns("margin-top", 0.5);
	@include columns("margin-bottom", 0.5);
}

.toys__search {
	display: flex;
	flex: 1;
	border: 1px solid $color-orange-accent;
	align-items: center;
	border-radius: 1rem;
	overflow: hidden;
}

.toys__search-input {
	flex: 1;
	border: 0;
	outline: 0;
	font-family: "Nunito", sans-serif;
	font-size: 1.6rem;
	font-weight: 300;

	@include columns("padding-left", 0.5);
	@include columns("height", 1);
}

.toys__search-icon-wrapper {
	background: $color-orange-light;
	height: 100%;
	color: $color-orange-accent;
	display: flex;
	justify-content: center;
	align-items: center;

	@include columns("width", 1);
}

.toys__search-icon {
	@include columns("width", 0.5);
}

.toys__add-toy {
	border: 1px solid $color-green;
	background: rgba($color: $color-green, $alpha: 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;

	@include columns("margin-left", 0.5);
	@include columns("width", 1);
}

.toys__add-toy-icon {
	color: $color-green;
}

/* ---- grid ---- */
/* clear fix */
.grid:after {
	content: "";
	display: block;
	clear: both;
}

/* ---- .grid-item ---- */

/* 5 columns, percentage width */
.grid-item,
.grid-sizer {
	@include columns("width", 3.75);
}

.grid-item {
	float: left;
}

.grid-item__inner {
	border-radius: 1rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	// height: 100px;
	border: 1px solid $color-orange-neutral;
	background: $color-white;
}

.grid-item__image {
	transition: all 0.15s $animate-ease;
}

.grid-item__content {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
}

.grid-item__name {
	font-size: 1.2rem;
	font-weight: 700;
}

.grid-item__settings {
	color: $color-orange-accent;
	width: 1.5rem;
}

.grid__bg-rect {
	position: absolute;
	background: rgba($color: $color-orange-light, $alpha: 0.5);
	border-radius: 1.5rem;
	@include columns("top", 0.5);
	@include columns("right", 0.5);
	@include columns("bottom", 0.5);
	@include columns("left", 0.5);
}

.gutter-sizer {
	@include columns("width", 0.5);
}

img {
	width: 100%;
}
</style>