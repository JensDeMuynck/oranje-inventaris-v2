<template>
	<input type="text" ref='searchInput' name="filtr-search" value="" id="search" placeholder="Your search" data-search="">

    <div class="grid" ref='grid'>
        <div class="gutter-sizer"></div>
        <div class="grid-item" data-toy-name="giraf">
            <div></div>
        </div>
        <div class="grid-item" data-toy-name="banaan">
            <div></div>
        </div>
        <div class="grid-item" data-toy-name="basket">
            <div></div>
        </div>
        <div class="grid-item" data-toy-name="hond">
            <div></div>
        </div>
        <div class="grid-item" data-toy-name="face">
            <div></div>
        </div>
        <div class="grid-item" data-toy-name="monkey">
            <div></div>
        </div>
        <div class="grid-item" data-toy-name="homer">
            <div></div>
        </div>
        <div class="grid-item" data-toy-name="olifant">
            <div></div>
        </div>
        <div class="grid-item" data-toy-name="sketch">
            <div></div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Isotope from 'isotope-layout';
import PackeryMode from 'isotope-packery';

export default {
	setup() {
		const grid = ref(null)
		const searchInput = ref(null)

		onMounted(() => {
			console.log(searchInput.value)
			let iso

			Promise.all(Array.from(document.images)
				.filter(img => !img.complete)
				.map(img => new Promise(resolve => { img.onload = img.onerror = resolve; })))
				.then(() => {
					console.log('images finished loading');

					iso = new Isotope(grid.value, {
						layoutMode: 'packery',
						itemSelector: '.grid-item',
						percentPosition: true,
						packery: {
						gutter: '.gutter-sizer'
						}
					});
				}
			);

			searchInput.value.addEventListener('keyup', function () {
				let filterValue = this.value.toLowerCase()

				if (!filterValue) {
					iso.arrange({ filter: '*' });
					return false;
				}

				iso.arrange({
					// item element provided as argument
					filter: function (itemElem) {
						var value = itemElem.getAttribute('data-toy-name').toLowerCase();
						return value.includes(filterValue);
					}
				});
			})
		})

		return {
			grid,
			searchInput
		}
	}
}
</script>

<style>


/* ---- grid ---- */

.grid {
  background: #DDD;
  width: 50%;
  margin: 0 auto;
}

/* clear fix */
.grid:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- .grid-item ---- */

/* 5 columns, percentage width */
.grid-item,
.grid-sizer {
  width: 45%;
}

.grid-item {
  float: left;
  background: #0D8;
  border-radius: 10px;
  overflow: hidden;
}

.grid-item > div {
  display: flex;
}

.gutter-sizer { width: 10%; }

img {
  width: 100%;
}

.grid-item>div {
	height: 100px;
	background: red;
}
	
</style>