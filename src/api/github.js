

const topic = "moxon6-gh-pages"
const user = "moxon6"

const Accept = "application/vnd.github.mercy-preview+json"
const url = `https://api.github.com/search/repositories?q=topic:${topic}+user:${user}`

export const fetchData = async () => await fetch(url, {
    headers: {
        Accept
    }
}).json()

export const repoUrlToIconUrl = (repoUrl, defaultBranch) => 
    `${repoUrl.replace("github.com", "raw.githubusercontent.com")}/${defaultBranch}/assets/icon.png`


export function processData(data) {
    return data
        .items
        .map(x => ({
            homepage: x.homepage,
            repo: x.html_url,
            description: x.description,
            icon: repoUrlToIconUrl(x.html_url, x.default_branch)
        }))
}