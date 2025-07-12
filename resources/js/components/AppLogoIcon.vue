<script setup lang="ts">
import horizontalLogo from '@/assets/images/horizontal-logo.png';
import logo from '@/assets/images/megafon-logo.webp';
import type { HTMLAttributes } from 'vue';

defineOptions({
    inheritAttrs: false,
});

interface Props {
    className?: HTMLAttributes['class'];
    horizontal?: boolean;
}
defineProps<Props>();
</script>

<template>
    <img :src="horizontal ? horizontalLogo : logo" alt="Logo" class="bg-white dark:bg-black" :class="className" />
</template>
