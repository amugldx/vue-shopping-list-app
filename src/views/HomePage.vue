<template>
	<div class="mt-20 mx-28">
		<div class="flex justify-center text-4xl">Shopping List</div>
		<div class="mt-16 flex justify-center">
			<AppButton color="bg-clrPurple hover:bg-clrPurple-light" to="/add"
				>Add New Item</AppButton
			>
		</div>
		<div class="flex flex-row mt-10">
			<div class="mr-4 w-2/3">
				<ItemsList />
			</div>
			<div class="ml-4 w-1/3">
				<CategoriesList />
			</div>
		</div>
	</div>
</template>

<script>
	import CategoriesList from '../components/Categories/CategoriesList.vue';
	import ItemsList from '../components/Items/ItemsList.vue';
	import AppButton from '../components/UI/AppButton.vue';
	export default {
		components: { ItemsList, AppButton, CategoriesList },
		name: 'HomePage',
		setup() {
			return {};
		},
	};
</script>
