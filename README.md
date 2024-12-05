# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Plagarism Statement

All exercises must contain the following statement:
“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

## Note
I did not complete this excersise last semester, so I am attempting this completely from scratch. Looked at my detecting isomorphism and graph representations while working through this, mostly to just help remind me what kind of traversals I had worked through before although I did call the recursive logic in this excercise backtrack simularly to in detecting isomorphism. And of course read through the Ford-Fulkerson algorithm information in the slides.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

### Answer:

I believe the worst case scenario for this algorith would occur if it checked every single node and every one of the neighbors and could not find a path to the disired end node. In this case, it does all the work and comes back with the empty array, complexity wise, we have to iterate over every node (represnted by $|V|$ for vertice) and then every edge of the nodes would also be considered with the recursive logic which would just be $|E|$. Overall I believe that results a complexity of $\Theta(|V| + |E|)$.
