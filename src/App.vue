<template>
    <div id="app" :class="{'hide-menu' : !isMenuVisible}">
        <Header title="Logística - PMCG" :hideToggle="false"/>
        <Menu />
        <Content />
        <Footer />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from "./components/template/Header"
import Content from "./components/template/Content"
import Menu from "./components/template/Menu"
import Footer from "./components/template/Footer"

export default {
    name: 'app',
    components: { Header, Menu, Content, Footer },
    computed: mapState(['isMenuVisible'])
}
</script>

<style>
    * {
        font-family: 'Rubik', sans-serif;
    }

    body {
        margin: 0;
    }

    #app {
        --webkit-font-smoothing: antialiased;
        --moz-osx-font-smoothing: grayscale;

        height: 100vh;
        display: grid;
        grid-template-rows: 60px 1fr 40px;
        grid-template-columns: 300px 1fr;
        grid-template-areas:
            "header header"
            "menu content"
            "footer footer";
    }

    #app.hide-menu {
        grid-template-areas:
            "header header"
            "content content"
            "footer footer";
    }

</style>
