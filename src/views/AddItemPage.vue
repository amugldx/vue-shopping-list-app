<template>
	<div class="mt-20 mx-28">
		<div class="flex justify-center text-4xl">Add Item</div>
		<div class="my-10 flex justify-end">
			<AppButton to="/" color="bg-clrRed hover:bg-clrRed-light"
				>Cancel</AppButton
			>
		</div>
		<div>
			<form class="mt-40">
				<AppInput id="itemName">Item Name</AppInput>
				<AppInput id="category">Category</AppInput>
				<AppInput id="quantity">Quantity</AppInput>
				<div class="flex justify-end mt-16">
					<AppButton to="/" color="bg-clrGreen hover:bg-clrGreen-light px-8"
						>Done</AppButton
					>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import AppButton from '../components/UI/AppButton.vue';
	import AppInput from '../components/UI/AppInput.vue';
	export default {
		components: { AppInput, AppButton },
		name: 'AddItemPage',
		setup() {
			return {};
		},
	};
</script>
