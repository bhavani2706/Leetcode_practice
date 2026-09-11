class Solution {
public void moveZeroes(int[] arr) {
    int temp[]=new int[arr.length];
    int index=0;
    for(int i=0;i<arr.length;i++){
        if(arr[i]!=0){
           temp[index++]=arr[i];
        }
    }
    for(int i=0;i<temp.length;i++){
        arr[i]=temp[i];
    }
    
    return;

}
}