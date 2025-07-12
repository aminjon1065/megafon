<script setup lang="ts">
import { TooltipProvider } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
import type { BreadcrumbItemType } from '@/types';

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <TooltipProvider>
            <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div class="relative min-h-[100vh] flex-1 md:min-h-min dark:border-sidebar-border">
                    <slot />
                </div>
            </div>
        </TooltipProvider>
    </AppLayout>
</template>
