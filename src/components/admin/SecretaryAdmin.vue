<template>
    <div class="secretary-admin">
        <b-form>
            <input id="secretary-id" type="hidden" v-model="secretary.id">
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Secretaria" label-for="secretary-name">
                        <b-form-input id="secretary-name" type="text" v-model="secretary.name"/>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Sigla" label-for="secretary-initial">
                        <b-form-input id="secretary-initial" type="text" v-model="secretary.initial"/>
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
        <b-table hover striped :items="secretariats" :fields="fields" @row-clicked="loadSecretary" />
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'SecretaryAdmin',
    data: function() {
        return {
            mode: 'save',
            secretary: {},
            secretariats: [],
            page: 1,
            limit: 0,
            count: 0,
            fields: [
                {key: 'name', label: 'Secretaria'},
                {key: 'initial', label: 'Sigla'},
            ]
        }
    }, methods: {
        loadSecretariats() {
            const url = `${baseApiUrl}/secretariats?page=${this.page}`
            axios.get(url).then(res => {
                this.secretariats = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
            })
        },
        loadSecretary(secretary) {
            this.mode = 'remove'
            this.secretary = {...secretary}
        },
        reset() {
            this.mode = 'save'
            this.secretary = {}
            this.loadSecretariats()
        },
        save() {
            const method = this.secretary.id ? 'put' : 'post'
            const id = this.secretary.id ? `/${this.secretary.id}` : ''
            axios[method](`${baseApiUrl}/secretariats${id}`, this.secretary)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        }
    }, watch: {
        page() {
            this.loadSecretariats()
        }
    }, mounted() {
        this.loadSecretariats()
    }
};
</script>

<style>
</style>
