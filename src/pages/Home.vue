<template>
    <div class="container d-flex justify-content-center">
        <CardComponent v-for="(book, index) in books" :key="index" :book="book"/>
    </div>
</template>

<script>
import CardComponent from '@/components/Card.vue';
import axios from 'axios';
    export default {
        name: 'HomePage',
        components: {
            CardComponent   
        },
        data() {
            return {
                books: []
            }
        },
        mounted() {
            axios.get('http://localhost:3000/books')
            .then(response => {
                this.books = response.data
                console.log(this.books)
            })
            .catch(error => {
                console.log(error)
            })
        }          
    }
</script>