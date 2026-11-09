<script setup lang="ts">
import useEmblaCarousel from 'embla-carousel-vue';
import art1 from '../assets/art/art1.png';
import art2 from '../assets/art/art2.png';
import art3 from '../assets/art/art3.png';

const art = [art1, art2, art3];

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
emblaRef;

const goToPrev = () => emblaApi.value?.scrollPrev();
const goToNext = () => emblaApi.value?.scrollNext();
</script>

<template>
	<div class="embla">
		<div
			class="embla__viewport"
			ref="emblaRef"
		>
			<div class="embla__container">
				<div
					class="embla__slide slide"
					v-for="path in art"
				>
					<img :src="path" />
				</div>
			</div>
		</div>

		<div class="button-drawer">
			<button
				class="embla__button embla__button--prev"
				@click="goToPrev"
			>
				<vue-feather type="chevron-left"></vue-feather>
			</button>
			<button
				class="embla__button embla__button--next"
				@click="goToNext"
			>
				<vue-feather type="chevron-right"></vue-feather>
			</button>
		</div>
	</div>
</template>

<style lang="css" scoped>
.button-drawer {
	display: flex;
	justify-content: center;
	gap: 8px;
}

.slide img {
	@media (max-width: 512px) {
		width: 256px;
	}
}
</style>
