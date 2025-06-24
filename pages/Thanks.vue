<template>
	<div class="main min-h-screen flex flex-col justify-start items-center">
		<Header/>
		<div class="container mt-[90px] flex flex-col justify-between items-center text-center">
			<div class="title">Thank you for your order!</div>
			<div class="text m-[36px_0px_36px_0px]">Wait for a call to clarify the details and choose a payment method</div>
			<BaseButton class='mb-[90px]' to="/">Continue shopping</BaseButton>
		</div>

		<Footer class=" mt-[90px] self-end"/>
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.title {
	font-size: 58px;
	font-weight: 700;
	line-height: 64px;
	letter-spacing: -0.25px;
}

.text {
	font-size: 24px;
	line-height: 32px;
}

@media screen and (max-width: 1101px) {
	.cart{
		flex-direction: column;
		align-items: center;
	}
}


</style>