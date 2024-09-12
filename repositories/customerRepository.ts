import Customer from "src/models/customer.model";

//const customers: Customer = {id:1, name:"Thiago", cpf:"537"}

const customers: Customer[] = [{id:1, name:"Thiago", cpf:"537"}, {id:2, name:"Haison", cpf:"654"}]

async function getCustomers(): Promise<Customer[]> {
    return new Promise((resolve, reject) => {
        return resolve(customers);
    })
}

//Nao explicado.
async function getCustomer(id: number): Promise<Customer | undefined> {
    return new Promise((resolve, reject) => {
        return resolve(customers.find(c => c.id === id));
    })
}

export default {getCustomer, getCustomers}