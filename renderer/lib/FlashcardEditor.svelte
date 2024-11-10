<script lang="ts">
    import { fly } from 'svelte/transition'
    import { BrainIcon, Ear, RefreshCcw, Trash, Trash2Icon } from 'lucide-svelte'

    import { ReaderContext } from '../stores/ReaderContext.svelte'
    import IconButton from './IconButton.svelte'
    import { untrack } from 'svelte';


    let isFrontSelected = $state(true)
    let EditorRef: HTMLDivElement | null = null
    let EditorState =  $state({startOffset: 0, endOffset: 0})


    function handleInputKeyUp(e: KeyboardEvent) {
        const currentSelection = window.getSelection()

        const parentNode = document.getElementById('editor-textarea')

        if (!currentSelection || !parentNode) return;

        const currentRange = currentSelection.getRangeAt(0)
        EditorState = {startOffset: currentRange.startOffset, endOffset: currentRange.endOffset}
        // console.log(EditorState)
   
        ReaderContext.flashcard = { raw_back: '', raw_front: EditorRef?.innerText || 'meme c' }
        // EditorRef.innerText = ReaderContext.flashcard.raw_front
  
        console.log(ReaderContext.flashcards)


   
    }

    function handleInputKeyDown(e: KeyboardEvent) {

        if(!EditorRef) return; 

        if (e.ctrlKey && (e.key === 'b' || e.key === 'B' || e.key === 'i' || e.key === 'I')) { e.preventDefault();  return; }

    }

    $effect(() => {
        const EditorTextAreaContainerRef = document.getElementById('editor-textarea')

        if (ReaderContext.selectedFlashcard > -1)

        EditorTextAreaContainerRef.innerText = untrack(() => ReaderContext.flashcard.raw_front)
    })

    $effect(() => {

        const EditorTextAreaContainerRef = document.getElementById('editor-textarea')
        const currentSelection = window.getSelection(); 

        const range = document.createRange()
   

        if (!currentSelection || !EditorState) return

        range.setStart(EditorTextAreaContainerRef.firstChild, EditorState.startOffset)
        range.setEnd(EditorTextAreaContainerRef.firstChild, EditorState.endOffset)

        currentSelection.removeAllRanges()
        currentSelection.addRange(range)
    })


    $effect(() => {
        
        // close the modal when clicking outside
        document.addEventListener('mousedown', (event) => {
            
            const modalRef = document.querySelector("#flashcard-editor") 
            if (modalRef && 
                !modalRef.contains(event.target) 
            ) {
                console.log("ASD")
                ReaderContext.selectedFlashcard = -1
            } 
        })
    })

</script>


{#if ReaderContext.selectedFlashcard > -1}
    <div 
        id="flashcard-editor" 
        transition:fly
        class="
            h-[350px] 
            rounded-lg 
            shadow-lg 
            w-[550px] 
            bg-neutral-500 
            absolute
            flex
            flex-col 
            place-center 
            z-50"
    >
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="flex-1 p-4 text-lg font-normal" contenteditable="true" id="editor-textarea" bind:this={EditorRef} onkeydown={handleInputKeyDown} onkeyup={handleInputKeyUp}> 
       
        </div>
        <div class="flex p-4 text-neutral-400">
            <span class="font-mono flex-1">
                {ReaderContext.selectedFlashcard} {isFrontSelected ? 'FRONT' : 'BACK'}
            </span>
            <div class="flex gap-1">
                <IconButton>
                    <BrainIcon strokeWidth={1.5} size={16} />
                </IconButton>
                <IconButton>
                    <Ear strokeWidth={1.5} size={16} />
                </IconButton>
                <IconButton>
                    <RefreshCcw strokeWidth={1.5} size={16} />
                </IconButton>
                <IconButton>
                    <Trash2Icon strokeWidth={1.5} size={16} />
                </IconButton>
            </div>
        </div>

    </div>
{/if}

<style>
    .place-center {
        left: calc(50%); 
        top: 15%;
        transform: translateX(-50%);
    }
</style>