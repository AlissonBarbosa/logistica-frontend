<template>
  <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração" sub="Cadastros & Cia" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Produtos" active>
                    </b-tab>
                    <b-tab title="Setores">
                    </b-tab>
                    <b-tab title="Secretarias">
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

export default {
    name: 'AdminPages',
    components: { PageTitle }
};
</script>

<style>
    .nav-item a {
        color: #333;
    }
</style>
