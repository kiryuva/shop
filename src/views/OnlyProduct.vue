<template>
	<section class="onlyProduct">
		<div class="container onlyProduct__content">
			<div class="onlyProduct__content-item">
				<img :src="item?.thumbnail" alt="" />
				<h2>{{ item?.title }}</h2>
				<p>{{ item?.description }}</p>
				<span>{{ item?.price }} $</span>
			</div>
		</div>
		
		<div class="onlyProduct__content-item-img">
			<Swiper
				class="mySwiper"
				:pagination="{}"
				:navigation="true"
				:modules="[Pagination, Navigation]"
			>
				<SwiperSlide v-for="(image, index) in item?.images" :key="index">
					<img :src="image" alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/store/getItemById.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../assets/style/style.css'

const productStore = useProductStore()
const route = useRoute()
const item = ref(null)


onMounted(async () => {
	await productStore.getItemById(route.params.id)
	item.value = productStore.products
})
</script>

<style>
	.onlyProduct {
		margin-top: 100px;
	}
.onlyProduct__content-item-img {
	border-top: 4px solid rgb(0, 0, 0);
	margin-top: 20px;
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
}
.onlyProduct__content-item-img img {
	margin-top: 50px;
	width: 20%;
}
.onlyProduct__content {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.onlyProduct__content-item {
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	max-width: max-content;
	background: white;
}

.onlyProduct__content h2 {
	margin-top: 20px;
}
.onlyProduct__content img {
	width: 50%;
}
.onlyProduct__content p {
	margin-top: 10px;
	color: rgb(0, 0, 0);
	font-size: 16px;
	font-weight: 400;
	line-height: 20px;
}
.onlyProduct__content span {
	margin-top: 10px;
	color: rgb(255, 255, 255);
	background: black;
	padding: 10px;
	font-size: 20px;
	font-weight: 600;
	line-height: 24px;
}
</style>
