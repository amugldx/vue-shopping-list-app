<template>
	<div>
		<div
			class="bg-clrPurple rounded-lg border-4 mt-4 border-clrBlack flex items-center justify-center font-bold text-2xl p-4"
			>Categories</div
		>
		<div
			class="border-4 mt-4 rounded-lg border-clrBlack"
			v-for="cat in categoriesList"
			:key="cat.category"
		>
			<CategorySingle :category="cat.category" />
		</div>
	</div>
</template>

<script>
	import { useStore } from 'vuex';
	import { computed } from 'vue';
	import CategorySingle from './CategorySingle.vue';

	export default {
		components: { CategorySingle },
		name: 'CategoriesList',
		setup() {
			const store = useStore();
			const categoriesList = computed(() => {
				return store.getters.getCategoriesList;
			});

			return {
				categoriesList,
			};
		},
	};
</script>
