function isAnagram(s: string, t: string) {
    if (s.length != t.length) {
        return false;
    }

    const memo: number[] = new Array(26);

    for (let i = 0; i < s.length; i++) {
        let sIndex = s.charCodeAt(i) - 97;
        let tIndex = t.charCodeAt(i) - 97;
        memo[sIndex]++;
        memo[tIndex]--;
    }

    for (let i = 0; i < memo.length; i++) {
        if (memo[i] != 0) return false;
    }
    return true;
}
