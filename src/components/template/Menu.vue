<template>
    <aside class="menu" v-show="isMenuVisible">
        <div class="main-menu">
            <ul>
                <li><router-link to="/"><i class="fa fa-home"></i>Home</router-link></li>
                <li><router-link to="/saida"><i class="fa fa-truck"></i>Saída</router-link></li>
                <li><router-link to="/entrada"><i class="fa fa-cart-arrow-down"></i>Entrada</router-link></li>
                <li><router-link to="/admin"><i class="fa fa-cogs"></i>Administração</router-link></li>
                <li><a href="#"><i class="fa fa-bar-chart-o"></i>Relatórios</a></li>
            </ul>
        </div>
    </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Menu',
    props: {
        title: String
    },
    computed: mapState(['isMenuVisible'])
}
</script>

<style>
    .menu {
        grid-area: menu;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background:#efefef;
    }

    .main-menu {
        padding: 0;
        margin-left: 0;
        background: #efefef;
    }

    .main-menu .fa {
        width: 26px;
        opacity: .99;
        display: inline-block;
        font-family: FontAwesome;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
    }

    .main-menu ul {
        list-style-type: none;
        padding: 0px 10px;
        
    }

    .main-menu li:hover {
        background-color: #DDD;
    }

    .main-menu li {
        border: 1px solid;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 5px 4px rgba(196,210,116);
        margin-bottom: 5px;
    }

    .main-menu li a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        text-shadow: rgba(246, 248, 246, 0.25) 0 -1px 0;
        position: relative;
        display: block;
        padding: 10px 10px 12px;
        font-size: 18px;
    }


    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
</style>
