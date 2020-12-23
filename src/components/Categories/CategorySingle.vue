<template>
	<div>
		<div
			class="hover:bg-clrYellow-light bg-clrYellow transition-all h-16 flex items-center justify-center"
		>
			<div>
				{{ category }}
			</div>
			<!-- <div
				class="mr-16 bg-clrRed w-10 h-10 rounded-full flex justify-center items-center"
			>
				{{ categoryList.length }}
			</div> -->
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
