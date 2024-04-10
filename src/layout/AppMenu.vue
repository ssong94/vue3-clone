<script setup>
import { ref } from 'vue'

import AppMenuItem from './AppMenuItem.vue'
import menus from '@/js/menu.js'

const model = ref(menus);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
