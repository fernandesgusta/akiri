<script lang="ts">

    type SVGWrapperProps =  {
        strokeColor: string
    }

    const { strokeColor }: SVGWrapperProps  = $props()
</script>

<svg width="24" height="24" class="colored" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 8.5L8.5 15.5" stroke={strokeColor} class="colored" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M8.5 8.5L15.5 15.5" stroke={strokeColor} stroke-linecap="square" stroke-linejoin="round"/>
</svg>
