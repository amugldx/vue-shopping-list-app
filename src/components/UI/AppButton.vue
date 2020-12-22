<template>
	<div>
		<div v-if="to">
			<router-link
				class="border-clrBlack border-4 px-4 py-2 text-xl transition-all rounded-lg"
				:to="to"
				:class="color"
				><slot
			/></router-link>
		</div>
		<div v-else>
			<button
				@click="$emit('btn-clicked')"
				class="border-clrBlack border-4 px-4 py-2 text-xl transition-all rounded-lg focus:outline-none active:outline-none"
				:class="color"
				:type="type ? type : 'button'"
				><slot
			/></button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AppButton',
		props: ['color', 'to', 'type'],
		setup() {
			return {};
		},
	};
</script>
