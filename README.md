
HOW TO RUN THE TESTS.

STEP 1.- INSTALL JEST `npm install -g jest`

1. Write a function that addstwonumberswithoutusinganyarithmeticoperators.
        Run Test, `jest addTwoNumbers/test.js`
2. Given2stringsofunknowncharacters(butitcannotberepeated)createafunctionthatreturnsanarrayofthecharactersthatarerepeatedinbothstringsin
the most efficient way.
        Run Test, `jest findRepeatedChars/test.js`
3. WriteafunctionthattakesastringcontaininganumberinbaseXalongwithanintegerofthebaseX.Thefunctionmustreturntheintegervalueofthat string/base pair. E.g.,
        Run Test, `jest convertToDecimal/test.js `
Pay close attention to string validation against base.
4. Write a function such that if an element in an MxN matrix is 0 , its entire row and column are set to 0 and then printed out.
        Run Test, `jest Matrix/test.js --watch `
5. WriteafunctionthatconvertthegivennumberintoaRomanNumeral-ThefunctionneedstoreceiveaNumberandReturnaString(TheNumbercanbe between 1 and 3999)
Example:
getRomanNumeral(512);
Prints: DXII
        Run Test, `jest getRomanNumeral/test.js `

6. Writeafunctiontoprintallpermutationsofastring.Maxstringlengthcanbe50characters.
        Run test , `jest  maxPermutations/test.js `
7. Writeafunctionthatreceivesasentence,andreturnthelongestword,iftwoormorewordshasthesamelenght,theyarereturnedasanarray,butcan'treturn
duplicated words.
        Run Test, `jest longestWord/test.js`