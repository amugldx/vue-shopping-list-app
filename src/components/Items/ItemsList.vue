<template>
	<div>
		<div
			class="bg-clrYellow border-4 mt-4 rounded-lg border-clrBlack hover:bg-clrYellow-light transition-all"
			v-for="item in itemsList"
			:key="item.id"
		>
			<ItemSingle
				:itemName="item.itemName"
				:quantity="item.quantity"
				:checked="item.checked"
			/>
		</div>
	</div>
</template>

<script>
	import { useStore } from 'vuex';
	import { computed } from 'vue';
	import ItemSingle from './ItemSingle.vue';

	export default {
		components: { ItemSingle },
		name: 'ItemsList',
		setup() {
			const store = useStore();
			const itemsList = computed(() => {
				return store.getters.getItemsList;
			});

			return {
				itemsList,
			};
		},
	};
</script>
