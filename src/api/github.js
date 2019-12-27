

const topic = "moxon6-gh-pages"
const user = "moxon6"

const Accept = "application/vnd.github.mercy-preview+json"
const url = `https://api.github.com/search/repositories?q=topic:${topic}+user:${user}`

export const fetchData = async () => await fetch(url, {
    headers: {
        Accept
    }
}).json()

export function processData(data) {
    return data
        .items
        .map(x => ({
            homepage: x.homepage,
            repo: x.html_url,
            description: x.description
        }))
}