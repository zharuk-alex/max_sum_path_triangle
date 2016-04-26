
var temp_arr=[],triangle_arr=[], sum = 0;
small_triangle =[[3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]];

    function GetTriangle(url){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onreadystatechange = function() {
            temp_arr = xhr.responseText.split("\n");
        };
        xhr.send();
    }
    function SplitForArr(arr){
        for (var i in arr) {
            var temp = [];
            var element = arr[i].split(" ");
            for(var j in arr[i]){
                temp.push(parseInt(element[j]));
            }
            triangle_arr.push(temp);
        }
    }
    function getSum(arr){
        for(var r = arr.length - 1; r; r--) {
                for(var n = 0; n < arr[r].length - 1; n++) {
                    arr[r - 1][n] = arr[r - 1][n] + Math.max(arr[r][n], arr[r][n + 1])
                }
                sum = arr[0][0];
            }
        return sum;
    }

function Main(){
    if(typeof arguments[0]=="string"){
        var url =  arguments[0];
        GetTriangle(url);
        SplitForArr(temp_arr);
        return getSum(triangle_arr);
    }
    else if(Array.isArray(arguments[0])){
        return getSum(arguments[0]);
    }
}

console.log(Main("https://dl.dropboxusercontent.com/u/28873424/tasks/triangle.txt"));
//console.log(Main("https://dl.dropboxusercontent.com/u/28873424/tasks/simple_triangle.txt"));
//console.log(Main(small_triangle));
//console.log(Main("simple_triagle.txt"));
