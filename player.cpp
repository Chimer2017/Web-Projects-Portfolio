#include <iostream>
#include <fstream>
#include <sstream>
using namespace std;

struct baller {
  string ID;
  string pos;
  string name;
  int cost;
  string team;
  baller() {};
  baller(string id, string p,string n,int c,string t)
  {
    ID = id;
    pos = p;
    name = n;
    cost = c;
    team = t;
  }
};


void combinationUtil(baller arr[], baller data[], int start, int end,
                     int index, int r);

// The main function that prints all combinations of size r
// in arr[] of size n. This function mainly uses combinationUtil()
void printCombination(baller arr[], int n, int r)
{
    // A temporary array to store all combination one by one
    baller data[r];

    // Print all combination using temprary array 'data[]'
    combinationUtil(arr, data, 0, n-1, 0, r);
}

/* arr[]  ---> Input Array
   data[] ---> Temporary array to store current combination
   start & end ---> Staring and Ending indexes in arr[]
   index  ---> Current index in data[]
   r ---> Size of a combination to be printed */
void combinationUtil(baller arr[], baller data[], int start, int end,
                     int index, int r)
{
    // Current combination is ready to be printed, print it
    if (index == r)
    {
        int sum = 0;
        for (int j=0; j<r; j++)
        {
          sum += data[j].cost;
        }
        if (sum >= 5900 && sum <=60000)
          cout << " got one " << endl;
        return;
    }

    // replace index with all possible elements. The condition
    // "end-i+1 >= r-index" makes sure that including one element
    // at index will make a combination with remaining elements
    // at remaining positions
    for (int i=start; i<=end && end-i+1 >= r-index; i++)
    {
        data[index] = arr[i];
        combinationUtil(arr, data, i+1, end, index+1, r);
    }
}

int main(int argc, char const *argv[]) {
    int rows = 47;
  baller array[rows];
  string filename = "baller.csv";


  string line, id, p, n, c, t;
  ifstream ff;
  ff.open(filename);

  if (ff.is_open())
  {
      getline(ff,line);
      int index = 0;
      while(index < rows)
      {
        getline(ff,line);
        stringstream ss(line);
        getline(ss,id,',');
        getline(ss,p,',');
        getline(ss,n,',');
        getline(ss,c,',');
        getline(ss,t);
        array[index] = baller(id,p,n,stoi(c),t);
        index++;

      }
  }
  else
  {
    cout << "fuck u" << endl;
  }
  int r = 9;
  int z = sizeof(array)/sizeof(array[0]);
  printCombination(array,z,r);





  return 0;
}
