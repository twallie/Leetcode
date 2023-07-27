function groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, number>();
    const result: string[][] = [];

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];

        let exists = false;
        groups.forEach((value, key) => {
            if (anagram(str, key)) {
                result[value].push(str);
                exists = true;
            }
        });

        if (!exists) {
            result.push([str]);
            groups.set(str, result.length - 1);
        }
    }

    return result;
}

// From 242
function anagram(s: string, t: string) {
    if (s.length != t.length) {
        return false;
    }

    const memo: number[] = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let sIndex = s.charCodeAt(i) - 97;
        let tIndex = t.charCodeAt(i) - 97;
        memo[sIndex]++;
        memo[tIndex]--;
    }

    for (let i = 0; i < memo.length; i++) if (memo[i] != 0) return false;
    return true;
}
