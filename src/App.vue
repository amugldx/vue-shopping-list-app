<template>
	<div>
		<router-view v-slot="{ Component }">
			<transition
				mode="out-in"
				enter-active-class="animate__animated animate__fadeIn animate__faster"
				leave-active-class="animate__animated animate__fadeOut animate__faster"
			>
				<component :is="Component" />
			</transition>
		</router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		setup() {
			return {};
		},
	};
</script>
