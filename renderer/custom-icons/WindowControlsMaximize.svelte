<script lang="ts">
      type SVGWrapperProps =  {
        strokeColor: string
    }



    const {strokeColor}: SVGWrapperProps  = $props()
</script>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 8.5H8.5V15.5H15.5V8.5Z" stroke={strokeColor}/>
</svg>
    