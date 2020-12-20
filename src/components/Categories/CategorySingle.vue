<template>
	<div>
		<div
			class="hover:bg-clrYellow-light bg-clrYellow transition-all h-16 flex items-center justify-center"
		>
			{{ category }}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CategorySingle',
		props: ['category'],
		setup() {
			return {};
		},
	};
</script>
