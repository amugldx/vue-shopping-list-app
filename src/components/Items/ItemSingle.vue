<template>
	<div>
		<div class="flex flex-row items-center">
			<div
				@click="toggleChecked"
				class="px-4 py-2 flex-none w-1/10 transition-all"
			>
				<div v-if="checked" class="bg-clrGreen rounded-full p-1 transition-all">
					<svg
						class="w-10 h-10"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						></path>
					</svg>
				</div>
				<div v-else class="w-12 h-12 transition-all rounded-full bg-clrRed">
				</div>
			</div>
			<div class="ml-4 flex-grow w-7/10">
				{{ itemName }}<div class="text-base font-light">{{ quantity }}</div>
			</div>
			<div class="mr-6 flex-none w-2/10">
				<AppButton
					color="rounded-lg bg-clrRed hover:bg-clrRed-light"
					@btn-clicked="removeItem"
					>Remove</AppButton
				>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { useStore } from 'vuex';
	import AppButton from '../UI/AppButton.vue';
	export default {
		components: { AppButton },
		name: 'ItemSingle',
		props: ['itemName', 'quantity', 'id', 'checked'],
		setup(props) {
			const store = useStore();
			const checked = ref(false);
			const toggleChecked = () => {
				checked.value = !checked.value;
				store.dispatch('addChecked', { id: props.id, checked: checked.value });
			};
			const removeItem = () => {
				store.dispatch('removeItem', {
					id: props.id,
				});
			};

			return { toggleChecked, removeItem };
		},
	};
</script>
