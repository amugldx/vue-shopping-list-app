import { createStore } from 'vuex';

export default createStore({
	state: {
		itemsList: [
			{
				id: '1',
				itemName: 'Banana',
				quantity: '1 dozen',
				category: 'Fruits',
				checked: false,
			},
			{
				id: '2',
				itemName: 'Potato',
				quantity: '1 kg',
				category: 'Vegitables',
				checked: true,
			},
		],
	},
	mutations: {
		addItem(state, payload) {
			const foundItem = state.itemsList.some(
				(item) => item.itemName === payload.itemName,
			);
			if (!foundItem) {
				state.itemsList.push({
					id: payload.id,
					itemName: payload.itemName,
					quantity: payload.quantity,
					category: payload.category,
					checked: false,
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
		removeItem(state, payload) {
			const filteredItems = state.itemsList.filter((item) => {
				return item.id !== payload.id;
			});
			state.itemsList = filteredItems;
		},
	},
	actions: {
		addItem(context, payload) {
			context.commit('addItem', payload);
		},
		addChecked(context, payload) {
			context.commit('addChecked', payload);
		},
		removeItem(context, payload) {
			context.commit('removeItem', payload);
		},
	},
	getters: {
		getItemsList(state) {
			return state.itemsList;
		},
		getCategories(state) {
			const categoryList = [];
			state.itemsList.forEach((item) => {
				categoryList.push(item.category);
			});
			const returnedList = categoryList.filter((value, index, array) => {
				return array.indexOf(value) === index;
			});
			return returnedList;
		},
	},
});
