export async function getSortedPostsData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return res.json()
}

export async function getAllPostIds() {
    const allPost = await getSortedPostsData()
    return allPost.map(({ id }) => {
        return {
            params: {
                id: id.toString()
            }
        }
    })
}

export async function getPostData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}