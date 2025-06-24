<template>
	<div class="main min-h-screen flex flex-col justify-start items-center">
		<Header/>
		<div class="container">
			<div class="cake-builder flex flex-wrap w-full items-center justify-between p-[24px_41px] m-[70px_0px] rounded-lg bg-[#F7F7F7]">
				<div class="cake-section flex flex-col items-center  justify-start">
					<div class="info-section ">
						<div class="cake-label mb-[30px]">Your own cake</div>
						<div class="price-label mb-[36px]">{{sizePrice}}€</div>
					</div>
					<Cake
						:outerIcing="outerIcing"
						:fillingIcing="fillingIcing"
						:sponge="sponge"
						class="mb-[24px]"
					/>
					<BaseButton to="/" @click="addCakeToCart">Add to cart</BaseButton>
				</div>
				<div class="ingredients-section flex flex-col items-center mt-9 w-[360px]">
					<BaseSelect
						label="Outer Icing:"
						:value="outerIcing"
						@update:value="outerIcing = $event"
						:options="outerIcingOptions"
					/>
					<BaseSelect
						label="Filling Icing:"
						:value="fillingIcing"
						@update:value="fillingIcing = $event"
						:options="fillingIcingOptions"
					/>
					<BaseSelect
						label="Sponge:"
						:value="sponge"
						@update:value="sponge = $event"
						:options="spongeOptions"
					/>
					<BaseSelect
						label="Size:"
						:value="size"
						@update:value="size = $event"
						:options="sizeOptions"
					/>
				</div>
			</div>
		</div>
		<Footer class="justify-self-end"/>
	</div>
</template>

<script setup>
const outerIcingOptions = ["Pink Vanilla Buttercream","Blue Vanilla Buttercream","Chocolate Buttercream","Salted Caramel Buttercream","Raspberry Buttercream"]
const fillingIcingOptions = ["White Vanilla Buttercream","Pink Vanilla Buttercream","Lemon Buttercream","Cream Cheese Icing","Chocolate Buttercream"]
const spongeOptions = ["Vanilla","Red Velvet","Salted Caramel","Lemon","Chocolate Buttercream"]
const sizeOptions = ["Small (15 cm in diameter)","Medium (20 cm in diameter)","Large (25 cm in diameter)"]
const sizePriceOptions = [
	{
		name:"Small (15 cm in diameter)",
		price: 72,
	},
	{
		name: "Medium (20 cm in diameter)",
		price: 82,
	},
	{
		name: "Large (25 cm in diameter)",
		price: 112,
	}
]

const outerIcing = ref(outerIcingOptions[0])
const fillingIcing = ref(fillingIcingOptions[0])
const sponge = ref(spongeOptions[0])
const size = ref(sizeOptions[0])

const sizePrice = computed(() => {
	const selectedSize = sizePriceOptions.find(item => item.name === size.value)
	return selectedSize ? selectedSize.price : sizePriceOptions[0].price
})

const addCakeToCart = () => {
	let items = []

	const existingItems = localStorage.getItem("items")
	if (existingItems) {
		try {
			items = JSON.parse(existingItems)
		} catch (error) {
			console.error("Error parsing existing items:", error)
		}
	}

	const cake = {
		id: Date.now(),
		outerIcing: outerIcing.value,
		fillingIcing: fillingIcing.value,
		sponge: sponge.value,
		size: size.value,
		amount: 1,
		price: sizePrice.value
	}

	items.push(cake)

	try {
		localStorage.setItem("items", JSON.stringify(items))
	} catch (error) {
		console.error("Error saving to cart:", error)
	}
}
</script>

<style scoped>
.cake-label{
	text-align: center;
	font-size: 2.813rem !important;
	line-height: 3.25rem;
	font-family: var(--decoration-font);
}

.price-label{
	text-align: center;
	font-size: 2.813rem !important;
	line-height: 3.25rem;
}

@media screen and (max-width: 1040px) {
	.cake-builder{
		flex-direction: column;
		align-items: center;
	}
	.ingredients-section{
		max-width: 360px !important;
		width: 100%;
	}
}
</style>