function depthFirstSearch(graph, startNode, targetNode) {
    var visitedNodes = new Array(graph.length).fill(false); //Creates an array to track the node we have visited
    return depthFirstSearchRec(graph, startNode, targetNode, visitedNodes, []);
}

function depthFirstSearchRec(graph, start, target, visitedNodes, path) {
    path.push(start) //Add the start node to the path

    if(start == target) { return path; } //If the start node is the target return the path
    else {
        visitedNodes[start] = true; //Mark the current node as visited

        for(node of graph[start]) { //Iterate through
            if(visitedNodes[node] == false) { //If it hasnt been visited run the recursive call
                return depthFirstSearchRec(graph, node, target, visitedNodes, path)
            }
        }
    }
    return []; //If no path is found return a empty path
}