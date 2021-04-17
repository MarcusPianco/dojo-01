import { Greeting, GreetingWithName } from "../index"

/*
on every year that is evenly divisible by 4
except every year that is evenly divisible by 100
unless the year is also evenly divisible by 400
*/ 

// Criar uma função que retorne a string Heelo World;
describe('Greeting',()=>{
    test('Should returns hello world',()=>{
        // System Under Test
        const sut = new Greeting()
        expect(sut.hello()).toBe('Hello, World!!')
    })
    test('Should check if hello world of the type string',()=>{
        // System Under Test
        const sut = new Greeting()
        expect(typeof sut.hello() ).toBe('string')
    })
    test('Should return hello world with user name',()=>{
        // System Under Test
        const sut = new GreetingWithName()
        expect(sut.helloWithUserName('João') ).toBe('Hello, World!!João')
    })
    test('Should called helloWithUserName with data correct',()=>{
       const sut = new GreetingWithName();
       const spySut = jest.spyOn(sut,'helloWithUserName')
       const user ={
           name:'João',
           age: '14'
       }
       sut.helloWithUserName(user.name)
       expect(spySut).toHaveBeenCalledWith('João')
    })
})