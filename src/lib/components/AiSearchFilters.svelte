<script lang="ts">
import { type Filter, type LocationFilter, type WhenFilter, type SuggestionPool } from '$lib/types/Filter.ts';
import Fa from 'svelte-fa';
import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';
import button from '$lib/styles/button.module.css';

export let appliedFilters: Filter[] = [];
export let notAppliedFilters: (keyof SuggestionPool)[] = [];
export let isOpen: boolean = false;
export let skippedIds: number[] = [];

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

    {#if isOpen}
        {#if appliedFilters.length}
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

        {#if notAppliedFilters.length}
            <table>
                <thead>
                    <tr>
                        <th>Not Applied</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{notAppliedFilters.join(', ')}</td>
                    </tr>
                </tbody>
            </table>
        {/if}

        {#if skippedIds?.length}
            <table>
                <thead>
                    <tr>
                        <th>Skipped Ids ({skippedIds.length})</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{skippedIds.join(', ')}</td>
                    </tr>
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