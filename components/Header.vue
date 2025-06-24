<template>
	<header class="header">
		<div class="header__message">
			<div class="message__inner text">FREE STANDARD SHIPPING ON ORDERS €100+</div>
		</div>
		<div class="header__content flex justify-between">
			<div class="header__icons">
				<NuxtLink to="https://www.instagram.com/" class="icons__photo"><img src="/Header/instagram.svg"
																					alt="instagram">
				</NuxtLink>
				<NuxtLink to="https://www.facebook.com/" class="icons__photo"><img src="/Header/facebook.svg"
																				   alt="facebook">
				</NuxtLink>
			</div>

			<div class="header__nav">
				<NuxtLink to="/" class="nav_link header__logo">Sweet Creations</NuxtLink>
			</div>

			<div class="header__icons w-[48px] ml-[48px]">
				<NuxtLink to='/Cart' class="icons__photo"><img src="/Header/cart.svg" alt="cart"></NuxtLink>
				<NuxtLink to='/Cart' v-if="itemCount" class="item-count size-5 absolute right-0 rounded-full bg-red-500 top-0 flex items-center justify-center">
					<div class="relative self-stretch mt-[-1.00px]font-normal text-white text-sm text-center tracking-[0.10px] leading-5">
						{{itemCount}}
					</div>
				</NuxtLink>


			</div>
		</div>
	</header>

</template>

<script setup>
	const itemCount = ref(0)

	onMounted(() => {
		const items = localStorage.getItem('items')
		if (items) {
			try {
				const parsedItems = JSON.parse(items)
				itemCount.value = parsedItems.length
			} catch (error) {
				console.error('Error parsing cart items:', error)
			}
		}
		else itemCount.value = 0;
	})
</script>

<style scoped>

.header {
	width: 100%;
	background-color: var(--primary-container-color);
}

.header__message {
	padding: 8px 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: stretch;
	text-align: center;
	color: var(--light-text-color);
	background-color: var(--secondary-container-color);
}

.header__content {
	max-width: var(--max-container-width);
	margin: auto;
	padding: 12px 20px;
	align-items: center;
	text-align: center;
}

.header__icons {
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: space-between;
	position: relative;
	//flex-shrink: 0;
}

.icons__photo {
	display: block;
}

.icons__photo img {
	height: 48px;
	width: 48px;
}

.header__nav{
	display: flex;
}

.header__logo {
	text-align: center;
	font-size: 2.5rem;
	line-height: 2.75rem;
	font-family: var(--decoration-font);
	color: var(--primary-text);
}

</style>