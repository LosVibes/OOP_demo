
//CLASSES - NOUNS(People, Places or Things)
//PROPERTIES - AJECTIVES(attributes like color size etc)
//METHODS - VERBS(Action words for doing things like Run, Drive, Go)

//Anything with buttons could be a class

//Coffee Maker, Toaster, Child, Dog, input actions, output actions, attributes.

//What Classes of objects do you see in the world?

// PRODUCT/ITEM/
// SHOP/SELLER/VENDOR/WEBSITE/RETAILER/SHOPPING-CENTER
// SEARCH-ENGINER
// CUSTOMER
// PHOTO/IMAGE
// INFO/SPECS/FEATURES/PRICES/MODEL/BRAND
// BRAND
// PAYMENT
// TRANSACTION


// RELATIONSHIP BETWEEN CLASSES
// IS A - e.g. Cat is an Animal. (uncommon kind of relationship)
// HAS A - e.g. Person has a Pet. (common kind)



class Cat {
    constructor(name) {
        this.name = name;
    }
    purr() {
        console.log(this.name + " Goes Purrr...")
    }
    pet() {
        console.log(" We pet pet" + this.name + ".")
        this.purr()
    }
}

let olive = new Cat("Olive")

olive.pet();

// AIR FRYER
class AirFryer {
    constructor(defaultTemp, step) {
        this.temperature = 350;
        this.step = 10;
        this.duration = 0;
        this.maxTemp = 390;
        this.running = false;
        this.isOpen = false;
        this.currentTemp = 0;
    }
    up() {
        this.temperature += this.step;
    }
    down() {
        this.temperature -= this.step;
    }
    addTime() {
        this.duration += 5;
    }
    removeTime() {
        this.duration -= 5;
    }
    start() {
        this.running = true;
    }

    stop() {
        this.running = false;
    }
    open() {
        if (!this.running) {
            this.isOpen = true;
        } else {
            console.log(" Cant open while running!!!")
        }
    }
    status(){
        console.log(`
        TEMPERATURE: ${this.temperature}
        `);
    }
}

// TEST
air_fryer = new AirFryer(350, 10);
air_fryer.up();
air_fryer.up();
air_fryer.up();
air_fryer.displayStatus()