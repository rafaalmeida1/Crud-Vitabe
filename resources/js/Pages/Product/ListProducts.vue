<script setup>
    import { Link } from '@inertiajs/vue3';

    defineProps({
        products: Object
    })
</script>

<template>
    <div class="p-3 w-full lg:w-[1280px] mx-auto mt-10 transition-all">
        <Link href="/product/create" class="p-2 bg-green-500 rounded-2xl text-white hover:opacity-70">Create Product </Link>
        <table class="w-full rounded-lg text-left mt-5 overflow-x-auto">
            <thead class=" bg-gray-950 text-white">
                <th class="pl-2">ID</th>
                <th class="pl-2">Name</th>
                <th class="pl-2">Price</th>
                <th class="pl-2">Quantity</th>
                <th class="text-center">Actions</th>
            </thead>
            <tbody class="text-black">
                <tr class="border rounded-lg" v-for="product in products" :key="product.name + product.id">
                    <td class="border-r pl-2">{{product.id}}</td>
                    <td class="border-r pl-2">{{product.name}}</td>
                    <td class="border-r pl-2">{{product.price}}</td>
                    <td class="border-r pl-2">{{product.quantity}}</td>
                    <td class="flex gap-1 items-center justify-center">
                        <Link :href="`/product/${product.id}/edit`" class="p-3 text-white bg-green-500">Edit</Link>
                        <Link :href="`/product/${product.id}`" method="delete" class="p-3 text-white bg-red-500">Delete</Link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
