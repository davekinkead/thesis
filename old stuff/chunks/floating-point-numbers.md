# Floating Point Numbers

Floating point numbers are finite approximations of numbers with infinite precision.

Computers represent information in electrical states, typically as high and low charges on some medium like a circuit board or microprocessor.  These binary states make it very easy design processors and represent discrete numbers like integers.  

The physical memory constraints of computers means that a fix number of bits are assigned to represent particular values (32 or now 64 bits).  Floating point numbers represent a trade off between precision and resource use.

The IEEE standard for single/double precision floating point numbers uses 1 bit for sign (+/-), 23/52 bits for the significand, and 8/11 bits for the exponent.

Using decimals to represent rational numbers will often result in rounding errors.  1/3 is 0.3 recurring. Rounded to any finite decimal place, the result of 0.3333 + 0.3333 + 0.3333 will be 0.9999.

Furthermore, binary can only represent finite fractions when their denominator is a power of 2.  For example, 1/10 is easily represented in decimal as 0.1. In binary however, this is 0.00011 with the last 0011 recuring.

Most real numbers therefore, cannot be accurately represented with a finite number of bits and most floating point arithmetic will result in rounding errors.

HOW MUCH OF A PROBLEM?

These errors propogate over repeated calculations. Different calculations can be stable or unstable.

Problems like these can be solved with increasing FPN precision (32 to 64 bit) or using symbolic computing (representing 1/3 as one divided by three).  Symbolic computing however is much slower than using FPN, and requires a high degree of mathematical knowledge to program.


> loss of precision due to the discrete approximation of real numbers can dramatically alter the dynamics of chaotic systems after a short amount of simulation time. @boghosian2019:1

(This was observed for the Fermi–Pasta–Ulam–Tsingou problem in the 1950s,1 for the Lorenz system and the Hénon-Heiles problem in the 1960s,2, 3 for the Chirikov–Taylor map in the 1970s,4 and for too many systems to enumerate thereafter.)