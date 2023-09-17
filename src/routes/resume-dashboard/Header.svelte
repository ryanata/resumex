<script>
    import logo from '$lib/images/logo_70.svg';
    import Icon from '@iconify/svelte';

    export let submitter;
</script>

<div class="header-container">
    <div class="left-header-items">
        <a href="/">
            <img src={logo} alt="RESUMEX" style="width: 36px; margin-left: 10px; margin-top: 0px; "/>
        </a>
        <div class="icon-row">
            <a href="../resume-dashboard/resume">
                <Icon style="width: 36px; height: 36px; color: #706E6E;" icon="quill:paper" />
            </a>
            <!-- <a href="../resume-dashboard/resume-modify">
                <Icon style="width: 36px; height: 36px; color: #706E6E;" icon="mdi:book-edit-outline" />
            </a> -->
            <!-- <a href="../resume-dashboard/cover-letter">
                <Icon style="width: 36px; height: 36px; color: #706E6E;" icon="mdi:email-newsletter" />
            </a> -->
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
        height: 60px;
    }
    .icon-row {
        display: flex;
        gap: 14px;
        align-items: center;
    }
    .left-header-items {
        display: flex;
        gap: 35px;
    }
    .right-header-items {
        display: flex;
        align-items: center;
    }
    .compile-button {
        height: 40px;
        width: 145px;
        color: #706E6E;
        border: 2px solid #dadada;
        margin-right: 20px;
        border-radius: 5px;
    }
    .compile-button:hover {
        cursor: pointer;
        background-color: #dadada;
    }
</style>