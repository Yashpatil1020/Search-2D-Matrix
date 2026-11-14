var searchMatrix = function(matrix, target) {
    let m=matrix.length, n=matrix[0].length, top=0,bottom=m-1,row=-1;
    while(top<=bottom){
        let mid=Math.floor((top+bottom)/2);
        if(target>= matrix[mid][0] && target<=matrix[mid][n-1]){
            row=mid;
            break;
        } else if (target<matrix[mid][0]){
            bottom=mid-1;
        } else{
            top= mid+1;
        }
    }
    if(row===-1) return false;
    let l=0, r=n-1;
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(matrix[row][mid]===target){
            return true;
        } else if(matrix[row][mid]<target){
            l=mid+1;
        } else{
            r=mid-1;
        }
    }
    return false;
};