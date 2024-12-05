function augmentingPath(graph, start, end) {

    let vistited = [];
    let path = [];

    //happen to start at the end node
    if(start === end){
        return [start];
    }

    for(let node in graph){
        vistited[node] = false;
    }

    function backtrack(curNode){

        path.push(curNode);
        vistited[curNode] = true;

        if(curNode == end){
            return true;
        }

        for(let neighbor in graph[curNode]){

            //neighbor not visited
            if(!vistited[neighbor]){

                //recurse on neighbor
                if(backtrack(neighbor)){
                    //path found
                    return true;
                }

            }
        }

        path.pop();
        visited[curNode] = false;
        return false;
    }

    if (backtrack(start)) {
        //if theres a path it returns
        return path; 
    } else {
        //no path comes back empty
        return [];
    }
}
