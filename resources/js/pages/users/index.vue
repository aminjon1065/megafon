<script setup lang="ts">
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
    </AppLayout>
</template>
