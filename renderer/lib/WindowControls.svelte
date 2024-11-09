
<script lang="ts">
    import WindowControlsClose from "../custom-icons/WindowControlsClose.svelte";
    import WindowControlsMaximize from "../custom-icons/WindowControlsMaximize.svelte";
    import WindowControlsMinimize from "../custom-icons/WindowControlsMinimize.svelte";
    
    import WindowControlsButton from "./WindowControlsButton.svelte";

</script>

<div class="h-full flex items-center ">
    <WindowControlsButton>
        {#snippet icon(color: string)}
            <WindowControlsMinimize strokeColor={color}/>
        {/snippet}
    </WindowControlsButton>
    <WindowControlsButton>
        {#snippet icon(color: string)}
            <WindowControlsMaximize strokeColor={color} />
        {/snippet}
    </WindowControlsButton>
    <WindowControlsButton>
        {#snippet icon(color: string)}
            <WindowControlsClose strokeColor={color}/>
        {/snippet}
    </WindowControlsButton>
</div>