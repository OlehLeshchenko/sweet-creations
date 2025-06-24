<template>
	<div class="select w-full">
		<div class="select-text mb-[12px]">{{label}}</div>
		<USelect
			color="rose"
			variant="outline"
			padding="xl"
			size="xl"
			:value="value"
			class="mb-6 w-full"
			:ui="{
				border: 'border-2 focus:border-blue-500',
				ring: 'focus:ring-2 focus:ring-blue-300'
		  	}"
			@update:modelValue="$emit('update:value', $event)"
			:options="options"
			v-bind="$attrs"
		/>
	</div>
</template>

<script lang="ts">
export default {
	name: "BaseSelect",
	inheritAttrs: false,
	props: {
		label: {
			type: String,
			required: true
		},
		value: {
			type: [String, Object],
			required: true
		},
		options: {
			type: [String, Object],
			required: true
		},
		option :{}
	},
	emits: ['update:value']
}
</script>

<style scoped>
.select-text {
	font-size: 16px !important;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0.15px;
}

</style>