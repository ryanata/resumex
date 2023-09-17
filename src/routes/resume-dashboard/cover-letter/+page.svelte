<script>
	import Header from '../Header.svelte';
    import { onMount, onDestroy } from 'svelte';
    import { basicSetup, EditorView } from 'codemirror';
    import { StreamLanguage } from '@codemirror/language';
    import { stex } from '@codemirror/legacy-modes/mode/stex';
	import { unifiedMergeView } from "@codemirror/merge";
    import {ayuLight} from 'thememirror';
    import { inlineSuggestion } from 'codemirror-extension-inline-suggestion';
    import { preferences } from "$lib/stores/store.js";

    let resumex = $preferences.resumex;

    const submitForm = () => {
        inp.textContent = resumex;
        f.submit();
    }

    onMount(() => {
    });

    onDestroy(() => {
    });
</script>

<div class="dashboard">
    <div class="left-pane">
        <Header submitter={submitForm}/>
        <div class="editor-wrapper">
            <div id="editor"></div>
        </div>
    </div>
    <div id="pdf">
        <iframe id="pdf-canvas" title="pdf-canvas" name="pdf-canvas"></iframe>
        <form style="display:none" id="form2-pre" 
        name="form2-pre" enctype="multipart/form-data" 
        action="https://texlive.net/cgi-bin/latexcgi" method="post" target="pdf-canvas">
    </div>
</div>

<style>
    .dashboard {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
    .editor-wrapper {
        display: flex;
        flex-direction: row;
        max-height: 90vh; /* Adjust this value as needed */
        overflow-y: auto;
    }
    #editor {
        width: 0;
        flex-grow: 1;
    }
    #pdf {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    #pdf-canvas {
        flex: 1;
    }
</style>