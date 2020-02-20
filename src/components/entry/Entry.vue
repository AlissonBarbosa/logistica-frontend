<template>
    <div class="entry">
        <PageTitle icon="fa fa-cart-arrow-down" main="Almoxarifado" sub="Entrada" />
        <b-form>
            <input id="entry-id" type="hidden">
            <b-row>
                <b-col md="2" sm="6">
                    <b-form-group label="Data" label-for="entry-date">
                        <b-form-input id="entry-date" type="date"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4" sm="12">
                    <b-form-group label="Entregador" label-for="entry-deliveryman">
                        <b-form-input id="entry-deliveryman" type="text"/>
                    </b-form-group>
                </b-col>
                <b-col md="4" sm="12">
                    <b-form-group label="Recebedor" label-for="entry-receiver">
                        <b-form-input id="entry-receiver" type="text"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="4" sm="12">
                    <b-form-group label="Produto">
                        <b-form-select v-model="selected" :options="products" value-field="id" text-field="description"></b-form-select>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-button @click="addItem">Adicionar Ítem</b-button>
                </b-col>
            </b-row>
            <br>
            <b-table hover striped :items="listEntry" :fields="fields"/>
        </b-form>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'

export default {
    name: 'Entry',
    components: { PageTitle },
    data() {
        return {
        selected: null,
        products: [],
        listEntry: [],
        fields: [
            {key: 'description', label: 'Produto'},
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
        addItem() {
            this.listEntry.push(this.selected)
        }
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
