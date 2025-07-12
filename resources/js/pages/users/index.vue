<script setup lang="ts">
import Pagination from '@/components/pagination.vue';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/AppLayout.vue';
import type { BreadcrumbItem } from '@/types/index.js';
import { PaginatedResponse } from '@/types/paginateResponse';
import { User } from '@/types/users';
import { Head } from '@inertiajs/vue3';
import { PenLine } from 'lucide-vue-next';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        title: 'Пользователи',
        href: '/users',
    },
];

interface Props {
    users: PaginatedResponse<User>;
}

const props = defineProps<Props>();
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Пользователи" />
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead class="w-[100px]"> ID</TableHead>
                    <TableHead>Имя</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Логин</TableHead>
                    <TableHead>Роль</TableHead>
                    <TableHead class="text-right">Действие</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow v-for="user in props.users.data" :key="user.id">
                    <TableCell class="font-medium">
                        {{ user.id }}
                    </TableCell>
                    <TableCell>{{ user.name }}</TableCell>
                    <TableCell>{{ user.email }}</TableCell>
                    <TableCell>{{ user.login }}</TableCell>
                    <TableCell>
                        {{ user.role }}
                    </TableCell>
                    <TableCell class="text-right">
                        <Button variant="ghost">
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button variant="ghost" aria-label="Редактировать" size="sm" class="text-blue-400">
                                        <PenLine />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p aria-label="Редактировать">Редактировать</p>
                                </TooltipContent>
                            </Tooltip>
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <Pagination
            :current_page="props.users.current_page"
            :first_page_url="props.users.first_page_url"
            :from="props.users.from"
            :last_page="props.users.last_page"
            :last_page_url="props.users.last_page_url"
            :links="props.users.links"
            :next_page_url="props.users.next_page_url"
            :path="props.users.path"
            :per_page="props.users.per_page"
            :prev_page_url="props.users.prev_page_url"
            :to="props.users.to"
            :total="props.users.total"
        />
    </AppLayout>
</template>
