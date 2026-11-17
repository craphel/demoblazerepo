import { Login } from "../pages/Login";
import{test,expect} from '@playwright/test'
import creds from '../utils/logincreds.json'
import userdetails from '../utils/details.json'


test('Validlogin',async ({page})=>{
    const login=new Login(page)
    await login.openApplication()
    await login.login(creds[0].username,creds[0].password)
    await login.validUser()
})

test('invalid username',async ({page})=>{
    const login=new Login(page)
    await login.openApplication()
    await login.login(creds[1].username,creds[1].password)
    await login.invalidUserAlert()
})

test('invalid password',async ({page})=>{
    const login=new Login(page)
    await login.openApplication()
    await login.login(creds[2].username,creds[2].password)
    await login.invalidPassword()
})

test('invalid username and password',async ({page})=>{
    const login=new Login(page)
    await login.openApplication()
    await login.login(creds[3].username,creds[3].password)
    await login.invalidUsernamePassword()
})

test('purchase a product ',async ({page})=>{
    test.setTimeout(60000)
    const login=new Login(page)
    await login.openApplication()
    await login.login(creds[0].username,creds[0].password)
    await login.validUser()
    await login.productPurchase()
    await login.addToCart(userdetails.name,userdetails.contry,userdetails.city,userdetails.credit,userdetails.month,userdetails.year)
    
})

test('purchase a mobile ',async ({page})=>{
    test.setTimeout(60000)
    const login=new Login(page)
    await login.openApplication()
    await login.login(creds[0].username,creds[0].password)
    await login.validUser()
    await login.mobilePurchase()
    await login.addToCart(userdetails.name,userdetails.contry,userdetails.city,userdetails.credit,userdetails.month,userdetails.year)
    
})

test.only('purchase a monitor ',async ({page})=>{
    test.setTimeout(60000)
    const login=new Login(page)
    await login.openApplication()
    await login.login(creds[0].username,creds[0].password)
    await login.validUser()
    await login.monitorPurchase()
    await login.addToCart(userdetails.name,userdetails.contry,userdetails.city,userdetails.credit,userdetails.month,userdetails.year)
    
})

test('logout',async ({page})=>{
    const login=new Login(page)
    await login.openApplication()
    await login.login(creds[0].username,creds[0].password)
    await login.validUser()
    await login.logOut()
})