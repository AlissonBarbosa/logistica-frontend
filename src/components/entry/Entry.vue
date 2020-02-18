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
                <b-col md="6" sm="12">
                    <b-form-group label="Entregador" label-for="entry-deliveryman">
                        <b-form-input id="entry-deliveryman" type="text"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Recebedor" label-for="entry-receiver">
                        <b-form-input id="entry-receiver" type="text"/>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'

export default {
    name: 'Entry',
    components: { PageTitle }

};
</script>

<style>
</style>
