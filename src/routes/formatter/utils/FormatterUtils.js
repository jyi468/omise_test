class FormatterUtils {
    /**
     * We build a tree object using the input structure.
     * We create a flat map of each node object and then we set the children nodes using the map
     *
     * We follow this methodology to keep it in O(n) time.
     *
     * The main issue of trying to build the new structure solely from the original object,
     * is if you are trying to find a parent node at a higher level.
     *
     * You would have to iterate through the "level" arrays each time you are trying to find a parent
     * to push the child node into.
     *
     * @param json
     * @returns {string}
     */
    static buildTreeFromJSON(json) {
        console.log("Building Tree");

        // Create flat map of nodeMap in reverse order
        const nodeMap = new Map();

        Object.keys(json).reverse().forEach((levelString) => {
            let level = parseInt(levelString);
            json[level].forEach((node) => {
                nodeMap.set(node.id, node);
            });
        });

        // Add nodes to children arrays, starting from lowest level nodeMap
        nodeMap.forEach((node) => {
            let parentId = node.parent_id;
            if (parentId !== null) {
                let parentNode = nodeMap.get(parentId);
                parentNode.children.push(node);
                nodeMap.set(parentId, parentNode);
                // Remove current node from map
                nodeMap.delete(node.id);
            }
        });

        // Return array containing tree
        return JSON.stringify([nodeMap.values().next().value], undefined, 2);
    }
}

export default FormatterUtils;