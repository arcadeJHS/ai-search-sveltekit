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
    padding: 0.5rem 1rem;
    border-radius: 20px;
    border-top-left-radius: 0;
    /* border: 2px solid #80f1f1; */

    border: 0;
    box-shadow: 2px 3px 0.4rem rgba(0, 0, 0, .15);
    box-sizing:border-box;
}
.ai-search-message > p {
    font-weight: bold;
}
.ai-search-message > div {
    color: #2d9bf0;
}
</style>