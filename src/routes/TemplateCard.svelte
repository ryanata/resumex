<script>
    export let imgLink;
</script>

<div class="template-card">
    <div class="image-container">
        <div class="image"><img class="picture" src={imgLink} alt="Preview of template"></div>
    </div>
    <div class="text-container">
        <p class="text">Simple</p>
    </div>
</div>

<style>
    .template-card {
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 200px;
        height: 225px;
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
        background-color: #f2f2f2;
        width: 90%;
        height: 85%;
        border-radius: 10px;
    }
    .picture {
        width: 100%;
        max-height: 100%;
        border-radius: 10px;
    }
    .text-container {
        display: flex;
        padding-left: 10px;
        flex: 1;
    }
    .text {
        margin-top: 0px;
    }
</style>