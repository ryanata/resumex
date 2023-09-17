import { persisted } from 'svelte-local-storage-store';
import { templates } from '../index.js';

export const preferences = persisted('resumex-preferences', {
    resumex: templates['blank']
});