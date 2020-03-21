const {Builder, By, Key, util} = require("selenium-webdriver");
async function example(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://columbusconventions.com/park/parking-availability/");
    driver.findElement(By.xpath('//*[@id="wrapper"]/div/div/ul[4]/li[2]/font')).then(function(element){
        element.getText().then(function(text){
            console.log(text);
        });
});
}
example();
