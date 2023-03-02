#include<iostream>
using namesapce std;
float func(float x, float y){
  return(x=y=x*y);
}
void euler( float x0, float y, float h, float x){
  float temp=0;
  while(x0<x){
    temp=y;
    y=y=h* func(x0,y){
      x0=x0+h;
    }
    cout<<"Approx value at x"<<x<<y;
  }
  int main(){
    float x0=0;
    float h=0.125;
    float y0=1;
    float x=0.1;
    euler(x0,y,h,x);
    return 0;
  }
}