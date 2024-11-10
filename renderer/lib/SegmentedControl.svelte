<script lang="ts">

    type SegmentedControlsProps = { selectedMode: number } 

    let { selectedMode = $bindable() } = $props() as SegmentedControlsProps

    const select = (number: number) => { selectedMode = number }

</script>

<div class="p-[2px] items-center text-xs rounded-md bg-neutral-700 flex appbar-item relative">
    <div 
        class="
            bg-neutral-500 p-[2px] w-[80px] flex items-center rounded-md absolute
            data-[first-selection='true']:left-[2px]  
            data-[second-selection='true']:translate-x-[80px] 
            data-[third-selection='true']:translate-x-[160px] 
            transition-all
        " 
        data-first-selection={selectedMode === 0}
        data-second-selection={selectedMode === 1}
        data-third-selection={selectedMode === 2}
    >
        <span class="opacity-0 z-0">DUMMY</span>
    </div>


    <button 
        class="p-[2px] w-[80px] flex items-center justify-center rounded-md z-10" 
        onclick={() => select(0)}
    >
        Normal
    </button>

    <button
        class="p-[2px] w-[80px] flex items-center justify-center rounded-m z-10" 
        onclick={() => select(1)}
    >
        Reading
    </button>
    <button 
        class="p-[2px] w-[80px] flex items-center justify-center rounde z-10"  
        onclick={() => select(2)}
    >
        Listening
    </button>
</div>