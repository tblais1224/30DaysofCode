//Generics
//Write a single generic function named printArray; this function must take an array of generic elements as a parameter (the exception to this is C++, which takes a vector). The locked Solution class in your editor tests your function.
//Note: You must use generics to solve this challenge. Do not write overloaded functions.



using System;

namespace day21 {

    class Printer {

        /**
         *    Name: PrintArray
         *    Print each element of the generic array on a new line. Do not return anything.
         *    @param A generic array
         **/
        // Write your code here
        static void PrintArray<T>(T[] inputArray){
            for (int i = 0; i < inputArray.Length; i++)
            {
                Console.WriteLine(inputArray[i]);
                // Console.WriteLine(array2[i]);
            }
        }

        static void Main (string[] args) {
            int n = Convert.ToInt32 (Console.ReadLine ());
            int[] intArray = new int[n];
            for (int i = 0; i < n; i++) {
                intArray[i] = Convert.ToInt32 (Console.ReadLine ());
            }

            n = Convert.ToInt32 (Console.ReadLine ());
            string[] stringArray = new string[n];
            for (int i = 0; i < n; i++) {
                stringArray[i] = Console.ReadLine ();
            }

            PrintArray<Int32> (intArray);
            PrintArray<String> (stringArray);
        }
    }
}