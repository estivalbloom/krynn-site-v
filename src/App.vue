<script setup lang="ts">
import Carousel from './components/Carousel.vue';
import avatarImg from './assets/avatar.png';
</script>

<template>
	<section>
		<h1>Super Cool Art Website</h1>
		<img
			:src="avatarImg"
			class="hero-img"
		/>
	</section>
	<section>
		I make really cool art and this is where you can find it! It's on this
		page! Just keep scrolling, you're almost there! I believe in you! Why
		are you even reading this? This is random filler text I wrote. There's
		no reason to read this. No buried treasure on these shores. No hidden
		gem in this mine. Not the bottom of the barrel, an empty barrel. You're
		still here, huh? Guess you just wanna hang out. I'm not really sure what
		to say at this point, I didn't expect to need to go this far. What's up?
		How're you doing? Not like you can really answer, but I suppose that's
		your fault for hanging out with a static wall of text beyond its normal
		end. I think I'm gonna stop now, but I hope you have a nice day!
	</section>
	<section>
		<Carousel />
	</section>
	<footer>
		<div>
			<a href="">A relevant link</a>
		</div>
		<div>
			<a href="">An irrelevant link</a>
		</div>
		<div>Me © 2026</div>
	</footer>
</template>

<style lang="css" scoped>
section {
	border-bottom: 1px solid gray;
	padding-bottom: 8px;
	margin: 12px;
}

.hero-img {
	border-radius: 1000px;
	border: 6px solid palevioletred;
}

footer {
	display: flex;
	justify-content: center;
}

footer *:nth-child(n + 2)::before {
	content: '|';
	margin: 0px 8px;
}

footer a:visited {
	color: var(--text);
}
</style>
