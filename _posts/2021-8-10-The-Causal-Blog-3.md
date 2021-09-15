---

layout: post
title:  "Why model decay using the exponential function?"
author: "Ritwik Raha"
prev_title: false
prev_link: false
next_title: false
next_link: false
tags: math
permalink: /why-exponential-decay

---

So you have been going through mathematical models and equations for all sorts of things and everywhere you go you see this equation.

Obviously, you know why it's used. It is the infamous exponential decay function. But you want to know why specifically this function. What is so special about an exponent is that it is used to model decay.
$e^{-x}$

In this blog we will learn the following:

- What is a decay function?
- Why use exponentials?
- How does it help us model systems?

Let's get started with the topic straight away.

### What is a decay function?

Decay is the process of reducing an amount by a certain measure consistently over a period of time.   Let us look at some examples.

$f(x) = (5-x)$

In this function, we can see that for all positive values of $x$ the function decreases from 5. However, if the interval is changed and x starts from 0 and goes till $-\inf$ then the function starts increasing from 5.

We can play around with lots of definitions and functions to see where a function would be decreasing and where it would be **strictly decreasing**.

A function would be called strictly decreasing in the rang $(a,b)$ if 

$$x_1,x_2 \in (a,b) : x_1 <x_2 \implies f(x_1) > f(x_2)$$

### Why use exponentials?

First, let us understand what kind of data is best modeled by exponentials.

table

Now as we plot this data we can see that it increases with a constant factor and the interesting thing to note here is that even the factor by which it increases is $e^x$.

So we can go as far as to say that exponential is the natural language of growth. Now, what happens when we use this same idea to model decay. 

Let us look at another table of data.

The graph for this data would be something like this:

This can be modeled by the equation $y= e^{-x}$

### How does it help us model systems?

### References

- [https://www.thoughtco.com/exponential-decay-definition-2312215#:~:text=In mathematics%2C exponential decay describes,of time that has passed](https://www.thoughtco.com/exponential-decay-definition-2312215#:~:text=In%20mathematics%2C%20exponential%20decay%20describes,of%20time%20that%20has%20passed).
- [https://courses.lumenlearning.com/waymakercollegealgebra/chapter/exponential-growth-and-decay/](https://courses.lumenlearning.com/waymakercollegealgebra/chapter/exponential-growth-and-decay/)
- [https://mathworld.wolfram.com/DecreasingFunction.html](https://mathworld.wolfram.com/DecreasingFunction.html)
- [https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols](https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols)
-