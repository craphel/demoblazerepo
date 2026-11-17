import {expect} from '@playwright/test'
export class Login{
 constructor(page){
  this.page=page
  this.Login=page.locator('#login2')
  this.username=page.locator('#loginusername')
  this.password=page.locator('#loginpassword')
  this.Loginbutton=page.locator('//button[@onclick="logIn()"]')
  this.item1=page.getByRole('link').filter({ hasText: /^$/ }).nth(3)
  this.phone= page.getByRole('link', { name: 'Phones' })
  this.item2=page.getByRole('link').filter({ hasText: /^$/ }).first()
  this.monitors=page.getByRole('link', { name: 'Monitors' })
  this.item3=page.getByRole('link').filter({ hasText: /^$/ }).first()
  this.Addtocart=page.getByRole('link', { name: 'Add to cart' })
  this.cart=page.getByRole('link', { name: 'Cart', exact: true })
  this.placeorder=page.getByRole('button', { name: 'Place Order' })
  this.name=page.locator('#name')
  this.contry=page.locator('#country')
  this.city=page.locator('#city')
  this.credit= page.locator('#card')
  this.month=page.locator('#month')
  this.year= page.locator('#year')
  this.purchase= page.getByRole('button', { name: 'Purchase' })
  this.logout=page.locator('#logout2')
 }
async openApplication(){
    await this.page.goto('https://www.demoblaze.com/')
     await this.Login.click()
}
async login(username,password){
   
   await this.username.fill(username)
   await this.password.fill(password)
   
   
}
async validUser(){
await this.Loginbutton.click()
await expect(this.page.getByText('Welcome chinju')).toBeVisible();
}


async invalidUserAlert(){
    await this.page.on('dialog',async dialoge=>{
    expect(dialoge.message()).toBe('User does not exist.')
console.log(dialoge.message())
        await dialoge.accept();
        await this.Loginbutton.click()
    })
}

async invalidPassword(){
        await this.page.on('dialog',async dialoge=>{
    expect(dialoge.message()).toBe('Wrong password.')
console.log(dialoge.message())
        await dialoge.accept();
        await this.Loginbutton.click()
        })
  
}
async invalidUsernamePassword(){
        await this.page.on('dialog',async dialoge=>{
    expect(dialoge.message()).toBe('User does not exist.')
console.log(dialoge.message())
        await dialoge.accept();
        await this.Loginbutton.click()
        })
  
}

async productPurchase(){
 await this.item1.click()
 await this.Addtocart.click() 

}

async mobilePurchase(){
    await this.phone.click()
 await this.item2.click()
 await this.Addtocart.click()

}


async monitorPurchase(){
    await this.monitors.click()
 await this.item3.click()
 await this.Addtocart.click()

 
}

async addToCart(name,contry,city,credit,month,year){
 await this.cart.click()
 await this.placeorder.click()
 await this.name.fill(name)
 await this.contry.fill(contry)
 await this.city.fill(city)
 await this.credit.fill(credit)
 await this.month.fill(month)
 await this.year.fill(year)
 await this.purchase.click()

}


async logOut(){
    await this.logout.click()

}

}