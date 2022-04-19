// Realice un programa que calcule y muestre en la salida estándar 
//la suma de los cuadrados de los 10 primeros enteros mayores que cero.

#include<iostream>
#include<math.h>
using namespace std;
int sum=0;
int main(){

    printf("Potencia\n");
    for (int i = 0; i < 10; i++) {
        sum+=pow(i+1,2);
        printf("%d^%d=%d\n",i+1,2,(int)pow(i+1,2));
    }
    printf("La suma de los cuadrados de los primeros 10 numeros fue: %d\n",sum);

}