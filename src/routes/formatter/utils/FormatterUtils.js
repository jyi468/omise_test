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
            if (node.parent_id !== null) {
                let parentNode = nodeMap.get(node.parent_id);
                parentNode.children.push(node);
                // Below might not be necessary
                nodeMap.set(node.parent_id, parentNode);
            }
        });

        // Return root in array from last object in map
        return JSON.stringify(getLastValueInMap(nodeMap));
    }
}

const getLastValueInMap = map => Array.from(map)[map.size-1][1];

export default FormatterUtils;