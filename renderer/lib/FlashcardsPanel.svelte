
<script lang="ts">
    import { slide } from 'svelte/transition'
    import { LayoutManager } from '../stores/LayoutManager.svelte'
    import { ReaderContext } from '../stores/ReaderContext.svelte'
    import Flashcard from './Flashcard.svelte';




</script>


{#if LayoutManager.isFlashcardsPanelOpened}

    <div 
        transition:slide={{axis: 'x'}} 
        class=" 
            w-[300px] 
          bg-neutral-900 
            border-solid
            border-y-0
            border-l-neutral-700
            border-l
            border-r-0
            p-2
            gap-1
            flex
            flex-col
            scrollview
            overflow-auto
            
        "
        >   
        {#each ReaderContext.flashcards as flashcard, idx}
            <Flashcard
                onclick={() => { ReaderContext.selectedFlashcard = idx }} 
                bind:front={flashcard.raw_front} 
                bind:back={flashcard.raw_back}
                selected={ReaderContext.selectedFlashcard === idx}
                index={idx}
            />
        {/each}

    </div>


{/if}


<style>
    .scrollview {
        scrollbar-width: none;
        height: calc(100vh - 40px);
    }
</style>