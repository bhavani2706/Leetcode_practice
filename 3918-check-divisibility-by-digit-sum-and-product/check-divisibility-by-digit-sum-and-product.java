class Solution {
    public boolean checkDivisibility(int n) {
        int temp=n;
        int sum=0;
        int pro=1;
       while(n>0){
        int digit=n%10;
          sum+=digit;
          pro*=digit;
       n/=10;
       } 
       int res=sum+pro;
       if(temp%res==0){
        return true;
       }
      
        return false;
       
    }
}