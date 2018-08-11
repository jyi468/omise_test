class TableUtils {
    static fetchRepos(since) {
        return fetch(`https://api.github.com/repositories?since=${since}`)
            .then((response) => response.json())
            .then((json) => json);
    }
}

export default TableUtils