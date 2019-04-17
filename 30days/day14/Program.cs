// Complete the Difference class by writing the following:

// A class constructor that takes an array of integers as a parameter and saves it to the  instance variable.
// A computeDifference method that finds the maximum absolute difference between any numbers in  and stores it in the  instance variable.

using System;
using System.Linq;

namespace day14 {
    class Difference {
        private int[] elements;
        public int maximumDifference;

        public Difference (int[] a) {
            elements = a;
        }
        public void computeDifference () {
            int max = elements[0];
            int min = elements[0];
            for (int i = 0; i < elements.Length; i++) {
                if (elements[i] < min) {
                    min = elements[i];
                } else if (elements[i] > max) {
                    max = elements[i];
                }
            }
            maximumDifference = max - min;
        }
    } // End of Difference Class

    class Solution {
        static void Main (string[] args) {
            Convert.ToInt32 (Console.ReadLine ());

            int[] a = Console.ReadLine ().Split (' ').Select (x => Convert.ToInt32 (x)).ToArray ();

            Difference d = new Difference (a);

            d.computeDifference ();

            Console.Write (d.maximumDifference);
        }
    }
}