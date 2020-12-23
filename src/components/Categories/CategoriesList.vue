<template>
	<div>
		<div
			class="bg-clrPurple rounded-lg border-4 mt-4 border-clrBlack flex items-center justify-center font-bold text-2xl p-4"
			>Categories</div
		>
		<transition-group
			tag="div"
			enter-active-class="animate__animated animate__fadeIn animate__fast"
			leave-active-class="animate__animated animate__fadeOut animate__fast"
		>
			<div
				class="border-4 mt-4 rounded-lg border-clrBlack"
				v-for="cat in categoriesList"
				:key="cat"
			>
				<CategorySingle :category="cat" />
			</div>
		</transition-group>
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
				return store.getters.getCategories;
			});

			return {
				categoriesList,
			};
		},
	};
</script>
