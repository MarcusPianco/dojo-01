class Greeting {

    hello() {
        return `Hello, World!!`;
    }
}

class GreetingWithName extends Greeting  {
    constructor(){
        super()
    }
    helloWithUserName(userName: string) {
        return `Hello, World!!${userName}`;
    }
}

export { Greeting, GreetingWithName }