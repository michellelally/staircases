const min = 5;
const max = 500;

const arr = new Array(max + 1).fill(-1).map(_ => new Array(max + 1).fill(-1))

arr[0][0] = 1;

function staircases() {
    let n = parseInt(document.getElementById('bricks').value);

    if (n < min || n > max) {
        alert("The number of bricks must be between 5 and 500. Please try again")
    } else {
        document.getElementById("result").innerHTML = "Result: " + getQ(n, n-1);
    }
}

function getQ(i, j) {
    if (i == 0) return 1;
    if (j == 0) return 0;
    if (arr[i][j] == -1) {
        arr[i][j] = getQ(i, j-1);
        if (i >= j) {
            arr[i][j] += getQ(i-j, j-1);
        }
    }
    return arr[i][j];
}