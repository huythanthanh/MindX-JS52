export default class Contact {
    name;
    phone;
    workAgency;

    constructor(name, phone, workAgency) {
        this.name = name;
        this.phone = phone;
        this.workAgency = workAgency;
    }

    get info(){
        return `
        name: ${this.name},
        phone: ${this.phone},
        work agency: ${this.workAgency},
        `
    }

    set info(data){
        this.name = name;
        this.phone = data.phone;
        this.workAgency = data.workAgency;
    }

}