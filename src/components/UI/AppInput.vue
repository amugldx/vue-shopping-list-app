<template>
	<div>
		<div class="mt-6 flex justify-center items-center">
			<label class="w-40 flex-none text-2xl mr-8" :for="id"><slot /></label>
			<input
				class="w-full focus:outline-none flex-grow p-4 rounded-xl bg-clrPurple focus:bg-clrPurple-light hover:bg-clrPurple-light border-clrBlack border-4"
				type="text"
				:id="id"
				:name="id"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AppInput',
		props: ['id'],
		setup() {
			return {};
		},
	};
</script>
