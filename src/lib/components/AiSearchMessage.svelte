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
    border: 2px solid #80f1f1;
}
.ai-search-message > p {
    font-weight: bold;
}
.ai-search-message > div {
    color: #14c5cc;
}
</style>