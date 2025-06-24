<template>
	<div class="full-cake">
		<div class="cake" :style="{background: outerIcingColor}">
			<div class="shadow" :style="{background: outerIcingShadowColor}"/>
			<div class="inside-cake" :style="{background: spongeColor}">
				<div class="flavour top-[48px]" :style="{background: fillingIcingColor}"/>
				<div class="flavour top-[115px]" :style="{background: fillingIcingColor}"/>
				<div class="flavour top-[182px]" :style="{background: fillingIcingColor}"/>
				<div class="flavour top-[250px]" :style="{background: fillingIcingColor}"/>
			</div>
		</div>
		<div class="relative max-w-[542px] h-8 bg-white rounded-[28px_28px_0px_0px] overflow-hidden">
			<img
				class="absolute w-[39px] h-8 top-0 left-[503px]"
				alt="Shadow"
				src="/public/shadow.svg"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cake",
	props:{
		outerIcing: {
			type: [String, Object],
			required: true
		},
		fillingIcing: {
			type: [String, Object],
			required: true
		},
		sponge: {
			type: [String, Object],
			required: true
		}
	},
	data() {
		return {
			outerIcingOptions: [
				{
					name: "Pink Vanilla Buttercream",
					color1: "#FAC5C4",
					color2: "#F1BEBD"
				},
				{
					name: "Blue Vanilla Buttercream",
					color1: "#CFE7E7",
					color2: "#C7DEDE"
				},
				{
					name: "Chocolate Buttercream",
					color1: "#6F4633",
					color2: "#6C4533"
				},
				{
					name: "Salted Caramel Buttercream",
					color1: "#F6DEA2",
					color2: "#EDD69D"
				},
				{
					name: "Raspberry Buttercream",
					color1: "#FBDDDC",
					color2: "#F2D4D3"
				}
			],
			fillingIcingOptions: [
				{
					name: "White Vanilla Buttercream",
					color: "#FFFEFB",
				},
				{
					name: "Pink Vanilla Buttercream",
					color: "#F8B1B0",
				},
				{
					name: "Lemon Buttercream",
					color: "#FCCE0B",
				},
				{
					name: "Cream Cheese Icing",
					color: "#FFFEFB",
				},
				{
					name: "Chocolate Buttercream",
					color: "#6F4633",
				}
			],
			spongeOptions: [
				{
					name: "Vanilla",
					color: "#FBEDCF",
				},
				{
					name: "Red Velvet",
					color: "#761515",
				},
				{
					name: "Salted Caramel",
					color: "#CCA37E",
				},
				{
					name: "Lemon",
					color: "#FDE087",
				},
				{
					name: "Chocolate Buttercream",
					color: "#422615",
				}
			],
		}
	},
	computed: {
		outerIcingColor() {
			return this.outerIcingOptions.find(item => item.name === this.outerIcing)?.color1
		},
		outerIcingShadowColor() {
			return this.outerIcingOptions.find(item => item.name === this.outerIcing)?.color2
		},
		fillingIcingColor() {
			return this.fillingIcingOptions.find(item => item.name === this.fillingIcing)?.color
		},
		spongeColor() {
			return this.spongeOptions.find(item => item.name === this.sponge)?.color
		},
	}

};
</script>

<style>
.full-cake {
	display: flex;
	//width: fit-content;
	flex-direction: column;
	align-items: center;
}

.cake {
	background-color: #fac5c4;
	border-radius: 10px 10px 0 0;
	height: 289px;
	overflow: hidden;
	position: relative;
	width: 439px;
}

.cake .shadow {
	background-color: #f1bebd;
	border-radius: 0 10px 0 0;
	height: 289px;
	left: 420px;
	position: absolute;
	top: 0;
	width: 23px;
}

.cake .inside-cake {
	background-color: #fbedcf;
	height: 269px;
	left: 6px;
	position: absolute;
	top: 15px;
	width: 213px;
}

.cake .flavour {
	background-color: #fffefb;
	height: 19px;
	left: 0;
	position: absolute;
	width: 213px;
}

@media screen and (max-width: 1040px) {
	.full-cake{
		transform: scale(0.5);
		width: 300px;
	}
}
</style>