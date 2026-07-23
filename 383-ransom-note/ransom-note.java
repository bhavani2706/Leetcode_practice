class Solution {
    public boolean canConstruct(String r, String m) {
          boolean[] used=new boolean[m.length()];
          for(int i=0;i<r.length();i++){
            boolean found=false;
            for(int j=0;j<m.length();j++){
                if(!used[j] && r.charAt(i)==m.charAt(j)){
                    used[j]=true;
                    found=true;
                    break;
                }
            }
            if(!found){
                return false;
            }
          

        }
        return true;
    }
}