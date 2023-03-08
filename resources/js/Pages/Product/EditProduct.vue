<script setup>
    import { Link, useForm } from '@inertiajs/vue3';

    const props = defineProps({
        product: Object
    })

    const form = useForm({
        name: props.product.name,
        price: props.product.price,
        quantity: props.product.quantity,
    })

</script>

<template>
    <div class="w-[1280px] mx-auto mt-10 transition-all">
        <Link href="/product" class="p-2 bg-gray-500 rounded-2xl text-white hover:opacity-70">List Products</Link>
        <form @submit.prevent="form.put(`/product/${product.id}`)" class="w-full mt-5 flex flex-col gap-2">
            <input type="text" placeholder="Name" class="w-full rounded-lg" v-model="form.name">
            <input type="number" placeholder="Price" class="w-full rounded-lg" v-model="form.price">
            <input type="number" placeholder="Quantity" class="w-full rounded-lg" v-model="form.quantity">
            <button class="ml-auto w-fit p-2 flex items-center justify-center border border-green-500 bg-green-500 text-white hover:bg-transparent hover:text-black rounded-lg" type="submit">Edit Product</button>
        </form>
    </div>
</template>>
