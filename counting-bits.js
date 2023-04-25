function countingBits(n){

    let ans = []

    for (i = 0, cnt = 0; i <= n; i++, cnt = 0){

        let aux = i;

        while (aux > 0){

            cnt++;

            aux &= (aux - 1);
        }

        ans.push(cnt);

    }

    return ans;
}  