<template>
    <div class="department-admin">
        <b-form>
            <input id="department-id" type="hidden" v-model="department.id">
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Setor" label-for="department-name">
                        <b-form-input id="department-name" type="text" v-model="department.name"/>
                    </b-form-group>
                </b-col>
                <b-col md="3" sm="12">
                    <b-form-group label="Secretaria" label-for="department-name">
                        <b-form-select v-model="department.secretaryId" :options="secretariats" value-field="id" text-field="initial"></b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-button variant="primary" class="mr-2" v-if="mode === 'save' || mode === 'remove'"
                        @click="save">Salvar</b-button>
                     <b-button variant="danger" class="mr-2" v-if="mode === 'remove'"
                        @click="remove">Remover</b-button>
                    <b-button v-if="mode === 'remove'"
                        @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>
        <br>
        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit" />
        <b-table hover striped :items="departments" :fields="fields" @row-clicked="loadDepartment" />
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'DepartmentAdmin',
    data: function() {
        return {
            mode: 'save',
            department: {},
            departments: [],
            secretariats: [],
            page: 1,
            limit: 0,
            count: 0,
            fields: [
                {key: 'name', label: 'Setor'},
                {key: 'secretaryId', label: 'Secretaria'},
            ]
        }
    }, methods: {
        loadDepartments() {
            const url = `${baseApiUrl}/departments?page=${this.page}`
            axios.get(url).then(res => {
                this.departments = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit
            })
            this.loadSecretariats()
        },
        loadDepartment (department) {
            this.mode = 'remove'
            this.department = { ...department }
            this.loadSecretariats()
        },
        loadSecretariats() {
            const url = `${baseApiUrl}/secretariats`
            axios.get(url).then(res => {
                this.secretariats = res.data.data
            })
        },
        save() {
            const method = this.department.id ? 'put' : 'post'
            const id = this.department.id ? `/${this.department.id}` : ''
            axios[method](`${baseApiUrl}/departments/${id}`, this.department)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        reset() {
            this.mode = 'save'
            this.department = {}
            this.loadDepartments()
        },
        remove() {
            const id = this.department.id
            axios.delete(`${baseApiUrl}/departments/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        }

    }, watch: {
        page() {
            this.loadDepartments()
        }
    }, mounted() {
        this.loadDepartments()
    }
};
</script>

<style>

</style>
