export class SignUp{
 constructor(page){
  this.page=page
  this.signup=page.locator('#signin2')
  this.username=page.locator('#sign-username')
  this.password=page.locator('#sign-password')
  this.signupbutton=page.locator('//button[text()="Sign up"]')
  this.closebutton=page.locator('#signInModal').getByText('Close')
 }
async openApplication(){
    await this.page.goto('https://www.demoblaze.com/')
     await this.signup.click()
}
async signUp(username,password){
   
   await this.username.fill(username)
   await this.password.fill(password)
}
async handleAlert(){
    await this.page.on('dialog',async dialoge=>{
        await dialoge.accept();

    await this.signupbutton.click()

    })
}
async close(){
    await this.closebutton.click()
}

}