/**
 * Created by Douglas on 9/8/2017.
 */
export default {
    'basic e2e test' : browser => {
        browser
            .url(browser.launch_url)
            .assert.containsText('Bar-App')
            .end()
    }
}