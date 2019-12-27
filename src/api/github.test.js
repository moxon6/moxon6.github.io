import githubReposMock from './github.repos.mock';
import { processData } from './github';

describe('github api', () => {
    it('should parse parse', async () => {
        expect(true).toBe(true)
    })

    it('should process data correctly', () => {
        expect(processData(githubReposMock)).toEqual([
            {
                "homepage": "https://moxon6.github.io/python-bot-workshop/",
                "repo": "https://github.com/moxon6/python-bot-workshop"
            },
            {
                "homepage": null,
                "repo": "https://github.com/moxon6/Rocket.Chat-App-Starter"
            },
            {
                "homepage": "",
                "repo": "https://github.com/moxon6/hugo-blog-starter"
            },
        ])
    })
})