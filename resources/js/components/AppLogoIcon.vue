<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import logo from '@/assets/images/megafon-logo.webp';
defineOptions({
    inheritAttrs: false,
});

interface Props {
    className?: HTMLAttributes['class'];
}

defineProps<Props>();
</script>

<template>
    <img :src="logo" alt="Logo" class="dark:bg-black bg-white" :class="className" />
</template>
