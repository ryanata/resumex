<script>
    import logo from '$lib/images/logo_70.svg';
    import Icon from '@iconify/svelte';
    export let submitter;
</script>

<div class="header-container">
    <div class="left-header-items">
        <img src={logo} alt="RESUMEX" />
        <div class="icon-row">
            <Icon style="width: 48px; height: 48px;" icon="quill:paper" />
            <Icon style="width: 48px; height: 48px;" icon="quill:paper" />
            <Icon style="width: 48px; height: 48px;" icon="quill:paper" />
        </div>
    </div>
    <div class="right-header-items">
        <button on:click={submitter} class="compile-button">
            Compile
        </button>
    </div>
</div>

<style>
    .header-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 80px;
    }
    .icon-row {
        display: flex;
        align-items: center;
    }
    .left-header-items {
        display: flex;
        gap: 10px;
    }
    .right-header-items {
        display: flex;
        align-items: center;
    }
    .compile-button {
        height: 40px;
        width: 155px;
        border-radius: 5px;
        color: gray;
    }
</style>