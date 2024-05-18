<script setup>
import { inject } from 'vue'
import { useQuery } from 'vue-query'

const api = inject('api')

const { data } = useQuery('products', api.product.getProducts)
</script>

<template>
  <main>
    <ul>
      <li v-for="product in data?.products" :key="product.id">
        {{ product.brand }}
      </li>
    </ul>
  </main>
</template>
