import Contact from "./Contact.js"

class FixContact {
    name;
    contactList;

    constructor(name) {
        this.name = name;
        this.contactList = [];
    }

    addContact (info) {
        if (info instanceof Contact) {
            this.contactList.push(info)
        } else {
            console.log('Huy 123')
        }
    }

    updateContact (phone, data) { //Khong tim thay tra ve null
        let found = this.contactList.find(function(info) {
            return document.id == id;
        });

        if (found != null) {
            found.info = data;
        }
    }

    deleteContact(phoneNumber){
        let foundIndex = this.contactList.findIndex(function(info) {
            return info.phoneNumber === phoneNumber;
        });

        if (foundIndex >= 0) {
            this.contactList.splice(foundIndex, 1);
        }
    }

    showContact() {
        this.contactList.forEach(function(info) {
            console.log(info.info);
        });
    }

    findContact(data){
        let result = this.contactList.filter(function (info){
            return info.name === data;
        })
        return result;
    }
}