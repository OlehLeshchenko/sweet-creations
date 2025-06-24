<template>
	<NuxtLink
		:to="to"
		class="button"
	>
		<slot></slot>
	</NuxtLink>
</template>

<script>
export default {
	name: "BaseCounter",
	props: {
		to: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
.button {
	display: inline-block;
	background-color: var(--primary-text);
	color: #ffffff;
	text-align: center;
	font-size: 20px;
	font-style: italic;
	line-height: 20px;
	letter-spacing: 0.1px;
	font-weight: 400;
	padding: 16px 24px;
	border-radius: 100px;
	text-decoration: none;
	cursor: pointer;
	transition: background-color 0.3s ease;
	min-width: 265px;
}

.button:hover {
	opacity: 0.9;
}
</style>