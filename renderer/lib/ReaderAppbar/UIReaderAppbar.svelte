<script lang="ts">
    import WindowControlsClose from "../../custom-icons/WindowControlsClose.svelte";
    import WindowControlsMaximize from "../../custom-icons/WindowControlsMaximize.svelte";
    import WindowControlsMinimize from "../../custom-icons/WindowControlsMinimize.svelte";
    import WindowControlsButton from "../WindowControlsButton.svelte";

</script>

<header class="appbar h-[40px] bg-neutral-800 flex ">
    <!-- Main Toolbar Section -->
    <div class="flex-1 p-2"> French / English</div>

    <!-- Flashcard Panel Header Section -->
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
</header>

