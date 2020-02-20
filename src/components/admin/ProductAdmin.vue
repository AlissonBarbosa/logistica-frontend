<template>
    <div class="product-admin">
        <b-form>
            <input id="product-id" type="hidden" v-model="product.id">
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Produto" label-for="product-description">
                        <b-form-input id="product-description" type="text" v-model="product.description"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="3" sm="12">
                    <b-form-group label="Marca" label-for="product-make">
                        <b-form-input id="product-make" type="text" v-model="product.make"/>
                    </b-form-group>
                </b-col>
                <b-col md="3" sm="12">
                    <b-form-group label="Modelo" label-for="product-model">
                        <b-form-input id="product-model" type="text" v-model="product.model"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-button variant="primary" class="mr-2" v-if="mode === 'save' || mode === 'remove'"
                        @click="save">Salvar</b-button>
                     <b-button variant="danger" class="mr-2" v-if="mode === 'remove'"
                        @click="save">Remover</b-button>
                    <b-button v-if="mode === 'remove'"
                        @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
        <br>
        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit" />
        <b-table hover striped :items="products" :fields="fields" @row-clicked="loadProduct">
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'ProductAdmin',
    data: function() {
        return {
            mode: 'save',
            product: {},
            products: [],
            page: 1,
            limit: 0,
            count: 0,
            fields: [
                {key: 'description', label: 'Produto'},
                {key: 'make', label: 'Marca'},
                {key: 'model', label: 'Modelo'},
                {key: 'quantity', label: 'Quantidade'},
            ]
        }
    },
    methods: {
        loadProducts() {
            const url = `${baseApiUrl}/products?page=${this.page}`
            axios.get(url).then(res => {
                this.products = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
            })
        },
        loadProduct(product) {
            this.mode = 'remove'
            this.product = { ...product }
        },
        reset() {
            this.mode = 'save'
            this.product = {}
            this.loadProducts()
        },
        save() {
            const method = this.product.id ? 'put' : 'post'
            const id = this.product.id ? `/${this.product.id}` : ''
            axios[method](`${baseApiUrl}/products${id}`, this.product)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
    },
    watch: {
        page() {
            this.loadProducts()
        }
    },
    mounted() {
        this.loadProducts()
    }
};
</script>

<style>
</style>
