<script lang="ts">

    import FlashcardsPanel from "./lib/FlashcardsPanel.svelte";
    import ReaderRenderer from "./lib/ReaderRenderer.svelte";
    import ReaderAppbar from "./lib/ReaderAppbar.svelte";
    import Flashcard from "./lib/Flashcard.svelte";
    import FlashcardEditor from "./lib/FlashcardEditor.svelte";

</script>

<main class="h-full w-full flex flex-col bg-neutral-900">
    <ReaderAppbar />
    <div class="flex h-full w-full">
        <div class="flex-1 relative">
            <FlashcardEditor />
            <ReaderRenderer />
        </div>
        <FlashcardsPanel />
    </div>
</main>