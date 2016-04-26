
//https://dl.dropboxusercontent.com/u/28873424/tasks/simple_triangle.txt
var temp_arr=[],triangle_arr=[], sum = 0;
    small_triangle =[[3],
                [7, 4],
                [2, 4, 6],
                [8, 5, 9, 3]];
function getTriangleAjax (url){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url,false);
    xhr.onreadystatechange = function() {
        temp_arr = xhr.responseText.split("\n");
    };
    xhr.send();
    //
    makeArr(temp_arr);
}
function makeArr(str){
    for (var i in str) {
        var temp = [];
        var element = str[i].split(' ');
        //console.log(element);
        for (var j in element) {
            temp.push(parseInt(element[j]));
        }
        triangle_arr.push(temp);
    }
}
function getSum(arr){
    if (Array.isArray(arr)){
        for(var r = arr.length - 1; r; r--) {
            for(var n = 0; n < arr[r].length - 1; n++) {
                arr[r - 1][n] = arr[r - 1][n] + Math.max(arr[r][n], arr[r][n + 1])
            }
            sum = arr[0][0];
        }
    }
   else if(typeof arr =="string"){
           getTriangleAjax (arr);
           getSum(triangle_arr);
   }
    return sum;
}

//getTriangleAjax("simple_triagle.txt");

console.log(getSum(small_triangle));
console.log(getSum("simple_triagle.txt"));
console.log(getSum("https://dl.dropboxusercontent.com/u/28873424/tasks/simple_triangle.txt"));
console.log(getSum("https://dl.dropboxusercontent.com/u/28873424/tasks/triangle.txt"));





