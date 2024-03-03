#include <iostream>

using namespace std;

void fibonacci(int n){
  int a = 0, b = 1;
  int c;
  bool finalizado = false;
  

  do{
    c = a + b;
    if (c == n){
      cout << "o número " << n <<" pertence a sequência de fibonacci" << endl;
      finalizado = true;
    } else if(c > n){
      cout << "o número " << n <<" não pertence a sequência de fibonacci" << endl;
      finalizado = true;
    }
    else{
      a = b;
      b = c;
      c = a + b;
    }
  }while(!finalizado);

  
  
}

int main() {
  int num;
  cout << "digite o valor desejado" << endl;
  cin >> num;
  fibonacci(num);
}