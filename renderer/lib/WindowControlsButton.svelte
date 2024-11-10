<script lang="ts">

    const HIGHLIGHT_COLOR = '#FFFFFF'
    const IDLE_COLOR = '#737373'

    const { icon, onclick } = $props()

    let color = $state('#737373')
    
    const handleHoverEffect = () =>  {
        color = HIGHLIGHT_COLOR
    }

    function handleRemoveHoverEffect() {
        color = IDLE_COLOR
    }


</script>

<button 
    class="px-2 h-full hover:bg-neutral-800 appbar-item" 
    onmouseenter={handleHoverEffect} 
    onmouseleave={handleRemoveHoverEffect}
    {onclick}
>
    {@render icon(color)}
</button>