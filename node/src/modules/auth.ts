export class Auth {
  constructor(
    public title: string,
    public pageGuide: { pageRef: string, pageAction: string },
    public link: { href: string, text: string}
    ){}
}

export class Home {
  constructor(
    public title: string,
    public pageGuide: { pageRef: string, pageAction: string },
    public link: { href: string, text: string},
    public authUser: {name: string,},
  ){}
}