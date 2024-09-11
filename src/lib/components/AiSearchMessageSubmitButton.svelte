<script lang="ts">
    export let disabled: boolean = false;
</script>

<button type="submit" {disabled}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>
    </svg>
</button>

<style>
button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: orange!important;
    user-select: none;
    font-size: 2rem;
    border-radius: 50%;
    border: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;
    color: #ffffff;
}
button[disabled] {
    opacity: 0.8;
    cursor: default;
}
button:hover {
    opacity: 0.8;
}
button > svg {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
}
</style>