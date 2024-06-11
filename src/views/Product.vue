<template>
	<div class="container main_section-content">
		<div class="main__section-btns">
			<select
				@change="sortItems()"
				v-model="sortBy"
				class="main__section-btn-dropdown"
			>
				<option value="sorting">Сортировка</option>
				<option value="price">Цена</option>
				<option value="title">Названия</option>
				<option value="stock">Количество</option>
			</select>
		</div>
		<button class="main__section-btn">
			Общее кол-во товаров-{{ items.length }}
		</button>
	</div>
	<section class="products">
		<RouterLink
			:to="`/product/${item.id}`"
			v-for="item in paginatedItems"
			:key="item.id"
			class="container products__content"
		>
			<div class="products__content-item">
				<h4>{{ item.stock }} In stock</h4>
				<img :src="item.thumbnail" alt="" />
				<h1>{{ item.title }}</h1>
				<p>{{ item.description }}</p>
				<div class="products__content-item-info">
					<span>{{ item.price }} $</span>
					<p>{{ item.discountPercentage }} %</p>
				</div>
			</div>
		</RouterLink>
	</section>
		<div class="products__item-pagination">
			<div class="products__content-item-pagination-btn">
				<button :disabled="currentPage === 1" @click="currentPage--">
					<img src="@/assets/icons/left.svg" alt="" />В Лево
				</button>
				<span>{{ currentPage }} / {{ totalPages }}</span>
				<button :disabled="currentPage === totalPages" @click="currentPage++">
					<img src="@/assets/icons/right.svg" alt="" />В право
				</button>
			</div>
		</div>
</template>

<script setup>


import { onMounted, ref, computed } from 'vue'
import axios from 'axios'
const items = ref([])

onMounted(async () => {
	try {
		const { data } = await axios.get('https://dummyjson.com/products?limit=100')
		items.value = data.products
	} catch (err) {
		
	}
})


const currentPage = ref(1)
const itemsPerPage = 12
const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage))

const paginatedItems = computed(() => {
	const startIndex = (currentPage.value - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage

	return items.value.slice(startIndex, endIndex)
})



const sortBy = ref('sorting')

function sortItems() {
	if (sortBy.value == 'price') {
		items.value.sort((a, b) => {
			const nameA = a.price
			const nameB = b.price
			if (nameA > nameB) return -1
			else 1
		})
	} else if (sortBy.value == 'title') {
		items.value.sort((a, b) => {
			const nameA = a.title.toLowerCase()
			const nameB = b.title.toLowerCase()
			if (nameA > nameB) return -1
			else 1
		})
	} else if (sortBy.value == 'stock') {
		items.value.sort((a, b) => {
			const nameA = a.stock
			const nameB = b.stock
			if (nameA > nameB) return -1
			else 1
		})
	} else {
	}
}

</script>

<style>
.products__item-pagination {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 100px;

}


a {
	color: #000;
}
.products {
	margin-top: 100px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
    margin-left: 100px;
}

.products__content-item {
	padding: 19px 16px;
	width: 306px;
	height: 543px;
	background: rgb(78, 67, 67);
	display: flex;
	flex-direction: column;
	margin-bottom: 100px;
}
.products__content-item h4 {
	background: black;
	color: #ffffff;
	padding: 5px 5px;
	width: 40%;
}
.products__content-item img {
	width: 100%;
	height: 50%;
	object-fit: contain;
}
.products__content-item p {
	margin-top: 32px;
	color: rgb(255, 255, 255);
	font-size: 16px;
	font-weight: 400;
	line-height: 20px;
}
.products__content-item-info {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.products__content-item-info p {
	background: black;
	color: #ffffff;
	padding: 5px 5px;
}
.products__content-item-info button {
	box-sizing: border-box;
	border: 1px solid rgb(0, 92, 103);
	padding: 5px 19px;
}
.products__content-item span {
	margin-top: 20px;
	color: rgb(255, 255, 255);
	font-size: 20px;
	font-weight: 400;
	line-height: 20px;
}
.main__section-btns {
	display: flex;
	gap: 100px;
}
.main__section-btn {
	background:  rgb(78, 67, 67);
	color: rgb(0, 0, 0);
	font-size: 18px;
	font-weight: 400;
	line-height: 20px;
	padding: 12px 12px;
}
.main__section-btn-dropdown {
	background:  rgb(78, 67, 67);
	color: rgb(0, 0, 0);
	font-size: 18px;
	font-weight: 400;
	line-height: 20px;
	padding: 12px 12px;
}
.main__section-content-btn-dropdown ul {
	margin-top: 12px;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 10px;
}
</style>
