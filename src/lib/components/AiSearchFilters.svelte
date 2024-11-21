<script lang="ts">
import { type Filter } from '$lib/types/Filter.ts';
import Fa from 'svelte-fa';
import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';
import button from '$lib/styles/button.module.css';
import { FilterType } from '$lib/types/Filter.ts';
import { Input } from '@sveltestrap/sveltestrap';

export let appliedFilters: Filter[] = [];
export let isOpen: boolean = false;

$: meaningfulFilters = appliedFilters.filter(f => [FilterType.ARTIST_TYPE, FilterType.ARTIST_SUB_TYPE, FilterType.ARTIST_GENRE].includes(f.f));

const toggleFilters = () => {
    isOpen = !isOpen;
};
</script>

<div class="ai-search-filters">
    <button
        class={button.iconButton} 
        on:click={toggleFilters}  
        title={'Show filters'}
    >
        <Fa icon={isOpen ? faXmark : faFilter} size="lg" color="#666" />
    </button>
    
    <pre>{JSON.stringify(meaningfulFilters, null,2)}</pre>
    
    {#if isOpen}
        {#if appliedFilters.length}

            {#each meaningfulFilters as f}
                <Input type="switch" bind:checked={f.f} label={`${f.f}: ${f.v}`} />
            {/each}

            <table>
                <thead>
                    <tr>
                        <th>Applied</th>
                        <th>Key</th>
                        <th>Value</th>
                        <th>P</th>
                    </tr>
                </thead>
                <tbody>
                    {#each appliedFilters as f}
                        <tr>
                            <td>{f.f}</td>
                            <td>{f.k}</td>
                            <td>{'v' in f ? f.v : '---'}</td>
                            <td>{'p' in f ? f.p : '---'}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
    {/if}
</div>

<style>
.ai-search-filters {
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: end;
}
table {
    table-layout: fixed;
    width: 100%;
    margin-bottom: 1rem;
}
table tr th {
    text-align: left;
}
</style>