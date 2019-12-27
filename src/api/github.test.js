import githubReposMock from './github.repos.mock';
import { processData, repoUrlToIconUrl } from './github';

describe('github api', () => {

    it('should convert repo url to icon url correctly', () => {
        const repoUrl = "https://github.com/moxon6/Rocket.Chat-App-Starter"
        const defaultBranch = "master"
        const iconUrl = "https://raw.githubusercontent.com/moxon6/Rocket.Chat-App-Starter/master/assets/icon.png"
        expect(repoUrlToIconUrl(repoUrl, defaultBranch)).toEqual(iconUrl)
    })

    it('should process data correctly', () => {
        expect(processData(githubReposMock)).toEqual([
            {
                "name": "python-bot-workshop",
                "description": "Python Bot Workshop : Tool to write a bot in python in a browser based environment",
                "homepage": "https://moxon6.github.io/python-bot-workshop/",
                "repo": "https://github.com/moxon6/python-bot-workshop",
                "icon": "https://raw.githubusercontent.com/moxon6/python-bot-workshop/gh-pages/assets/icon.png",
            },
            {
                "name": "Rocket.Chat-App-Starter",
                "description": "Rocket Chat App Starter + vscode devContainer environment",
                "homepage": null,
                "repo": "https://github.com/moxon6/Rocket.Chat-App-Starter",
                "icon": "https://raw.githubusercontent.com/moxon6/Rocket.Chat-App-Starter/master/assets/icon.png",
            },
            {
                "name": "hugo-blog-starter",
                "description": "Template project with base Hugo setup using VSCode Docker remote",
                "homepage": "",
                "repo": "https://github.com/moxon6/hugo-blog-starter",
                "icon": "https://raw.githubusercontent.com/moxon6/hugo-blog-starter/master/assets/icon.png",
            },
        ])
    })

})