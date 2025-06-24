<template>
	<div class="main min-h-screen flex flex-col justify-start items-center">
		<Header/>
		<div v-if="items.length > 0" class="container cart mt-[90px] flex justify-between flex-wrap">
			<div class="order-items max-w-[675px]">
				<h1 class="text-2xl font-bold mb-4">Your cart</h1>
				<div class="grid grid-cols-6 gap-4 items-center mb-5">
					<div class="category col-span-3 pl-5">Product</div>
					<div class="category text-center">Quantity</div>
					<div class="category text-center">Total</div>
				</div>
				<div class="border-t border-gray-200 pb-4 mb-4">
					<div v-for="(item, id) in items" :key="id"
						 class="grid grid-cols-6 gap-4 items-center mb-5">

						<!-- Column 1: Item Photo -->
						<div class="item-photo p-2 flex justify-center">
							<img src="/public/cake.svg" alt="">
						</div>

						<!-- Column 2: Item Info (Spans 2 Columns) -->
						<div class="item-info col-span-2">
							<h2 class="text-lg font-medium">Your own cake</h2>
							<p class="text-sm text-gray-500">SIZE: {{ item.size }}</p>
							<p class="text-sm text-gray-500">SPONGE: {{ item.sponge }}</p>
							<p class="text-sm text-gray-500">FILLING ICING: {{ item.fillingIcing }}</p>
							<p class="text-sm text-gray-500">OUTER ICING: {{ item.outerIcing }}</p>
						</div>

						<!-- Column 3: Item Counter -->
						<div class="item-counter flex items-center justify-center">
							<button class="text-gray-500 hover:text-gray-700 focus:outline-none">-</button>
							<span class="mx-2">{{ item.amount }}</span>
							<button class="text-gray-500 hover:text-gray-700 focus:outline-none">+</button>
						</div>

						<!-- Column 4: Item Price -->
						<div class="item-price text-lg font-medium flex justify-center">
							<div class="price">{{ item.price * item.amount }}€</div>
						</div>

						<!-- Column 5: Remove Button -->
						<div class="item-remove flex justify-center">
							<div class="bin cursor-pointer">
								<img src="/public/bin.svg" alt="">
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="order-info w-[370px] ">
				<h1 class="text-2xl font-bold mb-4">Order Summary</h1>
				<UForm cla:schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
					<UFormGroup size="xl" label="First Name:" name="text">
						<UInput v-model="state.firstName" />
					</UFormGroup>

					<UFormGroup size="xl" label="Last Name:" name="text">
						<UInput v-model="state.lastName" />
					</UFormGroup>

					<UFormGroup size="xl" label="Phone number:" name="text" >
						<UInput v-model="state.phone" placeholder="+421" />
					</UFormGroup>

					<UFormGroup size="xl" label="Email:" name="email">
						<UInput v-model="state.email" />
					</UFormGroup>

					<UFormGroup size="xl" label="Address:" name="text">
						<UInput v-model="state.address" />
					</UFormGroup>

					<UFormGroup size="xl" label="Notes (enter allergies if you have any):" name="text">
						<UTextarea v-model="state.notes" />
					</UFormGroup>

					<button @click="" type="submit" class="w-full">
						<BaseButton @click="makeOrder" to="/Thanks" class="w-full" >
							Buy
						</BaseButton>
					</button>
				</UForm>
			</div>
		</div>
		<div v-else class="container mt-[90px] flex flex-col justify-between items-center text-center">
			<div class="title">Your cart is empty</div>
			<div class="text m-[36px_0px_36px_0px]">Ready to find your new favorite products?</div>
			<BaseButton class='mb-[90px]' to="/">Continue shopping</BaseButton>
		</div>
<!--		<UModal v-model="isOpen">-->
<!--			<div class="p-4">-->
<!--				<Placeholder class="h-48" />-->
<!--			</div>-->
<!--		</UModal>-->
		<Footer class=" mt-[90px] self-end"/>
	</div>
</template>

<script setup lang="ts">
const items = ref([])

onMounted(() => {
	const storedItems = localStorage.getItem('items')
	if (storedItems) {
		try {
			items.value = JSON.parse(storedItems)
		} catch (error) {
			console.error('Error parsing cart items:', error)
			items.value = []
		}
	}
})

const makeOrder = () => {
	localStorage.setItem('items', [])
}

import { object, string, nonempty, type Infer } from 'superstruct'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
	firstName: string(),
	lastName: string(),
	phone: string(),
	email: string(),
	address: string(),
	notes: string(),
})

const state = reactive({
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	address: '',
	notes: ''
})

type Schema = Infer<typeof schema>

async function onSubmit(event: FormSubmitEvent<Schema>) {
	console.log(event.data)
}

const isOpen = ref(false)

const handleSubmit = () => {
	localStorage.setItem('items',[])
	isOpen.value = true
}


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