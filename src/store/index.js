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
			state.itemsList.push({
				id: payload.id,
				itemName: payload.itemName,
				quantity: payload.quantity,
				checked: false,
			});
			state.categories.push({
				category: payload.category,
				categoryItems: [...state.categories.categoryItems, payload.itemName],
			});
			console.log('state = ' + state);
		},
	},
	actions: {
		addItem(context, payload) {
			context.commit('addItem', payload);
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
