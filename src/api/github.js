import mockData from './github.repos.mock';

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
            name: x.name,
            homepage: x.homepage,
            repo: x.html_url,
            description: x.description.split(":")[1],
            title: x.description.split(":")[0],
            icon: repoUrlToIconUrl(x.html_url, x.default_branch)
        }))
}

// Use mock data for now to avoid hitting rate limit
// Setup local storage caching after
export const getProjects = () => Promise.resolve(processData(mockData))
