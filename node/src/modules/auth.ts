export class Auth {
  constructor(
    public title: string,
    public pageGuide: { reference: string, action: string },
    public link: { href: string, text: string}
    ){}
}

export class Home {
  constructor(
    public title: string,
    public pageGuide: { reference: string, action: string },
    public link: { href: string, text: string},
    public authUser: {name: string,},
  ){}
}