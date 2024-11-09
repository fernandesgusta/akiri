<script lang="ts">
     type SVGWrapperProps =  {
        strokeColor: string
    }

    const {strokeColor}: SVGWrapperProps  = $props()
</script>


<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12H16" stroke={strokeColor}/>
</svg>
    