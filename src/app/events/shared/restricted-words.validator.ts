import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
    return (control: FormControl): { [key: string]: any } => {
        if (!words) return null;

        const invalidWorlds = words
            .map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null);

        return invalidWorlds && invalidWorlds.length > 0
            ? { restrictedWords: invalidWorlds.join(', ') }
            : null;
    };
}
