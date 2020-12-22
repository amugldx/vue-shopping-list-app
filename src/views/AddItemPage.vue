<template>
	<div class="mt-20 mx-40">
		<div class="flex justify-center text-4xl">Add Item</div>
		<div class="my-10 flex justify-end">
			<AppButton to="/" color="bg-clrRed hover:bg-clrRed-light"
				>Cancel</AppButton
			>
		</div>
		<div>
			<form class="mt-40" @submit.prevent="addItem">
				<div class="mt-6 flex justify-center items-center">
					<label class="w-40 flex-none text-2xl mr-8" for="itemName"
						>Item Name</label
					>
					<div class="flex flex-col w-full">
						<input
							v-model.trim="itemName"
							class="focus:outline-none flex-grow p-4 rounded-xl bg-clrPurple focus:bg-clrPurple-light hover:bg-clrPurple-light border-clrBlack border-4"
							type="text"
							id="itemName"
							name="itemName"
						/>
						<div class="text-clrRed">{{ itemErrors[0] }}</div>
					</div>
				</div>
				<div class="mt-6 flex justify-center items-center">
					<label class="w-40 flex-none text-2xl mr-8" for="category"
						>Category</label
					>
					<div class="w-full flex flex-col">
						<input
							v-model.trim="category"
							class="focus:outline-none flex-grow p-4 rounded-xl bg-clrPurple focus:bg-clrPurple-light hover:bg-clrPurple-light border-clrBlack border-4"
							type="text"
							id="category"
							name="category"
						/>
						<div class="text-clrRed">{{ categoryErrors[0] }}</div>
					</div>
				</div>
				<div class="mt-6 flex justify-center items-center">
					<label class="w-40 flex-none text-2xl mr-8" for="quantity"
						>Quantity</label
					>
					<div class="w-full flex flex-col">
						<input
							v-model.trim="quantity"
							class="focus:outline-none flex-grow p-4 rounded-xl bg-clrPurple focus:bg-clrPurple-light hover:bg-clrPurple-light border-clrBlack border-4"
							type="text"
							id="quantity"
							name="quantity"
						/>
						<div class="text-clrRed">{{ quantityErrors[0] }}</div>
					</div>
				</div>
				<div class="flex justify-end mt-16">
					<AppButton
						type="submit"
						color="bg-clrGreen hover:bg-clrGreen-light px-8"
						>Done</AppButton
					>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	// import { ref } from 'vue';
	import { useField, useForm } from 'vee-validate';
	import * as yup from 'yup';
	import { useRouter } from 'vue-router';
	import { useStore } from 'vuex';

	import AppButton from '../components/UI/AppButton.vue';

	export default {
		components: { AppButton },
		name: 'AddItemPage',
		setup() {
			const router = useRouter();
			const store = useStore();

			const { form, handleSubmit } = useForm();
			const { value: itemName, errors: itemErrors } = useField(
				'itemName',
				yup.string().required(),
				{ form },
			);
			const { value: category, errors: categoryErrors } = useField(
				'category',
				yup.string().required(),
				{ form },
			);
			const { value: quantity, errors: quantityErrors } = useField(
				'quantity',
				yup.string().required(),
				{ form },
			);

			const addItem = handleSubmit((values, actions) => {
				const id = Date.now() + (Math.random() * 100000).toFixed();
				const newItem = {
					id: id,
					category:
						values.category.charAt(0).toUpperCase() + values.category.slice(1),
					itemName:
						values.itemName.charAt(0).toUpperCase() + values.itemName.slice(1),
					quantity:
						values.quantity.charAt(0).toUpperCase() + values.quantity.slice(1),
				};
				console.log(newItem);
				store.dispatch('addItem', newItem);
				actions.resetForm();
				router.push('/');
			});

			return {
				addItem,
				itemName,
				itemErrors,
				category,
				categoryErrors,
				quantity,
				quantityErrors,
			};
		},
	};
</script>
