
<script lang="ts">

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const { children, onclick, selected } = $props() as { onclick: () => void, selected: boolean, children: any }

</script>
<button {onclick} class="text-neutral-400 hover:bg-neutral-700 data-[selected='true']:bg-neutral-500 data-[selected='true']:text-white rounded appbar-item p-1" data-selected={selected}>
    {@render children()}
</button>