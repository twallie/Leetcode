function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap: Map<number, number> = constructFrequencyMap();
    const frequencyArray: Array<number[]> =
        constructFrequencyArray(frequencyMap);
    return gatherTopKFrequent(frequencyArray);

    function gatherTopKFrequent(frequencyArray: Array<number[]>): number[] {
        const result: number[] = [];
        for (let i = frequencyArray.length - 1; i >= 0; i--) {
            if (k == 0) {
                break;
            } else if (frequencyArray[i] == undefined) {
                continue;
            } else {
                let num = frequencyArray[i].pop();
                while (num != undefined && k != 0) {
                    result.push(num);
                    k--;
                    num = frequencyArray[i].pop();
                }
            }
        }
        return result;
    }

    function constructFrequencyMap(): Map<number, number> {
        const map: Map<number, number> = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const freq = map.get(num);
            if (freq != undefined) {
                map.set(num, freq + 1);
            } else {
                map.set(num, 1);
            }
        }
        return map;
    }

    function constructFrequencyArray(
        frequencyMap: Map<number, number>
    ): Array<number[]> {
        const array: Array<number[]> = new Array();
        for (let i = 0; i < nums.length; i++) {
            array[i] = [];
        }
        frequencyMap.forEach((value, key) => {
            array[value - 1].push(key);
        });
        return array;
    }
}
