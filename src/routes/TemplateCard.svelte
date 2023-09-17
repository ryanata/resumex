<script>
    export let imgLink;
    export let title;
    export let handler;
</script>

<div role="button" tabindex={-1} class="template-card" on:click={handler} on:keydown={() => {}}>
    <div class="image-container">
        <div class="image"><img class="picture" alt="template preview" src={imgLink}></div>
    </div>
    <div class="text-container">
        <p class="text">{title}</p>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inclusive+Sans&display=swap');
    .template-card {
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 200px;
        height: 295px;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(46, 46, 46, 0.19);
    }
    .template-card:hover {
        cursor: pointer;
        background-color: #F4FAFE;
    }
    .template-card:active {
        background-color: #EAF2F8;
    }

    .image-container {
        display: flex;
        flex: 2;
        justify-content: center;
        align-items: center;
    }
    
    .image {
        
        width: 90%;
        height: 92%;
        border-radius: 10px;
    }
    
    .picture {
        background-color: white;
        width: 100%;
        height: 230px;
        border-radius: 10px;
    }
    .text-container {
        display: flex;
        padding-left: 10px;
        flex: 1;
    }
    .text {
        margin-top: 15px;
    }
</style>