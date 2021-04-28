# Photoshoot

## Part A - Taller

Farmer Wbua needs your help!

He has `N` cows in his barn with sizes s<sub>1</sub>...s<sub>n</sub>, where s<sub>i</sub> denotes the size of the i-th cow.

He wants to arrange the cows such that the bigger ones are in the back. Help Farmer Wbua find the size of the biggest cow in his barn.

### Input

The first line of each input will contain the number `N`. 

For the next `N` lines there will be an integer s<sub>i</sub>

### Output

Output the size of the biggest cow.

### Bounds

1 ≤ `N` ≤ 10<sup>5</sup>

1 ≤ s<sub>i</sub> ≤ 10<sup>5</sup>

### Sample Input

```text
5
40
40
35
54
59
```

### Sample Output

```text
59
```

## Part B - Lineup

Farmer Wbua decided that having his `N` cows in front of each other is not a good idea. Now he wants to have them lined up all in a straight line.

Of course, they can't be in a random order. Farmer Wbua decides that he wants to choose 1 out of 3 possible orderings.

- He can have them `ASCENDING`, where the sizes of the cows ascend from left to right (s<sub>i</sub> ≤ s<sub>i+1</sub>)

- He can have them `DESCENDING` where the sizes of the cows descend from left to right (s<sub>i</sub> ≥ s<sub>i+1</sub>)

- He can have them `NONE`, where the cows from left to right are neither ascending nor descending

### Input

The first line will be `N`, denoting how many cows he has.

The following `N` lines will be s<sub>i</sub>, the sizes of the cows.

The last line will be his prefered ordering, either being `ASCENDING`, `DESCENDING`, or `NONE`.

### Output

Starting from left to right, print out the size of the i-th cow on each line.

### Bounds

3 ≤ `N` ≤ 10<sup>5</sup>

1 ≤ s<sub>i</sub> ≤ 10<sup>5</sup>

### Sample Input

```text
5
40
40
35
54
59
DESCENDING
```

### Sample Output

```text
59
54
40
40
35
```

## Part C - Pairing Up

Now Farmer Wbua wants to pair up his `N` cows for his photoshoots, but only if they fit in the frame, which can fit a maxmium size of `M`. The size a pair of cows take up can be calculated by adding their individual sizes.

Help Farmer Wbua determine how many pairs of cows can fit in the frame.

### Input

First line is `N`

Next `N` lines denotes the size of the i-th cow.

Last line is `M`

### Output

Output how many pairs of cows can fit inside the frame

### Bounds

2 ≤ `N` ≤ 10<sup>3</sup>

1 ≤ s<sub>i</sub> ≤ 10<sup>5</sup>

2 ≤ `M` ≤ 2 * 10<sup>5</sup>

### Sample Input

```text
5
40
40
35
10
59
75
```

### Sample Output

```text
6
```

### Explanation

The following possible pairs are

```text
(1, 2)
(1, 3)
(1, 4)
(2, 3)
(2, 4)
(3, 4)
(4, 5)
```

Where `(i,j)` is the i-th and j-th cow respectively.

## Part D - Cow Friendship (Easy)

Oh no! Turns out cows will only pair up with other cows if they know each other. Cows, being very antisocial, have very few friends.

### Input

First line will be `N`, the number of cows

Second line will be `F`, the number of friendships

Next `2F` lines will contain `F` number of friendships, which are two lines long. For each friendship, the cows referenced on the two lines are friends.

### Output

Output the number of possible pairs given that cows will only pair up if they are friends.

### Bounds

2 ≤ `N` ≤ 10<sup>2</sup>

1 ≤ `F` ≤ 5 * 10<sup>3</sup>

### Sample Input

```
```

### Sample Output

```
```

## Part D - Cow Friendship (Hard)

Farmer Wbua managed to compromise with his `N` cows. A cow will now pair up with a cow if they are in the same friend group. 

A friend group is a collection of cows where one can trace friendships between every cow to each other.

For example, if cow a knew cow b, and cow b knew cow c, then cows a,b,c will all be in a friend group, but cow d would not be in that friend group.

### Input

First line is `N`

Second line is `F`, denoting the number of direct friendships

Third line is `Q`, denoting the number of queries

Next `2F` lines will contain `F` number of friendships, which are two lines long. For each friendship, the cows referenced on the two lines are friends.

Next `2Q` lines will contain `Q` number of queries. On the first line of each query, determine if they are willing to be paired up with the cow on the second line.

### Output

Output `Q` lines, each line being either `YES` or `NO`, anwering the query. 

### Bounds

2 ≤ `N` ≤ 10<sup>8</sup>

1 ≤ `F` ≤ 5 * 10<sup>3</sup>

1 ≤ `Q` ≤ 10<sup>8</sup>

### Sample Input

```text
6
3
5

2
6

4
1

3
4

5 
1


4
5

2
5

3
5

6
3
```

### Sample Output

```text
YES
NO
YES
NO
```

#### Notes

There WILL be a time limit of 1 second for each of the problems.
