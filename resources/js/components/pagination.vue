<script setup lang="ts">
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { PaginatedResponse } from '@/types/paginateResponse';
import { User } from '@/types/users';
const props = defineProps<PaginatedResponse<User>>();
</script>

<template>
    <Pagination
        v-slot="{ page }"
        :items-per-page="props.per_page"
        :current-page="props.current_page"
        :first-page-url="props.first_page_url"
        :from="props.from"
        :last-page="props.last_page"
        :last-page-url="props.last_page_url"
        :links="props.links"
        :next-page-url="props.next_page_url"
        :path="props.path"
        :prev-page-url="props.prev_page_url"
        :to="props.to"
        :total="30"
        :default-page="current_page"
    >
        <PaginationContent v-slot="{ items }">
            <PaginationPrevious />
            <template v-for="(item, index) in items" :key="index">
                <PaginationItem v-if="item.type === 'page'" :value="item.value" :is-active="item.value === page">
                    {{ item.value }}
                </PaginationItem>
            </template>
            <PaginationEllipsis :index="4" />
            <PaginationNext />
        </PaginationContent>
    </Pagination>
</template>
