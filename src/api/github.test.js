import githubReposMock from './github.repos.mock';
import { processData } from './github';

describe('github api', () => {
    it('should parse parse', async () => {
        expect(true).toBe(true)
    })

    it('should process data correctly', () => {
        expect(processData(githubReposMock)).toEqual([
            {
                "description": "Tool to write a bot in python in a browser based environment",
                "homepage": "https://moxon6.github.io/python-bot-workshop/",
                "repo": "https://github.com/moxon6/python-bot-workshop"
            },
            {
                "description": "Rocket Chat App Starter + vscode devContainer environment",
                "homepage": null,
                "repo": "https://github.com/moxon6/Rocket.Chat-App-Starter"
            },
            {
                "description": "Template project with base Hugo setup using VSCode Docker remote",
                "homepage": "",
                "repo": "https://github.com/moxon6/hugo-blog-starter"
            },
        ])
    })
})