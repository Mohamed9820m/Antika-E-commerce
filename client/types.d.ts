interface Prodact {
    id:number;
    name: string;
      image:string;
      description:string;
      price:number;
      stock:number;
      Category:string
      createdAt?: string
      updatedAt:? string
      UserId?: number
}
interface Comments 
    {
      id: number;
      rating: number;
      comment:string;
      createdAt: string;
      updatedAt: string;
      UserId: number
      ProductId: number
      User: {
        id: number
        firstName: string
        lastName: string
        address: string
        phoneNumber: string
      },
      Product: {
        id: number
        name: string
        image: string
        description: string
        price: number
        stock: number
        Category: string
        createdAt: string
        updatedAt: string
        UserId: number
      }
    }
  interface OneProdact{
        id: number
        name: string
        image: string
        description: string
        price: number
        stock: number
        Category: string
      
  }
  interface ContextInter{
    love:number
  }
  interface MyToken {
    id: number;
  }