<template>
	<div class="mt-20 mx-28">
		<div class="flex justify-center text-4xl">Shopping List</div>
		<div class="mt-16 flex justify-center">
			<AppButton color="bg-clrPurple hover:bg-clrPurple-light" to="/add"
				>Add New Item</AppButton
			>
		</div>
		<div v-if="items.length > 0">
			<div class="flex flex-row mt-10">
				<div class="mr-4 w-2/3">
					<ItemsList :itemsList="items" />
				</div>
				<div class="ml-4 w-1/3">
					<CategoriesList />
				</div>
			</div>
		</div>
		<div v-else class="flex justify-center mt-20 text-3xl">
			Please add an item
		</div>
	</div>
</template>

<script>
	import { useStore } from 'vuex';
	import { computed } from 'vue';
	import CategoriesList from '../components/Categories/CategoriesList.vue';
	import ItemsList from '../components/Items/ItemsList.vue';
	import AppButton from '../components/UI/AppButton.vue';
	export default {
		components: { ItemsList, AppButton, CategoriesList },
		name: 'HomePage',
		setup() {
			const store = useStore();
			const items = computed(() => {
				return store.getters.getItemsList;
			});

			return {
				items,
			};
		},
	};
</script>
