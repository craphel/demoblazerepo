import { SignUp } from "../pages/Signup";
import{test,expect} from '@playwright/test'

test('Signup',async({page})=>
{
    const signup=new SignUp(page)
    await signup.openApplication()
    await signup.signUp('chinju','24325')
    await signup.handleAlert()
})

test('close',async({page})=>
{
    const signup=new SignUp(page)
    await signup.openApplication()
    await signup.signUp('chinju','24325')
    await signup.close()
})