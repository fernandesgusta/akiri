
<script lang="ts">

    import { EarIcon, RotateCcwIcon, Trash2Icon } from 'lucide-svelte'
    import { fade } from 'svelte/transition'

    type FlashcardProps = {
        front?: string
        back?: string 
        index: number
        onclick: () => void
        selected: boolean
    }

    

    let { front = $bindable(), back = $bindable(), index, selected, onclick} = $props() as FlashcardProps
    let isFrontSelected = $state(true)

    type ParserOutput = { content: string;  marked: boolean; }

    // não ta perfeito, mas funciona
    function parser(contents: string | undefined): ParserOutput[] {
        if (!contents) return []; 

        const parsedContents = [] as ParserOutput[]

        let currentExpr = ''
        let lastMarker = ''

        for (let i = 0; i < contents.length; i++) {

            // it's the start of a marked token
            if (contents[i] === '{' ) { 

               
                lastMarker =  contents[i]
            
                // save current expression
                parsedContents.push({ marked: false, content: currentExpr})
                
                currentExpr = ''
                continue
            }

            // it's the end of a marked token
            if (contents[i] === '}') {
                
                if (lastMarker !== '{') {
                    currentExpr += contents[i]
                    lastMarker = '}'
                    continue
                }   

                parsedContents.push({marked: true, content: currentExpr})

                currentExpr = ''
                continue
            }

            currentExpr += contents[i]

            if (i === contents.length -1 ) {
                parsedContents.push({marked: false, content: currentExpr})
            }
            
        }

        console.log(parsedContents)
        return parsedContents
    }

    const parsedFront = $derived(parser(front))

</script>



<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
    data-selected={selected} 
    data-flipped={!isFrontSelected}
    {onclick}
    class="
        relative
        group
        flex 
        flex-col 
        min-h-[85px]
        min-w-[283px]
        p-2
        transition-all
        bg-neutral-700 
        data-[selected='true']:bg-neutral-500 
        rounded 
        border 
        border-solid 
        border-neutral-600
        hover:bg-neutral-600
        data-[flipped='true']:border-2
        data-[flipped='true']:bg-neutral-500
        "
>
  
    <!-- Main Content -->
    {#if isFrontSelected}
        <div class="text-sm flex-1" >
            {#each parsedFront as token}
                {#if token.marked}
                    <span class="bg-sky-500 px-[4px] rounded-sm bg-opacity-45" > {token.content} </span>
                {:else}
                    <span>
                        {token.content}
                    </span>
                {/if}
            {/each}
        </div>
    {:else}
        <div class="text-sm flex-1" >
            <span >
                {back}
            </span>
        </div>
    {/if}

    <!-- Footer -->
    <div class="text-xs flex">
        <span class="font-mono flex-1 text-neutral-400">{index}  {isFrontSelected ? 'FRONT' : 'BACK'}</span> 
        <div class=" gap-2 text-neutral-400 hidden group-hover:flex">
            <button class="hover:text-white" onclick={() => {isFrontSelected = !isFrontSelected}}>
                <RotateCcwIcon strokeWidth={1.5} size={12}/>
            </button>
            <button class="hover:text-white">
                <EarIcon strokeWidth={1.5} size={12}/>
            </button>
            <button class="hover:text-white">
                <Trash2Icon strokeWidth={1.5} size={12}/>
            </button>
        </div> 
    </div>

</div>


<style>
    .front {
        transform-style: preserve-3d;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        left: 4px;
        top: 4px;
        height: 100%;
    }

    .back {
        left: 0;
        top: 0;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        transform: rotateY(180deg);
    }
</style>