
<script lang="ts">
    import WindowControlsClose from "../custom-icons/WindowControlsClose.svelte";
    import WindowControlsMaximize from "../custom-icons/WindowControlsMaximize.svelte";
    import WindowControlsMinimize from "../custom-icons/WindowControlsMinimize.svelte";
    
    import WindowControlsButton from "./WindowControlsButton.svelte";

    const handleToggleMaximizeWindow = () => window.ipcRenderer.invoke('toggle-maximize-window')
    const handleCloseWindow = () => window.ipcRenderer.invoke('close-window')
    const handleMinimizeWindow = () => window.ipcRenderer.invoke('minimize-window')

</script>

<div class="h-full flex items-center z-50">
    <WindowControlsButton onclick={handleMinimizeWindow}>
        {#snippet icon(color: string)}
            <WindowControlsMinimize strokeColor={color}/>
        {/snippet}
    </WindowControlsButton>
    <WindowControlsButton onclick={handleToggleMaximizeWindow}>
        {#snippet icon(color: string)}
            <WindowControlsMaximize strokeColor={color} />
        {/snippet}
    </WindowControlsButton>
    <WindowControlsButton onclick={handleCloseWindow}>
        {#snippet icon(color: string)}
            <WindowControlsClose strokeColor={color}/>
        {/snippet}
    </WindowControlsButton>
</div>