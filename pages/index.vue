<template>
	<div class="main min-h-screen flex flex-col justify-start items-center">
		<Header/>
		<div class="container mt-[90px]">
			<div class="section">
				<div class="section-photo">
					<img class="photo" src="/photos/cake_section.jpg" alt="">
				</div>
				<div class="section-info">
					<div class="section-title">Cake Builder</div>
					<div class="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis
						tempor accumsan. Sed gravida, tortor sagittis tincidunt cursus, massa augue vulputate elit, in
						elementum enim erat quis nisl. In auctor sem nec justo porttitor ultricies in vitae justo.
						Integer vestibulum pulvinar magna.
					</div>
					<BaseButton to="/CakeBuilder">Try now</BaseButton>
				</div>
			</div>
			<div class="section">
				<div class="section-info">
					<div class="section-title">Our Pastries</div>
					<div class="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis
						tempor accumsan. Sed gravida, tortor sagittis tincidunt cursus, massa augue vulputate elit, in
						elementum enim erat quis nisl. In auctor sem nec justo porttitor ultricies in vitae justo.
						Integer vestibulum pulvinar magna.
					</div>
					<BaseButton>Try now</BaseButton>
				</div>
				<div class="section-photo">
					<img class="photo" src="/photos/pastries_section.jpg" alt="">
				</div>
			</div>
			<div class="section">
				<div class="section-photo">
					<img class="photo" src="/photos/seasonal_section.jpg" alt="">
				</div>
				<div class="section-info">
					<div class="section-title">Halloween sweets</div>
					<div class="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis
						tempor accumsan. Sed gravida, tortor sagittis tincidunt cursus, massa augue vulputate elit, in
						elementum enim erat quis nisl. In auctor sem nec justo porttitor ultricies in vitae justo.
						Integer vestibulum pulvinar magna.
					</div>
					<BaseButton>Try now</BaseButton>
				</div>
			</div>
		</div>
		<Footer class="self-end"/>
	</div>
</template>

<script setup>
const sections = {
		section1: {
			id: 1,
				name: '/photos/cake_section.jpg',
				photo: ''
		},
		section2: {
			id: 2,
				name: '/photos/pastries_section.jpg',
				photo: ''
		},
		section3: {
			id: 3,
				name: '/photos/pastries_section.jpg',
				photo: ''
		}
	}

</script>

<style scoped>
.section {
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	min-height: 385px;
	margin-bottom: 90px;
}

.section-info {
	max-width: 456px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

.section-title {
	text-align: center;
	font-size: 45px;
	line-height: 52px;
}

.section-text{
	color: #000;
	text-align: justify;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 150% */
	letter-spacing: 0.5px;
}
.section-photo {
	width: 50%;
}

.photo{
	width: 100%;
}

@media screen and (max-width: 1025px) {
	.section-photo, .photo {
		display: none;
	}
	.section{
		justify-content: center;
	}
	.section:nth-child(even) .section-info {
		margin-right: 0;
	}

	.section:nth-child(odd) .section-info{
		margin-left: 0;
	}
}

</style>
