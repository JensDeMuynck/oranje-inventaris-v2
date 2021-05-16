<template>
	<Header title="Nieuw speelgoed" />

	<div class="add-toy">
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

		<form @submit.prevent="AddToy" class="add-toy__form">
			<div class="add-toy__inputs">
				<div class="add-toy__input-group">
					<label class="add-toy__input-label">Naam speelgoed</label>
					<input
						class="add-toy__input add-toy__name"
						type="text"
						placeholder="Rode auto"
						v-model="name"
						required
					/>
				</div>
				<div class="add-toy__input-group">
					<label class="add-toy__input-label"
						>Beschrijving <span>- Optioneel</span></label
					>
					<textarea
						class="add-toy__input add-toy__description"
						v-model="description"
						placeholder="Rode Volkswagen met nummerplaat"
						@input="ResizeTextarea"
					></textarea>
				</div>
				<div class="add-toy__input-group">
					<label class="add-toy__input-label">Afbeelding</label>
					<label class="add-toy__input add-toy__file-upload">
						<div class="add-toy__file-upload-icon-wrapper">
							<Icon
								name="upload"
								classname="add-toy__file-upload-icon"
							/>
						</div>
						<img
							v-show="imagePreviewSource !== null"
							ref="imagePreviewTag"
							:src="imagePreviewSource"
							class="add-toy__file-preview"
							alt="uploaded image"
						/>
						<input
							ref="uploader"
							type="file"
							accept="image/png, image/jpeg"
							@change="imagePreview"
							required
						/>
						<progress
							class="add-toy__upload-progress"
							ref="progress"
							value="40"
							max="100"
						>
							0%
						</progress>
					</label>
				</div>
			</div>

			<div class="add-toy__buttons">
				<router-link to="/toys" class="add-toy__button add-toy__cancel"
					>Annuleer</router-link
				>
				<button class="add-toy__button add-toy__submit">
					Voeg toe
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	setup() {
		const name = ref(null)
		const description = ref(null)

		const AddToy = () => {
			console.log("adding toy...");
		};
		
		let imagePreviewSource = ref(null);
		const imagePreview = (el) => {
			let input = el.currentTarget;

			if (input.files && input.files[0]) {
				var reader = new FileReader();

				reader.onload = function (e) {
					imagePreviewSource.value = e.target.result;
				};

				reader.readAsDataURL(input.files[0]);
			}
		};

		const ResizeTextarea = (e) => {
			let el = e.currentTarget;
			el.style.height = `10rem`;
			el.style.height = `${el.scrollHeight}px`;
		}

		return {
			name,
			description,
			AddToy,
			imagePreview,
			imagePreviewSource,
			ResizeTextarea,
		};
	},
};
</script>

<style lang='scss'>
.add-toy {
	margin-top: calc(#{$headerHeight} - #{$offset} * 1.5);
	margin-bottom: 2rem;
}

.add-toy__form {
	margin: $offset;
	@include columns("width", 8);
}

.add-toy__input-group {
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
}

.add-toy__input-label {
	font-size: 1.6rem;
	font-weight: 600;
	color: $color-black;
	margin-bottom: 0.2em;

	& span {
		font-size: 1.2rem;
		font-weight: 300;
		color: rgba($color: $color-black, $alpha: 0.5);
	}
}

.add-toy__input {
	font-family: "Nunito", sans-serif;
	font-size: 1.6rem;
	color: $color-orange-accent;
	border: 1px solid $color-orange-accent;
	border-radius: 1rem;
	outline: 0;
	padding: 1.5rem 0;
	@include columns("padding-left", 0.5);
	@include columns("padding-right", 0.5);

	&::placeholder {
		color: rgba($color: $color-black, $alpha: 0.5);
	}
}

.add-toy__description {
	min-height: 10rem;
	height: 10rem;
	resize: none;
	box-sizing: border-box;
	overflow: hidden;
}

.add-toy__file-upload {
	border: 1px dashed $color-orange-accent;
	position: relative;
	min-height: 7.5rem;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}

.add-toy__file-upload-icon-wrapper {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: $color-white;
	border-radius: 50%;
	width: 5rem;
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

.add-toy__file-upload-icon {
	width: 50%;
}

.add-toy__upload-progress {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 0.5rem;
	-webkit-appearance: none;
	appearance: none;

	&[value]::-webkit-progress-bar {
		background: $color-orange-light;
	}

	&[value]::-webkit-progress-value {
		background: $color-orange-accent;
	}
}

input[type="file"] {
	// display: none;
	position: absolute;
	opacity: 0;
	width: 0;
	height: 0;
}

.add-toy__buttons {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.add-toy__button {
	font-family: "Nunito", sans-serif;
	font-size: 1.6rem;
	font-weight: 600;
	@include columns("width", 3);
}

.add-toy__cancel {
	text-align: center;
	// text-decoration: none;
	color: $color-red;
}

.add-toy__submit {
	height: 5rem;
	border: 1px solid $color-green;
	background: rgba($color: $color-green, $alpha: 0.1);
	color: $color-green;
	border-radius: 1rem;
	outline: 0;
}
</style>