<template>
	<div>
		<transition-group
			tag="div"
			enter-active-class="animate__animated animate__fadeIn animate__fast"
			leave-active-class="animate__animated animate__fadeOut animate__fast"
		>
			<div
				class="bg-clrYellow border-4 mt-4 rounded-lg border-clrBlack hover:bg-clrYellow-light transition-all"
				v-for="item in itemsList"
				:key="item.id"
			>
				<ItemSingle
					:itemName="item.itemName"
					:quantity="item.quantity"
					:id="item.id"
					:checked="item.checked"
				/>
			</div>
		</transition-group>
	</div>
</template>

<script>
	import ItemSingle from './ItemSingle.vue';

	export default {
		components: { ItemSingle },
		props: ['itemsList'],
		name: 'ItemsList',
		setup() {
			return {};
		},
	};
</script>
