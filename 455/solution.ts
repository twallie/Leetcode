function findContentChildren(g: number[], s: number[]): number {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let gIndex = 0;
    let sIndex = 0;
    const gLength = g.length;
    const sLength = s.length;

    let satisfied = 0;
    while (gIndex < gLength && sIndex < sLength) {
        let greed = g[gIndex];
        let size = s[sIndex];

        if (size >= greed) {
            gIndex++;
            satisfied++;
        }
        sIndex++;
    }

    return satisfied;
};