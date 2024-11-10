<script lang="ts">
    
    import { PlusIcon, FolderDownIcon, Sidebar, ChevronLeft, Play, Eye, Languages, Info} from 'lucide-svelte'
    import { slide } from 'svelte/transition'

    import IconButton from "./IconButton.svelte"
    import WindowControls from "./WindowControls.svelte"
    import SegmentedControl from "./SegmentedControl.svelte"

    import { LayoutManager } from '../stores/LayoutManager.svelte'

    let selectedState = $state(0)

</script>

<header class="appbar h-[40px] bg-neutral-800 flex relative shadow">
    <!-- Main Toolbar Section -->
    <div class="flex-1 p-2 h-full border border-solid border-x-0 border-t-0 border-b border-neutral-700 flex items-center gap-2">
        <IconButton>
            <ChevronLeft strokeWidth={1.5} size={16}/>
        </IconButton> 

        
        
        <SegmentedControl   />
           

        <div class="flex gap-2 p-2 flex-1">
            <IconButton>
                <Play strokeWidth={1.5} size={16}/>
            </IconButton>  
            <IconButton>
                <Eye strokeWidth={1.5} size={16}/>
            </IconButton>  
            <IconButton>
                <Languages strokeWidth={1.5} size={16}/>
            </IconButton>  
        </div>



        <IconButton>
            <Info strokeWidth={1.5} size={16}/>
        </IconButton>  


    </div>

    <!-- Flashcard Panel Header Section -->
    <div 
        data-flashcard-panel-opened={LayoutManager.isFlashcardsPanelOpened}
        class="
            flex w-[300px] 
            justify-between 
            items-center 
            flex-row-reverse 
            border 
            border-solid 
            border-x-0 
            border-t-0 
            border-b 
            border-neutral-700
            transition-all
   
            relative
        "
    >
         <WindowControls /> 
         <div class="flex gap-2 p-2 z-50">
            <IconButton>
                <PlusIcon strokeWidth={1.5} size={16}/>
            </IconButton>    
            <IconButton>
                <FolderDownIcon strokeWidth={1.5} size={16}/>
            </IconButton>  
            <IconButton onclick={LayoutManager.toggleFlashcardPanel} selected={LayoutManager.isFlashcardsPanelOpened === true}>
                <Sidebar strokeWidth={1.5} size={16}/>
            </IconButton>   
        </div>
    </div>

    {#if LayoutManager.isFlashcardsPanelOpened}
        <div 
            transition:slide={{axis: 'x'}} 
            class="
            border 
            border-solid 
            border-x-0 
            border-t-0 
            border-b-neutral-900
            border-b-2
            h-full 
            border-neutral-700
            border-l
            w-[300px] 
            absolute 
            bg-neutral-900
            right-0"
        >
        </div>
    {/if}
</header>

