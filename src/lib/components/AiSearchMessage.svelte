<script lang="ts">
    import font from '$lib/styles/font.module.css';

    export let message;
</script>

<div class="ai-search-message">
    <p class={`${font.base}`}>{message.content}</p>
    <div class={`${font.base}`}>Show results &gt;</div>
</div>
    
<style>
.ai-search-message {
    /* background: #14c5cc; */
    padding: 0.5rem 1rem;
    border-radius: 20px;
    border: 1px solid #14c5cc;
    color: #14c5cc;
}
.ai-search-message > p {
    color: #14c5cc;
    font-weight: bold;
}
</style>