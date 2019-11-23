<template>
  <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração" sub="Cadastros & Cia" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Produtos" active>
                        <ProductAdmin />
                    </b-tab>
                    <b-tab title="Setores">
                        <DepartmentAdmin />
                    </b-tab>
                    <b-tab title="Secretarias">
                        <SecretaryAdmin />
                    </b-tab>
                    <b-tab title="Usuários">
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ProductAdmin from './ProductAdmin'
import DepartmentAdmin from './DepartmentAdmin'
import SecretaryAdmin from './SecretaryAdmin'

export default {
    name: 'AdminPages',
    components: { PageTitle, ProductAdmin, DepartmentAdmin, SecretaryAdmin }
};
</script>

<style>
    .nav-item a {
        color: #333;
    }
</style>
