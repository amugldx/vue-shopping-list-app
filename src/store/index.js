import { createStore } from 'vuex';

export default createStore({
	state: {
		itemsList: [
			{
				id: '1',
				itemName: 'Banana',
				quantity: '1 dozen',
				checked: false,
			},
			{
				id: '2',
				itemName: 'Potato',
				quantity: '1 kg',
				checked: true,
			},
		],
		categories: [
			{
				category: 'Fruits',
				categoryItems: ['Banana'],
			},
			{
				category: 'Vegetables',
				categoryItems: ['Potato'],
			},
		],
	},
	mutations: {
		addItem(state, payload) {
			const foundItem = state.itemsList.find(
				(item) => item.itemName === payload.itemName,
			);
			const foundCategoryItem = state.categories.find(
				(item) => item.category === payload.category,
			);
			if (!foundItem) {
				state.itemsList.push({
					id: payload.id,
					itemName: payload.itemName,
					quantity: payload.quantity,
					checked: false,
				});
			}
			if (foundCategoryItem) {
				if (!foundCategoryItem.categoryItems.includes(payload.itemName)) {
					foundCategoryItem.categoryItems.push(payload.itemName);
				}
			} else {
				state.categories.push({
					category: payload.category,
					categoryItems: [payload.itemName],
				});
			}
		},
		addChecked(state, payload) {
			const item = state.itemsList.find((item) => {
				return item.id === payload.id;
			});
			if (item) {
				item.checked = payload.checked;
			}
		},
	},
	actions: {
		addItem(context, payload) {
			context.commit('addItem', payload);
		},
		addChecked(context, payload) {
			context.commit('addChecked', payload);
		},
	},
	getters: {
		getItemsList(state) {
			return state.itemsList;
		},
		getCategoriesList(state) {
			return state.categories;
		},
	},
});
